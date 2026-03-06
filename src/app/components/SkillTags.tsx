import { motion } from 'motion/react';
import { Zap, Users, TrendingUp, Award, Calculator, Sparkles } from 'lucide-react';

export default function SkillTags() {
  const skills = [
    { label: '强执行力', icon: Zap },
    { label: '沟通协调', icon: Users },
    { label: '数据洞察', icon: TrendingUp },
    { label: '量化分析', icon: Calculator },
    { label: 'AI工具赋能', icon: Sparkles },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-8"
      >
        <Award className="w-6 h-6 text-[#D0E6FD]" />
        <h2 className="text-4xl bg-gradient-to-r from-white to-[#D0E6FD] bg-clip-text text-transparent inline-block">
          技能通
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[#D0E6FD]/30 to-transparent ml-4" />
      </motion.div>

      {/* Capsule Tags */}
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="relative group cursor-default"
            >
              {/* Glowing capsule */}
              <div
                className="relative px-8 py-4 rounded-full flex items-center gap-3 overflow-hidden"
                style={{
                  background: 'rgba(208, 230, 253, 0.08)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(208, 230, 253, 0.3)',
                  boxShadow: '0 0 30px rgba(208, 230, 253, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Animated glow background */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(208, 230, 253, 0.3) 0%, transparent 70%)',
                  }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex items-center gap-3">
                  <Icon className="w-5 h-5 text-[#D0E6FD]" />
                  <span className="text-white text-lg font-medium">{skill.label}</span>
                </div>

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                  }}
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              </div>

              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(208, 230, 253, 0.0)',
                    '0 0 40px rgba(208, 230, 253, 0.4)',
                    '0 0 20px rgba(208, 230, 253, 0.0)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}