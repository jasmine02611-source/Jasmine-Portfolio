import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  featured: boolean;
  imageUrl: string;
  details: {
    overview: string;
    features: string[];
    tech: string;
  };
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onExpand: () => void;
}

export default function ProjectCard({ project, index, onExpand }: ProjectCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -8;
    const rotateYValue = ((x - centerX) / centerX) * 8;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      layoutId={`project-${project.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
      className={project.featured ? 'lg:col-span-2' : ''}
    >
      <motion.div
        className="relative rounded-3xl overflow-hidden cursor-pointer group h-full"
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
        onClick={onExpand}
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: rotateX !== 0 || rotateY !== 0 ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
            }}
          />
          
          {project.featured && (
            <div
              className="absolute top-4 right-4 px-4 py-2 rounded-full text-sm"
              style={{
                background: 'rgba(22, 38, 96, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(208, 230, 253, 0.3)',
                color: '#D0E6FD',
              }}
            >
              精选项目
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-2xl mb-1 text-white group-hover:text-[#D0E6FD] transition-colors">
                {project.title}
              </h3>
              <p className="text-[#D0E6FD] mb-3">{project.subtitle}</p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.1, rotate: 45 }}
              className="p-2 rounded-lg bg-white/10 group-hover:bg-[#162660]/30 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </motion.div>
          </div>

          <p className="text-white/70 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs"
                style={{
                  background: 'rgba(208, 230, 253, 0.15)',
                  border: '1px solid rgba(208, 230, 253, 0.3)',
                  color: '#D0E6FD',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: rotateX !== 0 || rotateY !== 0 ? 1 : 0,
          }}
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(208, 230, 253, 0.15) 0%, transparent 70%)',
          }}
        />

        {/* Specular Highlight */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3) 50%, transparent)',
          }}
        />
      </motion.div>
    </motion.div>
  );
}