import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('hadees');
  const [aiQuery, setAiQuery] = useState('');
  const [chatLog, setChatLog] = useState([
    { sender: 'ai', text: 'Assalamu Alaikum Farooqui brother! Main aapka Islamic AI assistant hoon. Deeni masail ya Hadees ke mutalliq koi bhi sawal poochhein.' }
  ]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 pb-20">
      {/* Header */}
      <header className="bg-emerald-800 text-white p-4 text-center shadow-md">
        <h1 className="text-xl font-bold">Islamic & Hadees Hub</h1>
        <p className="text-xs text-emerald-200 mt-1">Quran, Hadees & AI Assistant</p>
      </header>

      {/* Main Content Area */}
      <main className="p-4 max-w-2xl mx-auto">
        
        {/* Hadees Tab */}
        {activeTab === 'hadees' && (
          <div>
            <h2 className="text-xl font-bold text-emerald-800 mb-3">Hadees-e-Mubarak (Sihah Sitta)</h2>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-emerald-100 mb-3">
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded font-semibold">Sahih al-Bukhari #1</span>
              <p className="mt-2 text-gray-700 font-medium text-right text-lg">إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ...</p>
              <p className="mt-2 text-gray-600 text-sm">"Aamal ka daromadar niyaton par hai, aur har insaan ko wahi milega jiski usne niyat ki..."</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-emerald-100">
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded font-semibold">Sahih Muslim #45</span>
              <p className="mt-2 text-gray-700 font-medium text-right text-lg">الدِّينُ النَّصِيحَةُ...</p>
              <p className="mt-2 text-gray-600 text-sm">"Deen khair-khwahi (sachai aur bhalai) ka naam hai..."</p>
            </div>
          </div>
        )}

        {/* AI Mufti Tab */}
        {activeTab === 'ai' && (
          <div className="flex flex-col h-[70vh]">
            <h2 className="text-xl font-bold text-emerald-800 mb-3">Islamic AI Assistant</h2>
            <div className="flex-1 overflow-y-auto bg-white p-3 rounded-xl border border-gray-200 mb-3 space-y-3">
              {chatLog.map((chat, idx) => (
                <div key={idx} className={`p-3 rounded-lg max-w-[85%] text-sm ${chat.sender === 'user' ? 'bg-emerald-700 text-white ml-auto' : 'bg-gray-100 text-gray-800 mr-auto'}`}>
                  {chat.text}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input 
                type="text5" 
                placeholder="Deeni sawal yahan likhein..." 
                value={aiQuery} 
                onChange={(e) => setAiQuery(e.target.value)}
                className="flex-1 p-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-emerald-600 bg-white"
              />
              <button 
                onClick={() => {
                  if(!aiQuery.trim()) return;
                  setChatLog([...chatLog, { sender: 'user', text: aiQuery }, { sender: 'ai', text: `Jawab: Yeh ek sample response hai aapke sawal "${aiQuery}" ke liye. Aage hum isme real AI API connect karenge.` }]);
                  setAiQuery('');
                }}
                className="bg-emerald-800 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Poochhein
              </button>
            </div>
          </div>
        )}

        {/* Quran Tab */}
        {activeTab === 'quran' && (
          <div>
            <h2 className="text-xl font-bold text-emerald-800 mb-3">Al-Quran al-Kareem</h2>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-emerald-100">
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded font-semibold">Surah Al-Fatiha (1:1)</span>
              <p className="mt-3 text-2xl text-right font-arabic text-emerald-900">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
              <p className="mt-3 text-gray-600 text-sm">"Shuru Allah ke naam se jo bada meherbaan aur nihayat rahem wala hai."</p>
            </div>
          </div>
        )}

      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-3 shadow-lg">
        <button onClick={() => setActiveTab('hadees')} className={`text-xs font-medium ${activeTab === 'hadees' ? 'text-emerald-700 font-bold' : 'text-gray-500'}`}>
          📖 Hadees
        </button>
        <button onClick={() => setActiveTab('quran')} className={`text-xs font-medium ${activeTab === 'quran' ? 'text-emerald-700 font-bold' : 'text-gray-500'}`}>
          📜 Quran
        </button>
        <button onClick={() => setActiveTab('ai')} className={`text-xs font-medium ${activeTab === 'ai' ? 'text-emerald-700 font-bold' : 'text-gray-500'}`}>
          🤖 AI Mufti
        </button>
      </nav>
    </div>
  );
}
