import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Logo IBBJ" 
              className="w-10 h-10 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="font-serif text-2xl font-bold text-white">IBBJ</span>
          </div>
          <p className="text-sm leading-relaxed opacity-80">
            Igreja Batista Bíblica em Joinville. Uma família para pertencer, um lugar para crescer na fé e servir ao Senhor.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/IBBJlle" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/ibbjoficial" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="https://www.youtube.com/@ibbjoinville" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Youtube size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold text-white mb-6 uppercase tracking-widest">Links Rápidos</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">A Igreja</Link></li>
            <li><Link to="/doctrine" className="hover:text-white transition-colors">No Que Cremos</Link></li>
            <li><Link to="/ministries" className="hover:text-white transition-colors">Ministérios</Link></li>
            <li><Link to="/giving" className="hover:text-white transition-colors">Contribuições</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold text-white mb-6 uppercase tracking-widest">Contato</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-primary shrink-0" />
              <span>Rua Brasil, 99 - Saguaçú<br />Joinville - SC | 89.221-561</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-primary shrink-0" />
              <span>(47) 99248-9083</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-primary shrink-0" />
              <span>contato@ibbjoinville.com.br</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold text-white mb-6 uppercase tracking-widest">Institucional</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li>CNPJ: 81.144.941/0001-09</li>
            <li>Vinculada à Comunhão Batista Bíblica Nacional (CBBN)</li>
            <li className="pt-2">
              <div className="font-semibold text-white mb-1">Dados Bancários:</div>
              <div>Sicredi<br />
              Banco 748-0<br />
              Ag. 2602<br />
              C/c 97.938-3<br />
              Igreja Batista Bíblica em Joinville</div>
            </li>
            <li className="pt-2">
              <div className="flex gap-4">
                <a href="https://instagram.com/ibbjoficial" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <Instagram size={18} /> @ibbjoficial
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 text-center text-xs opacity-50">
        © {new Date().getFullYear()} Igreja Batista Bíblica em Joinville. Fiel à Palavra, Focada em Cristo.
      </div>
    </footer>
  );
}
