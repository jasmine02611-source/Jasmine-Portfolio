import { motion } from 'motion/react';
import { Mail, Phone, User, Sparkles } from 'lucide-react';
import EducationCard from './EducationCard';

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="flex items-center gap-3 mb-8"
      >
        <User className="w-6 h-6 text-[#D0E6FD]" />
        <h2 className="text-4xl bg-gradient-to-r from-white to-[#D0E6FD] bg-clip-text text-transparent inline-block">
          个人简介
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[#D0E6FD]/30 to-transparent ml-4" />
      </motion.div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Main Profile Card (2 columns) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="lg:col-span-2 relative rounded-3xl p-10 overflow-hidden h-full"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(30px)',
            border: '0.5px solid rgba(208, 230, 253, 0.15)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Decorative sparkle */}
          <motion.div
            className="absolute top-8 right-8"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-8 h-8 text-[#D0E6FD]/30" />
          </motion.div>

          {/* Name */}
          <h1 className="text-6xl mb-3 bg-gradient-to-br from-white via-[#D0E6FD] to-white/80 bg-clip-text text-transparent inline-block">
            徐嘉晨
          </h1>
          <p className="text-2xl text-[#D0E6FD] mb-8">Jasmine</p>

          {/* Subtitle with data visualization theme */}
          <div className="mb-10 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-[#D0E6FD]/50 to-transparent" />
            <span className="text-white/60 text-xs tracking-wider text-center leading-relaxed">
              Integrating Financial Acumen & Global Supply Chain Insights<br />with Data-Driven Decision Making
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-[#D0E6FD]/50 to-transparent" />
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
              <div 
                className="p-3 rounded-xl group-hover:scale-110 transition-transform"
                style={{
                  background: 'rgba(208, 230, 253, 0.1)',
                  border: '1px solid rgba(208, 230, 253, 0.2)',
                }}
              >
                <Phone className="w-5 h-5 text-[#D0E6FD]" />
              </div>
              <span>18805260824</span>
            </div>
            
            <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
              <div 
                className="p-3 rounded-xl group-hover:scale-110 transition-transform"
                style={{
                  background: 'rgba(208, 230, 253, 0.1)',
                  border: '1px solid rgba(208, 230, 253, 0.2)',
                }}
              >
                <Mail className="w-5 h-5 text-[#D0E6FD]" />
              </div>
              <span className="text-sm">Jasmine0261@foxmail.com</span>
            </div>
          </div>

          {/* Decorative glow */}
          <motion.div
            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(208, 230, 253, 0.2) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Right: Education Cards Stack (1 column) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <EducationCard
            school="香港理工大学"
            major="全球供应链管理"
            period="2024 - 2026"
            percentage={90}
            label="Top 10%"
            index={0}
          />
          <EducationCard
            school="悉尼大学"
            major="金融学 & 经济学"
            period="2020 - 2023"
            percentage={70}
            label="Top 30%"
            index={1}
          />
        </div>
      </div>
    </motion.section>
  );
}