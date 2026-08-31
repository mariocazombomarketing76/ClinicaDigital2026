import React from 'react';
import { Send, Headphones, CheckCircle2, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenSupport: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSupport, onOpenBooking }) => {
  return (
    <section
      id="hero-section"
      className="relative pt-28 sm:pt-32 pb-16 md:pb-24 px-4 sm:px-8 md:px-10 max-w-[1280px] mx-auto overflow-hidden"
    >
      {/* Subtle background container layer */}
      <div className="absolute inset-0 bg-[#d7e2ff]/30 z-0 rounded-3xl mt-12 md:mt-20 mx-2 sm:mx-4 md:mx-6 pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-12 py-4 md:py-6">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-6 text-left"
        >
          {/* Badge */}
          <div
            id="hero-humanized-badge"
            className="inline-flex items-center gap-2 bg-[#e3f2fd] px-3.5 py-1.5 rounded-full text-[#006e25] font-semibold text-xs border border-[#E0E0E0] shadow-xs"
          >
            <CheckCircle2 className="w-4 h-4 fill-[#006e25] text-white" />
            <span>Atendimento Humanizado</span>
          </div>

          {/* Heading */}
          <h1
            id="hero-main-title"
            className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#191c1d] tracking-tight leading-[1.15]"
          >
            Cuidado de Qualidade para <span className="text-[#003f87]">Todos</span>
          </h1>

          {/* Description */}
          <p
            id="hero-description"
            className="text-base sm:text-lg text-[#424752] max-w-xl leading-relaxed font-normal"
          >
            A clínica Saúde para Todos oferece atendimento médico humanizado e acessível. Nossa missão é cuidar da sua saúde com excelência e empatia.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              id="hero-cta-telegram"
              href="https://t.me/mariocazombo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0056b3] hover:bg-[#003f87] text-white font-medium text-base px-6 py-3.5 rounded-lg transition-all duration-200 shadow-[0_8px_24px_rgba(0,86,179,0.2)] hover:shadow-[0_12px_28px_rgba(0,86,179,0.3)] flex items-center justify-center gap-2.5 active:scale-98"
            >
              <Send className="w-5 h-5 fill-current" />
              <span>Agendar via Telegram</span>
            </a>

            <button
              id="hero-cta-support"
              onClick={onOpenSupport}
              className="border border-[#727784]/40 hover:border-[#006e25] hover:text-[#006e25] text-[#003f87] font-medium text-base px-6 py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2.5 bg-white shadow-xs hover:bg-[#f8f9fa] cursor-pointer active:scale-98"
            >
              <Headphones className="w-5 h-5" />
              <span>Falar com Atendimento</span>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Hero Image & Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1 w-full relative"
        >
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,86,179,0.08)] border border-[#c2c6d4]/40 bg-[#f0f4f8]">
            <img
              id="hero-clinic-image"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMf248b3-Sz8JLpCKUG_lL6O7hNNHe7u_YjGkV06ecVrHjdci64a3lYq7ujGs4njlfKRV5jq6RvGUoEams9ULnnTLB-h-t6zG8QLBEXIJcOONH--U1359uL-j_YFzQxkxbmvJ2CyX_ohNG5whpMUsjabDTBPk68gwRO-I78BMF2ccfPJBy-Joc6ZBD0siUrVroYblZa2CG7YASm2TCIpo10gLDTgK41Codmi--ghlVqxXXv2JxYotY"
              alt="Ambiente moderno da clínica Saúde para Todos com profissional de saúde e paciente conversando em sala acolhedora"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="eager"
            />
          </div>

          {/* Floating Trust Badge */}
          <div
            id="hero-trust-badge"
            className="absolute -bottom-5 sm:-bottom-6 left-4 sm:-left-6 bg-white p-4 sm:p-4.5 rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.1)] border border-[#c2c6d4]/40 flex items-center gap-3.5 z-20 backdrop-blur-sm"
          >
            <div className="w-12 h-12 bg-[#e3f2fd] rounded-full flex items-center justify-center text-[#003f87] shrink-0">
              <Calendar className="w-6 h-6 text-[#003f87]" />
            </div>
            <div>
              <div className="text-xs font-medium text-[#424752] uppercase tracking-wider">
                Disponibilidade
              </div>
              <div className="text-sm sm:text-base font-bold text-[#191c1d]">
                Agendamento Rápido
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
