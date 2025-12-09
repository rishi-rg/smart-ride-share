import { motion } from "framer-motion";
import routeMapBg from "@/assets/route-map.png";

const FeaturedRoutes = () => {
  const routes = [
    { from: "New York", to: "Boston", price: "$25", time: "4h", seats: 3 },
    { from: "Los Angeles", to: "San Francisco", price: "$35", time: "5h", seats: 2 },
    { from: "Chicago", to: "Detroit", price: "$20", time: "4h", seats: 4 },
    { from: "Miami", to: "Orlando", price: "$18", time: "3h", seats: 2 },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Map */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${routeMapBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Popular <span className="gradient-text">Routes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of travelers on these trending journeys
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((route, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="glass-card p-6 h-full relative overflow-hidden">
                {/* Animated gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="relative">
                  {/* Route visualization */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary relative">
                        <motion.div
                          className="absolute inset-0 bg-primary rounded-full"
                          animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-primary to-accent w-16" />
                      <div className="w-3 h-3 rounded-full bg-accent" />
                    </div>
                  </div>

                  {/* Cities */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground">From</div>
                      <div className="font-display font-semibold text-lg">{route.from}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">To</div>
                      <div className="font-display font-semibold text-lg">{route.to}</div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex justify-between items-center pt-4 border-t border-border/50">
                    <div className="flex items-center gap-4">
                      <div className="text-sm">
                        <span className="text-muted-foreground">⏱ </span>
                        <span>{route.time}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">👥 </span>
                        <span>{route.seats} seats</span>
                      </div>
                    </div>
                    <div className="font-display font-bold text-xl gradient-text">{route.price}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRoutes;
