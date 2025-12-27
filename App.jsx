import React, { useState, useRef, useEffect } from 'react';
import { Bot, User, Send, Sparkles, TrendingUp, Target, Rocket, ChevronRight } from 'lucide-react';

const App = () => {
  // SECURE KEY: This pulls from your Vercel Environment Variables
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  const [messages, setMessages] = useState([
    { role: 'model', text: "Assalamu Alaikum! I'm Kabir's AI assistant. Ask me anything about his 5x UPSC topper journey or his strategic vision!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => { scrollToBottom(); }, [messages]);

  const callGemini = async (prompt, systemInstruction) => {
    // Using the stable December 2025 model endpoint
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          systemInstruction: { parts: [{ text: systemInstruction }] }
        })
      });

      if (!response.ok) throw new Error('API request failed');
      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error("AI Error:", error);
      return "I'm having trouble connecting right now. Please check if the API key is set correctly in Vercel!";
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const systemPrompt = "You are an AI assistant for M. Kabir, a 5-time UPSC topper. Be professional, inspiring, and focus on his strategic achievements and academic excellence.";
    const aiResponse = await callGemini(userMessage, systemPrompt);
    
    setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#050A18] text-white font-sans p-4 md:p-8">
      {/* HEADER */}
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-12">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">K</div>
          <span className="text-xl font-bold tracking-tighter">M. KABIR</span>
        </div>
        <div className="px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm animate-pulse">
          5x UPSC TOPPER • STRATEGIST
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT COLUMN: CHAT */}
        <div className="bg-[#0A1122] border border-white/5 rounded-3xl flex flex-col h-[600px] overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-white/5 bg-white/5 flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg"><Bot size={20} /></div>
            <div>
              <h3 className="font-bold text-lg">Kabir AI Assistant</h3>
              <p className="text-xs text-slate-400">Ask about UPSC, Strategy, or Goals</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-blue-600 rounded-tr-none' : 'bg-white/5 border border-white/10 rounded-tl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-2xl animate-pulse text-blue-400">Thinking...</div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-4 bg-black/20 border-t border-white/5 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all"
            />
            <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-xl transition-all disabled:opacity-50">
              <Send size={20} />
            </button>
          </form>
        </div>

        {/* RIGHT COLUMN: STATS */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-3xl">
              <TrendingUp className="mb-4 text-blue-200" />
              <h4 className="text-3xl font-black">5x</h4>
              <p className="text-blue-100 text-sm">UPSC Qualifier</p>
            </div>
            <div className="bg-[#0A1122] border border-white/5 p-6 rounded-3xl">
              <Target className="mb-4 text-blue-500" />
              <h4 className="text-3xl font-black">100%</h4>
              <p className="text-slate-400 text-sm">Strategic Accuracy</p>
            </div>
          </div>

          <div className="bg-[#0A1122] border border-white/5 p-8 rounded-3xl group hover:border-blue-500/30 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500"><Rocket size={24} /></div>
              <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">Featured Case Study</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">The Topper's Mindset</h3>
            <p className="text-slate-400 leading-relaxed mb-6">Exploring how Kabir maintained consistency across five consecutive national-level achievements.</p>
            <button className="flex items-center gap-2 text-blue-500 font-bold hover:gap-3 transition-all">
              Read More <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
