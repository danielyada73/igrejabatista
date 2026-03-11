import { motion } from 'motion/react';
import { CheckCircle, ArrowLeft, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

import heroImage from '../lib/media/WhatsApp Image 2026-03-04 at 18.13.34 (3).jpeg';

export default function ThankYou() {
  return (
    <div className="pt-20">
      <PageHero 
        title="Mensagem Recebida" 
        subtitle="Agradecemos o seu contato e interesse em nossa comunidade."
        image={heroImage}
        alt="Imagem de fundo da igreja para a página de agradecimento"
      />

      <div className="max-w-4xl mx-auto py-24 px-6 text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 15, stiffness: 200 }}
          className="inline-flex items-center justify-center w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full mb-10"
        >
          <CheckCircle size={48} />
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-serif text-brand-primary mb-6"
        >
          Deus te Abençoe!
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-stone-600 mb-12 leading-relaxed max-w-2xl mx-auto"
        >
          Sua mensagem foi entregue com sucesso aos nossos ministérios. Em breve, um de nossos líderes ou pastores entrará em contato com você.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link
            to="/"
            className="bg-brand-primary text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-primary/90 transition-all shadow-lg hover:shadow-brand-primary/20"
          >
            <ArrowLeft size={20} />
            Voltar para a Home
          </Link>
          <Link
            to="/ministries"
            className="bg-stone-100 text-brand-primary px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-stone-200 transition-all"
          >
            <Heart size={20} />
            Conheça Nossos Ministérios
          </Link>
        </motion.div>
      </div>

      {/* Decorative Verse */}
      <section className="bg-brand-secondary py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl font-serif italic text-brand-primary mb-4">
            "Regozijai-vos sempre. Orai sem cessar. Em tudo dai graças..."
          </p>
          <p className="font-bold text-stone-500 uppercase tracking-widest text-sm">
            1 Tessalonicenses 5:16-18
          </p>
        </div>
      </section>
    </div>
  );
}
