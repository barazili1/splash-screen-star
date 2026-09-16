import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import backgroundAsset from "@/assets/instapay-background.jpeg.asset.json";
import instapayLogo from "@/assets/instapay-logo.png";
import ipnLogo from "@/assets/ipn-logo.png";
import chevrons from "@/assets/chevrons.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Instapay | Splash Screen" },
      { name: "description", content: "Instapay mobile application splash screen." },
      { property: "og:title", content: "Instapay | Splash Screen" },
      { property: "og:description", content: "Instapay mobile application splash screen." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function ProgressMark() {
  return (
    <svg
      className="progress-mark"
      viewBox="0 0 100 100"
      role="img"
      aria-label="جارٍ التحميل"
    >
      <defs>
        <radialGradient id="sphereGrad" cx="50%" cy="34%" r="85%">
          <stop offset="0%" stopColor="var(--splash-violet)" />
          <stop offset="60%" stopColor="var(--splash-violet-deep)" />
          <stop offset="100%" stopColor="oklch(0.24 0.19 299)" />
        </radialGradient>
      </defs>

      {/* white ring */}
      <circle cx="50" cy="50" r="45" fill="none" stroke="var(--splash-ink)" strokeWidth="5" />
      {/* orange progress arc */}
      <circle
        className="progress-arc"
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="var(--splash-orange)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="283"
        transform="rotate(-90 50 50)"
      />
      {/* violet sphere */}
      <circle cx="50" cy="50" r="37" fill="url(#sphereGrad)" />
      {/* Instapay chevrons — 25px wide inside the 85px mark (29.41 viewBox units) */}
      <image
        href={chevrons}
        x={35.3}
        y={37.68}
        width={29.41}
        height={24.63}
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
}

function Index() {
  const [phase, setPhase] = useState<"splash" | "progress">("splash");
  const navigate = useNavigate();

  useEffect(() => {
    const showProgress = window.setTimeout(() => setPhase("progress"), 1000);
    const goHome = window.setTimeout(() => {
      navigate({ to: "/home" });
    }, 3000);
    return () => {
      window.clearTimeout(showProgress);
      window.clearTimeout(goHome);
    };
  }, [navigate]);

  return (
    <main
      className="splash"
      aria-label="Instapay splash screen"
      style={{ backgroundImage: `url(${backgroundAsset.url})` }}
    >
      <section className="brand-lockup">
        <p lang="ar" dir="rtl">أهلاً بك في</p>
        <h1 className="sr-only">Instapay</h1>
        <img src={instapayLogo} alt="Instapay" />
      </section>

      {phase === "progress" && (
        <section className="progress-screen" aria-label="جارٍ التحميل">
          <ProgressMark />
        </section>
      )}

      <footer className="splash-footer">
        <img src={ipnLogo} alt="IPN" />
        <small>V1.12.1</small>
      </footer>
    </main>
  );
}
