import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function Contact() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage('');
    
    try {
      // Tenta enviar via rota da Vercel
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });
      
      if (response.ok) {
        navigate('/thank-you');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao enviar a mensagem');
      }
    } catch (error: any) {
      console.error('Submit error:', error);
      setErrorMessage(error.message || 'Ocorreu um erro ao enviar. Por favor, tente novamente mais tarde.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="pt-20">
      <PageHero 
        title="Contato" 
        subtitle="Estamos aqui para ouvir você."
        image="https://picsum.photos/seed/church-building/1920/1080"
        alt="Fachada ou entrada receptiva, convidando para os cultos da Igreja Batista Bíblica em Joinville."
      />
      
      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-stone-100">
                <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">Telefone</h3>
                <p className="text-stone-600">(47) 99248-9083</p>
              </div>
              
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-stone-100">
                <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">E-mails</h3>
                <div className="text-stone-600 text-sm space-y-1">
                  <p>Geral: contato@ibbjoinville.com.br</p>
                  <p>Pastoral: pastorluizcarlos@ibbjoinville.com.br</p>
                  <p>Tesouraria: tesouraria@ibbjoinville.com.br</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-3xl shadow-sm border border-stone-100">
              <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Endereço</h3>
              <p className="text-stone-600 mb-6">Rua Brasil, 99 - Saguaçú, Joinville - SC | CEP: 89.221-561</p>
              <a
                href="https://maps.google.com/?q=Rua+Brasil+99+Joinville"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Abrir no Google Maps <Send size={16} />
              </a>
            </div>

            <a
              href="https://wa.me/5547992489083"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white p-6 rounded-3xl font-bold hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-[#25D366]/20"
            >
              <WhatsAppIcon />
              Conversar pelo WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl border border-stone-100">
            <h3 className="text-3xl font-serif font-bold mb-8">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-stone-400 uppercase tracking-widest mb-2">Nome Completo</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-400 uppercase tracking-widest mb-2">E-mail</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-400 uppercase tracking-widest mb-2">Mensagem</label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-lg hover:shadow-brand-primary/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <> <Loader2 className="animate-spin" size={20} /> Entregando... </>
                ) : (
                  <> <Send size={20} /> Enviar Mensagem </>
                )}
              </button>
              
              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 text-red-700 rounded-xl text-center font-medium"
                >
                  {errorMessage}
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
