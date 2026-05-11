import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Database,
  Globe,
  Cpu,
  TrendingUp,
  Sparkles,
  Users,
  Target,
  Award,
  BarChart3,
} from "lucide-react";

type Slide = {
  eyebrow: string;
  title: string;
  body: string;
  bullets?: string[];
  stats?: { value: string; label: string; icon: any; color?: string }[];
  accent?: string;
  chart?: React.ReactNode;
  team?: { name: string; role: string; avatar: string; bio: string }[];
};

const SLIDES: Slide[] = [
  {
    eyebrow: "THE PARADIGM SHIFT",
    title: "AI Compute is the New Oil",
    body: "But it's locked behind centralized empires. We are building the decentralized financial layer for intelligence itself — on Solana.",
    bullets: [
      "Centralized providers control access and pricing",
      "Agents can't transact at machine speed",
      "Innovation is gated by APIs and quotas",
    ],
    accent: "#a855f7",
  },
  {
    eyebrow: "THE CRISIS",
    title: "Centralized AI is Breaking the Internet",
    body: "Compute costs are skyrocketing. Small teams and agents are locked out. Legacy finance makes autonomous economies impossible.",
    bullets: [
      "GPU scarcity + Big Tech gatekeeping",
      "T+2 settlement kills real-time agents",
      "KYC walls block non-human participants",
    ],
    stats: [
      { value: "T+2", label: "Settlement", icon: Database, color: "#f87171" },
      { value: "$0.30+", label: "Avg Fee", icon: Zap, color: "#f87171" },
    ],
  },
  {
    eyebrow: "COMPETITORS",
    title: "Good Tech, Wrong Rails",
    body: "Existing players are strong on compute but weak on settlement. None solve the machine economy.",
    chart: (
      <div className="grid grid-cols-3 gap-6 mt-8 max-w-2xl mx-auto">
        {[
          { name: "Together.ai", strength: "80%", weakness: "Centralized, subscription" },
          { name: "Akash", strength: "65%", weakness: "Slow settlement, high friction" },
          { name: "Render", strength: "75%", weakness: "Human-first billing" },
        ].map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-left"
          >
            <div className="font-bold text-xl mb-3">{c.name}</div>
            <div className="text-emerald-400 text-sm mb-1">Strength</div>
            <div className="h-2 bg-white/10 rounded-full mb-4">
              <div className="h-2 bg-emerald-400 rounded-full" style={{ width: c.strength }} />
            </div>
            <div className="text-rose-400 text-sm mb-1">Weakness</div>
            <p className="text-sm text-slate-400">{c.weakness}</p>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    eyebrow: "OUR SOLUTION",
    title: "Solana Settlement for AI Compute",
    body: "We turn AI inference into a native financial primitive. Prepaid balances, instant micropayments, and verifiable compute — all on Solana.",
    bullets: [
      "Azure-like experience with Solana rails",
      "Every inference = atomic economic event",
      "Agents pay autonomously via x402 + stablecoins",
    ],
    stats: [
      { value: "<400ms", label: "Settlement", icon: Zap, color: "#34d399" },
      { value: "$0.0001", label: "Per Inference", icon: Cpu, color: "#34d399" },
    ],
  },
  {
    eyebrow: "CORE TECH",
    title: "Compute Hashing + VeriLLM",
    body: "Batch inferences → cryptographic commitment → lightweight on-chain verification. Minimal overhead, maximum trust.",
    bullets: [
      "Efficient batch hashing (ZK-style commitments)",
      "VeriLLM verification at ~1% cost of inference",
      "TEE + Solana for confidentiality & finality",
    ],
    accent: "#22d3ee",
    chart: (
      <div className="mt-10 flex justify-center gap-12">
        <div className="text-center">
          <div className="text-5xl font-bold text-cyan-400">99%</div>
          <div className="text-sm text-slate-400 mt-2">Inference Cost</div>
        </div>
        <div className="h-20 w-px bg-white/20 self-center" />
        <div className="text-center">
          <div className="text-5xl font-bold text-emerald-400">1%</div>
          <div className="text-sm text-slate-400 mt-2">Verification Overhead</div>
        </div>
      </div>
    ),
  },
  {
    eyebrow: "WHY SOLANA",
    title: "The Only Chain Built for Machines",
    body: "Sub-second finality, extreme throughput, and near-zero fees. Solana already dominates agent-to-agent payments.",
    bullets: [
      "400ms deterministic finality",
      "65,000+ TPS and scaling",
      "49% market share in x402 agent transactions",
      "Atomic composability with DePIN (Shadow Drive, etc.)",
    ],
    stats: [
      { value: "400ms", label: "Finality", icon: Zap },
      { value: "49%", label: "Agent Payments", icon: TrendingUp, color: "#a855f7" },
    ],
  },
  {
    eyebrow: "TEAM",
    title: "Builders obsessed with the Machine Economy",
    body: "Two engineers who saw the gap between AI velocity and financial rails.",
    team: [
      {
        name: "Your Name",
        role: "Founder / Smart Contracts & Architecture",
        avatar: "https://picsum.photos/id/64/128",
        bio: "Ex-Solana core contributor / ex-Google AI infra",
      },
      {
        name: "Colleague Name",
        role: "Founder / ML & Verification",
        avatar: "https://picsum.photos/id/91/128",
        bio: "Ex-OpenAI / TEE & VeriLLM specialist",
      },
    ],
  },
  {
    eyebrow: "THE OPPORTUNITY",
    title: "The Trillion-Dollar Intelligence Market",
    body: "AI agents will dwarf human economic activity. We are building their settlement layer.",
    bullets: [
      "Machine-to-machine commerce at planetary scale",
      "Verifiable Compute Rights as a new asset class",
      "Liquidity for models, inferences & agents",
    ],
    stats: [
      { value: "$1T+", label: "Projected Market", icon: TrendingUp, color: "#a855f7" },
      { value: "∞", label: "Agent Scale", icon: Globe, color: "#34d399" },
    ],
  },
  {
    eyebrow: "OUR VISION",
    title: "Intelligence Becomes Internet-Native",
    body: "Just as stablecoins made money programmable and borderless, we make intelligence liquid, verifiable, and ownable on Solana.",
    bullets: [
      "Every inference is a financial primitive",
      "Agents own and trade their compute",
      "A truly decentralized trillion-agent economy",
    ],
    accent: "#c026d3",
  },
];

export default function AIPresentation() {
  const [i, setI] = useState(0);
  const slide = SLIDES[i];

  const next = () => setI((p) => Math.min(p + 1, SLIDES.length - 1));
  const prev = () => setI((p) => Math.max(p - 1, 0));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === " ") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div style={styles.bg}>
      {/* Background Grid + Glows */}
      <div style={styles.grid} />
      <div style={styles.glow1} />
      <div style={styles.glow2} />

      {/* Top HUD */}
      <div style={styles.hud}>
        <div style={styles.progress}>
          {Array.from({ length: SLIDES.length }).map((_, idx) => (
            <div
              key={idx}
              style={{
                ...styles.progressDot,
                background: idx <= i ? "#a855f7" : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
        <div style={styles.slideCounter}>
          {String(i + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </div>
      </div>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -60, scale: 0.96 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={styles.slideContainer}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={styles.eyebrow}
          >
            {slide.eyebrow}
          </motion.div>

          <h1 style={styles.title}>{slide.title}</h1>

          <p style={styles.body}>{slide.body}</p>

          {slide.bullets && (
            <ul style={styles.list}>
              {slide.bullets.map((bullet, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx + 0.3 }}
                  style={styles.li}
                >
                  <div style={styles.bulletDot} />
                  {bullet}
                </motion.li>
              ))}
            </ul>
          )}

          {slide.stats && (
            <div style={styles.stats}>
              {slide.stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    style={styles.statCard}
                  >
                    <div style={{ color: stat.color || "#34d399" }}>
                      <Icon size={42} strokeWidth={1.8} />
                    </div>
                    <div style={styles.statValue}>{stat.value}</div>
                    <div style={styles.statLabel}>{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {slide.chart && slide.chart}

          {slide.team && (
            <div className="grid grid-cols-2 gap-8 mt-12 max-w-3xl mx-auto">
              {slide.team.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "20px",
                    padding: "28px",
                    textAlign: "left",
                  }}
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-20 h-20 rounded-2xl mb-6 object-cover"
                  />
                  <div className="font-bold text-2xl">{member.name}</div>
                  <div className="text-purple-400 mb-3">{member.role}</div>
                  <p className="text-slate-400 text-[17px]">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div style={styles.nav}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={prev}
          style={styles.btn}
          disabled={i === 0}
        >
          <ChevronLeft size={24} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={next}
          style={styles.btn}
          disabled={i === SLIDES.length - 1}
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>

      {/* Bottom Brand */}
      <div style={styles.footer}>
        <div style={styles.brand}>
          <Sparkles size={18} /> SOLANA AI SETTLEMENT
        </div>
        <div style={styles.hint}>← → arrows or space to navigate • Hackathon 2026</div>
      </div>
    </div>
  );
}

/* ==================== STYLES (enhanced) ==================== */
const styles: any = {
  bg: {
    height: "100vh",
    width: "100vw",
    background: "radial-gradient(circle at 50% 30%, #1a0f2e 0%, #0a0a0a 70%)",
    color: "white",
    fontFamily: "Inter, system-ui, sans-serif",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  grid: {
    position: "absolute",
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(168, 85, 247, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(168, 85, 247, 0.08) 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
    opacity: 0.6,
    pointerEvents: "none",
  },

  glow1: {
    position: "absolute",
    top: "20%",
    left: "15%",
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)",
    filter: "blur(80px)",
    pointerEvents: "none",
  },

  glow2: {
    position: "absolute",
    bottom: "10%",
    right: "15%",
    width: "700px",
    height: "700px",
    background: "radial-gradient(circle, rgba(34,211,238,0.22) 0%, transparent 70%)",
    filter: "blur(90px)",
    pointerEvents: "none",
  },

  slideContainer: {
    maxWidth: "920px",
    textAlign: "center",
    padding: "0 40px",
    zIndex: 10,
  },

  hud: {
    position: "absolute",
    top: "32px",
    right: "40px",
    display: "flex",
    alignItems: "center",
    gap: "24px",
    zIndex: 50,
  },

  progress: { display: "flex", gap: "6px" },
  progressDot: {
    width: "8px",
    height: "8px",
    borderRadius: "9999px",
    transition: "background 0.4s ease",
  },

  slideCounter: {
    fontSize: "15px",
    fontWeight: "500",
    color: "#a1a1aa",
    letterSpacing: "2px",
  },

  eyebrow: {
    color: "#c084fc",
    fontSize: "15px",
    fontWeight: "600",
    letterSpacing: "4px",
    textTransform: "uppercase",
    marginBottom: "16px",
    opacity: 0.9,
  },

  title: {
    fontSize: "56px",
    lineHeight: "1.05",
    fontWeight: 800,
    marginBottom: "24px",
    background: "linear-gradient(90deg, #fff, #e0e7ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  body: {
    fontSize: "22px",
    lineHeight: "1.45",
    color: "#cbd5e1",
    maxWidth: "680px",
    margin: "0 auto 40px",
    fontWeight: 400,
  },

  list: {
    textAlign: "left",
    maxWidth: "620px",
    margin: "0 auto 50px",
    fontSize: "19px",
    color: "#e2e8f0",
  },

  li: {
    marginBottom: "18px",
    display: "flex",
    alignItems: "flex-start",
    gap: "14px",
  },

  bulletDot: {
    width: "7px",
    height: "7px",
    background: "#a855f7",
    borderRadius: "50%",
    marginTop: "9px",
    flexShrink: 0,
  },

  stats: {
    display: "flex",
    justifyContent: "center",
    gap: "28px",
    flexWrap: "wrap",
  },

  statCard: {
    background: "rgba(255,255,255,0.06)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px",
    padding: "28px 32px",
    minWidth: "160px",
    transition: "transform 0.3s ease, border-color 0.3s ease",
  },

  statValue: {
    fontSize: "32px",
    fontWeight: "700",
    marginTop: "12px",
    color: "#67e8f9",
  },

  statLabel: {
    fontSize: "13px",
    color: "#94a3b8",
    marginTop: "4px",
    fontWeight: "500",
    letterSpacing: "0.5px",
  },

  nav: {
    position: "absolute",
    bottom: "48px",
    display: "flex",
    gap: "16px",
    zIndex: 50,
  },

  btn: {
    background: "rgba(30, 41, 59, 0.8)",
    border: "1px solid rgba(148, 163, 184, 0.3)",
    color: "white",
    width: "58px",
    height: "58px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
    backdropFilter: "blur(8px)",
  },

  footer: {
    position: "absolute",
    bottom: "24px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
    gap: "32px",
    fontSize: "13px",
    color: "#64748b",
    zIndex: 50,
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: "600",
    color: "#c084fc",
  },

  hint: {
    fontSize: "12px",
    opacity: 0.6,
  },
};
