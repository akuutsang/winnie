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

const socialLinks = [
  { name: "Twitter", icon: "/twitter.png", link: "https://x.com/AkuutsangKaze", color: "hover:text-blue-400" },
  { name: "Facebook", icon: "/facebook.png", link: "https://web.facebook.com/winnifredk", color: "hover:text-blue-600" },
  { name: "LinkedIn", icon: "/linkedin.png", link: "https://www.linkedin.com/in/winnifred-kaze-7b5912167/", color: "hover:text-red-500" },
];

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cosmic-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cosmic-blue/10 rounded-full blur-3xl" />
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
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cosmic-purple to-cosmic-cyan mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Ready to start a project? Let's connect and create something amazing together
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Form */}
          <motion.div
            className="flex-1 glass-card p-6 sm:p-8"
            variants={itemVariants}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-gray-300 mb-2 text-sm">Name</label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-purple transition-colors text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 text-sm">Email</label>
                <input
                  type="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-purple transition-colors text-sm"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 text-sm">Message</label>
                <textarea
                  rows="4 sm:rows-5"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-purple transition-colors resize-none text-sm"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-cosmic-purple to-cosmic-blue rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-purple-500/30 text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex-1 space-y-6 sm:space-y-8"
            variants={itemVariants}
          >
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cosmic-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cosmic-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                    <p className="text-white text-sm sm:text-base">akuutsang@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cosmic-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cosmic-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Lagos</p>
                    <p className="text-white text-sm sm:text-base">Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={social.icon} alt={social.name} className="w-6 h-6 sm:w-8 sm:h-8" />
                    <span className="text-gray-300 text-xs sm:text-sm">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Astronaut decoration */}
            <motion.div
              className="flex justify-center"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/jSpacey.png"
                alt="Astronaut"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
