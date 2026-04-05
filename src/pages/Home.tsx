import { motion } from "motion/react";
import { GraduationCap, Dumbbell, Trophy, Users } from "lucide-react";
import { personalInfo, experiences } from "../data";

export default function Home() {
  const iconMap: Record<string, any> = {
    Trophy: <Trophy size={120} />,
    Users: <Users size={120} />
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 z-10"
          >
            <div className="inline-block px-4 py-1 bg-surface-container-high text-tertiary font-bold text-sm tracking-widest uppercase mb-6 rounded-md">
              {personalInfo.class}
            </div>
            <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
              Student Athlete <span className="text-tertiary">&amp;</span> <br />
              Content Creator
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              Driven by performance, guided by creativity. {personalInfo.name} blends the discipline of an athlete with the vision of a digital storyteller.
            </p>
            <div className="flex items-center gap-6">
              <button className="bg-tertiary text-on-tertiary px-8 py-4 rounded-md font-bold tracking-tight hover:translate-x-1 transition-transform">
                View Work
              </button>
              <button className="border border-outline-variant bg-surface/40 backdrop-blur-md px-8 py-4 rounded-md font-bold hover:bg-white/10 transition-colors">
                About Me
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(7,13,31,0.5)]">
              <img 
                src={personalInfo.heroImage} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-highest p-6 rounded-xl border border-outline-variant/20 backdrop-blur-xl hidden md:block">
              <p className="font-headline font-black text-4xl text-tertiary leading-none">{personalInfo.nickname}</p>
              <p className="text-xs uppercase tracking-[0.2em] mt-2 text-on-surface-variant">Est. {personalInfo.est}</p>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute top-1/2 -right-20 transform -translate-y-1/2 rotate-90 hidden lg:block">
          <span className="text-[12rem] font-black text-surface-container-high/20 pointer-events-none uppercase tracking-tighter">PERFORMANCE</span>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-32 bg-surface-container-low px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="font-headline text-5xl font-black tracking-tighter uppercase mb-6">
                Beyond the <br /><span className="text-tertiary">Classroom</span>
              </h2>
              <div className="w-20 h-1 bg-tertiary mb-12"></div>
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <GraduationCap className="text-tertiary" size={24} />
                  <div>
                    <h4 className="font-bold text-white mb-1">Academic Excellence</h4>
                    <p className="text-sm text-on-surface-variant">Class {personalInfo.class}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Dumbbell className="text-tertiary" size={24} />
                  <div>
                    <h4 className="font-bold text-white mb-1">Athletic Discipline</h4>
                    <p className="text-sm text-on-surface-variant">Competitive Mindset</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-12">
              {personalInfo.aboutMe.map((paragraph, index) => (
                <p 
                  key={index} 
                  className={index === 0 ? "text-2xl leading-relaxed text-on-surface" : "text-lg leading-loose text-on-surface-variant"}
                >
                  {paragraph}
                </p>
              ))}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-surface-container-highest p-8 rounded-xl border-l-4 border-tertiary">
                  <p className="font-headline text-4xl font-black text-white">{personalInfo.class.split('/')[1]}</p>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mt-2">Class Index</p>
                </div>
                <div className="bg-surface-container-highest p-8 rounded-xl border-l-4 border-tertiary">
                  <p className="font-headline text-4xl font-black text-white">{personalInfo.grade}</p>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mt-2">Current Grade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-tertiary font-bold tracking-widest uppercase text-sm mb-4">Journey</p>
            <h2 className="font-headline text-6xl font-black tracking-tighter uppercase">Experience</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                whileHover={{ x: 10 }}
                className="group relative bg-surface-container-high rounded-xl overflow-hidden transition-transform duration-300"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  {iconMap[exp.icon]}
                </div>
                <div className="p-12 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-tertiary/10 text-tertiary px-3 py-1 rounded text-xs font-bold uppercase tracking-tighter">{exp.type}</span>
                    <span className="text-on-surface-variant text-sm font-medium">{exp.period}</span>
                  </div>
                  <h3 className="font-headline text-4xl font-bold mb-6 text-white group-hover:text-tertiary transition-colors">{exp.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed text-lg mb-8 max-w-md">
                    {exp.description}
                  </p>
                  <ul className="space-y-4">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-on-surface">
                        <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto bg-tertiary rounded-xl p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=1200')] mix-blend-overlay opacity-20 bg-cover bg-center"></div>
          <h2 className="font-headline text-5xl md:text-6xl font-black text-on-tertiary tracking-tighter mb-8 relative z-10">READY TO COLLABORATE?</h2>
          <p className="text-on-tertiary text-xl font-medium mb-12 max-w-2xl mx-auto relative z-10 opacity-90">
            Whether it's an athletic project or a creative content venture, let's build something impactful together.
          </p>
          <button className="bg-surface text-tertiary px-12 py-5 rounded-md font-black uppercase tracking-widest text-lg shadow-xl hover:translate-y-[-4px] transition-transform relative z-10">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}
