import { motion, AnimatePresence } from 'motion/react';
import { Youtube, MapPin, ArrowRight, Calendar, Clock, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

// Importar imagens específicas
import pastorLuiz from '../lib/media/pastor-luiz.jpeg';
import pastorEdgar from '../lib/media/pastor-edgar.jpeg';
import liderRita from '../lib/media/lider-rita.jpeg';
import liderJoici from '../lib/media/lider-joici.jpeg';
import liderJovens from '../lib/media/lider-jovens.jpeg';
import liderPaulo from '../lib/media/lider-paulo.jpeg';
import heroImage from '../lib/media/WhatsApp Image 2026-03-04 at 18.13.34 (3).jpeg';

// Carregar vídeos dinamicamente
const videoModules = import.meta.glob('../lib/media/*.mp4', { eager: true });
const videos = Object.values(videoModules).map((mod: any) => mod.default);

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, []);

  const scrollToMap = () => {
    const element = document.getElementById('location');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Interior solene da Igreja Batista Bíblica em Joinville"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-brand-primary/70"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-serif text-white mb-6 leading-tight"
          >
            Igreja Batista Bíblica em Joinville: <br />
            <span className="italic font-light">Fiel à Palavra, Focada em Cristo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-200 mb-10 font-light tracking-wide max-w-3xl mx-auto"
          >
            Uma Bíblia divina, um Cristo eterno, nascido de virgem, vivido em santidade, ressuscitado em glória.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://youtube.com/@ibbjoinville"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-brand-primary/90 transition-all transform hover:scale-105"
            >
              <Youtube size={20} />
              Assista ao Culto ao Vivo
            </a>
            <button
              onClick={scrollToMap}
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-white/20 transition-all transform hover:scale-105"
            >
              <MapPin size={20} />
              Planeje sua Visita
            </button>
          </motion.div>
        </div>
      </section>

      {/* Boas-Vindas Pastorais */}
      <section className="py-24 px-6 bg-brand-secondary">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-serif text-brand-primary">Uma Palavra do Nosso Pastor</h2>
            <p className="text-stone-700 text-lg leading-relaxed italic">
              "Seja bem-vindo à IBBJ. Nossa missão, estabelecida pela Grande Comissão, é fazer discípulos, edificar a igreja e ensinar tudo o que o Senhor ordenou. Aqui, você encontrará uma congregação governada pelas leis de Cristo, exercendo os dons e privilégios da Sua Palavra".
            </p>
            <div className="pt-4 space-y-2">
              <p className="font-bold text-brand-primary">Pr. Edgar Kühn Sandri <span className="font-normal text-stone-500">— Pastor Presidente</span></p>
              <p className="font-bold text-brand-primary">Pr. Luiz Carlos Gomes <span className="font-normal text-stone-500">— Vice Presidente ou Co-Pastor</span></p>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <img
              src={pastorLuiz}
              alt="Pr. Luiz Carlos Gomes"
              className="rounded-2xl shadow-lg aspect-[3/4] object-cover"
            />
            <img
              src={pastorEdgar}
              alt="Pr. Edgar Sandri"
              className="rounded-2xl shadow-lg aspect-[3/4] object-cover mt-8"
            />
          </div>
        </div>
      </section>

      {/* Horários */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-primary mb-4">Junte-se a Nós em Adoração</h2>
            <p className="text-stone-500">Momentos dedicados ao ensino, louvor e intercessão.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-stone-50 rounded-3xl border border-stone-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Domingo de Manhã (09h)</h3>
              <p className="text-stone-600 leading-relaxed">
                Escola Bíblica Dominical. O momento dedicado ao ensino sistemático das Escrituras para todas as idades.
              </p>
            </div>

            <div className="p-8 bg-stone-50 rounded-3xl border border-stone-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Domingo à Noite (19:30h)</h3>
              <p className="text-stone-600 leading-relaxed">
                Culto de Celebração e Adoração. Louvor congregacional seguido da pregação expositiva da Palavra.
              </p>
            </div>

            <div className="p-8 bg-stone-50 rounded-3xl border border-stone-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Quarta-feira (20h)</h3>
              <p className="text-stone-600 leading-relaxed">
                Culto de Oração e Estudo Bíblico. Nossa reunião semanal para intercessão e aprofundamento teológico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Identidade e Diferenciais */}
      <section className="py-24 px-6 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Firmados na Rocha</h2>
            <p className="text-stone-400">Nossa base doutrinária e princípios litúrgicos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="text-brand-accent font-bold uppercase tracking-widest text-sm">As Escrituras</h4>
              <p className="text-stone-300 text-sm leading-relaxed">Cremos na Bíblia Sagrada como a verdade sem qualquer erro, sendo a única revelação completa de Deus ao homem.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-brand-accent font-bold uppercase tracking-widest text-sm">O Verdadeiro Deus</h4>
              <p className="text-stone-300 text-sm leading-relaxed">Adoramos ao Deus único, vivo e verdadeiro, que subsiste em três pessoas: Pai, Filho e Espírito Santo.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-brand-accent font-bold uppercase tracking-widest text-sm">Salvação pela Graça</h4>
              <p className="text-stone-300 text-sm leading-relaxed">Cremos que a salvação dos pecadores é inteiramente pela graça, através do sacrifício voluntário de Cristo no madeiro.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-brand-accent font-bold uppercase tracking-widest text-sm">Liturgia Bíblica</h4>
              <p className="text-stone-300 text-sm leading-relaxed">Nossos cultos observam o princípio de ordem e decência, focados na adoração a Deus e na edificação dos crentes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-serif text-brand-primary mb-8">Um Legado de Fé em Joinville</h2>
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
              <p>
                Em 1985, iniciou-se este trabalho Batista Bíblico em Joinville através de um ponto de pregação no centro do município, desenvolvendo-se progressivamente até nossa consolidação como igreja organizada em 1992.
              </p>
              <p className="font-serif italic text-brand-primary">
                "Em 1996, com a Graça de nosso Senhor Jesus Cristo, inauguramos nossa sede própria na Rua Brasil, no bairro Saguaçú, onde permanecemos até hoje servindo à nossa comunidade".
              </p>
            </div>
            <Link to="/about" className="mt-8 bg-brand-primary text-white px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-brand-primary/90 transition-all">
              Conheça nossa história completa <ArrowRight size={18} />
            </Link>
          </div>
          <div className="flex-1 relative">
            <img
              src={heroImage}
              alt="Legado IBBJ"
              className="rounded-[3rem] shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-brand-accent text-brand-primary p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-4xl font-serif font-bold">1985</p>
              <p className="text-xs uppercase tracking-widest font-bold">Fundação em Joinville</p>
            </div>
          </div>
        </div>
      </section>

      {/* Onde Você Pode Servir */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-primary mb-4">Onde Você Pode Servir</h2>
            <p className="text-stone-500">Ministérios e Vida em Comunidade.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 text-center flex flex-col items-center">
              <img src={liderRita} alt="Rita" className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-brand-primary" />
              <h3 className="text-xl font-serif font-bold mb-2">União Feminina</h3>
              <p className="text-brand-primary text-sm font-bold mb-4">Líder: Rita</p>
              <p className="text-stone-600 text-sm leading-relaxed">Focada no fortalecimento espiritual, estudo e comunhão das mulheres.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 text-center flex flex-col items-center">
              <img src={liderJoici} alt="Joici" className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-brand-primary" />
              <h3 className="text-xl font-serif font-bold mb-2">Coral</h3>
              <p className="text-brand-primary text-sm font-bold mb-4">Líder: Joici</p>
              <p className="text-stone-600 text-sm leading-relaxed">Dedicados a glorificar a Deus através de hinos, vozes e cânticos espirituais.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 text-center flex flex-col items-center">
              <img src={liderPaulo} alt="Paulo" className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-brand-primary" />
              <h3 className="text-xl font-serif font-bold mb-2">Música</h3>
              <p className="text-brand-primary text-sm font-bold mb-4">Líder: Paulo</p>
              <p className="text-stone-600 text-sm leading-relaxed">Adoração através do louvor instrumental e desenvolvimento de talentos.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 text-center flex flex-col items-center">
              <img src={liderJovens} alt="Liderança Jovem" className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-brand-primary" />
              <h3 className="text-xl font-serif font-bold mb-2">Jovens</h3>
              <p className="text-brand-primary text-sm font-bold mb-4">Liderança Jovem</p>
              <p className="text-stone-600 text-sm leading-relaxed">Preparando a próxima geração para um testemunho cristão íntegro e corajoso.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/ministries" className="text-brand-primary font-bold hover:underline">Ver todos os ministérios</Link>
          </div>
        </div>
      </section>

      {/* Carrossel de Vídeos */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-primary mb-4">Nossa Vida em Vídeo</h2>
            <p className="text-stone-500">Momentos especiais e mensagens de nossa comunidade.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden py-10 rounded-[2.5rem]">
              <motion.div
                className="flex w-full"
                animate={{ x: `-${activeIndex * (100 / videos.length)}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ width: `${videos.length * 100}%` }}
              >
                {videos.map((src, index) => (
                  <div
                    key={index}
                    className="w-full shrink-0 px-2 md:px-6"
                    style={{ width: `${100 / videos.length}%` }}
                  >
                    <div
                      className={`relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 transition-all duration-500 w-full ${
                        activeIndex === index 
                          ? 'border-brand-primary scale-100 opacity-100 z-10' 
                          : 'border-transparent opacity-50 grayscale scale-95'
                      }`}
                    >
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={src}
                        className="w-full h-full object-cover"
                        loop
                        muted={isMuted}
                        autoPlay
                        playsInline
                      />

                      {/* Overlay de Controle */}
                      <div
                        className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                        onClick={() => setIsMuted(!isMuted)}
                      >
                        <div className="bg-white/20 backdrop-blur-md p-6 rounded-full border border-white/30 text-white">
                          {isMuted ? <VolumeX size={32} /> : <Volume2 size={32} />}
                        </div>
                      </div>

                      {isMuted && activeIndex === index && (
                        <div className="absolute bottom-6 right-6 bg-brand-primary/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 pointer-events-none">
                          <VolumeX size={16} /> Clique para Ativar Áudio
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navegação do Carrossel */}
            <div className="flex justify-center gap-4 mt-8">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${activeIndex === index ? 'bg-brand-primary w-8' : 'bg-stone-300'
                    }`}
                  aria-label={`Ir para vídeo ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="bg-brand-secondary text-brand-primary px-8 py-3 rounded-full font-bold flex items-center gap-3 hover:bg-brand-primary hover:text-white transition-all shadow-md"
              >
                {isMuted ? (
                  <> <Volume2 size={20} /> Ativar Som de Todos </>
                ) : (
                  <> <VolumeX size={20} /> Mutar Todos </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif text-brand-primary mb-6">Venha nos Visitar</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-brand-primary shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-stone-800">Endereço</p>
                    <p className="text-stone-600">Rua Brasil, 99 - Saguaçú, Joinville-SC</p>
                    <p className="text-stone-400 text-sm">CEP: 89.221-561</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-brand-primary shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-stone-800">Horários de Culto</p>
                    <p className="text-stone-600">Domingos: 09h e 19:30h</p>
                    <p className="text-stone-600">Quartas: 20h</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[400px] rounded-3xl overflow-hidden shadow-xl border border-stone-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.711818276587!2d-48.844788!3d-26.287232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb05720e36b85%3A0x8f7f5a5a5a5a5a5a!2sR.%20Brasil%2C%2099%20-%20Sagua%C3%A7u%2C%20Joinville%20-%20SC%2C%2089221-110!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
