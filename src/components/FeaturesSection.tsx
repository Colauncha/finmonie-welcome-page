import { motion } from "framer-motion";
import { Wallet, Globe, Shield, TrendingUp, Users, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Smart Wallets",
    description: "Naira, Dollar, Pound & Euro wallets with seamless transfers, savings, and goal tracking.",
  },
  {
    icon: Globe,
    title: "Foreign Transactions",
    description: "Send, receive and convert currencies with transparent rates — no hidden fees.",
  },
  {
    icon: TrendingUp,
    title: "Investments",
    description: "Access mutual funds, asset management, and brokerage all from your dashboard.",
  },
  {
    icon: Shield,
    title: "Insurance",
    description: "Health, auto, and life coverage — protect what matters most in a few taps.",
  },
  {
    icon: Users,
    title: "Group Savings",
    description: "Ajo & cooperative contributions with automatic reminders — no more WhatsApp drama.",
  },
  {
    icon: Lightbulb,
    title: "Financial Advisory",
    description: "Wealth management, planning, and accounting advice tailored to your goals.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything your money needs.{" "}
            <span className="text-gradient">One place.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Stop juggling apps. Finmonie brings banking, investing, insurance and community savings together.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-glow/30"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <f.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
