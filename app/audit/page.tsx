"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuditPage() {
  const router = useRouter();

  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [spend, setSpend] = useState("");
  const [loading, setLoading] = useState(false);

 const handleAudit = () => {

  setLoading(true);

  localStorage.setItem(
    "auditData",
    JSON.stringify({
      tool,
      plan,
      spend,
    })
  );

  setTimeout(() => {
    router.push("/results");
  }, 1200);
};

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white px-6 py-10">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10 blur-3xl" />

      {/* Grid Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:6rem_6rem]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Card */}
        <div className="border border-gray-800 bg-gray-950/70 backdrop-blur-2xl rounded-[32px] p-8 md:p-14 shadow-2xl">

          {/* Heading */}
          <div className="text-center">

            <div className="inline-block border border-gray-800 bg-gray-900/70 px-4 py-2 rounded-full text-sm text-gray-300">
              AI Infrastructure Cost Optimization
            </div>

            <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl font-black leading-tight">

              AI Spend

              <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Audit Engine
              </span>

            </h1>

            <p className="text-gray-400 mt-6 text-base md:text-lg max-w-2xl mx-auto leading-8">
              Analyze your AI tooling stack and uncover hidden
              savings opportunities across ChatGPT, Claude,
              Cursor, Gemini, and more.
            </p>

          </div>

          {/* Form */}
          <div className="mt-14 grid grid-cols-1 gap-8">

            {/* Tool */}
            <div>
              <label className="text-gray-400 text-sm uppercase tracking-widest">
                AI Tool
              </label>

              <select
                value={tool}
                onChange={(e) => setTool(e.target.value)}
                className="w-full mt-3 bg-black border border-gray-800 p-5 rounded-2xl outline-none focus:border-green-400 transition text-white"
              >
                <option value="">Select Tool</option>
                <option value="ChatGPT">ChatGPT</option>
                <option value="Claude">Claude</option>
                <option value="Cursor">Cursor</option>
                <option value="Gemini">Gemini</option>
                <option value="Copilot">GitHub Copilot</option>
              </select>
            </div>

            {/* Plan */}
            <div>
              <label className="text-gray-400 text-sm uppercase tracking-widest">
                Current Plan
              </label>

              <select
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="w-full mt-3 bg-black border border-gray-800 p-5 rounded-2xl outline-none focus:border-blue-400 transition text-white"
              >
                <option value="">Select Plan</option>
                <option value="Free">Free</option>
                <option value="Plus">Plus</option>
                <option value="Team">Team</option>
                <option value="Business">Business</option>
                <option value="Enterprise">Enterprise</option>
              </select>
            </div>

            {/* Spend */}
            <div>
              <label className="text-gray-400 text-sm uppercase tracking-widest">
                Monthly Spend
              </label>

              <input
                type="number"
                placeholder="Example: 200"
                value={spend}
                onChange={(e) => setSpend(e.target.value)}
                className="w-full mt-3 bg-black border border-gray-800 p-5 rounded-2xl outline-none focus:border-purple-400 transition text-white"
              />
            </div>

            {/* Button */}
            <button
  onClick={handleAudit}
  className="mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-black py-5 rounded-2xl text-lg font-black hover:scale-[1.02] transition duration-300 shadow-2xl"
>
  {loading ? "Generating Audit..." : "Generate Free Audit"}
</button>

          </div>

        </div>

      </div>

    </main>
  );
}