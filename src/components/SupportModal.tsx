import React from 'react';
import { X, Send, Phone, MessageSquare, Clock, HelpCircle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="support-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs"
          onClick={onClose}
        >
          <motion.div
            id="support-modal-card"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#c2c6d4]/40 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="btn-close-support-modal"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-[#727784] hover:text-[#191c1d] rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-2 pr-8">
              <div className="inline-flex items-center gap-1.5 bg-[#e3f2fd] text-[#003f87] px-3 py-1 rounded-full text-xs font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>Atendimento Rápido</span>
              </div>
              <h3 className="text-2xl font-bold text-[#191c1d] tracking-tight">
                Central de Atendimento
              </h3>
              <p className="text-sm text-[#424752]">
                Escolha o canal de sua preferência para falar diretamente com nossa equipe da Saúde para Todos.
              </p>
            </div>

            {/* Channels */}
            <div className="mt-6 space-y-3">
              {/* Telegram */}
              <a
                href="https://t.me/ClinicasCazombo_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-[#0056b3] text-white hover:bg-[#003f87] transition-all shadow-sm group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <Send className="w-5 h-5 fill-current" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold">Bot do Telegram</div>
                    <div className="text-xs text-blue-100">@ClinicasCazombo_bot (24/7)</div>
                  </div>
                </div>
                <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">
                  Iniciar
                </span>
              </a>

              {/* FAQ Quick Highlights */}
              <div className="bg-[#f8f9fa] rounded-xl p-4 border border-[#c2c6d4]/40 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#003f87] uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4" />
                  <span>Dúvidas Frequentes</span>
                </div>
                <ul className="text-xs text-[#424752] space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#006e25] shrink-0 mt-0.5" />
                    <span><strong>Agendamento:</strong> Realizado em segundos pelo Telegram ou formulário.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#006e25] shrink-0 mt-0.5" />
                    <span><strong>Horários:</strong> Seg-Sex: 07h às 19h | Sáb: 08h às 14h.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#006e25] shrink-0 mt-0.5" />
                    <span><strong>Valores acessíveis:</strong> Consultas e exames com preços sociais.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer action */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg text-sm font-medium text-[#424752] hover:bg-gray-100 transition-colors"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
