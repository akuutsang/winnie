import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cosmic-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cosmic-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cosmic-purple to-cosmic-cyan bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cosmic-purple to-cosmic-cyan mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Astronaut Image */}
          <motion.div
            className="flex-1 flex justify-center order-2 lg:order-1"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src="/astronauts.png"
                  alt="Astronaut"
                  className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain drop-shadow-2xl"
                />
              </motion.div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple/30 to-cosmic-blue/30 blur-3xl -z-10 rounded-full" />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="flex-1 space-y-6"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Mission: Digital Innovation
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate developer with a mission to explore the frontiers of web development. 
              Like an astronaut navigating through space, I navigate through complex challenges to create 
              innovative solutions that push the boundaries of what's possible.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With expertise in modern technologies and a creative approach to problem-solving, 
              I transform ideas into stellar digital experiences. My journey in tech has been an exciting 
              expedition through various frameworks, tools, and methodologies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { label: "Projects", value: "50+" },
                { label: "Clients", value: "20+" },
                { label: "Years", value: "4+" },
                
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-3 sm:p-4 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-cosmic-cyan mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Additional astronaut images */}
        <motion.div
          className="flex justify-center gap-8 mt-16 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { img: "/chillingSpacey-removebg-preview.png", label: "Chilling" },
            { img: "/dabbingSpacey-removebg-preview.png", label: "Creative" },
            { img: "/ideaSpacey-removebg-preview.png", label: "Innovative" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-32 h-32 mx-auto mb-2">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm text-gray-400">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
