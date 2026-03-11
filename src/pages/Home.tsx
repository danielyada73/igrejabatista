import { motion } from 'motion/react';
import { Youtube, MapPin, ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
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
            src="https://picsum.photos/seed/church-interior/1920/1080"
            alt="Interior solene da Igreja Batista Bíblica em Joinville"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
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
            Fundamentada em uma Bíblia sobrenatural, que fala de um Cristo sobrenatural, de nascimento, vida e ressurreição sobrenaturais.
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
              <p className="font-bold text-brand-primary">Pr. Luiz Carlos Gomes <span className="font-normal text-stone-500">— Pastor Presidente</span></p>
              <p className="font-bold text-brand-primary">Pr. Edgar Kühn Sandri <span className="font-normal text-stone-500">— Pastor Emérito</span></p>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <img 
              src="https://picsum.photos/seed/pastor-luiz/600/800" 
              alt="Pr. Luiz Carlos Gomes" 
              className="rounded-2xl shadow-lg aspect-[3/4] object-cover"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://picsum.photos/seed/pastor-edgar/600/800" 
              alt="Pr. Edgar Sandri" 
              className="rounded-2xl shadow-lg aspect-[3/4] object-cover mt-8"
              referrerPolicy="no-referrer"
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
                "Tudo começou em 1985 com o chamado missionário do Pastor Armenius Clinton Holcomb. O que iniciou como um ponto de pregação no centro de Joinville, floresceu em uma igreja organizada em 1992".
              </p>
              <p className="font-serif italic text-brand-primary">
                "Em 1996, pela graça de Deus, inauguramos nossa sede própria na Rua Brasil, 99, onde permanecemos até hoje, servindo à comunidade de Saguaçú e região".
              </p>
            </div>
            <Link to="/about" className="mt-8 bg-brand-primary text-white px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-brand-primary/90 transition-all">
              Conheça nossa história completa <ArrowRight size={18} />
            </Link>
          </div>
          <div className="flex-1 relative">
            <img 
              src="https://picsum.photos/seed/church-legacy/800/1000" 
              alt="Legado IBBJ" 
              className="rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 text-center">
              <h3 className="text-xl font-serif font-bold mb-2">União Feminina</h3>
              <p className="text-brand-primary text-sm font-bold mb-4">Líder: Rita</p>
              <p className="text-stone-600 text-sm leading-relaxed">Liderada pela irmã Rita, focada no fortalecimento espiritual e comunhão das mulheres.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 text-center">
              <h3 className="text-xl font-serif font-bold mb-2">Música e Coral</h3>
              <p className="text-brand-primary text-sm font-bold mb-4">Líder: Joici</p>
              <p className="text-stone-600 text-sm leading-relaxed">Sob a liderança de Joici e equipe, dedicados a glorificar a Deus através dos hinos e cânticos espirituais.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 text-center">
              <h3 className="text-xl font-serif font-bold mb-2">Jovens e Adolescentes</h3>
              <p className="text-brand-primary text-sm font-bold mb-4">Liderança Jovem</p>
              <p className="text-stone-600 text-sm leading-relaxed">Preparando a próxima geração para um testemunho cristão íntegro e corajoso.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/ministries" className="text-brand-primary font-bold hover:underline">Ver todos os ministérios</Link>
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
