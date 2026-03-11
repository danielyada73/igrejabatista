import { motion } from 'motion/react';
import { Users, Music, Heart } from 'lucide-react';
import PageHero from '../components/PageHero';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const ministries = [
  {
    title: 'União Feminina',
    leader: 'Rita',
    leaderImage: 'https://picsum.photos/seed/rita/400/400',
    icon: <Heart className="w-8 h-8" />,
    description: 'Um espaço de comunhão, oração e estudo bíblico para mulheres de todas as idades.',
    image: 'https://picsum.photos/seed/women-group/800/600'
  },
  {
    title: 'Música e Coral',
    leader: 'Joici',
    leaderImage: 'https://picsum.photos/seed/joici/400/400',
    icon: <Music className="w-8 h-8" />,
    description: 'Adoração através do louvor e desenvolvimento de talentos musicais para o serviço do Senhor.',
    image: 'https://picsum.photos/seed/music-choir/800/600'
  },
  {
    title: 'Jovens e Adolescentes',
    leader: 'Liderança Jovem',
    leaderImage: 'https://picsum.photos/seed/youth-leader/400/400',
    icon: <Users className="w-8 h-8" />,
    description: 'Discipulado e integration para a nova geração, vivendo o Evangelho de forma relevante.',
    image: 'https://picsum.photos/seed/youth-group/800/600'
  },
];

export default function Ministries() {
  return (
    <div className="pt-20">
      <PageHero 
        title="Ministérios" 
        subtitle="Descubra onde você pode servir e crescer em nossa comunidade."
        image="https://picsum.photos/seed/community/1920/1080"
        alt="Grupo de pessoas em comunhão, representando os ministérios de adoração e serviço da IBBJ."
      />
      
      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {ministries.map((min, index) => (
            <motion.div
              key={min.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={min.image}
                  alt={min.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="w-14 h-14 bg-brand-secondary rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                  {min.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{min.title}</h3>
                <p className="text-stone-600 leading-relaxed mb-8">
                  {min.description}
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-stone-100">
                  <img 
                    src={min.leaderImage} 
                    alt={min.leader} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-secondary"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-widest font-bold">Líder</p>
                    <p className="text-brand-primary font-bold">{min.leader}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-brand-primary rounded-[3rem] text-center text-white"
        >
          <h2 className="text-4xl font-serif mb-6">Quer Servir Conosco?</h2>
          <p className="text-stone-200 mb-10 max-w-2xl mx-auto text-lg">
            Existem muitas formas de colocar seus talentos à disposição do Reino. Entre em contato com nossa secretaria para saber como se tornar um voluntário.
          </p>
          <a
            href="https://wa.me/554734330000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-10 py-4 rounded-full inline-flex items-center gap-3 font-bold hover:bg-[#128C7E] transition-all transform hover:scale-105 shadow-lg hover:shadow-[#25D366]/20"
          >
            <WhatsAppIcon />
            Falar com a Secretaria
          </a>
        </motion.div>
      </div>
    </div>
  );
}
