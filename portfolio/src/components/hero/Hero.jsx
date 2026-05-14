import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const imgVariants = {
  initial: {
    x: 400,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cosmic-gradient">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full opacity-30">
          <img src="/stars.png" alt="stars" className="w-full h-full object-cover animate-stars" />
        </div>
      </div>

      {/* Floating planets */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 opacity-60"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <img src="/planets.png" alt="planets" className="w-full h-full object-contain" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-4 mb-6"
              variants={textVariants}
            >
              <motion.h2 
                className="text-2xl md:text-3xl font-semibold text-cosmic-cyan"
                variants={textVariants}
              >
                Hello, Explorer!
              </motion.h2>
              <motion.img
                className="w-16 h-16 animate-float"
                src="/SpacyNDog.png"
                alt="Spacey"
                variants={floatingVariants}
                animate="animate"
              />
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow"
              variants={textVariants}
            >
              <span className="bg-gradient-to-r from-cosmic-purple via-cosmic-blue to-cosmic-cyan bg-clip-text text-transparent">
                Welcome to My
              </span>
              <br />
              <span className="text-white">Space Portfolio</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl"
              variants={textVariants}
            >
              I'm a creative developer exploring the digital universe. Let's build something extraordinary together among the stars.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={textVariants}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-cosmic-purple to-cosmic-blue rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-purple-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
              </motion.button>
              <motion.button
                className="px-8 py-4 glass-card rounded-full font-semibold hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Astronaut Image */}
          <motion.div
            className="flex-1 flex justify-center order-2 lg:order-1"
            variants={imgVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="relative"
              variants={floatingVariants}
              animate="animate"
            >
              <img
                src="/floatingSpacey-removebg-preview.png"
                alt="Floating Astronaut"
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain drop-shadow-2xl"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple/20 to-cosmic-blue/20 blur-3xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        variants={textVariants}
        animate="scrollButton"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
