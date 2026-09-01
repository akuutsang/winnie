import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const skills = [
  {
    category: "Frontend",
    icon: "🚀",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-cosmic-purple to-cosmic-pink",
  },
  {
    category: "Backend",
    icon: "⚡",
    items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    color: "from-cosmic-blue to-cosmic-cyan",
  },
  {
    category: "Tools",
    icon: "🛠️",
    items: ["Git", "Docker", "AWS", "Figma", "VS Code"],
    color: "from-cosmic-pink to-cosmic-purple",
  },
  {
    category: "Design",
    icon: "🎨",
    items: ["UI/UX", "Responsive Design", "Animation", "3D Graphics", "Prototyping"],
    color: "from-cosmic-cyan to-cosmic-blue",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cosmic-blue/5 rounded-full blur-3xl" />
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
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cosmic-purple to-cosmic-cyan mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Equipped with a diverse set of tools to navigate the digital universe
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="glass-card p-4 sm:p-6 hover:bg-white/15 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(155, 89, 182, 0.3)"
              }}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{skill.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{skill.category}</h3>
              <div className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill bars */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Proficiency Levels</h3>
          <div className="space-y-6">
            {[
              { name: "Frontend Development", level: 95 },
              { name: "Backend Development", level: 85 },
              { name: "UI/UX Design", level: 90 },
              { name: "DevOps & Cloud", level: 75 },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-cosmic-cyan">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cosmic-purple to-cosmic-cyan rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
