import { motion } from 'motion/react';
import PageHero from '../components/PageHero';

const timeline = [
  { year: '1985', title: 'Início do Trabalho', description: 'O Pastor Armenius Clinton Holcomb inicia o trabalho Batista Bíblico em Joinville através de um ponto de pregação na Rua Lages, 338.' },
  { year: '1989', title: 'Mudança para o Saguaçú', description: 'Transferência do trabalho para a Rua Iririú, 1330, no bairro Saguaçú.' },
  { year: '1990', title: 'Foco na Sede Própria', description: 'Mudança para a Rua São José dos Cedros, 209, com o objetivo de adquirir uma sede própria.' },
  { year: '1992', title: 'Organização da Igreja', description: 'A igreja deixa de ser um ponto de pregação para se tornar uma igreja organizada. Aquisição do terreno e início da construção.' },
  { year: '1996', title: 'Sede Própria', description: 'Mudança definitiva para a casa própria na Rua Brasil, 99, onde a igreja permanece até hoje.' },
];

const pastors = [
  { name: 'Pr. Luiz Carlos Gomes', role: 'Pastor Presidente (2022 - Presente)', image: 'https://picsum.photos/seed/pastor-luiz/600/600' },
  { name: 'Pr. Edgar Kühn Sandri', role: 'Pastor Emérito', image: 'https://picsum.photos/seed/pastor-edgar/600/600' },
];

const collaborators = [
  'Missionário Armenius Clinton Holcomb (1985 – 1992)',
  'Pr. Daniel Miranda (1987)',
  'Ir. Tomé Cosmos de Faria (1987)',
  'Ir. Siegfried F. Hogrefe (1898 – 1990)',
  'Ir. Edson Paiva (1990 – 1991)',
  'Ir. Germano Henrrique Hogrefe (1990 – 1991)',
  'Ir. Edgar Kühn Sandri (1992 – 1995)',
  'Pr. Salmo de Oliveira Flores (1993)',
  'Pr. Marcos Freire (1994-1995)',
  'Pr. Fernando Cunha dos Santos (2016 – 2022)'
];

export default function About() {
  return (
    <div className="pt-20">
      <PageHero 
        title="Nossa História" 
        subtitle="Uma trajetória de fé e compromisso com a Palavra de Deus em Joinville."
        image="https://picsum.photos/seed/church-legacy/1920/1080"
        alt="Interior solene de igreja batista representando o legado da IBBJ desde 1985 em Joinville."
      />
      
      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="max-w-3xl mx-auto mb-24 text-center">
          <h2 className="text-4xl font-serif mb-8">Desde 1985 Servindo ao Senhor</h2>
          <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
            <p>
              Em 1985, atendendo o chamado missionário e dirigido pelo Espírito Santo, o Pastor Armenius Clinton Holcomb juntamente com sua família, vindos dos Estados Unidos da América, iniciou o trabalho Batista Bíblico em Joinville através de um ponto de pregação.
            </p>
            <p>
              Após passar por diferentes locais nos bairros Centro e Saguaçú, o Senhor nos despertou em 1992 para nos tornarmos uma igreja organizada. Com um passo de fé, adquirimos o terreno onde iniciamos a construção da igreja com o firme propósito de sairmos do aluguel.
            </p>
            <p>
              Em fevereiro de 1996, mudamos definitivamente para nossa sede própria na Rua Brasil, 99, onde estamos até os dias atuais. O que começou como um templo para 80 pessoas foi ampliado pela graça de Deus e hoje comporta 150 adoradores.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mb-32">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-stone-200 hidden md:block" />
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className={`p-8 bg-white rounded-3xl shadow-sm border border-stone-100 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <span className="text-brand-primary font-bold text-2xl mb-2 block">{item.year}</span>
                    <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
                    <p className="text-stone-600">{item.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-brand-primary rounded-full relative z-10 hidden md:block" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pastors */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Liderança Atual</h2>
            <p className="text-stone-500">Homens dedicados ao ministério da Palavra.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {pastors.map((pastor) => (
              <motion.div
                key={pastor.name}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-brand-primary rounded-full transform scale-105 opacity-0 group-hover:opacity-10 transition-opacity" />
                  <img
                    src={pastor.image}
                    alt={`Foto do ${pastor.name}, ${pastor.role} da IBBJ`}
                    className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg mx-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-1">{pastor.name}</h3>
                <p className="text-brand-primary font-medium uppercase tracking-widest text-sm">{pastor.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Collaborators */}
        <section className="bg-stone-100 rounded-[3rem] p-12 md:p-20">
          <h2 className="text-3xl font-serif text-center mb-12">Colaboradores Deste Ministério</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {collaborators.map((name, index) => (
              <div key={index} className="flex items-center gap-3 text-stone-600">
                <div className="w-2 h-2 bg-brand-accent rounded-full shrink-0" />
                <span className="text-sm">{name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
