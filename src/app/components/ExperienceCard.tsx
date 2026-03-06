import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Briefcase } from 'lucide-react';

interface ExperienceModule {
  title: string;
  description: string;
  details: string;
  metrics: Array<{ icon: string; text: string }>;
}

interface Experience {
  id: string;
  company: string;
  role: string;
  tags: string[];
  modules: ExperienceModule[];
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -5;
    const rotateYValue = ((x - centerX) / centerX) * 5;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
    >
      <motion.div
        className="rounded-3xl p-8 cursor-pointer transition-all duration-300"
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(30px)',
          border: '0.5px solid rgba(208, 230, 253, 0.15)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        }}
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
          boxShadow: rotateX !== 0 || rotateY !== 0 
            ? '0 20px 60px rgba(208, 230, 253, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            : '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            {/* Company with Icon */}
            <div className="flex items-center gap-3 mb-3">
              <div 
                className="p-2 rounded-xl"
                style={{
                  background: 'rgba(208, 230, 253, 0.1)',
                  border: '1px solid rgba(208, 230, 253, 0.2)',
                }}
              >
                <Briefcase className="w-5 h-5 text-[#D0E6FD]" />
              </div>
              <h3 className="text-3xl bg-gradient-to-r from-white to-[#D0E6FD] bg-clip-text text-transparent inline-block">
                {experience.company}
              </h3>
            </div>
            <p className="text-xl text-white/80 mb-4">{experience.role}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-sm"
                  style={{
                    background: 'rgba(208, 230, 253, 0.1)',
                    border: '1px solid rgba(208, 230, 253, 0.2)',
                    color: '#D0E6FD',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="p-2 rounded-lg"
            style={{
              background: 'rgba(208, 230, 253, 0.1)',
            }}
          >
            <ChevronDown className="w-6 h-6 text-[#D0E6FD]" />
          </motion.div>
        </div>

        {/* Expanded Content */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="space-y-6 pt-6 border-t border-white/10">
            {experience.modules.map((module, i) => (
              <div key={i} className="space-y-3">
                <h4 className="text-xl text-[#D0E6FD]">{module.title}</h4>
                
                <div className="space-y-2 text-white/80">
                  <p className="leading-relaxed">{module.description}</p>
                  <p className="leading-relaxed text-white/60">{module.details}</p>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-4 mt-4">
                  {module.metrics.map((metric, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg"
                      style={{
                        background: 'rgba(208, 230, 253, 0.1)',
                        border: '1px solid rgba(208, 230, 253, 0.2)',
                      }}
                    >
                      <span className="text-xl">{metric.icon}</span>
                      <span className="text-white/90 text-sm">{metric.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Specular Highlight */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2) 50%, transparent)',
          }}
        />
      </motion.div>
    </motion.div>
  );
}