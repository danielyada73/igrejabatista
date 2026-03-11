import { motion } from 'motion/react';
import { CreditCard, Copy, Check, QrCode } from 'lucide-react';
import { useState } from 'react';
import PageHero from '../components/PageHero';

export default function Giving() {
  const [copied, setCopied] = useState(false);
  const pixKey = "00.000.000/0001-00"; // Placeholder CNPJ

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-20">
      <PageHero 
        title="Dízimos e Ofertas" 
        subtitle="Contribuindo com alegria para a obra do Senhor."
        image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
        alt="Representação visual de generosidade e gratidão a Deus através dos dízimos e ofertas."
      />
      
      <div className="max-w-4xl mx-auto py-24 px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* PIX Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-6">
              <QrCode size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Contribua via PIX</h3>
            <p className="text-stone-500 mb-8 text-sm">Escaneie o QR Code ou copie a chave CNPJ abaixo.</p>
            
            <div className="bg-stone-50 p-4 rounded-2xl mb-8 border border-stone-200">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=00020101021126330014BR.GOV.BCB.PIX0111000000000005204000053039865802BR5913IBBJ%20JOINVILLE6009JOINVILLE62070503***6304E2B1"
                alt="PIX QR Code"
                className="w-40 h-40"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <button
              onClick={copyToClipboard}
              className="w-full flex items-center justify-between bg-stone-100 hover:bg-stone-200 px-6 py-4 rounded-xl transition-colors group"
            >
              <span className="font-mono text-sm text-stone-600">{pixKey}</span>
              {copied ? <Check size={18} className="text-emerald-600" /> : <Copy size={18} className="text-stone-400 group-hover:text-stone-600" />}
            </button>
            {copied && <span className="text-xs text-emerald-600 mt-2 font-bold uppercase tracking-widest">Copiado!</span>}
          </motion.div>

          {/* Bank Transfer Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 mx-auto">
              <CreditCard size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-center">Transferência Bancária</h3>
            <p className="text-stone-500 mb-8 text-sm text-center">Dados para depósito ou transferência DOC/TED.</p>
            
            <div className="space-y-6">
              <div className="flex justify-between border-b border-stone-100 pb-4">
                <span className="text-stone-400 text-sm uppercase tracking-widest">Banco</span>
                <span className="font-bold text-stone-800">Banco do Brasil (001)</span>
              </div>
              <div className="flex justify-between border-b border-stone-100 pb-4">
                <span className="text-stone-400 text-sm uppercase tracking-widest">Agência</span>
                <span className="font-bold text-stone-800">0000-0</span>
              </div>
              <div className="flex justify-between border-b border-stone-100 pb-4">
                <span className="text-stone-400 text-sm uppercase tracking-widest">Conta Corrente</span>
                <span className="font-bold text-stone-800">00000-0</span>
              </div>
              <div className="flex justify-between border-b border-stone-100 pb-4">
                <span className="text-stone-400 text-sm uppercase tracking-widest">Favorecido</span>
                <span className="font-bold text-stone-800">Igreja Batista Bíblica</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400 text-sm uppercase tracking-widest">CNPJ</span>
                <span className="font-bold text-stone-800">00.000.000/0001-00</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="bg-brand-secondary p-8 rounded-3xl text-center">
          <p className="text-stone-600 text-sm leading-relaxed">
            Sua contribuição é fundamental para a manutenção da igreja, auxílio a missionários e projetos sociais. Agradecemos por sua generosidade.
          </p>
        </div>
      </div>
    </div>
  );
}
