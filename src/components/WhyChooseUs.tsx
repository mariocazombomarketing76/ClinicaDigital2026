import React from 'react';
import { Hospital, Building2, Wallet2, Check } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-4 sm:px-8 md:px-10 max-w-[1280px] mx-auto overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full relative h-[380px] sm:h-[460px] lg:h-[500px] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,86,179,0.08)] border border-[#c2c6d4]/40 bg-[#f0f4f8]"
        >
          <img
            id="why-choose-us-image"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ602wp9nAJ43wQ7Hfw-oNiAj2hJutkyXzZX8bfWItLU7_iYYedPLioY5SYoQJ5-qLKgwM_fLptPcNXpuptJiulV091mpvTJKJbP74lrd5UWf-zmjvcdygP1U7ZE15XOZGVdROGXfSZkBiw71nK51Jqr4O09p1mFoV0rbzRQJJ8b9xFy1drVs4BZZt-xX7otSuxiYr54oH1Q2a3a57EpDFOhyALoySoxSGoUk1Ks9x9kpSticRmVay"
            alt="Consultório médico moderno e acolhedor da clínica Saúde para Todos"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </motion.div>

        {/* Right Column: Features */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-8"
        >
          <div className="space-y-3">
            <h2
              id="why-choose-us-title"
              className="text-3xl md:text-4xl font-bold text-[#191c1d] tracking-tight"
            >
              Por que nos escolher?
            </h2>
            <p
              id="why-choose-us-subtitle"
              className="text-base text-[#424752] leading-relaxed"
            >
              Nosso compromisso é com a sua saúde e tranquilidade, oferecendo um ambiente seguro e acolhedor.
            </p>
          </div>

          <ul className="space-y-6">
            {/* Feature 1 */}
            <li id="feature-medicos-experientes" className="flex items-start gap-4">
              <div className="mt-1 bg-[#e3f2fd] p-2.5 rounded-full text-[#003f87] shrink-0">
                <Hospital className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-[#191c1d]">
                  Médicos Experientes
                </h3>
                <p className="text-base text-[#424752] leading-relaxed">
                  Nossa equipe é formada por especialistas altamente qualificados e em constante atualização.
                </p>
              </div>
            </li>

            {/* Feature 2 */}
            <li id="feature-instalacoes-modernas" className="flex items-start gap-4 border-t border-[#c2c6d4]/30 pt-6">
              <div className="mt-1 bg-[#e3f2fd] p-2.5 rounded-full text-[#003f87] shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-[#191c1d]">
                  Instalações Modernas
                </h3>
                <p className="text-base text-[#424752] leading-relaxed">
                  Ambiente equipado com tecnologia de ponta para diagnósticos precisos e tratamentos eficazes.
                </p>
              </div>
            </li>

            {/* Feature 3 */}
            <li id="feature-precos-acessiveis" className="flex items-start gap-4 border-t border-[#c2c6d4]/30 pt-6">
              <div className="mt-1 bg-[#e3f2fd] p-2.5 rounded-full text-[#003f87] shrink-0">
                <Wallet2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-[#191c1d]">
                  Preços Acessíveis
                </h3>
                <p className="text-base text-[#424752] leading-relaxed">
                  Acreditamos que saúde de qualidade deve estar ao alcance de todos, com valores justos.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
