import React from 'react';
import { Stethoscope, Baby, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface SpecialtyCardProps {
  id: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  delay: number;
}

const specialties = [
  {
    id: 'specialty-clinico-geral',
    title: 'Clínico Geral',
    description: 'Avaliação completa da sua saúde, prevenção e tratamento das principais condições médicas do dia a dia.',
    icon: <Stethoscope className="w-7 h-7" />,
    iconBg: 'bg-[#d7e2ff]',
    iconColor: 'text-[#003f87]',
    delay: 0.1,
  },
  {
    id: 'specialty-pediatria',
    title: 'Pediatria',
    description: 'Acompanhamento especializado para o desenvolvimento saudável e bem-estar das crianças.',
    icon: <Baby className="w-7 h-7" />,
    iconBg: 'bg-[#83fc8e]/40',
    iconColor: 'text-[#006e25]',
    delay: 0.2,
  },
  {
    id: 'specialty-cardiologia',
    title: 'Cardiologia',
    description: 'Prevenção, diagnóstico e tratamento de doenças do coração e do sistema circulatório.',
    icon: <Heart className="w-7 h-7 fill-current" />,
    iconBg: 'bg-[#ffdad6]',
    iconColor: 'text-[#93000a]',
    delay: 0.3,
  },
];

export const Specialties: React.FC = () => {
  return (
    <section
      id="services"
      className="py-20 md:py-24 px-4 sm:px-8 md:px-10 bg-[#f3f4f5] border-y border-[#c2c6d4]/20 transition-colors"
    >
      <div className="max-w-[1280px] mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3.5">
          <h2
            id="specialties-title"
            className="text-3xl md:text-4xl font-bold text-[#191c1d] tracking-tight"
          >
            Nossas Especialidades
          </h2>
          <p
            id="specialties-subtitle"
            className="text-base text-[#424752] leading-relaxed"
          >
            Cuidado abrangente com profissionais dedicados em diversas áreas da medicina.
          </p>
        </div>

        {/* 3 Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {specialties.map((spec) => (
            <motion.div
              key={spec.id}
              id={spec.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: spec.delay }}
              className="bg-white rounded-xl p-7 sm:p-8 border border-[#c2c6d4]/40 hover:shadow-[0_12px_32px_rgba(0,86,179,0.08)] hover:border-[#0056b3]/30 transition-all duration-300 flex flex-col items-start gap-5 group"
            >
              <div
                className={`w-14 h-14 ${spec.iconBg} rounded-xl flex items-center justify-center ${spec.iconColor} group-hover:scale-105 transition-transform duration-200 shadow-2xs`}
              >
                {spec.icon}
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-[#191c1d] tracking-tight">
                  {spec.title}
                </h3>
                <p className="text-base text-[#424752] leading-relaxed">
                  {spec.description}
                </p>
              </div>

              <div className="mt-auto pt-2">
                <a
                  href="https://t.me/ClinicasCazombo_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-[#0056b3] hover:text-[#003f87] transition-colors gap-1.5"
                >
                  <span>Agendar Consulta</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
