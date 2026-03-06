import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

interface EducationCardProps {
  school: string;
  major: string;
  period: string;
  percentage: number;
  label: string;
  index: number;
}

export default function EducationCard({ school, major, period, percentage, label, index }: EducationCardProps) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3 }
      }}
      className="relative rounded-3xl p-6 h-full group"
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(30px)',
        border: '0.5px solid rgba(208, 230, 253, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Circular Progress in Top Right */}
      <div className="absolute top-6 right-6">
        <div className="relative w-20 h-20">
          <svg className="transform -rotate-90 w-20 h-20">
            {/* Background circle */}
            <circle
              cx="40"
              cy="40"
              r={radius}
              stroke="rgba(208, 230, 253, 0.1)"
              strokeWidth="6"
              fill="none"
            />
            {/* Progress circle */}
            <motion.circle
              cx="40"
              cy="40"
              r={radius}
              stroke="url(#gradient)"
              strokeWidth="6"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
              strokeLinecap="round"
              animate={{ strokeDashoffset }}
              transition={{ duration: 1.5, delay: index * 0.2 + 0.5, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D0E6FD" />
                <stop offset="100%" stopColor="#162660" />
              </linearGradient>
            </defs>
          </svg>
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs text-white/50">{label}</span>
            <span className="text-sm font-semibold text-[#D0E6FD]">{percentage}%</span>
          </div>
        </div>
      </div>

      {/* Icon */}
      <div className="mb-4">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{
            background: 'rgba(208, 230, 253, 0.1)',
            border: '1px solid rgba(208, 230, 253, 0.2)',
          }}
        >
          <GraduationCap className="w-6 h-6 text-[#D0E6FD]" />
        </div>
      </div>

      {/* Content */}
      <div className="pr-24">
        <h3 className="text-xl mb-2 text-white">{school}</h3>
        <p className="text-base text-[#D0E6FD] mb-2">{major}</p>
        <p className="text-sm text-white/50">{period}</p>
      </div>

      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(208, 230, 253, 0.1) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  );
}