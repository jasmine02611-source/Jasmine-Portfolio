import { motion } from 'motion/react';
import { ExternalLink, Sparkles, Zap } from 'lucide-react';

export default function FeaturedProjectCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="lg:col-span-2 lg:row-span-2 relative rounded-3xl p-8 overflow-hidden group"
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(30px)',
        border: '0.5px solid rgba(208, 230, 253, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
        style={{
          background: 'rgba(208, 230, 253, 0.15)',
          border: '1px solid rgba(208, 230, 253, 0.3)',
        }}
      >
        <Sparkles className="w-4 h-4 text-[#D0E6FD]" />
        <span className="text-sm text-[#D0E6FD]">核心作品</span>
      </motion.div>

      {/* Title */}
      <h3 className="text-3xl mb-2 text-white">供应链增效平台</h3>
      <p className="text-lg text-[#D0E6FD] mb-6">Intelligent SCM Dashboard</p>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Left: Screenshot */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(208, 230, 253, 0.2)',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1758876202980-0a28b744fb24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzI3ODYwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="SCM Platform Screenshot"
            className="w-full h-48 object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent" />
          
          {/* Overlay text */}
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white text-sm">数据驱动的供应链决策工具</p>
          </div>
        </motion.div>

        {/* Right: Key Features */}
        <div className="space-y-4">
          {/* AI-Driven Tag */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            className="p-4 rounded-2xl cursor-pointer"
            style={{
              background: 'rgba(208, 230, 253, 0.08)',
              border: '1px solid rgba(208, 230, 253, 0.2)',
              boxShadow: '0 0 20px rgba(208, 230, 253, 0.1)',
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-[#D0E6FD]" />
              <span className="text-white font-medium">AI-Driven</span>
            </div>
            <p className="text-sm text-white/60">智能算法驱动决策</p>
          </motion.div>

          {/* Data Analysis Tag */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            className="p-4 rounded-2xl cursor-pointer"
            style={{
              background: 'rgba(208, 230, 253, 0.08)',
              border: '1px solid rgba(208, 230, 253, 0.2)',
              boxShadow: '0 0 20px rgba(208, 230, 253, 0.1)',
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-[#D0E6FD]" />
              <span className="text-white font-medium">Data Analysis</span>
            </div>
            <p className="text-sm text-white/60">深度数据洞察</p>
          </motion.div>
        </div>
      </div>

      {/* Description */}
      <p className="text-white/70 mb-6 leading-relaxed">
        基于 Claude AI 驱动开发的供应链数字化工具平台，实现实时需求预测和采购战略看板功能，大幅提升运营效率。集成 DOH 仪表盘和 Kraljic 矩阵可视化，提供智能决策支持。
      </p>

      {/* Platform Modules - Capsule Tags */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {['需求预测', '库存管理', '风险中心', '采购战略', '供应商对比'].map((module, index) => (
          <motion.div
            key={module}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <div
              className="px-5 py-2 rounded-full flex items-center gap-2"
              style={{
                background: 'rgba(208, 230, 253, 0.08)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(208, 230, 253, 0.25)',
                boxShadow: '0 0 20px rgba(208, 230, 253, 0.15)',
              }}
            >
              <span className="text-white/90 text-sm">{module}</span>
            </div>
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              animate={{
                boxShadow: [
                  '0 0 10px rgba(208, 230, 253, 0.0)',
                  '0 0 25px rgba(208, 230, 253, 0.3)',
                  '0 0 10px rgba(208, 230, 253, 0.0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Live Demo Button */}
      <motion.a
        href="https://scm-platform.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl relative overflow-hidden group/btn"
        style={{
          background: 'linear-gradient(135deg, rgba(208, 230, 253, 0.2) 0%, rgba(22, 38, 96, 0.3) 100%)',
          border: '1px solid rgba(208, 230, 253, 0.4)',
          boxShadow: '0 0 30px rgba(208, 230, 253, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Animated glow */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(208, 230, 253, 0.4) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <span className="relative z-10 text-white font-medium">Live Demo</span>
        <ExternalLink className="relative z-10 w-5 h-5 text-[#D0E6FD] group-hover/btn:translate-x-1 transition-transform" />
      </motion.a>

      {/* Decorative glow effect */}
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(208, 230, 253, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}