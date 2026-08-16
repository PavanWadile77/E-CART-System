import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, ArrowRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-24 bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white p-10 md:p-12 rounded-[2rem] border border-slate-100 shadow-2xl shadow-slate-200/50"
      >
        <div className="text-center mb-10">
          <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20">
            <Lock className="text-white w-6 h-6" />
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 mb-2 uppercase">
            {isLogin ? 'AUTH_REQUEST' : 'CREATE_SESSION'}
          </h1>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            {isLogin ? 'Security clearance required' : 'Initializing user protocol'}
          </p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="relative group">
              <label className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 absolute left-4 top-2.5 transition-colors group-focus-within:text-blue-500">
                IDENTITY_NAME
              </label>
              <input
                type="text"
                placeholder="PROXIMA USER"
                className="w-full px-4 pt-7 pb-2.5 bg-slate-50 border border-transparent rounded-xl focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 transition-all outline-none text-sm font-bold text-slate-800"
              />
            </div>
          )}
          <div className="relative group">
            <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-blue-400 transition-colors" />
            <label className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 absolute left-4 top-2.5 transition-colors group-focus-within:text-blue-500">
              EMAIL_ENDPOINT
            </label>
            <input
              type="email"
              placeholder="user@system.com"
              className="w-full px-4 pt-7 pb-2.5 bg-slate-50 border border-transparent rounded-xl focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 transition-all outline-none text-sm font-bold text-slate-800"
            />
          </div>
          <div className="relative group">
            <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-blue-400 transition-colors" />
            <label className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 absolute left-4 top-2.5 transition-colors group-focus-within:text-blue-500">
              ACCESS_KEY
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 pt-7 pb-2.5 bg-slate-50 border border-transparent rounded-xl focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 transition-all outline-none text-sm font-bold text-slate-800"
            />
          </div>

          <button className="w-full py-4 mt-4 sidebar-active text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-500/10 flex items-center justify-center group active:scale-95">
            {isLogin ? 'EXECUTE LOGIN' : 'DEPLOY ACCOUNT'}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-10">
          <div className="relative mb-10">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
            <div className="relative flex justify-center text-[9px] uppercase"><span className="bg-white px-4 text-slate-400 font-black tracking-widest">Federated Auth</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center p-3.5 border border-slate-100 rounded-xl hover:bg-slate-50 transition-all group font-bold text-xs uppercase tracking-tight text-slate-600">
              <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center p-3.5 border border-slate-100 rounded-xl hover:bg-slate-50 transition-all group font-bold text-xs uppercase tracking-tight text-slate-600">
              <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Github
            </button>
          </div>
        </div>

        <p className="mt-10 text-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
          {isLogin ? "New to the system? " : "Already initialized? "}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:underline"
          >
            {isLogin ? 'REQUEST_ENTRY' : 'RECALL_SESSION'}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Auth;
