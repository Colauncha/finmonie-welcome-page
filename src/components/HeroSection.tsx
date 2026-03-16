import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.png";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient orbs */}
      {/* <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-glow/15 rounded-full blur-3xl" /> */}

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              Your money.{" "}
              <span className="text-gradient">One app.</span>
              <br />
              Zero hassle.
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Earn, save, spend, borrow, invest, insure & grow your wealth — all in one trusted super app. Finmonie is money with culture, structure, and future.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="gap-2 text-base shadow-glow">
                Get Early Access <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">5K+</span> Waitlist
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">₦ $ £ €</span> Multi-currency
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center">
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl scale-90" />
              <img
                src={heroImage}
                alt="Young woman using Finmonie app with financial icons"
                className="relative w-full max-w-lg rounded-2xl shadow-2xl" />
              
            </div>
          </motion.div>
          <AnimatedGridPattern
            numSquares={50}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={2}
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
            )}
          />
        </div>
      </div>
    </section>);

};

export default HeroSection;