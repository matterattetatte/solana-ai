import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Cpu,
  Shield,
  Play,
  Wallet,
  TrendingUp,
  Users,
  Clock,
  Award,
} from "lucide-react";

export default function Solazure() {
  const [inferenceInput, setInferenceInput] = useState("What is the capital of Japan?");
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState("Llama-4");
  const [history, setHistory] = useState<any[]>([]);

  const [particles, setParticles] = useState<
    { left: string; top: string; delay: number; duration: number }[]
  >([]);

  // Fake live stats
  const [liveStats, setLiveStats] = useState({
    inferences: 1248934,
    agents: 8459,
    avgLatency: 287,
    totalValue: "1.28M",
  });

  useEffect(() => {
    const generated = [...Array(35)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 8,
      duration: 5 + Math.random() * 12,
    }));
    setParticles(generated);

    // Simulate live updates
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        inferences: prev.inferences + Math.floor(Math.random() * 7),
        agents: prev.agents + (Math.random() > 0.7 ? 1 : 0),
        avgLatency: Math.max(210, prev.avgLatency + (Math.random() * 8 - 4)),
        totalValue: (parseFloat(prev.totalValue) + Math.random() * 0.02).toFixed(2),
      }));
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const handleInference = async () => {
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 1250));

    const response = "Tokyo is the capital of Japan. It is the political, economic, and cultural center of the country and one of the world's most populous metropolitan areas with over 37 million residents in the greater region.";
    
    setResult(response);
    
    setHistory(prev => [{
      id: Date.now(),
      query: inferenceInput,
      model: selectedModel,
      time: "287ms",
      cost: "$0.00012",
      response: response.substring(0, 120) + "..."
    }, ...prev.slice(0, 4)]);

    setIsProcessing(false);
  };

  // Simple sparkline data
  const volumeData = [42, 65, 48, 89, 67, 95, 78, 112, 98, 134, 156, 189];

  const styles: any = {
    page: {
      minHeight: "100vh",
      background: "radial-gradient(circle at 30% 20%, rgba(91,33,182,0.35) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(6,182,212,0.28) 0%, transparent 60%), #0a0a0a",
      color: "white",
      overflow: "hidden",
      fontFamily: "Inter, system-ui, sans-serif",
      position: "relative",
    },
    noise: {
      position: "fixed",
      inset: 0,
      opacity: 0.04,
      backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
      pointerEvents: "none",
      zIndex: 1,
    },
    nav: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backdropFilter: "blur(32px)",
      background: "rgba(10,10,10,0.85)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
    },
    // ... (keeping most original styles and enhancing them)
    hero: {
      paddingTop: 180,
      paddingBottom: 140,
      position: "relative",
      zIndex: 5,
    },
    title: {
      fontSize: "clamp(4.2rem, 11vw, 9.2rem)",
      lineHeight: 0.92,
      fontWeight: 900,
      letterSpacing: "-7px",
      marginBottom: 32,
    },
    gradientText: {
      background: "linear-gradient(90deg, #a855f7, #22d3ee, #f472b6)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundSize: "300% auto",
      animation: "gradientShift 8s linear infinite",
    },
    demoCard: {
      borderRadius: 40,
      padding: 48,
      background: "linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))",
      border: "1px solid rgba(255,255,255,0.12)",
      backdropFilter: "blur(40px)",
      boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
    },
    resultCard: {
      marginTop: 32,
      borderRadius: 32,
      padding: 40,
      background: "rgba(15,23,42,0.85)",
      border: "1px solid rgba(103,232,249,0.2)",
      position: "relative",
      overflow: "hidden",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.noise} />

      {/* Background Orbs + Particles */}
      <div style={{ position: "absolute", width: "620px", height: "620px", borderRadius: "999px", background: "radial-gradient(circle, #7c3aed 20%, transparent 70%)", filter: "blur(140px)", top: "-180px", left: "-180px", opacity: 0.45 }} />
      <div style={{ position: "absolute", width: "720px", height: "720px", borderRadius: "999px", background: "radial-gradient(circle, #06b6d4 20%, transparent 70%)", filter: "blur(160px)", bottom: "-220px", right: "-200px", opacity: 0.38 }} />

      {particles.map((p, i) => (
        <motion.div
          key={i}
          animate={{ y: [-40, 40, -40], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
          style={{
            position: "absolute",
            left: p.left,
            top: p.top,
            width: i % 3 === 0 ? 5 : 3,
            height: i % 3 === 0 ? 5 : 3,
            borderRadius: "999px",
            background: i % 5 === 0 ? "#67e8f9" : "white",
            zIndex: 2,
          }}
        />
      ))}

      {/* NAV */}
      <nav style={styles.nav}>
        <div style={{ maxWidth: "1480px", margin: "0 auto", padding: "20px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 52, height: 52, borderRadius: 20, background: "linear-gradient(135deg, #7c3aed, #06b6d4, #ec4899)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 900, boxShadow: "0 0 60px rgba(124,58,237,0.6)" }}>NR</div>
            <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-1.5px" }}>Solazure</div>
          </div>

          <div style={{ display: "flex", gap: 48, fontSize: 16, color: "#cbd5e1" }}>
            <a href="#dashboard" style={{ color: "inherit", textDecoration: "none" }}>Dashboard</a>
            <a href="#demo" style={{ color: "inherit", textDecoration: "none" }}>Live Demo</a>
            <a href="#features" style={{ color: "inherit", textDecoration: "none" }}>Features</a>
            <a href="#market" style={{ color: "inherit", textDecoration: "none" }}>Market</a>
          </div>

          <div style={{ display: "flex", gap: 16 }}>
            <button style={{ padding: "14px 28px", borderRadius: 999, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white", fontWeight: 600 }}>Docs</button>
            <button style={{ padding: "14px 28px", borderRadius: 999, background: "white", color: "#000", fontWeight: 700, display: "flex", alignItems: "center", gap: 10 }}>
              <Wallet size={18} /> Connect
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center", padding: "0 24px" }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "12px 28px", background: "rgba(103,232,249,0.1)", border: "1px solid rgba(103,232,249,0.3)", borderRadius: 9999, marginBottom: 32 }}>
            <div style={{ width: 12, height: 12, background: "#22d3ee", borderRadius: "50%", boxShadow: "0 0 25px #22d3ee", animation: "pulse 2s infinite" }} />
            LIVE ON SOLANA MAINNET • 1.2M INFERENCES TODAY
          </motion.div>

          <h1 style={styles.title}>
            AI that <span style={styles.gradientText}>Pays Itself</span>
          </h1>

          <p style={{ fontSize: 28, maxWidth: 820, margin: "0 auto 48px", color: "#94a3b8", lineHeight: 1.5 }}>
            The first on-chain AI inference layer. <span style={{ color: "#67e8f9" }}>Sub-300ms settlement</span>, verifiable compute, and autonomous agent micropayments.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                padding: "26px 52px",
                fontSize: 21,
                fontWeight: 700,
                borderRadius: 999,
                background: "linear-gradient(90deg, #7c3aed, #ec4899, #06b6d4)",
                border: "none",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 16,
                boxShadow: "0 30px 90px rgba(124,58,237,0.5)"
              }}
            >
              Try Live Inference <Play size={26} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* LIVE DASHBOARD PREVIEW */}
      <section id="dashboard" style={{ padding: "80px 24px", position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ fontSize: 18, color: "#67e8f9", letterSpacing: 3, marginBottom: 12 }}>PLATFORM OVERVIEW</div>
            <div style={{ fontSize: "3.2rem", fontWeight: 800, letterSpacing: "-2px" }}>Live Network Dashboard</div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: 28 }}>
            {/* Stats Cards */}
            {[
              { icon: TrendingUp, label: "Total Inferences", value: liveStats.inferences.toLocaleString(), change: "+12.4%" },
              { icon: Users, label: "Active Agents", value: liveStats.agents.toLocaleString(), change: "LIVE" },
              { icon: Clock, label: "Avg Latency", value: `${liveStats.avgLatency.toFixed(2)}ms`, change: "-41ms" },
              { icon: Award, label: "TVL Settled", value: `$${liveStats.totalValue}M`, change: "+2.8%" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -12 }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 32,
                  padding: 40,
                  backdropFilter: "blur(30px)",
                }}
              >
                <div style={{ color: "#67e8f9", marginBottom: 20 }}>{React.createElement(stat.icon, { size: 42 })}</div>
                <div style={{ fontSize: 52, fontWeight: 800, letterSpacing: "-3px" }}>{stat.value}</div>
                <div style={{ color: "#94a3b8" }}>{stat.label}</div>
                <div style={{ color: "#4ade80", marginTop: 12, fontWeight: 600 }}>{stat.change}</div>
              </motion.div>
            ))}
          </div>

          {/* Volume Chart */}
          <div style={{ marginTop: 60, background: "rgba(15,23,42,0.6)", borderRadius: 40, padding: 48, border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 32 }}>
              <div>
                <div style={{ fontSize: 22, fontWeight: 700 }}>Inference Volume (Last 24h)</div>
                <div style={{ color: "#4ade80" }}>↑ 184k inferences • Peak at 14:22 UTC</div>
              </div>
              <div style={{ color: "#67e8f9", fontWeight: 600 }}>SOLANA • MAINNET</div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-end", height: 260, gap: 6 }}>
              {volumeData.map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 40 }}
                  animate={{ height: val * 1.6 }}
                  transition={{ duration: 1.2, delay: i * 0.03 }}
                  style={{
                    flex: 1,
                    background: "linear-gradient(to top, #22d3ee, #a855f7)",
                    borderRadius: "6px 6px 0 0",
                    position: "relative",
                  }}
                >
                  <div style={{ position: "absolute", top: -28, left: "50%", transform: "translateX(-50%)", fontSize: 11, color: "#94a3b8", whiteSpace: "nowrap" }}>{val}k</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENHANCED DEMO */}
      <section id="demo" style={{ padding: "120px 24px", background: "rgba(0,0,0,0.4)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 70 }}>
            <div style={{ fontSize: 52, fontWeight: 800, letterSpacing: "-2px" }}>Instant Inference Terminal</div>
            <div style={{ color: "#94a3b8", fontSize: 22 }}>Pay • Infer • Verify • Settle • All on-chain</div>
          </div>

          <div style={styles.demoCard}>
            <div style={{ display: "flex", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
              {["Llama-4", "Gemma-3", "Claude-Sonnet", "Mixtral-8x22"].map(m => (
                <button
                  key={m}
                  onClick={() => setSelectedModel(m)}
                  style={{
                    padding: "12px 28px",
                    borderRadius: 999,
                    background: selectedModel === m ? "linear-gradient(90deg, #7c3aed, #06b6d4)" : "rgba(255,255,255,0.06)",
                    border: selectedModel === m ? "none" : "1px solid rgba(255,255,255,0.15)",
                    color: "white",
                    fontWeight: 600,
                    cursor: "pointer"
                  }}
                >
                  {m}
                </button>
              ))}
            </div>

            <textarea
              value={inferenceInput}
              onChange={(e) => setInferenceInput(e.target.value)}
              style={{
                width: "100%",
                minHeight: 180,
                background: "rgba(0,0,0,0.7)",
                border: "1px solid rgba(148,163,184,0.2)",
                borderRadius: 28,
                padding: 32,
                color: "white",
                fontSize: 19,
                resize: "vertical",
                outline: "none",
              }}
            />

            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              onClick={handleInference}
              disabled={isProcessing}
              style={{
                width: "100%",
                padding: "28px 40px",
                fontSize: 22,
                fontWeight: 700,
                borderRadius: 999,
                background: "linear-gradient(90deg, #06b6d4, #7c3aed, #ec4899)",
                color: "white",
                border: "none",
                marginTop: 20,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 18,
                boxShadow: "0 25px 70px rgba(6,182,212,0.4)"
              }}
            >
              {isProcessing ? "Settling on Solana • Verifying..." : `Run Inference • Pay $0.00012 USDC`}
              <Zap size={28} />
            </motion.button>

            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={styles.resultCard}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
                    <div style={{ color: "#4ade80", fontWeight: 700, letterSpacing: 1 }}>✓ VERIFIED ON SOLANA</div>
                    <div style={{ fontSize: 14, color: "#64748b" }}>TX: 4kP...9xL2 • {new Date().toLocaleTimeString()}</div>
                  </div>
                  <div style={{ fontSize: 20, lineHeight: 1.75 }}>{result}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Recent History */}
          {history.length > 0 && (
            <div style={{ marginTop: 60 }}>
              <div style={{ fontSize: 20, marginBottom: 20, fontWeight: 600 }}>Recent Inferences</div>
              {history.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    padding: "20px 32px",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: 24,
                    marginBottom: 12,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderLeft: "4px solid #22d3ee"
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600 }}>{item.query}</div>
                    <div style={{ fontSize: 14, color: "#94a3b8" }}>{item.model} • {item.time}</div>
                  </div>
                  <div style={{ textAlign: "right", color: "#4ade80", fontSize: 15 }}>{item.cost}</div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FEATURES + MORE */}
      <section id="features" style={{ padding: "140px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 52, fontWeight: 800, letterSpacing: "-2px", marginBottom: 80 }}>Built for the Agent Economy</div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 32 }}>
            {[
              { icon: Zap, title: "Lightning Settlement", desc: "Sub-300ms finality. Agents can now pay and receive results in a single atomic transaction." },
              { icon: Shield, title: "Zero-Knowledge Proofs", desc: "Cryptographic guarantees that every inference came from the declared model." },
              { icon: Cpu, title: "Autonomous Commerce", desc: "Native stablecoin micropayments, agent-to-agent billing, and programmable royalties." },
            ].map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -16, scale: 1.02 }}
                style={{
                  padding: 48,
                  borderRadius: 36,
                  background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                  border: "1px solid rgba(255,255,255,0.1)",
                  textAlign: "left",
                }}
              >
                <div style={{ color: "#67e8f9", marginBottom: 32 }}>{React.createElement(f.icon, { size: 52 })}</div>
                <div style={{ fontSize: 32, fontWeight: 700, marginBottom: 20 }}>{f.title}</div>
                <div style={{ lineHeight: 1.8, color: "#cbd5e1", fontSize: 18 }}>{f.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ padding: "160px 24px 80px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 900, letterSpacing: "-3px", marginBottom: 24 }}>
          Intelligence is now <span style={{ color: "#67e8f9" }}>liquid</span>.
        </div>
        <button style={{ padding: "26px 56px", fontSize: 22, fontWeight: 700, borderRadius: 999, background: "white", color: "#000", marginTop: 40 }}>
          Join the Waitlist →
        </button>
        <div style={{ marginTop: 120, color: "#64748b", fontSize: 15 }}>
          Solazure © 2026 • The Financial OS for Artificial Intelligence
        </div>
      </footer>
    </div>
  );
}
