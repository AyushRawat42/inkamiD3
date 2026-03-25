'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Activity, Clock, Phone, FileText, Lock, Unlock, LayoutDashboard, Megaphone, Video, CreditCard, LifeBuoy } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { name: 'Mon', leads: 400, appointments: 240 },
  { name: 'Tue', leads: 300, appointments: 139 },
  { name: 'Wed', leads: 200, appointments: 980 },
  { name: 'Thu', leads: 278, appointments: 390 },
  { name: 'Fri', leads: 189, appointments: 480 },
  { name: 'Sat', leads: 239, appointments: 380 },
  { name: 'Sun', leads: 349, appointments: 430 },
];

const activities = [
  { id: 1, icon: Phone, text: 'New Appointment Booked (London)', time: '2 mins ago' },
  { id: 2, icon: FileText, text: 'Batch Data Processed (New York)', time: '15 mins ago' },
  { id: 3, icon: Activity, text: 'Campaign "Alpha" ROI updated', time: '1 hour ago' },
  { id: 4, icon: Phone, text: 'Inbound Query Resolved (Sydney)', time: '2 hours ago' },
];

export default function Dashboard() {
  const [time, setTime] = useState<Date | null>(null);
  const [isVaultHovered, setIsVaultHovered] = useState(false);

  useEffect(() => {
    const updateTime = () => setTime(new Date());
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const delhiTime = time ? new Date(time.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })) : null;

  return (
    <div className="min-h-screen pt-24 pb-12 flex">
      {/* Sidebar */}
      <aside className="w-20 lg:w-64 border-r border-white/10 glass-panel flex flex-col items-center lg:items-start py-8 px-4 gap-8 fixed h-[calc(100vh-6rem)] z-10 left-0 top-24">
        {[
          { icon: LayoutDashboard, label: 'Overview', active: true },
          { icon: Megaphone, label: 'Campaigns' },
          { icon: Video, label: 'Live Recordings' },
          { icon: CreditCard, label: 'Billing' },
          { icon: LifeBuoy, label: 'Support' },
        ].map((item, i) => (
          <button key={i} className={`group flex items-center gap-4 w-full p-3 rounded-xl transition-all ${item.active ? 'bg-white/10 text-electric-cyan' : 'text-gray-400 hover:text-electric-cyan hover:bg-white/5'}`}>
            <item.icon className={`w-6 h-6 transition-all ${item.active ? 'drop-shadow-[0_0_8px_#00F2FF]' : 'group-hover:drop-shadow-[0_0_8px_#00F2FF]'}`} />
            <span className="hidden lg:block font-medium">{item.label}</span>
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-20 lg:ml-64 px-4 lg:px-12 py-8">
        {/* Header */}
        <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold text-white mb-3">Client Portal</h1>
            <div className="flex items-center gap-3 text-sm bg-white/5 border border-white/10 px-4 py-2 rounded-full inline-flex">
              <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-2.5 h-2.5 rounded-full bg-electric-cyan shadow-[0_0_8px_#00F2FF]" />
              <span className="text-electric-cyan font-bold tracking-widest">BPO OPERATIONS: ACTIVE</span>
            </div>
          </div>
          
          {time && delhiTime && (
            <div className="glass-panel px-6 py-4 rounded-2xl flex items-center gap-8 border-[#00E8FF]/20 border">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5">
                  <Clock className="w-5 h-5 text-gray-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-semibold tracking-wider uppercase">Local Time</span>
                  <span className="text-lg font-mono text-white">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-hyper-violet/10">
                  <Clock className="w-5 h-5 text-hyper-violet" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-semibold tracking-wider uppercase">Delhi Hub</span>
                  <span className="text-lg font-mono text-hyper-violet drop-shadow-[0_0_5px_rgba(157,0,255,0.5)]">{delhiTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              </div>
            </div>
          )}
        </header>

        <div className="grid xl:grid-cols-3 gap-8">
          {/* Chart */}
          <div className="xl:col-span-2 glass-panel p-8 rounded-3xl border-[#00E8FF]/20 border">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-white">Lead Velocity</h3>
              <select className="bg-white/5 border border-white/10 text-white text-sm rounded-lg px-3 py-2 outline-none focus:border-electric-cyan">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <defs>
                    <linearGradient id="colorLeads" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="5%" stopColor="#00F2FF" stopOpacity={1}/>
                      <stop offset="95%" stopColor="#9D00FF" stopOpacity={1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" tick={{fill: 'rgba(255,255,255,0.5)'}} axisLine={false} tickLine={false} dy={10} />
                  <YAxis stroke="rgba(255,255,255,0.3)" tick={{fill: 'rgba(255,255,255,0.5)'}} axisLine={false} tickLine={false} dx={-10} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(12,12,12,0.9)', borderColor: 'rgba(0,242,255,0.3)', borderRadius: '12px', backdropFilter: 'blur(10px)' }} 
                    itemStyle={{ color: '#fff' }}
                  />
                  <Line type="monotone" name="Qualified Leads" dataKey="leads" stroke="url(#colorLeads)" strokeWidth={4} dot={{ r: 4, fill: '#0C0C0C', stroke: '#00F2FF', strokeWidth: 2 }} activeDot={{ r: 8, fill: '#9D00FF', stroke: '#fff', strokeWidth: 2 }} />
                  <Line type="monotone" name="Appointments Set" dataKey="appointments" stroke="rgba(255,255,255,0.3)" strokeWidth={2} strokeDasharray="5 5" dot={false} activeDot={{ r: 6, fill: '#fff' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Live Feed */}
            <div className="glass-panel p-8 rounded-3xl border-[#00E8FF]/20 border h-[280px] overflow-hidden relative flex flex-col">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><Activity className="w-6 h-6 text-electric-cyan drop-shadow-[0_0_8px_#00F2FF]" /> Live Feed</h3>
              <div className="space-y-5 overflow-y-auto flex-1 pr-2 scrollbar-hide pb-10">
                {activities.map((act) => (
                  <motion.div key={act.id} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex gap-4 items-start">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0">
                      <act.icon className="w-4 h-4 text-gray-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-200 font-medium leading-tight mb-1">{act.text}</p>
                      <p className="text-xs text-gray-500">{act.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0C0C0C] to-transparent pointer-events-none rounded-b-3xl" />
            </div>

            {/* Vault */}
            <div 
              className="glass-panel p-8 rounded-3xl border-[#00E8FF]/20 border cursor-pointer group transition-all hover:bg-white/5 hover:border-[#9D00FF]/40"
              onMouseEnter={() => setIsVaultHovered(true)}
              onMouseLeave={() => setIsVaultHovered(false)}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">IP-Driven Vault</h3>
                <motion.div animate={{ rotate: isVaultHovered ? [0, -10, 10, 0] : 0 }} transition={{ duration: 0.5 }}>
                  {isVaultHovered ? <Unlock className="w-6 h-6 text-electric-cyan drop-shadow-[0_0_8px_#00F2FF]" /> : <Lock className="w-6 h-6 text-gray-500" />}
                </motion.div>
              </div>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">Access your Proprietary Campaign Scripts and Strategic Process Blueprints securely.</p>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-electric-cyan to-hyper-violet" 
                  initial={{ width: '30%' }} 
                  animate={{ width: isVaultHovered ? '100%' : '30%' }} 
                  transition={{ duration: 0.6, ease: "easeInOut" }} 
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
