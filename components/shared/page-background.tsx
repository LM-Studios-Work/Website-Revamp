/**
 * PageBackground Component
 * 
 * A reusable background component that provides the consistent dark theme
 * with grain texture and gradient overlay used across all pages.
 */

interface PageBackgroundProps {
  /** Use solid background variant (no gradient) */
  solid?: boolean;
  /** Custom overlay opacity (default: 0.6 for standard, varies for solid) */
  overlayOpacity?: number;
  /** Show radial vignette effect */
  vignette?: boolean;
}

export function PageBackground({ 
  solid = false, 
  overlayOpacity,
  vignette = false,
}: PageBackgroundProps) {
  const defaultOpacity = solid ? 0 : 0.6;
  const opacity = overlayOpacity ?? defaultOpacity;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Base Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: solid 
            ? "url(/images/dark-background-solid.png)" 
            : "url(/newhero.webp)",
          backgroundColor: "#050505",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />
      
      {/* Grain Texture Overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"
      />
      
      {/* Gradient Overlay */}
      {opacity > 0 && (
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black"
          style={{ opacity }}
        />
      )}
      
      {/* Vignette Effect */}
      {vignette && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      )}
    </div>
  );
}
