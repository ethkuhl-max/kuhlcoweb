import StarField from "./StarField";

// Stand-ins for Starlink's full-bleed orbital photography. Swap any `backdrop`
// for a real <Image fill /> when art is ready — the layout does not change.
const BACKDROPS = {
  orbit:
    "radial-gradient(120% 90% at 50% 118%, #16407a 0%, #0a1d3d 38%, #030712 68%, #000 100%)",
  dawn:
    "radial-gradient(100% 80% at 12% 108%, #7a3a16 0%, #2a1408 34%, #060606 70%, #000 100%)",
  deep:
    "radial-gradient(90% 70% at 88% -10%, #123c3a 0%, #071b1f 40%, #000 78%)",
  plain: "linear-gradient(180deg, #000 0%, #050505 100%)",
};

export default function Panel({
  id,
  backdrop = "plain",
  stars = true,
  align = "bottom",
  className = "",
  children,
}) {
  return (
    <section
      id={id}
      className={`snap-panel relative flex min-h-[100svh] w-full overflow-hidden ${
        align === "center" ? "items-center" : "items-end"
      } ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: BACKDROPS[backdrop] ?? BACKDROPS.plain }}
      />
      {stars && <StarField className="opacity-70" />}
      {/* Legibility scrim, exactly as Starlink darkens the base of every frame. */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/55 to-transparent"
      />
      <div className="shell relative z-10 pb-20 pt-32 md:pb-28">{children}</div>
    </section>
  );
}
