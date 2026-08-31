import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Dra. Maria Fernanda Silveira',
    role: 'Paciente há 2 anos',
    text: 'O atendimento humanizado e o cuidado minucioso de toda a equipe médica me trouxeram muita tranquilidade. Agendar pelo Telegram é extremamente rápido e prático!',
    rating: 5,
    tag: 'Clínica Geral',
  },
  {
    id: 'testimonial-2',
    name: 'Carlos Eduardo Santos',
    role: 'Pai do Lucas (5 anos)',
    text: 'A ala de pediatria é fantástica. Meu filho se sentiu super confortável e a médica tirou todas as nossas dúvidas com extrema paciência e carinho.',
    rating: 5,
    tag: 'Pediatria',
  },
  {
    id: 'testimonial-3',
    name: 'Ana Paula Rocha',
    role: 'Paciente de Cardiologia',
    text: 'Instalações de primeiro mundo e profissionais de alto nível. Fiz meus exames cardiológicos com rapidez e precisão. Recomendo a todos da família!',
    rating: 5,
    tag: 'Cardiologia',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-24 px-4 sm:px-8 md:px-10 bg-[#f3f4f5] border-t border-[#c2c6d4]/20"
    >
      <div className="max-w-[1280px] mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-1.5 bg-[#e3f2fd] text-[#003f87] px-3 py-1 rounded-full text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#006e25]" />
            <span>Avaliações Verificadas</span>
          </div>
          <h2
            id="testimonials-title"
            className="text-3xl md:text-4xl font-bold text-[#191c1d] tracking-tight"
          >
            O que nossos pacientes dizem
          </h2>
          <p
            id="testimonials-subtitle"
            className="text-base text-[#424752] leading-relaxed"
          >
            A satisfação e o bem-estar de quem confia na nossa clínica todos os dias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl p-7 border border-[#c2c6d4]/40 hover:shadow-[0_8px_24px_rgba(0,86,179,0.06)] transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-medium bg-[#eef4fc] text-[#003f87] px-2.5 py-1 rounded-md">
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#424752] leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#d7e2ff] text-[#003f87] font-bold flex items-center justify-center text-sm shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#191c1d]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#727784]">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
