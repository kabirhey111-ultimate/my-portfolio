import React, { useState, useEffect } from 'react';
import { 
  Stethoscope, 
  Cpu, 
  BookOpen, 
  TrendingUp,
  Terminal,
  Send,
  X,
  Mail,
  Phone,
  ArrowRight,
  Code,
  Microscope,
  CheckCircle2,
  Plus,
  Minus
} from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const CheckIcon = () => (
    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-1">
      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
    </div>
  );

  /* --- PAGE COMPONENTS --- */

  const HomeView = () => {
    const faqs = [
      { q: "How do you balance competitive exams with technical research?", a: "It's about integration, not separation. I use structured systems to synthesize biology notes and math patterns, making study time 3x more efficient than traditional methods." },
      { q: "Are you open to collaborative projects?", a: "Absolutely. I am particularly interested in projects that bridge the gap between Ed-Tech and biological sciences. Reach out via WhatsApp for quick discussions." },
      { q: "What is your vision for robotic surgery?", a: "I believe the surgeon of the future is a pilot of algorithms. My goal is to understand the technology behind the robot as deeply as the anatomy beneath the scalpel." }
    ];

    return (
      <div className="animate-in fade-in duration-700">
        {/* Cinematic Hero */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[#050A18]">
            <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/20 blur-[150px] rounded-full animate-pulse" style={{animationDuration: '8s'}} />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-600/10 blur-[120px] rounded-full animate-pulse" style={{animationDuration: '10s'}} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,#050A18_100%)] z-10" />
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              SSC-2026 Candidate
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
              FUTURE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">ARCHITECT.</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-12 font-light">
              M. Kabir is redefining academic excellence. 
              <span className="text-white font-medium"> 5x Consecutive Topper</span>. 
              <span className="text-white font-medium"> Tech Strategist</span>. 
              <span className="text-white font-medium"> Aspiring Surgeon</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => navigate('journey')}
                className="group px-8 py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)]"
              >
                Witness The Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigate('expertise')}
                className="group px-8 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl transition-all backdrop-blur-sm flex items-center justify-center gap-3"
              >
                Explore Capabilities
                <Code className="w-5 h-5 text-cyan-400" />
              </button>
            </div>
          </div>
        </section>

        {/* Teaser Section */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div onClick={() => navigate('journey')} className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer group">
              <TrendingUp className="w-10 h-10 text-yellow-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Unbroken Streak</h3>
              <p className="text-slate-400 text-sm">From 25% to 100% dominance. See the statistics behind the success.</p>
              <div className="mt-6 flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                View Stats <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            <div onClick={() => navigate('expertise')} className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer group">
              <Cpu className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Tech & Biology</h3>
              <p className="text-slate-400 text-sm">Merging robotic surgery aspirations with advanced systems engineering.</p>
              <div className="mt-6 flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                See Skills <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            <div onClick={() => navigate('vision')} className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer group">
              <BookOpen className="w-10 h-10 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">The Philosophy</h3>
              <p className="text-slate-400 text-sm">"Read, in the name of your Lord." The core belief driving every achievement.</p>
              <div className="mt-6 flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                Read Vision <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#050A18] to-[#030712] border-t border-white/5">
          <div className="max-w-3xl mx-auto">
             <div className="text-center mb-12">
               <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-3">Common Queries</h2>
               <h3 className="text-3xl md:text-5xl font-black text-white">Curious Minds Ask.</h3>
             </div>
             <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05]">
                      <button 
                          onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                          className="w-full flex justify-between items-center p-6 text-left"
                      >
                          <span className="text-lg font-bold text-slate-200 group-hover:text-cyan-50 transition-colors">{faq.q}</span>
                          <div className={`p-2 rounded-full border border-white/10 transition-all duration-300 ${openFaq === idx ? 'bg-cyan-500 text-black rotate-180' : 'text-slate-500 group-hover:text-cyan-400'}`}>
                             {openFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                          </div>
                      </button>
                      <div className={`px-6 text-slate-400 leading-relaxed overflow-hidden transition-all duration-500 ease-in-out ${openFaq === idx ? 'max-h-48 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="pt-2 border-t border-white/5">
                             {faq.a}
                          </div>
                      </div>
                  </div>
                ))}
             </div>
          </div>
        </section>
      </div>
    );
  };

  const JourneyView = () => {
    const stats = [
      { label: "Class 1-6", value: "100%", sub: "All-Time Topper", color: "text-purple-400" },
      { label: "Class 7", value: "25%", sub: "UPSC Debut", color: "text-blue-400" },
      { label: "Class 8-9", value: "50%", sub: "Rapid Growth", color: "text-cyan-400" },
      { label: "Class 10", value: "100%", sub: "Undisputed Lead", color: "text-yellow-400" },
    ];

    const timeline = [
      { year: "2021", title: "The Foundation", desc: "Maintained an unbroken record as All-Time Topper in previous schooling (Class 1-6)." },
      { year: "2022", title: "The Challenge", desc: "Joined UPSC. Faced stiffer competition. Secured Top 4 position (25% win rate), proving resilience." },
      { year: "2023", title: "The Climb", desc: "Doubled win rate to 50%. Became a Math Olympiad Finalist (Top 12) and BTV Representative." },
      { year: "2024", title: "The Breakthrough", desc: "Maintained 50% academic lead while dominating extracurriculars. Current Affairs Champion." },
      { year: "2025", title: "The Summit", desc: "Achieved the perfect 100% win rate (5/5 Terms) in Class 10. Total academic dominance." },
      { year: "2026", title: "The Horizon", desc: "Target: SSC National Distinction. Focus: Pre-Medical Sciences & Robotics." },
    ];

    return (
      <div className="pt-32 pb-32 px-6 min-h-screen bg-[#050A18] animate-in slide-in-from-right-10 duration-500">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-4">The Trajectory</h2>
          <div className="flex justify-between items-end mb-12">
            <h1 className="text-5xl md:text-7xl font-black text-white">Exponential <br/> Evolution.</h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center group hover:bg-white/10 transition-all">
                <div className={`text-4xl md:text-5xl font-black mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-white font-bold mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">{stat.sub}</div>
              </div>
            ))}
          </div>

          <div className="relative border-l-2 border-white/10 pl-8 md:pl-12 space-y-16">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 md:w-7 md:h-7 rounded-full bg-[#050A18] border-4 border-cyan-500 group-hover:scale-125 transition-transform" />
                <div className="flex flex-col md:flex-row gap-4 md:gap-12 md:items-start">
                  <div className="text-cyan-500 font-mono font-bold text-xl">{item.year}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ExpertiseView = () => (
    <div className="pt-32 pb-32 px-6 min-h-screen bg-[#050A18] animate-in slide-in-from-right-10 duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-4">Capabilities</h2>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-16">The Dual Engine.</h1>

        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <Cpu className="w-12 h-12 text-blue-400" />
            <h2 className="text-4xl font-bold text-white">Technology Integration</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose prose-invert prose-lg">
              <p className="text-slate-400 leading-relaxed">
                I leverage high-level computational tools as cognitive amplifiers, integrating modern frameworks into complex academic workflows.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span><strong>System Architecture:</strong> Designing efficient logic flows for data synthesis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span><strong>Ed-Tech Optimization:</strong> Creating personalized learning pathways via software tools.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span><strong>Data Analysis:</strong> Utilizing rapid processing for biological and mathematical research.</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-900/10 border border-blue-500/20 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Terminal className="w-32 h-32 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-blue-300 mb-6 flex items-center gap-2">
                Case Study: Exam Efficiency
              </h3>
              <div className="space-y-4 relative z-10">
                 <div className="bg-[#050A18] p-4 rounded-xl border border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 font-bold">The Challenge</p>
                    <p className="text-sm text-slate-300 leading-snug">Synthesize complex cellular respiration data into a readable format for exam revision.</p>
                 </div>
                 <div className="bg-[#050A18] p-4 rounded-xl border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                    <p className="text-[10px] text-blue-400 uppercase tracking-wider mb-1 font-bold">Solution</p>
                    <p className="text-sm text-white font-medium leading-snug">Implemented optimized study models & ATP yield analysis using structured logic.</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-8">
            <Stethoscope className="w-12 h-12 text-cyan-400" />
            <h2 className="text-4xl font-bold text-white">Aspiring Surgeon</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-cyan-900/10 border border-cyan-500/20 rounded-3xl p-8 order-2 md:order-1">
              <div className="h-full flex flex-col justify-center items-center text-center">
                <Microscope className="w-20 h-20 text-cyan-500/50 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">Target Specialization</h3>
                <p className="text-cyan-300 font-mono text-lg">Robotic & Neural Surgery</p>
              </div>
            </div>
            <div className="prose prose-invert prose-lg order-1 md:order-2">
              <p className="text-slate-400 leading-relaxed">
                The future of medicine is precision-driven. My goal is to master human anatomy while pioneering the use of <span className="text-white font-bold">Robotic Assisted Systems</span>.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                 <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-white font-bold mb-1">Biology</div>
                    <div className="text-xs text-slate-500">Subject Dominance</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-white font-bold mb-1">Precision</div>
                    <div className="text-xs text-slate-500">Fine Motor Skills</div>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  const VisionView = () => (
    <div className="pt-32 pb-32 px-6 min-h-screen bg-[#050A18] animate-in slide-in-from-right-10 duration-500 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-10 opacity-50" />
        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-[0.5em] mb-8">The Creed</h2>
        <h1 className="text-5xl md:text-8xl font-serif italic text-white mb-12 leading-tight">
          "Read, in the name of your Lord..."
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-12" />
        <p className="text-2xl md:text-3xl font-light text-slate-300 mb-16 italic leading-relaxed">
          "Success is not an accident. It is the combination of <span className="text-white font-normal border-b border-cyan-500/50">Dedicated Hard-work</span> and sincere <span className="text-white font-normal border-b border-cyan-500/50">Tawakkul</span>."
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all">
            <h3 className="text-xl font-bold text-white mb-2">Explore</h3>
            <p className="text-slate-500 text-sm">To never set limits on learning, whether it is the depths of scripture or the edge of technology.</p>
          </div>
          <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all">
            <h3 className="text-xl font-bold text-white mb-2">Discover</h3>
            <p className="text-slate-500 text-sm">To find the hidden connections between the organic world and the digital future.</p>
          </div>
          <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all">
            <h3 className="text-xl font-bold text-white mb-2">Dive In</h3>
            <p className="text-slate-500 text-sm">To immerse fully in the pursuit of becoming a healer for humanity.</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050A18] text-slate-200 selection:bg-cyan-500/30 font-sans">
      
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#050A18]/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2 cursor-pointer group" onClick={() => navigate('home')}>
            M.<span className="text-cyan-500 group-hover:text-white transition-colors">KABIR</span>
          </div>
          <div className="hidden md:flex gap-1 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
            {['home', 'journey', 'expertise', 'vision'].map((page) => (
              <button 
                key={page}
                onClick={() => navigate(page)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  currentPage === page 
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button 
            onClick={() => setShowContactModal(true)}
            className="hidden md:flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-cyan-400 hover:bg-cyan-500/10 transition-all"
          >
            Contact
          </button>
        </div>
      </nav>

      <main>
        {currentPage === 'home' && <HomeView />}
        {currentPage === 'journey' && <JourneyView />}
        {currentPage === 'expertise' && <ExpertiseView />}
        {currentPage === 'vision' && <VisionView />}
      </main>

      {showContactModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-6 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-[#030712]/95 backdrop-blur-xl" onClick={() => setShowContactModal(false)}></div>
          <div className="relative w-full max-w-lg bg-gradient-to-br from-[#0A192F] to-[#030712] border border-cyan-500/30 rounded-[2.5rem] p-10 shadow-[0_0_60px_rgba(6,182,212,0.15)] scale-100 animate-in zoom-in-95 duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none -mt-20 -mr-20" />
            
            <button onClick={() => setShowContactModal(false)} className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors bg-white/5 p-2 rounded-full"><X className="w-5 h-5"/></button>
            
            <div className="mb-10 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" /> Status: Available
              </div>
              <h3 className="text-4xl font-black text-white mb-2">Let's Connect.</h3>
              <p className="text-slate-400 text-lg">Collaborations, inquiries, or academic discussions.</p>
            </div>
            
            <div className="space-y-4 relative z-10">
              <a href="https://wa.me/8801766222262" target="_blank" className="flex items-center gap-6 p-6 bg-white/[0.03] border border-white/10 rounded-3xl group hover:bg-green-500/10 hover:border-green-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-green-500/20 border border-green-500/30 rounded-2xl flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform shadow-lg shadow-green-900/20">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <span className="block text-white font-bold text-lg mb-1 group-hover:text-green-300 transition-colors">WhatsApp Direct</span>
                  <span className="text-slate-500 font-mono text-sm group-hover:text-green-500/70 transition-colors">+880 1766-222262</span>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                   <ArrowRight className="w-5 h-5 text-green-500" />
                </div>
              </a>

              <a href="mailto:kabirhey111@gmail.com" className="flex items-center gap-6 p-6 bg-white/[0.03] border border-white/10 rounded-3xl group hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-cyan-500/20 border border-cyan-500/30 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-900/20">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <span className="block text-white font-bold text-lg mb-1 group-hover:text-cyan-300 transition-colors">Email Support</span>
                  <span className="text-slate-500 font-mono text-sm group-hover:text-cyan-500/70 transition-colors">kabirhey111@gmail.com</span>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                   <ArrowRight className="w-5 h-5 text-cyan-500" />
                </div>
              </a>
            </div>
            
            <div className="mt-10 pt-6 border-t border-white/5 text-center relative z-10">
               <p className="text-xs text-slate-600 uppercase tracking-widest">Usually replies within 2 hours</p>
            </div>
          </div>
        </div>
      )}

      <footer className="py-12 px-6 border-t border-white/5 bg-[#030712] text-center">
        <p className="text-slate-500 text-xs tracking-widest uppercase">&copy; 2024 M. Kabir • Precision & Vision</p>
      </footer>
    </div>
  );
};

export default App;
