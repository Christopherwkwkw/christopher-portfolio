import { motion } from "motion/react";
import { Award, Terminal, Video, TrendingUp, ArrowRight } from "lucide-react";
import { skillsData, projectsData } from "../data";

export default function Skills() {
  const iconMap: Record<string, any> = {
    Award: <Award size={40} />,
    Terminal: <Terminal size={40} />,
    Video: <Video size={40} />,
    TrendingUp: <TrendingUp size={40} />
  };

  return (
    <div className="pt-32">
      {/* Hero Title Section */}
      <section className="px-8 max-w-7xl mx-auto mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-headline text-7xl md:text-9xl font-bold tracking-tighter uppercase leading-none kinetic-text-stroke"
        >
          Crafting <br /> <span className="text-tertiary">Velocity.</span>
        </motion.h1>
        <p className="mt-8 text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          A showcase of technical precision and athletic drive. Explore the intersection of performance and digital storytelling.
        </p>
      </section>

      {/* Skills Section: Bento Grid */}
      <section className="px-8 max-w-7xl mx-auto mb-32">
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px w-12 bg-tertiary"></span>
          <h2 className="font-headline text-2xl font-bold uppercase tracking-widest text-tertiary">Core Competencies</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${skill.bg} ${skill.span} p-10 rounded-xl relative overflow-hidden group`}
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className={`${skill.textColor || "text-tertiary"} mb-6`}>
                  {skill.iconName && iconMap[skill.iconName]}
                </div>
                
                {skill.image ? (
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className={`font-headline text-4xl font-bold mb-4 uppercase tracking-tighter ${skill.textColor || "text-white"}`}>
                        {skill.title}
                      </h3>
                      <p className={`${skill.textColor || "text-on-surface-variant"} leading-relaxed`}>
                        {skill.description}
                      </p>
                    </div>
                    <div className="rounded-lg overflow-hidden h-48 bg-surface-container shadow-2xl">
                      <img 
                        src={skill.image} 
                        alt={skill.title} 
                        className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className={`font-headline text-4xl font-bold mb-4 uppercase tracking-tighter ${skill.textColor || "text-white"}`}>
                      {skill.title}
                    </h3>
                    <p className={`${skill.textColor || "text-on-surface-variant"} leading-relaxed mt-auto`}>
                      {skill.description}
                    </p>
                  </>
                )}
              </div>
              {skill.label && (
                <div className="absolute -right-8 -bottom-8 opacity-5 text-9xl font-headline font-black uppercase pointer-events-none">
                  {skill.label}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-surface-container-low py-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-12 bg-tertiary"></span>
                <h2 className="font-headline text-2xl font-bold uppercase tracking-widest text-tertiary">Selected Works</h2>
              </div>
              <h3 className="font-headline text-6xl font-bold uppercase tracking-tighter">The Portfolio</h3>
            </div>
            <div className="text-on-surface-variant max-w-sm text-right">
              Curated projects that demonstrate the fusion of athletic mindset and digital craft.
            </div>
          </div>

          <div className="space-y-32">
            {projectsData.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: project.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${project.reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center group`}
              >
                <div className="w-full md:w-7/12 relative aspect-video rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(7,13,31,0.5)]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-surface/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                
                <div className="w-full md:w-5/12">
                  <div className={`bg-surface-container-highest p-12 ${project.reverse ? "md:-mr-24" : "md:-ml-24"} relative z-10 rounded-xl backdrop-blur-md`}>
                    <span className="inline-block px-3 py-1 bg-surface-container-high rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                      {project.category}
                    </span>
                    <h4 className="font-headline text-4xl font-bold mb-6 uppercase tracking-tighter text-white">
                      {project.title}
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed mb-8">
                      {project.description}
                    </p>
                    <button className="group flex items-center gap-2 font-headline font-bold uppercase tracking-widest text-sm text-tertiary">
                      View Project <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 max-w-7xl mx-auto text-center">
        <h2 className="font-headline text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12">
          Ready to <span className="text-tertiary">Build?</span>
        </h2>
        <p className="text-xl text-on-surface-variant max-w-xl mx-auto mb-12">
          Let's collaborate on the next high-performance digital experience.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button className="bg-tertiary text-on-tertiary px-12 py-5 rounded-md font-headline font-bold uppercase tracking-widest hover:translate-x-1 transition-transform">
            Start a Project
          </button>
          <button className="border border-outline-variant/20 backdrop-blur-md px-12 py-5 rounded-md font-headline font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
            Download CV
          </button>
        </div>
      </section>
    </div>
  );
}
