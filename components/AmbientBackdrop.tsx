/**
 * Site-wide cool ambient layers — navy fields, aqua luminance, subtle motion.
 */
export function AmbientBackdrop() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient__base" />
      <div className="ambient__mesh ambient__mesh--cool" />
      <div className="ambient__mesh ambient__mesh--deep" />
      <div className="ambient__luminance" />
      <div className="ambient__aqua" />
    </div>
  );
}
