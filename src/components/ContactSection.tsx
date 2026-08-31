import React, { useState } from 'react';
import { Send, Phone, MapPin, Clock, Mail, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    especialidade: 'Clínico Geral',
    mensagem: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-4 sm:px-8 md:px-10 max-w-[1280px] mx-auto"
    >
      <div className="bg-white rounded-2xl border border-[#c2c6d4]/40 p-6 sm:p-10 lg:p-12 shadow-[0_16px_40px_rgba(0,86,179,0.06)] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#003f87] bg-[#e3f2fd] px-3 py-1 rounded-full inline-block">
                Atendimento Rápido
              </span>
              <h2
                id="contact-title"
                className="text-3xl sm:text-4xl font-bold text-[#191c1d] tracking-tight"
              >
                Entre em Contato Conosco
              </h2>
              <p className="text-base text-[#424752] leading-relaxed">
                Estamos prontos para atender você e sua família. Agende sua consulta diretamente pelo Telegram ou envie uma mensagem.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <a
                href="https://t.me/ClinicasCazombo_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#0056b3] text-white hover:bg-[#003f87] transition-all shadow-md group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Send className="w-6 h-6 fill-current text-white" />
                </div>
                <div>
                  <div className="text-xs text-blue-100 uppercase tracking-wide font-semibold">
                    Canal Principal
                  </div>
                  <div className="text-base font-bold">
                    Agendar no Telegram (@ClinicasCazombo_bot)
                  </div>
                </div>
              </a>

              <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#c2c6d4]/40 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#e3f2fd] text-[#003f87] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#727784] font-medium">Horário de Funcionamento</div>
                  <div className="text-sm font-semibold text-[#191c1d]">
                    Segunda a Sexta: 07h às 19h | Sábados: 08h às 14h
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#c2c6d4]/40 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#e3f2fd] text-[#003f87] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#727784] font-medium">Localização</div>
                  <div className="text-sm font-semibold text-[#191c1d]">
                    Centro Médico Saúde para Todos
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-[#f8f9fa] p-6 sm:p-8 rounded-xl border border-[#c2c6d4]/30">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-16 h-16 bg-[#83fc8e]/40 text-[#006e25] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-[#191c1d]">
                  Mensagem Enviada com Sucesso!
                </h3>
                <p className="text-sm text-[#424752] max-w-md mx-auto">
                  Obrigado pelo contato, <span className="font-semibold text-[#003f87]">{formData.nome}</span>. Nossa equipe responderá em instantes pelo telefone informado ou você pode iniciar o atendimento imediato no Telegram.
                </p>
                <div className="pt-4">
                  <a
                    href="https://t.me/ClinicasCazombo_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0056b3] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#003f87] transition-colors"
                  >
                    <Send className="w-4 h-4 fill-current" />
                    <span>Abrir Chat no Telegram</span>
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-[#191c1d]">
                  Envie uma mensagem rápida
                </h3>
                <p className="text-sm text-[#424752]">
                  Preencha os campos abaixo para solicitar informações ou agendamento de consultas.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <label htmlFor="input-name" className="text-xs font-semibold text-[#191c1d]">
                      Seu Nome Completo *
                    </label>
                    <input
                      id="input-name"
                      type="text"
                      required
                      placeholder="Ex: Maria Silva"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#c2c6d4] text-sm focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="input-phone" className="text-xs font-semibold text-[#191c1d]">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      id="input-phone"
                      type="tel"
                      required
                      placeholder="Ex: (11) 99999-9999"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#c2c6d4] text-sm focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="select-specialty" className="text-xs font-semibold text-[#191c1d]">
                    Especialidade Desejada
                  </label>
                  <select
                    id="select-specialty"
                    value={formData.especialidade}
                    onChange={(e) => setFormData({ ...formData, especialidade: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#c2c6d4] text-sm focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent transition-all"
                  >
                    <option value="Clínico Geral">Clínico Geral</option>
                    <option value="Pediatria">Pediatria</option>
                    <option value="Cardiologia">Cardiologia</option>
                    <option value="Outros Serviços e Exames">Outros Serviços e Exames</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="input-message" className="text-xs font-semibold text-[#191c1d]">
                    Mensagem ou Dúvida (Opcional)
                  </label>
                  <textarea
                    id="input-message"
                    rows={3}
                    placeholder="Descreva brevemente o motivo da consulta ou sua dúvida..."
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#c2c6d4] text-sm focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="btn-submit-contact"
                  className="w-full bg-[#0056b3] hover:bg-[#003f87] text-white font-semibold py-3 rounded-lg text-sm transition-all duration-200 shadow-sm cursor-pointer active:scale-98"
                >
                  Enviar Solicitação
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
