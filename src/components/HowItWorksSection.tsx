import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Sign Up in Seconds", desc: "Quick KYC, biometric login — you're set in under 2 minutes." },
  { num: "02", title: "Fund Your Wallets", desc: "Add money via bank transfer, card, or USSD. Multi-currency ready." },
  { num: "03", title: "Live Your Financial Life", desc: "Pay bills, save, invest, insure, borrow — all from one dashboard." },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get started in <span className="text-gradient">3 steps</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-display font-bold text-xl">{s.num}</span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
