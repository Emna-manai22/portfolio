import { ArtFrame } from "./ArtFrame";

export type ArtVariant = "autohire" | "stock" | "stress" | "jobmatcher" | "quran";

/**
 * Original, hand-drawn line-art motifs for each project, one per domain.
 * Replaces the generic stock photography with illustrations that share a
 * single consistent visual language (gradient field + gold line art) across
 * every card, so the project grid reads as one designed system.
 */
export function ProjectArt({ variant }: { variant: ArtVariant }) {
  return <ArtFrame>{motifs[variant]}</ArtFrame>;
}

const line = {
  stroke: "var(--gold)",
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

const motifs: Record<ArtVariant, React.ReactNode> = {
  // AutoHire — candidate card and role card resolving into a match.
  autohire: (
    <g>
      <rect x="52" y="66" width="118" height="118" rx="14" fill="white" opacity="0.08" />
      <circle cx="111" cy="106" r="16" {...line} />
      <path d="M79 158c6-20 26-24 32-24s26 4 32 24" {...line} />
      <rect x="230" y="66" width="118" height="118" rx="14" fill="white" opacity="0.08" />
      <path d="M256 110h66M256 128h66M256 146h40" {...line} />
      <path d="M170 125h60" {...line} strokeDasharray="2 10" />
      <circle
        cx="200"
        cy="125"
        r="20"
        fill="var(--brand-deep)"
        stroke="var(--gold)"
        strokeWidth="2.5"
      />
      <path d="M191 125l6 7 13-15" {...line} strokeWidth="3" />
      <circle cx="70" cy="40" r="3" fill="var(--gold)" opacity="0.7" />
      <circle cx="330" cy="205" r="3" fill="var(--gold)" opacity="0.7" />
      <circle cx="40" cy="200" r="2.2" fill="white" opacity="0.5" />
    </g>
  ),

  // Stock management — stacked crates + a tracked upward trend.
  stock: (
    <g>
      <g {...line}>
        <path d="M96 150l40-18 40 18-40 18z" />
        <path d="M96 150v34l40 18v-34" />
        <path d="M176 150v34l-40 18" />
        <path d="M96 184v34l40 18v-34" opacity="0.55" />
        <path d="M176 184v34l-40 18" opacity="0.55" />
      </g>
      <g {...line} opacity="0.6">
        <path d="M170 108l32-14 32 14-32 14z" />
        <path d="M170 108v28l32 14v-28" />
        <path d="M234 108v28l-32 14" />
      </g>
      <path d="M250 170l24-20 20 12 34-38" {...line} strokeWidth="3" />
      <path d="M290 118h18v18" {...line} strokeWidth="3" />
      <circle cx="60" cy="70" r="3" fill="var(--gold)" opacity="0.7" />
      <circle cx="340" cy="80" r="2.2" fill="white" opacity="0.5" />
    </g>
  ),

  // Student stress detection — a calm brain contour read by a live signal.
  stress: (
    <g>
      <path
        d="M136 118C132 96 150 80 174 82 178 68 200 66 210 80 230 74 248 90 244 108 258 112 260 132 248 142 252 158 236 168 220 162 212 176 190 178 180 166 160 172 140 162 140 146 124 142 122 124 136 118Z"
        fill="white"
        fillOpacity="0.07"
        stroke="var(--gold)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M150 108C158 100 166 110 174 102 182 94 192 106 202 98"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M150 130C158 124 164 134 172 128 180 122 188 132 198 126"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path d="M96 150h26l10-18 12 32 10-22 8 12h20" {...line} strokeWidth="3" />
      <circle cx="252" cy="164" r="3.2" fill="var(--gold)" />
      <circle cx="284" cy="140" r="2.6" fill="white" opacity="0.6" />
      <circle cx="308" cy="176" r="2.6" fill="white" opacity="0.6" />
      <path d="M252 164l32-24 24 36" {...line} strokeDasharray="1 8" opacity="0.8" />
    </g>
  ),

  // Job Matcher — two interlocking pieces plus keyword chips.
  jobmatcher: (
    <g>
      <path
        d="M120 90h48v14a10 10 0 0 0 20 0V90h20a8 8 0 0 1 8 8v18a10 10 0 0 0 0 20v22a8 8 0 0 1-8 8h-20"
        {...line}
      />
      <path
        d="M280 160h-48v-14a10 10 0 0 0-20 0v14h-20a8 8 0 0 1-8-8v-18a10 10 0 0 0 0-20V96a8 8 0 0 1 8-8h20"
        {...line}
        opacity="0.55"
      />
      <g opacity="0.85">
        <rect
          x="70"
          y="176"
          width="52"
          height="20"
          rx="10"
          fill="white"
          opacity="0.1"
          stroke="var(--gold)"
          strokeWidth="2"
        />
        <rect
          x="130"
          y="188"
          width="66"
          height="20"
          rx="10"
          fill="white"
          opacity="0.1"
          stroke="var(--gold)"
          strokeWidth="2"
        />
        <rect
          x="60"
          y="46"
          width="60"
          height="20"
          rx="10"
          fill="white"
          opacity="0.1"
          stroke="var(--gold)"
          strokeWidth="2"
        />
      </g>
      <circle cx="330" cy="80" r="3" fill="var(--gold)" opacity="0.7" />
      <circle cx="300" cy="205" r="2.4" fill="white" opacity="0.5" />
    </g>
  ),

  // Quran Tracker — open book with a geometric rosette and a progress ring.
  quran: (
    <g>
      <path d="M80 96c30-10 54-10 70 6v78c-16-14-40-14-70-6z" {...line} />
      <path d="M290 96c-30-10-54-10-70 6v78c16-14 40-14 70-6z" {...line} />
      <path
        d="M150 102v78M150 122h30M150 142h26M150 162h30"
        stroke="var(--gold)"
        strokeWidth="1.6"
        opacity="0.55"
        strokeLinecap="round"
      />
      <path
        d="M220 102v78M220 122h-30M220 142h-26M220 162h-30"
        stroke="var(--gold)"
        strokeWidth="1.6"
        opacity="0.55"
        strokeLinecap="round"
      />
      <g transform="translate(200 52)" opacity="0.9">
        <path
          d="M0-22 6-6 22 0 6 6 0 22-6 6-22 0-6-6z"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </g>
      <g transform="translate(324 176)">
        <circle r="18" fill="none" stroke="white" strokeOpacity="0.18" strokeWidth="4" />
        <path
          d="M0 -18 A18 18 0 0 1 15 9"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
      <circle cx="52" cy="60" r="2.4" fill="white" opacity="0.5" />
    </g>
  ),
};
