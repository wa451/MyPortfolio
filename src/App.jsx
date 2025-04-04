// App.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import Skills from '@/components/Skills';
import Projects from '@/components/Project';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import '@/App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const profile = {
    name: "福田 航",
    title: "",
    email: "fukuda.wataru.067@s.kyushu-u.ac.jp",
    github: "https://github.com/wa451/",
  };

  const skills = [
    { category: "フロントエンド", items: ["React", "JavaScript", "HTML", "CSS"] },
    { category: "バックエンド", items: ["python", "SQL"] },
    { category: "ツール・その他", items: ["Git",] }
  ];

  const projects = [
    { title: "BalanceAlert", description: "flutterとナノコンを用いた家計簿アプリ", tech: ["flutter"], githubLink: "https://github.com/wa451/balance_alert", demoLink: "src/assets/BalanceAlert.mp4", image: "src/assets/BalanceAlert.jpg" },
    { title: "LineBot(Gemini API)", description: "GeminiAPIを用いたLineBot", tech: ["GAS"], githubLink: "https://github.com/wa451/geminiAPI_LINEbot", demoLink: "#", image: "src/assets/gemini.png" },
  ];

  const education = [
    {
      school: "九州大学",
      degree: "工学部 電気情報工学科",
      period: "2021年4月 - 2025年3月",
      // description: "プログラミング、アルゴリズム、データベースを専攻。卒業研究ではWebアプリケーションのパフォーマンス最適化について研究。"
    },
    {
      school: "九州大学大学院",
      degree: "システム情報科学府 情報理工学専攻",
      period: "2025年4月 - 2027年3月(予定)",
      // description: "実践的なWebアプリケーション開発を学習。チーム開発プロジェクトでリーダーを務める。"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col"> 
    {/* flex flex-colでfooterを下に固定 */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} profile={profile} />
      <main className="container mx-auto py-8 px-4 flex-grow flex flex-col justify-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 30, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 w-full"
          >
            {activeSection === 'about' && <Profile profile={profile} />}
            {activeSection === 'skills' && <Skills skills={skills} />}
            {activeSection === 'projects' && <Projects projects={projects} />}
            {activeSection === 'education' && <Education education={education} />}
          </motion.div>
        </AnimatePresence>
        </main>
      <Footer profile={profile} />
    </div>
  );
};

export default App;
