"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import jsPDF from "jspdf";


import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ResultsPage() {
const [data, setData] = useState<{
  tool: string;
  plan: string;
  spend: string;
} | null>(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
  const stored = localStorage.getItem("auditData");

  if (stored) {
    const parsedData = JSON.parse(stored);

    setTimeout(() => {
      setData(parsedData);
    }, 0);
  }
}, []);



  const saveLead = async () => {
    if (!email) {
      toast.error("Please enter email");
      return;
    }

    const { error } = await supabase
      .from("leads")
      .insert([
        {
          email,
        },
      ]);

    if (error) {
      toast.error("Something went wrong");
      console.log(error);
    } else {
      toast.success("Report saved successfully!");
    }
  };

  if (!data) {
    return (
      <div className="flex flex-col items-center gap-6">

  <div className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full animate-spin" />

  <p className="text-2xl font-semibold text-gray-300">
    Generating AI Audit...
  </p>

</div>
    );
  }
let savings = 0;
let recommendation = "";
let yearlySavings = 0;

if (data.tool === "ChatGPT") {

  if (data.plan === "Free") {
    savings = 0;

    recommendation =
      "You're already using the free plan efficiently.";
  }

  if (data.plan === "Plus") {
    savings = 10;

    recommendation =
      "Consider sharing subscriptions across your small team.";
  }

  if (data.plan === "Team") {
    savings = 20;

    recommendation =
      "Small teams can often use ChatGPT Plus instead of Team.";
  }

  if (data.plan === "Enterprise") {
    savings = 100;

    recommendation =
      "Enterprise plans may be excessive for smaller startups.";
  }
}

if (data.tool === "Claude") {

  if (data.plan === "Free") {
    savings = 0;

    recommendation =
      "Your current setup is already cost efficient.";
  }

  if (data.plan === "Plus") {
    savings = 12;

    recommendation =
      "Claude Pro may be more than enough for solo usage.";
  }

  if (data.plan === "Team") {
    savings = 25;

    recommendation =
      "Claude Pro may offer sufficient functionality.";
  }

  if (data.plan === "Enterprise") {
    savings = 80;

    recommendation =
      "Enterprise plans are often unnecessary for early startups.";
  }
}

if (data.tool === "Cursor") {

  if (data.plan === "Plus") {
    savings = 8;

    recommendation =
      "You may optimize usage with fewer paid seats.";
  }

  if (data.plan === "Business") {
    savings = 15;

    recommendation =
      "Cursor Pro is often enough for small engineering teams.";
  }

  if (data.plan === "Enterprise") {
    savings = 60;

    recommendation =
      "Enterprise-grade tooling may exceed your current needs.";
  }
}

if (data.tool === "Gemini") {

  if (data.plan === "Plus") {
    savings = 10;

    recommendation =
      "Gemini free offerings may already satisfy light workflows.";
  }

  if (data.plan === "Business") {
    savings = 35;

    recommendation =
      "Smaller teams may benefit from lower-tier Gemini plans.";
  }

  if (data.plan === "Enterprise") {
    savings = 90;

    recommendation =
      "Enterprise AI tooling can often be consolidated.";
  }
}

if (data.tool === "Copilot") {

  if (data.plan === "Plus") {
    savings = 5;

    recommendation =
      "Copilot Individual may already be sufficient.";
  }

  if (data.plan === "Business") {
    savings = 20;

    recommendation =
      "GitHub Copilot Business can be expensive for small teams.";
  }

  if (data.plan === "Enterprise") {
    savings = 70;

    recommendation =
      "Enterprise developer tooling should be reviewed regularly.";
  }
}

yearlySavings = savings * 12;

const chartData = [
  {
    name: "Monthly",
    savings: savings,
  },
  {
    name: "Yearly",
    savings: yearlySavings,
  },
];

const downloadPDF = () => {

  const pdf = new jsPDF();

  pdf.setFontSize(24);

  pdf.text("Credex AI Spend Audit", 20, 20);

  pdf.setFontSize(16);

  pdf.text(`Tool: ${data.tool}`, 20, 50);

  pdf.text(`Monthly Savings: $${savings}`, 20, 70);

  pdf.text(`Yearly Savings: $${yearlySavings}`, 20, 90);

  pdf.text("Recommendation:", 20, 120);

  pdf.setFontSize(12);

  pdf.text(recommendation, 20, 140, {
    maxWidth: 160,
  });

  pdf.save("credex-audit-report.pdf");
};

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white px-6 py-10">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10 blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:6rem_6rem]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center">

          <div className="inline-block border border-gray-800 bg-gray-950/70 backdrop-blur-xl px-4 py-2 rounded-full text-sm text-gray-300 shadow-xl">
            AI Spend Optimization Report
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">

            Audit

            <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Results
            </span>

          </h1>

        </div>

        {/* Card */}
        <div
  id="report"
  className="mt-14 border border-gray-800 bg-gray-950/70 backdrop-blur-2xl shadow-2xl rounded-[32px] p-8 md:p-12"
>

          {/* Tool */}
          <div>
            <p className="text-gray-400 uppercase tracking-widest text-sm">
              Tool Analyzed
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-4">
              {data.tool}
            </h2>
          </div>

          {/* Hero Savings */}
          <div className="mt-14">

            <p className="text-gray-400 uppercase tracking-widest text-sm">
              Potential Yearly Savings
            </p>

            <h2 className="text-7xl md:text-9xl font-black mt-6 text-green-400">
              ${yearlySavings}

              <span className="text-2xl md:text-4xl text-white ml-2">
                /year
              </span>
            </h2>

          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="border border-gray-800 bg-black/40 rounded-3xl p-8 hover:scale-[1.02] hover:border-green-400/40 transition duration-300">
              <p className="text-gray-400">
                Estimated Monthly Savings
              </p>

              <h3 className="text-6xl font-black mt-4 text-green-400">
                ${savings}
              </h3>
            </div>

            <div className="border border-gray-800 bg-black/40 rounded-3xl p-8 hover:scale-[1.02] hover:border-blue-400/40 transition duration-300">
              <p className="text-gray-400">
                Estimated Annual Savings
              </p>

              <h3 className="text-6xl font-black mt-4 text-blue-400">
                ${yearlySavings}
              </h3>
            </div>

          </div>

          {/* Savings Chart */}
<div className="mt-14">

  <p className="text-gray-400 uppercase tracking-widest text-sm mb-6">
    Savings Visualization
  </p>

  <div className="border border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-black rounded-3xl p-6 h-96 shadow-2xl">

    <ResponsiveContainer width="100%" height="100%">

      <BarChart data={chartData}>

        <XAxis
          dataKey="name"
          stroke="#9CA3AF"
          tick={{ fill: "#D1D5DB", fontSize: 14 }}
        />

        <YAxis
          stroke="#9CA3AF"
          tick={{ fill: "#D1D5DB", fontSize: 14 }}
        />

        <Tooltip
          contentStyle={{
            backgroundColor: "#111827",
            border: "1px solid #374151",
            borderRadius: "16px",
            color: "#fff",
          }}
        />

        <Bar
          dataKey="savings"
          fill="url(#colorGradient)"
          radius={[14, 14, 0, 0]}
        />

        <defs>
          <linearGradient
            id="colorGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#4ADE80" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>

      </BarChart>

    </ResponsiveContainer>

  </div>

</div>

          {/* Recommendation */}
          <div className="mt-14">

            <p className="text-gray-400 uppercase tracking-widest text-sm">
              Recommendation
            </p>

            <div className="mt-6 border border-gray-800 bg-black/40 rounded-3xl p-8">

              <p className="text-xl md:text-2xl leading-10 text-gray-200">
                {recommendation}
              </p>

            </div>

          </div>

          {/* AI Summary */}
          <div className="mt-14">

            <p className="text-gray-400 uppercase tracking-widest text-sm">
              AI Generated Summary
            </p>

            <div className="mt-6 border border-gray-800 bg-black/40 rounded-3xl p-8">

              <p className="text-lg md:text-xl leading-10 text-gray-300">

                Your current AI tooling setup appears to include
                higher-tier plans that may not fully match your
                team size and usage requirements. Optimizing your
                subscriptions could reduce unnecessary monthly
                spending while maintaining similar productivity
                and workflow efficiency.

              </p>

            </div>

          </div>

          <button
  onClick={downloadPDF}
  className="mt-14 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-5 rounded-2xl text-lg font-black hover:scale-[1.02] transition duration-300 shadow-2xl"
>
  Download PDF Report
</button>

          {/* Email */}
          <div className="mt-14">

            <p className="text-gray-400 uppercase tracking-widest text-sm mb-6">
              Save Full Report
            </p>

            <div className="flex flex-col md:flex-row gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-black border border-gray-800 p-5 rounded-2xl outline-none focus:border-green-400 transition"
              />

              <button
                onClick={saveLead}
                className="bg-gradient-to-r from-green-400 to-blue-500 text-black px-10 py-5 rounded-2xl font-black hover:scale-105 transition duration-300 shadow-2xl"
              >
                Save Report
              </button>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}