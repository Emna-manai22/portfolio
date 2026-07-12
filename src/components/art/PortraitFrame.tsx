/**
 * Hero portrait component: displays profile photo in circular shape.
 * To use your own photo, replace 'emna-profile.jpg' with your image filename
 * in the public/ folder.
 */
export function PortraitFrame() {
  return (
    <>
      <img
        src="/emna-profile.jpg"
        alt="Emna Manai - Software Engineer"
        className="h-full w-full object-cover rounded-full border-2 border-[color:var(--gold)]"
      />
    </>
  );
}
