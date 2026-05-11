import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Cpu,
  Shield,
  Play,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
  Activity,
  Wallet,
} from "lucide-react";

export default function NeuralRails() {
  const [inferenceInput, setInferenceInput] = useState(
    "What is the capital of Japan?"
  );

  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const [particles, setParticles] = useState<
    { left: string; top: string; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    const generated = [...Array(28)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 8,
    }));

    setParticles(generated);
  }, []);

  const handleInference = async () => {
    setIsProcessing(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setResult(
      "Tokyo is the capital of Japan. It is the political, economic, and cultural center of the country and one of the world's largest metropolitan regions."
    );

    setIsProcessing(false);
  };

  const styles: any = {
    page: {
      minHeight: "100vh",
      background:
        "radial-gradient(circle at top, rgba(91,33,182,0.25), transparent 30%), radial-gradient(circle at bottom right, rgba(6,182,212,0.18), transparent 25%), #000000",
      color: "white",
      overflow: "hidden",
      fontFamily:
        "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      position: "relative",
    },

    noise: {
      position: "fixed",
      inset: 0,
      opacity: 0.03,
      backgroundImage:
        "url('https://grainy-gradients.vercel.app/noise.svg')",
      pointerEvents: "none",
      zIndex: 1,
    },

    nav: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backdropFilter: "blur(24px)",
      WebkitBackdropFilter: "blur(24px)",
      background: "rgba(0,0,0,0.65)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    },

    navInner: {
      maxWidth: 1320,
      margin: "0 auto",
      padding: "22px 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },

    brand: {
      display: "flex",
      alignItems: "center",
      gap: 14,
    },

    logo: {
      width: 42,
      height: 42,
      borderRadius: 18,
      background:
        "linear-gradient(135deg, #7c3aed 0%, #06b6d4 50%, #d946ef 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 24,
      fontWeight: 800,
      boxShadow: "0 0 50px rgba(139,92,246,0.45)",
    },

    brandText: {
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: "-1px",
    },

    navLinks: {
      display: "flex",
      gap: 36,
      color: "#cbd5e1",
      fontSize: 15,
    },

    navButtonGroup: {
      display: "flex",
      gap: 14,
      alignItems: "center",
    },

    ghostButton: {
      padding: "13px 22px",
      borderRadius: 18,
      border: "1px solid rgba(255,255,255,0.12)",
      background: "rgba(255,255,255,0.03)",
      color: "white",
      cursor: "pointer",
      fontWeight: 500,
      transition: "all 0.3s ease",
    },

    primaryButton: {
      padding: "13px 22px",
      borderRadius: 18,
      background:
        "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.92) 100%)",
      color: "#000",
      border: "none",
      cursor: "pointer",
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      gap: 10,
      boxShadow: "0 10px 40px rgba(255,255,255,0.15)",
    },

    hero: {
      paddingTop: 170,
      paddingBottom: 120,
      paddingLeft: 24,
      paddingRight: 24,
      position: "relative",
      zIndex: 5,
    },

    heroContainer: {
      maxWidth: 1240,
      margin: "0 auto",
      textAlign: "center",
      position: "relative",
    },

    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 18px",
      borderRadius: 999,
      background: "rgba(6,182,212,0.08)",
      border: "1px solid rgba(6,182,212,0.25)",
      color: "#67e8f9",
      marginBottom: 34,
      backdropFilter: "blur(14px)",
    },

    pulse: {
      width: 10,
      height: 10,
      borderRadius: 999,
      background: "#22d3ee",
      boxShadow: "0 0 20px #22d3ee",
    },

    title: {
      fontSize: "clamp(4rem, 10vw, 8.5rem)",
      lineHeight: 0.95,
      fontWeight: 800,
      letterSpacing: "-6px",
      marginBottom: 40,
    },

    gradientText: {
      background:
        "linear-gradient(90deg, #8b5cf6 0%, #22d3ee 50%, #d946ef 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundSize: "200% auto",
    },

    subtitle: {
      maxWidth: 860,
      margin: "0 auto",
      color: "#94a3b8",
      fontSize: 26,
      lineHeight: 1.6,
      marginBottom: 52,
    },

    heroButtons: {
      display: "flex",
      justifyContent: "center",
      gap: 20,
      flexWrap: "wrap",
    },

    giantButton: {
      padding: "22px 38px",
      borderRadius: 28,
      border: "none",
      background:
        "linear-gradient(135deg, #7c3aed 0%, #d946ef 50%, #06b6d4 100%)",
      color: "white",
      fontSize: 18,
      fontWeight: 700,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 14,
      boxShadow: "0 25px 80px rgba(124,58,237,0.4)",
    },

    giantGhostButton: {
      padding: "22px 38px",
      borderRadius: 28,
      border: "1px solid rgba(255,255,255,0.15)",
      background: "rgba(255,255,255,0.03)",
      color: "white",
      fontSize: 18,
      fontWeight: 600,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 14,
      backdropFilter: "blur(14px)",
    },

    metrics: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: 42,
      marginTop: 70,
      color: "#94a3b8",
      fontSize: 15,
    },

    metricItem: {
      display: "flex",
      alignItems: "center",
      gap: 10,
    },

    statsBar: {
      borderTop: "1px solid rgba(255,255,255,0.08)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      background: "rgba(255,255,255,0.02)",
      backdropFilter: "blur(14px)",
      position: "relative",
      zIndex: 5,
    },

    statsGrid: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "46px 24px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: 30,
    },

    statCard: {
      borderRadius: 28,
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.06)",
      padding: 34,
      backdropFilter: "blur(18px)",
    },

    statValue: {
      fontSize: 48,
      fontWeight: 800,
      letterSpacing: "-2px",
      marginBottom: 8,
    },

    statLabel: {
      color: "#94a3b8",
      marginBottom: 10,
    },

    statChange: {
      color: "#4ade80",
      fontWeight: 600,
    },

    section: {
      padding: "140px 24px",
      position: "relative",
      zIndex: 5,
    },

    sectionContainer: {
      maxWidth: 1240,
      margin: "0 auto",
    },

    sectionTitle: {
      textAlign: "center",
      fontSize: "clamp(3rem,6vw,5rem)",
      fontWeight: 800,
      letterSpacing: "-3px",
      marginBottom: 18,
    },

    sectionSubtitle: {
      textAlign: "center",
      color: "#94a3b8",
      fontSize: 20,
      marginBottom: 80,
    },

    demoCard: {
      borderRadius: 36,
      padding: 40,
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025))",
      border: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(30px)",
      boxShadow: "0 30px 100px rgba(0,0,0,0.45)",
    },

    textarea: {
      width: "100%",
      minHeight: 160,
      borderRadius: 24,
      background: "rgba(0,0,0,0.6)",
      border: "1px solid rgba(255,255,255,0.08)",
      padding: 28,
      color: "white",
      fontSize: 18,
      resize: "none",
      outline: "none",
      marginBottom: 26,
      boxSizing: "border-box",
    },

    inferenceButton: {
      width: "100%",
      border: "none",
      borderRadius: 24,
      padding: "24px 30px",
      background:
        "linear-gradient(135deg, #06b6d4 0%, #7c3aed 50%, #d946ef 100%)",
      color: "white",
      fontWeight: 700,
      fontSize: 20,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
      boxShadow: "0 20px 60px rgba(6,182,212,0.25)",
    },

    resultCard: {
      marginTop: 30,
      borderRadius: 28,
      padding: 34,
      background: "rgba(0,0,0,0.5)",
      border: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(20px)",
    },

    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: 28,
    },

    featureCard: {
      borderRadius: 32,
      padding: 40,
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
      border: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(24px)",
      position: "relative",
      overflow: "hidden",
    },

    featureGlow: {
      position: "absolute",
      width: 240,
      height: 240,
      borderRadius: 999,
      background: "rgba(139,92,246,0.18)",
      filter: "blur(90px)",
      top: -120,
      right: -100,
    },

    featureIcon: {
      width: 78,
      height: 78,
      borderRadius: 26,
      background:
        "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(6,182,212,0.2))",
      border: "1px solid rgba(255,255,255,0.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 30,
      color: "#67e8f9",
      backdropFilter: "blur(20px)",
    },

    featureTitle: {
      fontSize: 34,
      fontWeight: 700,
      marginBottom: 18,
      letterSpacing: "-1px",
    },

    featureDesc: {
      color: "#94a3b8",
      lineHeight: 1.8,
      fontSize: 17,
    },

    footer: {
      padding: "120px 24px 80px",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      textAlign: "center",
      position: "relative",
      zIndex: 5,
    },

    footerTitle: {
      fontSize: "clamp(3rem,6vw,5rem)",
      fontWeight: 800,
      letterSpacing: "-3px",
      marginBottom: 24,
    },

    footerSubtitle: {
      color: "#94a3b8",
      fontSize: 22,
      maxWidth: 700,
      margin: "0 auto",
      lineHeight: 1.6,
    },

    footerButton: {
      marginTop: 50,
      padding: "24px 42px",
      borderRadius: 28,
      border: "none",
      background: "white",
      color: "black",
      fontSize: 20,
      fontWeight: 700,
      cursor: "pointer",
      boxShadow: "0 20px 60px rgba(255,255,255,0.15)",
    },

    footerBottom: {
      marginTop: 80,
      color: "#64748b",
      fontSize: 14,
    },

    floatingOrb: {
      position: "absolute",
      borderRadius: "999px",
      filter: "blur(120px)",
      opacity: 0.35,
      pointerEvents: "none",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.noise} />

      {/* FLOATING BACKGROUND ORBS */}
      <div
        style={{
          ...styles.floatingOrb,
          width: 420,
          height: 420,
          background: "#7c3aed",
          top: -120,
          left: -100,
        }}
      />

      <div
        style={{
          ...styles.floatingOrb,
          width: 500,
          height: 500,
          background: "#06b6d4",
          bottom: -150,
          right: -120,
        }}
      />

      {/* PARTICLES */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
          style={{
            position: "absolute",
            left: particle.left,
            top: particle.top,
            width: 3,
            height: 3,
            borderRadius: 999,
            background: "white",
            opacity: 0.4,
            zIndex: 1,
          }}
        />
      ))}

      {/* NAVBAR */}
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <div style={styles.brand}>
            <div style={styles.logo}>N</div>

            <div style={styles.brandText}>NeuralRails</div>
          </div>

          <div style={styles.navLinks}>
            <a href="#how" style={{ color: "inherit", textDecoration: "none" }}>
              How it Works
            </a>

            <a
              href="#features"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Features
            </a>

            <a
              href="#demo"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Live Demo
            </a>

            <a
              href="#docs"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Docs
            </a>
          </div>

          <div style={styles.navButtonGroup}>
            <button style={styles.ghostButton}>Launch App</button>

            <button style={styles.primaryButton}>
              <Wallet size={18} />
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroContainer}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={styles.badge}
          >
            <div style={styles.pulse} />
            Now Live on Solana Devnet
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            style={styles.title}
          >
            AI Compute.
            <br />
            <span style={styles.gradientText}>On Solana Rails.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={styles.subtitle}
          >
            Instant, verifiable, autonomous AI payments with ultra-fast
            settlement, cryptographic verification, and machine-native finance.
          </motion.p>

          <div style={styles.heroButtons}>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              style={styles.giantButton}
              onClick={() =>
                document
                  .getElementById("demo")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Try Live Inference
              <Play size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              style={styles.giantGhostButton}
            >
              Read Documentation
              <ExternalLink size={20} />
            </motion.button>
          </div>

          <div style={styles.metrics}>
            <div style={styles.metricItem}>
              <CheckCircle color="#4ade80" size={18} />
              &lt;400ms settlement
            </div>

            <div style={styles.metricItem}>
              <CheckCircle color="#4ade80" size={18} />
              $0.0001 per inference
            </div>

            <div style={styles.metricItem}>
              <CheckCircle color="#4ade80" size={18} />
              Autonomous agent payments
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={styles.statsBar}>
        <div style={styles.statsGrid}>
          {[
            {
              value: "$0.00012",
              label: "Avg Inference Cost",
              change: "-94%",
            },
            {
              value: "312ms",
              label: "Settlement Time",
              change: "real-time",
            },
            {
              value: "1.2M",
              label: "Inferences Today",
              change: "+87%",
            },
            {
              value: "8,459",
              label: "Active Agents",
              change: "live",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              style={styles.statCard}
            >
              <div style={styles.statValue}>{stat.value}</div>

              <div style={styles.statLabel}>{stat.label}</div>

              <div style={styles.statChange}>{stat.change}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" style={styles.section}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionTitle}>Run Live Inference</div>

          <div style={styles.sectionSubtitle}>
            Solana settlement • AI verification • Stablecoin micropayments
          </div>

          <div style={styles.demoCard}>
            <textarea
              value={inferenceInput}
              onChange={(e) => setInferenceInput(e.target.value)}
              style={styles.textarea}
              placeholder="Ask anything..."
            />

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              disabled={isProcessing}
              onClick={handleInference}
              style={{
                ...styles.inferenceButton,
                opacity: isProcessing ? 0.8 : 1,
              }}
            >
              {isProcessing ? (
                <>
                  Processing on Solana...
                  <Cpu className="spin" />
                </>
              ) : (
                <>
                  Run Inference • Pay $0.0001 USDC
                  <Zap size={22} />
                </>
              )}
            </motion.button>

            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={styles.resultCard}
                >
                  <div
                    style={{
                      color: "#4ade80",
                      fontSize: 12,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      marginBottom: 18,
                      fontWeight: 700,
                    }}
                  >
                    Verified Response
                  </div>

                  <div
                    style={{
                      fontSize: 21,
                      lineHeight: 1.8,
                      color: "#f8fafc",
                    }}
                  >
                    {result}
                  </div>

                  <div
                    style={{
                      marginTop: 28,
                      color: "#64748b",
                      fontSize: 13,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    ✓ Verified on Solana • Transaction: 3vK...9pL2 • 287ms
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={styles.section}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionTitle}>
            Built for the Machine Economy
          </div>

          <div style={styles.sectionSubtitle}>
            Infrastructure for autonomous intelligence and programmable compute
          </div>

          <div style={styles.featuresGrid}>
            {[
              {
                icon: <Zap size={38} />,
                title: "Instant Settlement",
                desc: "Sub-second finality with Solana rails. AI agents can pay and receive inference responses atomically in real-time.",
              },
              {
                icon: <Shield size={38} />,
                title: "Verifiable Compute",
                desc: "Cryptographic proofs and verification layers ensure every inference can be trusted without centralized intermediaries.",
              },
              {
                icon: <Cpu size={38} />,
                title: "Agent-Native",
                desc: "Autonomous payment flows, stablecoin micropayments, and programmable AI commerce designed for machine-to-machine coordination.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                style={styles.featureCard}
              >
                <div style={styles.featureGlow} />

                <div style={styles.featureIcon}>{feature.icon}</div>

                <div style={styles.featureTitle}>{feature.title}</div>

                <div style={styles.featureDesc}>{feature.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTRA GRID */}
      <section style={{ ...styles.section, paddingTop: 0 }}>
        <div style={styles.sectionContainer}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 28,
            }}
          >
            {[
              {
                icon: <Globe size={34} />,
                title: "Global AI Marketplace",
              },
              {
                icon: <Activity size={34} />,
                title: "Real-Time Throughput",
              },
              {
                icon: <Sparkles size={34} />,
                title: "Autonomous Coordination",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                style={{
                  borderRadius: 30,
                  padding: 36,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(18px)",
                }}
              >
                <div
                  style={{
                    color: "#67e8f9",
                    marginBottom: 24,
                  }}
                >
                  {item.icon}
                </div>

                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    letterSpacing: "-1px",
                    marginBottom: 16,
                  }}
                >
                  {item.title}
                </div>

                <div
                  style={{
                    color: "#94a3b8",
                    lineHeight: 1.8,
                  }}
                >
                  Infrastructure-grade primitives powering the next generation
                  of AI-native financial systems.
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerTitle}>
          The Financial Layer for Intelligence
        </div>

        <div style={styles.footerSubtitle}>
          Intelligence should be liquid, programmable, composable, and instantly
          tradable across the internet economy.
        </div>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          style={styles.footerButton}
        >
          Get Early Access
          <ArrowRight
            size={20}
            style={{
              marginLeft: 12,
              verticalAlign: "middle",
            }}
          />
        </motion.button>

        <div style={styles.footerBottom}>
          NeuralRails © 2026 • Built on Solana • Designed for the trillion-agent
          future
        </div>
      </footer>
    </div>
  );
}
