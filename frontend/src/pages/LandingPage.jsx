import { Link } from "react-router-dom";
import MarketingNav from "../components/MarketingNav";
import ThemeBackground from "../components/ThemeBackground";
import { useAuth } from "../context/AuthContext";

const features = [
  {
    title: "AI match score",
    desc: "Get a 0–100 fit score against the job description in seconds.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    ),
    accent: "from-zinc-800/20 to-zinc-700/10 border-zinc-700/30 text-zinc-300",
  },
  {
    title: "Skills & gaps",
    desc: "See detected skills, missing keywords, and what to add next.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
      />
    ),
    accent: "from-zinc-800/20 to-zinc-700/10 border-zinc-700/30 text-zinc-300",
  },
  {
    title: "Actionable tips",
    desc: "Concrete suggestions to tighten bullets and align with the role.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    ),
    accent: "from-zinc-800/20 to-zinc-700/10 border-zinc-700/30 text-zinc-300",
  },
];

export default function LandingPage() {
  const { user } = useAuth();

  return (
    <ThemeBackground>
      <MarketingNav />

      <main>
        <section className="relative mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pt-16">
          <div className="mx-auto max-w-3xl text-center mt-[50px]">
            {/* <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Powered by Gemini
            </p> */}
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Your resume,{" "}
              <span className="bg-gradient-to-r from-zinc-500 via-zinc-400 to-zinc-300 bg-clip-text text-transparent">
                job-ready
              </span>{" "}
              in one pass
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
              Upload a PDF or DOCX, paste any job description, and get a fit
              score, skill gaps, and tailored rewrites—same dark, focused
              experience end to end.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {user ? (
                <Link
                  to="/analyze"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-600 px-8 py-3.5 font-display text-sm font-semibold text-white shadow-xl shadow-black/35 transition hover:brightness-95"
                >
                  Open analyzer
                </Link>
              ) : (
                <>
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-500 px-8 py-3.5 font-display text-sm font-semibold text-white shadow-xl shadow-emerald-500/25 transition hover:brightness-110"
                  >
                    Get started free
                  </Link>
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center rounded-xl border border-zinc-600 bg-zinc-900/60 px-8 py-3.5 font-display text-sm font-semibold text-zinc-200 transition hover:border-zinc-500/50 hover:text-white"
                  >
                    Log in
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="mx-auto mt-20 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className={`rounded-2xl border bg-gradient-to-br p-6 shadow-xl shadow-black/30 backdrop-blur-sm ${f.accent}`}
              >
                <div className="mb-4 inline-flex rounded-xl border border-zinc-700/60 bg-zinc-900/50 p-3">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {f.icon}
                  </svg>
                </div>
                <h2 className="font-display text-lg font-semibold text-white">
                  {f.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-800/80 bg-zinc-900/30 py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Ready to analyze your resume?
            </h2>
            <p className="mt-3 text-zinc-400">
              Create an account to save sessions and unlock the full analyzer.
            </p>
            <Link
              to="/signup"
              className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-500  px-8 py-3.5 font-display text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
            >
              Create account
            </Link>
          </div>
        </section>
        <section className="text-center p-[20px]">
          Developed and design by Dhruv, Atharv and Harsh
        </section>
      </main>
    </ThemeBackground>
  );
}
