"use client";

import Link from "next/link";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10 blur-3xl" />

      {/* Grid Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:6rem_6rem]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">

        {/* Badge */}
        <div className="border border-gray-800 bg-gray-950/70 backdrop-blur-xl px-4 py-2 rounded-full text-sm text-gray-300 shadow-xl">
          Trusted AI Cost Optimization Platform
        </div>

        {/* Heading */}
        <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mt-8 text-5xl sm:text-6xl md:text-8xl font-black leading-tight max-w-6xl"
>

  Stop Overpaying

  <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
    For AI Tools
  </span>

</motion.h1>

        {/* Subtitle */}
        <p className="mt-8 text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl leading-8 md:leading-10">

          Discover hidden savings across ChatGPT, Claude,
          Cursor, Gemini, GitHub Copilot, and other AI subscriptions.

        </p>

        {/* Buttons */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.8 }}
  className="mt-10 flex flex-col sm:flex-row gap-4"
>

          <Link
            href="/audit"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition duration-300 shadow-2xl"
          >
            Start Free Audit
          </Link>

          <a
  href="#demo"
  className="border border-gray-700 bg-gray-900/50 backdrop-blur-xl px-10 py-5 rounded-2xl text-white hover:bg-gray-800 transition"
>
  View Demo
</a>

        </motion.div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">

          <div className="border border-gray-800 bg-gray-950/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl">
            <h3 className="text-4xl font-black text-green-400">
              $24k+
            </h3>

            <p className="text-gray-400 mt-3">
              Average yearly savings discovered
            </p>
          </div>

          <div className="border border-gray-800 bg-gray-950/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl">
            <h3 className="text-4xl font-black text-blue-400">
              12+
            </h3>

            <p className="text-gray-400 mt-3">
              AI tools analyzed instantly
            </p>
          </div>

          <div className="border border-gray-800 bg-gray-950/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl">
            <h3 className="text-4xl font-black text-purple-400">
              2 min
            </h3>

            <p className="text-gray-400 mt-3">
              Time required to generate audit
            </p>
          </div>

                </div>

      </div>

      {/* Demo Section */}

      <section
        id="demo"
        className="relative z-10 px-6 pb-24 mt-24"
      >

        <div className="max-w-6xl mx-auto border border-gray-800 bg-gray-950/60 backdrop-blur-2xl rounded-[32px] p-10 md:p-16 shadow-2xl">

          <div className="text-center">

            <p className="text-green-400 uppercase tracking-[0.3em] text-sm">
              Demo Preview
            </p>

            <h2 className="mt-6 text-4xl md:text-6xl font-black">
              See How The Audit Works
            </h2>

            <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg leading-9">
              Instantly analyze your AI subscriptions and discover
              hidden savings opportunities with actionable recommendations.
            </p>

          </div>

          {/* Demo Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="border border-gray-800 bg-black/40 rounded-3xl p-8">

              <div className="text-5xl">
                📊
              </div>

              <h3 className="mt-6 text-2xl font-black">
                Smart Analysis
              </h3>

              <p className="mt-4 text-gray-400 leading-8">
                Compare your AI subscriptions against optimized plans.
              </p>

            </div>

            <div className="border border-gray-800 bg-black/40 rounded-3xl p-8">

              <div className="text-5xl">
                💰
              </div>

              <h3 className="mt-6 text-2xl font-black">
                Savings Detection
              </h3>

              <p className="mt-4 text-gray-400 leading-8">
                Identify unnecessary AI costs and reduce spending instantly.
              </p>

            </div>

            <div className="border border-gray-800 bg-black/40 rounded-3xl p-8">

              <div className="text-5xl">
                ⚡
              </div>

              <h3 className="mt-6 text-2xl font-black">
                Instant Reports
              </h3>

              <p className="mt-4 text-gray-400 leading-8">
                Generate professional AI spend reports within seconds.
              </p>

            </div>

          </div>

        </div>

      </section>

      <footer className="relative z-10 border-t border-gray-800 py-10 text-center text-gray-500 text-sm">

  Built by Deepak Kumar • Credex AI Spend Audit • 2026

</footer>

    </main>
  );
}