import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, FolderKanban, X } from 'lucide-react';
import HeroSection from './components/HeroSection';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import FeaturedProjectCard from './components/FeaturedProjectCard';
import SkillTags from './components/SkillTags';

export default function App() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const experiences = [
    {
      id: 'expeditors',
      company: 'Expeditors',
      role: '空运出口采购实习生',
      tags: ['华南区运力调度', '成本优化', 'SOP 搭建'],
      modules: [
        {
          title: '全球航司动态询价与采购策略',
          description: '主动执行供应商动态询价，深度参与美线每周采购策略制定',
          details: '根据市场波段灵活调整采购方案，并与航司紧密协调确保旺季舱位配额',
          metrics: [
            { icon: '📈', text: '15+ 家核心航司对接' },
            { icon: '💰', text: 'Effective Cost Reduction' }
          ]
        },
        {
          title: '精密排仓计划与 Consol 载具效能优化',
          description: '负责华南区核心航司（亚/欧/美线）的运力调拨与精密排仓执行',
          details: '运用 Excel 计算 Consol Effect (拼货效益)，通过调整泡重比优化货物配载结构',
          metrics: [
            { icon: '🚢', text: '2000+ TEU 月均货量' },
            { icon: '✅', text: '99% 舱位保障率' }
          ]
        }
      ]
    },
    {
      id: 'galaxy',
      company: '中国银河证券',
      role: '行业研究实习生',
      tags: ['硬科技赛道深度研究与数据建模'],
      modules: [
        {
          title: '产业链研究与投资价值评估',
          description: '主导 AR 眼镜及工业机器人产业链研究，构建投资价值评估框架',
          details: '运用 SQL/Wind 处理工业机器人底层数据',
          metrics: [
            { icon: '🔍', text: '10+ 页深度调研内容纳入年度报告' },
            { icon: '💻', text: 'SQL/Wind 数据建模' }
          ]
        }
      ]
    }
  ];

  const projects = [
    {
      id: 'hp-optimization',
      title: 'HP 欧洲区供应链优化建模',
      subtitle: '库存降低 30%',
      description: '通过 Excel 构建 Order-up-to 模型，评估空运和海运成本，实现总库存降低 30%',
      tags: ['Excel 建模', '成本优化'],
      featured: false,
      imageUrl: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIUCUyMHByaW50ZXIlMjBtYW51ZmFjdHVyaW5nJTIwYXNzZW1ibHklMjBsaW5lfGVufDF8fHx8MTc3Mjc4ODY2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      details: {
        overview: '为 HP 欧洲区设计并实施供应链优化方案，通过精确建模实现显著成本节约。',
        features: [
          'Order-up-to 库存模型构建',
          '空运与海运成本对比分析',
          '库存水平优化 - 降低 30%',
          '需求预测准确度提升'
        ],
        tech: 'Excel, VBA, 统计分析, 优化算法'
      }
    }
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ background: '#0a1628' }}>
      {/* Aurora Background Effect */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Base gradient */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(22, 38, 96, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, rgba(208, 230, 253, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 30%, rgba(22, 38, 96, 0.3) 0%, transparent 50%)',
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Aurora Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aurora1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#a78bfa', stopOpacity: 0.3 }} />
              <stop offset="50%" style={{ stopColor: '#60a5fa', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#22d3ee', stopOpacity: 0.3 }} />
            </linearGradient>
            <linearGradient id="aurora2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 0.3 }} />
              <stop offset="50%" style={{ stopColor: '#a78bfa', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 0.3 }} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Aurora Line 1 */}
          <motion.path
            d="M-100,200 Q400,100 800,300 T1600,400"
            stroke="url(#aurora1)"
            strokeWidth="3"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.6, 0.6, 0],
              y: [0, -50, 50, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Aurora Line 2 */}
          <motion.path
            d="M-100,500 Q300,400 700,600 T1600,500"
            stroke="url(#aurora2)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.5, 0.5, 0],
              y: [0, 30, -30, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          {/* Aurora Line 3 */}
          <motion.path
            d="M-100,800 Q500,700 900,900 T1600,800"
            stroke="url(#aurora1)"
            strokeWidth="2.5"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.4, 0.4, 0],
              y: [0, -40, 40, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </svg>

        {/* Additional glow effects */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 139, 250, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, -100, 100, 0],
            y: [0, 50, -50, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Experience Section */}
        <section className="mt-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-12"
          >
            <Briefcase className="w-6 h-6 text-[#D0E6FD]" />
            <h2 className="text-4xl bg-gradient-to-r from-white to-[#D0E6FD] bg-clip-text text-transparent inline-block">
              实习经历
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#D0E6FD]/30 to-transparent ml-4" />
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-12"
          >
            <FolderKanban className="w-6 h-6 text-[#D0E6FD]" />
            <h2 className="text-4xl bg-gradient-to-r from-white to-[#D0E6FD] bg-clip-text text-transparent inline-block">
              项目作品
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#D0E6FD]/30 to-transparent ml-4" />
          </motion.div>

          {/* Bento Grid for Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Featured Project - Large Card */}
            <FeaturedProjectCard />

            {/* Other Projects */}
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onExpand={() => setExpandedProject(project.id)}
              />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-24 mb-16">
          <SkillTags />
        </section>
      </div>

      {/* Expanded Project Modal */}
      <AnimatePresence>
        {expandedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setExpandedProject(null)}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              layoutId={`project-${expandedProject}`}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 md:p-12"
              style={{
                background: 'rgba(10, 22, 40, 0.95)',
                backdropFilter: 'blur(30px)',
                border: '0.5px solid rgba(208, 230, 253, 0.2)',
                boxShadow: '0 0 60px rgba(208, 230, 253, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setExpandedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {projects.find(p => p.id === expandedProject) && (() => {
                const project = projects.find(p => p.id === expandedProject)!;
                return (
                  <div>
                    <h3 className="text-4xl mb-2 text-white">{project.title}</h3>
                    <p className="text-xl text-[#D0E6FD] mb-6">{project.subtitle}</p>
                    
                    <div className="mb-8 rounded-2xl overflow-hidden">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>

                    <div className="space-y-6 text-white/90">
                      <div>
                        <h4 className="text-xl mb-3 text-[#D0E6FD]">项目概述</h4>
                        <p className="leading-relaxed">{project.details.overview}</p>
                      </div>

                      <div>
                        <h4 className="text-xl mb-3 text-[#D0E6FD]">核心功能</h4>
                        <ul className="space-y-2">
                          {project.details.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-[#D0E6FD] mr-2">▸</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl mb-3 text-[#D0E6FD]">技术栈</h4>
                        <p className="leading-relaxed">{project.details.tech}</p>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 rounded-full text-sm"
                            style={{
                              background: 'rgba(208, 230, 253, 0.2)',
                              border: '1px solid rgba(208, 230, 253, 0.3)',
                              color: '#D0E6FD',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}