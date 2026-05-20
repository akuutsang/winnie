import { motion } from "framer-motion";

const projects = [
  {
    title: "Admin Dashboard",
    description: "A comprehensive dashboard with real-time analytics and data visualization",
    image: "/assets/adminDashboard.png",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Sketch Pad",
    description: "Creative drawing application with advanced tools and features",
    image: "/assets/sketchPad.png",
    tags: ["Canvas API", "JavaScript", "CSS"],
    link: "#",
  },
  {
    title: "Calculator App",
    description: "Modern calculator with scientific functions and history",
    image: "/assets/calculator.png",
    tags: ["React", "Redux", "Tailwind"],
    link: "#",
  },
  {
    title: "Capstone Project",
    description: "Full-stack e-commerce platform with payment integration",
    image: "/assets/capstoneProject.png",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    title: "PRS System",
    description: "Pull Request System for efficient code review workflow",
    image: "/assets/prs.png",
    tags: ["TypeScript", "GitHub API", "React"],
    link: "#",
  },
];

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

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cosmic-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cosmic-purple/5 rounded-full blur-3xl" />
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
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cosmic-purple to-cosmic-cyan mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Exploring the universe of code through innovative projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card overflow-hidden group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 0 40px rgba(155, 89, 182, 0.4)"
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 sm:px-3 py-1 text-xs bg-cosmic-purple/20 text-cosmic-cyan rounded-full border border-cosmic-purple/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <motion.a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-cosmic-cyan hover:text-white transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating astronaut decoration */}
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 opacity-20 hidden lg:block"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="/goodbyeSpacey-removebg-preview.png"
            alt="Astronaut"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
