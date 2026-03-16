import { useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

const CommunitySection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="community" className="py-20 md:py-32" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Built for <span className="text-gradient">real life</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-card rounded-3xl p-8 md:p-12 border border-border shadow-card"
          >
            <Quote size={40} className="text-primary/20 mb-4 mx-auto" />
            <p className="text-lg md:text-xl leading-relaxed text-foreground mb-6 italic">
              "Her previous savings group used to be filled with WhatsApp arguments, screenshots, accusations, and defaults.
              Today, she checks the group savings page — green checkmarks everywhere. Trust is quietly restored."
            </p>
            <div>
              <p className="font-display font-semibold text-foreground">Jennifer</p>
              <p className="text-sm text-muted-foreground">Corp member, Lagos</p>
            </div>
            {hovered && (
              <BorderBeam size={350} duration={5} delay={5} colorFrom="#ebeff5" colorTo="#cf8ff2" />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
