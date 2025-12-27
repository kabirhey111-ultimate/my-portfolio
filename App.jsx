import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, 
  Stethoscope, 
  Cpu, 
  BookOpen, 
  ExternalLink, 
  TrendingUp,
  Brain,
  Mic,
  MessageSquare,
  Globe,
  Sparkles,
  Loader2,
  Terminal,
  Calendar,
  Send,
  User,
  Bot,
  X,
  Mail,
  Phone,
  ArrowRight,
  Code,
  Microscope,
  Award,
  Zap,
  CheckCircle2,
  Plus,
  Minus,
  MessageCircle,
  Menu
} from 'lucide-react';

// API Configuration using environment variables as requested
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // Chatbot State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { role: 'bot', text: "Assalamu Alaikum! I'm Kabir's AI assistant. I can explain his transition from 25% to 100% topper, his AI research, or his surgical aspirations. What would you like to know?" }
  ]);
  const chatEndRef = useRef(null);

  // Updated callGemini function as per instructions
  const callGemini = async (prompt, systemInstruction) => {
    let delay = 1000;
    for (let i = 0; i < 5; i++) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            systemInstruction: { parts: [{ text: systemInstruction }] }
          })
        });

        if (!response.ok) throw new Error('API Error');
        return await response.json();
      } catch (error) {
        if (i === 4) throw error;
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2;
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const navigate = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAiAction = async (type) => {
    setActiveModal(type);
    setAiLoading(true);
    setAiResponse(null);
    
    const prompts = {
      roadmap: {
        sys: "You are an elite career counselor for a prodigy. Provide a punchy, highly visual roadmap (use emojis and bullet points). Max 150 words.",
        user: "Generate a strategic roadmap for M. Kabir (all-time topper, UPSC Class 10 leader, AI enthusiast) to lead robotic surgery innovation by SSC 2026 and beyond."
      },
      pitch: {
        sys: "You are a top-tier brand strategist. Create a 'gist' elevator pitch that is professional and eye-catching. Max 100 words.",
        user: "Create a powerful elevator pitch for M. Kabir, highlighting his transition from 25% topper to 100% 5-time consecutive topper at UPSC."
      }
    };

    try {
      const result = await callGemini(prompts[type].user, prompts[type].sys);
      const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
      setAiResponse(text || "Analysis failed. Please try again.");
    } catch (e) {
      setAiResponse("System error: Could not connect to the neural engine.");
    }
    setAiLoading(false);
  };

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setChatInput("");
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    
    try {
      const result = await callGemini(
        userMsg, 
        "You are Kabir's personal AI assistant. Be helpful, concise, and professional. Kabir is a 5x UPSC topper, BTV Quizzer, and aspiring AI-driven Surgeon. Keep responses short and punchy."
      );
      const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
      setChatMessages(prev => [...prev, { role: 'bot', text: text || "I'm having trouble processing that right now." }]);
    } catch (e) {
      setChatMessages(prev => [...prev, { role: 'bot', text: "Connection lost. Please check your network." }]);
    }
  };

  const CheckIcon = () => (
    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-1">
      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
    </div>
  );

  const HomeView = () => {
    const faqs = [
      { q: "How do you balance competitive exams with AI research?", a: "It's about integration, not separation. I use custom AI prompts to synthesize biology notes and math patterns, making my study time 3x more efficient than traditional methods." },
      { q: "Are you open to collaborative projects?", a: "Absolutely. I am particularly interested in projects that bridge the gap between Ed-Tech and biological sciences. Reach out via WhatsApp for quick collab discussions." },
      { q: "What is your vision for robotic surgery?", a: "I believe the surgeon of the future is a pilot of algorithms. My goal is to understand the code behind the robot as deeply as the anatomy beneath the scalpel." }
    ];

    return (
      <div className="animate-in fade-in duration-700">
        <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[#050A18]">
            <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/20 blur-[150px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-600/10 blur-[120px] rounded-full animate-pulse" />
          </div>
          <div className="max-w-7xl mx-auto text-center relative z-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute h-full w-full rounded-full bg-cyan-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span></span>
              SSC-2026 Candidate
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
              FUTURE <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">ARCHITECT.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 font-light">
              M. Kabir is redefining academic excellence. <span className="text-white font-medium">5x Topper</span>. <span className="text-white font-medium">AI Strategist</span>. <span className="text-white font-medium">Aspiring Surgeon</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => navigate('journey')} className="group px-8 py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-2xl transition-all flex items-center justify-center gap-3">
                Witness The Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
              </button>
              <button onClick={() => navigate('expertise')} className="group px-8 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl flex items-center justify-center gap-3">
                Explore Capabilities <Code className="w-5 h-5 text-cyan-400" />
              </button>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-t border-white/5 bg-gradient-to-b from-[#050A18] to-[#030712]">
          <div className="max-w-3xl mx-auto">
             <div className="text-center mb-12">
               <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-3">Common Queries</h2>
               <h3 className="text-3xl md:text-5xl font-black text-white">Curious Minds Ask.</h3>
             </div>
             <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden transition-all hover:border-cyan-500/30">
                      <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex justify-between items-center p-6 text-left">
                          <span className="text-lg font-bold text-slate-200 group-hover:text-cyan-50">{faq.q}</span>
                          <div className={`p-2 rounded-full border border-white/10 transition-all ${openFaq === idx ? 'bg-cyan-500 text-black rotate-180' : 'text-slate-500'}`}>
                             {openFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                          </div>
                      </button>
                      <div className={`px-6 text-slate-400 leading-relaxed overflow-hidden transition-all duration-500 ${openFaq === idx ? 'max-h-48 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="pt-2 border-t border-white/5">{faq.a}</div>
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
      { year: "2021", title: "The Foundation", desc: "Maintained an unbroken record as All-Time Topper in previous schooling." },
      { year: "2022", title: "The Challenge", desc: "Joined UPSC. Faced stiffer competition. Secured Top 4 position, proving resilience." },
      { year: "2023", title: "The Climb", desc: "Doubled win rate. Became a Math Olympiad Finalist (Top 12) and BTV Representative." },
      { year: "2025", title: "The Summit", desc: "Achieved the perfect 100% win rate in Class 10. Total academic dominance." },
    ];
    return (
      <div className="pt-32 pb-32 px-6 min-h-screen bg-[#050A18] animate-in slide-in-from-right-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <h1 className="text-5xl md:text-7xl font-black text-white">Exponential <br/> Evolution.</h1>
            <button onClick={() => handleAiAction('pitch')} className="flex items-center gap-2 px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-xs font-bold uppercase tracking-widest text-cyan-400 hover:bg-cyan-500/20 transition-all">
              <Sparkles className="w-4 h-4" /> AI Analysis
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all">
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
    <div className="pt-32 pb-32 px-6 min-h-screen bg-[#050A18] animate-in slide-in-from-right-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-4">Capabilities</h2>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-16">The Dual Engine.</h1>
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8"><Cpu className="w-12 h-12 text-blue-400" /><h2 className="text-4xl font-bold text-white">AI Implementation</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose prose-invert prose-lg text-slate-400">
              <p>I leverage <span className="text-white font-bold">Prompt Engineering</span> as a cognitive amplifier. My workflow integrates high-level models to synthesize medical research and optimize academic paths.</p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3"><CheckIcon /><span><strong>Prompt Architecture:</strong> Chain-of-thought logic design.</span></li>
                <li className="flex items-start gap-3"><CheckIcon /><span><strong>Automation:</strong> Research synthesis via AI agents.</span></li>
              </ul>
            </div>
            <div className="bg-blue-900/10 border border-blue-500/20 rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Terminal className="w-32 h-32 text-blue-400" /></div>
              <h3 className="text-xl font-bold text-blue-300 mb-6 flex items-center gap-2"><Sparkles className="w-5 h-5"/> Neural Case Study</h3>
              <div className="space-y-4 relative z-10">
                 <div className="bg-[#050A18] p-4 rounded-xl border border-white/5"><p className="text-sm text-white leading-snug">Used custom-tuned prompts to generate complex biology models & ATP yield analysis for revision.</p></div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex items-center gap-4 mb-8"><Stethoscope className="w-12 h-12 text-cyan-400" /><h2 className="text-4xl font-bold text-white">Aspiring Surgeon</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-cyan-900/10 border border-cyan-500/20 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
              <Microscope className="w-20 h-20 text-cyan-500/50 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Robotic Surgery</h3>
              <button onClick={() => handleAiAction('roadmap')} className="mt-8 px-6 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-widest transition-all">
                AI Roadmap Generation
              </button>
            </div>
            <div className="prose prose-invert prose-lg text-slate-400">
              <p>The scalpel of the future is guided by code. My target is to master <span className="text-white font-bold">Robotic Assisted Surgery</span> through biological precision and algorithmic thinking.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050A18] text-slate-200 selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      
      {/* Dynamic Nav - Enhanced for all devices */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#050A18]/90 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter text-white cursor-pointer group" onClick={() => navigate('home')}>
            M.<span className="text-cyan-500 group-hover:text-white transition-colors">KABIR</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-1 bg-white/5 p-1 rounded-full border border-white/10">
            {['home', 'journey', 'expertise', 'vision'].map((page) => (
              <button key={page} onClick={() => navigate(page)} className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${currentPage === page ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>{page}</button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => setShowContactModal(true)} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-cyan-400 hover:bg-cyan-500/10 transition-all">Contact</button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-white"><Menu /></button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#0A192F] border-b border-white/10 animate-in slide-in-from-top-4 p-6 space-y-4">
            {['home', 'journey', 'expertise', 'vision'].map((page) => (
              <button key={page} onClick={() => navigate(page)} className="block w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-400 hover:bg-white/5 hover:text-white">{page}</button>
            ))}
          </div>
        )}
      </nav>

      <main>
        {currentPage === 'home' && <HomeView />}
        {currentPage === 'journey' && <JourneyView />}
        {currentPage === 'expertise' && <ExpertiseView />}
        {currentPage === 'vision' && <div className="pt-32 pb-32 px-6 flex flex-col justify-center text-center max-w-4xl mx-auto">
          <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-10 opacity-50" />
          <h1 className="text-5xl md:text-8xl font-serif italic text-white mb-12 leading-tight">"Read, in the name of your Lord..."</h1>
          <p className="text-2xl font-light text-slate-300 italic mb-16">Success is the combination of <span className="text-white font-normal border-b border-cyan-500/50">Hard-work</span> and sincere <span className="text-white font-normal border-b border-cyan-500/50">Tawakkul</span>.</p>
        </div>}
      </main>

      {/* AI Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 animate-in fade-in">
          <div className="absolute inset-0 bg-[#050A18]/95 backdrop-blur-xl" onClick={() => setActiveModal(null)}></div>
          <div className="relative w-full max-w-3xl bg-[#0A192F] border border-cyan-500/20 rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2"><Terminal className="w-3 h-3" /> system_output.log</div>
              <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-white"><X className="w-5 h-5"/></button>
            </div>
            <div className="p-8 md:p-12 overflow-y-auto max-h-[70vh]">
              {aiLoading ? (
                <div className="py-20 flex flex-col items-center justify-center gap-6">
                  <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
                  <p className="text-sm font-mono text-cyan-500 animate-pulse">GENERATING NEURAL INSIGHTS...</p>
                </div>
              ) : (
                <div className="animate-in fade-in">
                  <div className="bg-[#050A18] rounded-2xl p-8 border border-white/5 font-mono text-sm text-slate-300 whitespace-pre-wrap">{aiResponse}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Redesigned Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-6 animate-in fade-in">
          <div className="absolute inset-0 bg-[#030712]/95 backdrop-blur-xl" onClick={() => setShowContactModal(false)}></div>
          <div className="relative w-full max-w-lg bg-gradient-to-br from-[#0A192F] to-[#030712] border border-cyan-500/30 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden animate-in zoom-in-95">
            <button onClick={() => setShowContactModal(false)} className="absolute top-8 right-8 text-slate-500 hover:text-white bg-white/5 p-2 rounded-full"><X className="w-5 h-5"/></button>
            <div className="mb-10 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-4">Live Status: Online</div>
              <h3 className="text-4xl font-black text-white mb-2">Let's Connect.</h3>
            </div>
            <div className="space-y-4 relative z-10">
              <a href="https://wa.me/8801766222262" target="_blank" className="flex items-center gap-6 p-6 bg-white/[0.03] border border-white/10 rounded-3xl group hover:bg-green-500/10 hover:border-green-500/30 transition-all">
                <div className="w-14 h-14 bg-green-500/20 border border-green-500/30 rounded-2xl flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform"><Phone className="w-7 h-7" /></div>
                <div><span className="block text-white font-bold text-lg mb-1 group-hover:text-green-300">WhatsApp Direct</span><span className="text-slate-500 font-mono text-sm">+880 1766-222262</span></div>
              </a>
              <a href="mailto:kabirhey111@gmail.com" className="flex items-center gap-6 p-6 bg-white/[0.03] border border-white/10 rounded-3xl group hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all">
                <div className="w-14 h-14 bg-cyan-500/20 border border-cyan-500/30 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform"><Mail className="w-7 h-7" /></div>
                <div><span className="block text-white font-bold text-lg mb-1 group-hover:text-cyan-300">Email Support</span><span className="text-slate-500 font-mono text-sm">kabirhey111@gmail.com</span></div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* AI Chatbot FAB & Window */}
      <div className="fixed bottom-6 right-6 z-[100]">
        {!isChatOpen && (
          <button onClick={() => setIsChatOpen(true)} className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group"><Bot className="w-8 h-8 text-black group-hover:rotate-12 transition-transform" /></button>
        )}
        {isChatOpen && (
          <div className="w-[350px] sm:w-[400px] h-[550px] bg-[#0A192F] border border-white/10 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10">
            <div className="bg-cyan-500 p-6 flex justify-between items-center">
              <div className="flex items-center gap-3"><Bot className="w-6 h-6 text-white" /><div><h4 className="text-white font-bold leading-none">KabirBot</h4><span className="text-cyan-100 text-[10px] font-bold uppercase tracking-widest">Always Active</span></div></div>
              <button onClick={() => setIsChatOpen(false)} className="text-white/70 hover:text-white"><X className="w-6 h-6" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-cyan-500 text-black font-medium rounded-tr-none' : 'bg-white/5 text-slate-300 border border-white/10 rounded-tl-none'}`}>{msg.text}</div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form onSubmit={handleChatSubmit} className="p-4 bg-white/5 border-t border-white/10 flex gap-2">
              <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Ask about Kabir..." className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/50 text-white" />
              <button type="submit" className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center hover:bg-cyan-400 transition-colors shrink-0"><Send className="w-5 h-5 text-black" /></button>
            </form>
          </div>
        )}
      </div>

      <footer className="py-12 px-6 border-t border-white/5 bg-[#030712] text-center"><p className="text-slate-500 text-xs tracking-widest uppercase">&copy; 2024 M. Kabir • Precision & Vision</p></footer>
    </div>
  );
};

export default App;
