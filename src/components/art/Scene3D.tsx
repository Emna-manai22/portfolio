import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Signature hero visual: a slowly rotating geodesic sphere wrapped in a
 * sparse data-network mesh — nodes, nearest-neighbour links and a wireframe
 * shell — built by hand with three.js rather than a stock animation.
 * Colors are resolved live from the site's CSS variables so it stays on
 * brand across light/dark mode. Respects prefers-reduced-motion.
 */
export function Scene3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // --- resolve a CSS custom property to a renderable rgb color ---
    const resolveColor = (cssExpr: string) => {
      const probe = document.createElement("span");
      probe.style.color = cssExpr;
      document.body.appendChild(probe);
      const rgb = getComputedStyle(probe).color;
      document.body.removeChild(probe);
      return new THREE.Color(rgb);
    };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    const ambientLight = new THREE.AmbientLight(new THREE.Color(0xffffff), 0.4);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(new THREE.Color(0xffffff), 0.75, 40, 2);
    pointLight.position.set(6, 5, 8);
    scene.add(pointLight);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const ringGeo = new THREE.TorusGeometry(3.15, 0.04, 16, 100);
    const ringMat = new THREE.LineBasicMaterial({ transparent: true, opacity: 0.18 });
    const ring = new THREE.LineSegments(new THREE.EdgesGeometry(ringGeo), ringMat);
    ring.rotation.x = Math.PI / 2.6;
    ring.rotation.z = Math.PI / 8;
    group.add(ring);

    // --- wireframe shell (geodesic silhouette) ---
    const shellGeo = new THREE.IcosahedronGeometry(2.35, 1);
    const shellEdges = new THREE.EdgesGeometry(shellGeo);
    const shellMat = new THREE.LineBasicMaterial({ transparent: true, opacity: 0.28 });
    const shell = new THREE.LineSegments(shellEdges, shellMat);
    group.add(shell);

    // --- network nodes (fibonacci sphere sampling) ---
    const NODE_COUNT = 90;
    const positions: THREE.Vector3[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < NODE_COUNT; i++) {
      const y = 1 - (i / (NODE_COUNT - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = golden * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      positions.push(new THREE.Vector3(x, y, z).multiplyScalar(2.55));
    }

    const nodesGeo = new THREE.BufferGeometry().setFromPoints(positions);
    const nodesMat = new THREE.PointsMaterial({
      size: 0.06,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const nodes = new THREE.Points(nodesGeo, nodesMat);
    group.add(nodes);

    // --- nearest-neighbour links, sparse for a "data network" read ---
    const K = 2;
    const linkPositions: number[] = [];
    for (let i = 0; i < positions.length; i++) {
      const dists = positions
        .map((p, j) => ({ j, d: i === j ? Infinity : p.distanceTo(positions[i]) }))
        .sort((a, b) => a.d - b.d)
        .slice(0, K);
      for (const { j } of dists) {
        linkPositions.push(
          positions[i].x,
          positions[i].y,
          positions[i].z,
          positions[j].x,
          positions[j].y,
          positions[j].z,
        );
      }
    }
    const linksGeo = new THREE.BufferGeometry();
    linksGeo.setAttribute("position", new THREE.Float32BufferAttribute(linkPositions, 3));
    const linksMat = new THREE.LineBasicMaterial({ transparent: true, opacity: 0.16 });
    const links = new THREE.LineSegments(linksGeo, linksMat);
    group.add(links);

    const applyTheme = () => {
      const accent = resolveColor("var(--brand-accent)");
      const pop = resolveColor("var(--gold)");
      shellMat.color.copy(accent);
      linksMat.color.copy(accent);
      nodesMat.color.copy(pop);
      ringMat.color.copy(accent);
    };
    applyTheme();

    const observer = new MutationObserver(applyTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // --- sizing ---
    const resize = () => {
      const { clientWidth, clientHeight } = container;
      if (!clientWidth || !clientHeight) return;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    // --- gentle mouse parallax ---
    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      target.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      target.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointerMove);

    let raf = 0;
    const clock = new THREE.Clock();

    const renderStatic = () => {
      group.rotation.set(0.35, -0.5, 0);
      renderer.render(scene, camera);
    };

    const animate = () => {
      const dt = clock.getDelta();
      pointer.x += (target.x - pointer.x) * 0.04;
      pointer.y += (target.y - pointer.y) * 0.04;
      group.rotation.y += dt * 0.16;
      group.rotation.x = 0.25 + pointer.y * 0.18;
      group.rotation.z = pointer.x * -0.08;
      ring.rotation.y -= dt * 0.08;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    if (reduceMotion) {
      renderStatic();
    } else {
      animate();
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      shellGeo.dispose();
      shellEdges.dispose();
      shellMat.dispose();
      nodesGeo.dispose();
      nodesMat.dispose();
      linksGeo.dispose();
      linksMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" aria-hidden="true" />;
}
