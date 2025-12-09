import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(174_72%_20%/0.3)_0%,transparent_60%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(222_30%_18%/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(222_30%_18%/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Smart Mobility Revolution</span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Share Your{" "}
              <span className="gradient-text">Journey</span>
              <br />
              Save the Planet
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Connect with fellow travelers heading your way. Split costs, reduce emissions, and make every ride count.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Find a Ride
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl">
                Offer a Ride
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              {[
                { value: "2M+", label: "Happy Riders" },
                { value: "50K+", label: "Daily Trips" },
                { value: "120+", label: "Cities" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="font-display text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Search Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative"
          >
            <div className="glass-card p-8 relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-2xl blur-xl opacity-60" />
              
              <div className="relative space-y-6">
                <h3 className="font-display text-2xl font-semibold">Find Your Perfect Ride</h3>

                {/* From */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">From</label>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50 focus-within:border-primary/50 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                    <input
                      type="text"
                      placeholder="Enter pickup location"
                      className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                {/* To */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">To</label>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50 focus-within:border-primary/50 transition-colors">
                    <MapPin className="w-5 h-5 text-accent" />
                    <input
                      type="text"
                      placeholder="Enter destination"
                      className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                {/* Date & Passengers */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Date</label>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50 focus-within:border-primary/50 transition-colors">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Select date"
                        className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Passengers</label>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50 focus-within:border-primary/50 transition-colors">
                      <Users className="w-5 h-5 text-muted-foreground" />
                      <select className="flex-1 bg-transparent outline-none text-foreground text-sm">
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                      </select>
                    </div>
                  </div>
                </div>

                <Button variant="accent" size="lg" className="w-full">
                  Search Rides
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-card p-4 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400 text-lg">🌱</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">Eco Friendly</div>
                  <div className="text-xs text-muted-foreground">-40% CO₂</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-6 glass-card p-4 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-lg">💰</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">Save Up To</div>
                  <div className="text-xs text-primary font-bold">75% on Travel</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
