import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-gold mb-4">
              Gasthof zur Linde
            </h3>
            <p className="text-white/70 font-inter text-sm leading-relaxed">
              Seit 1987 verwöhnen wir unsere Gäste mit authentischer deutscher Küche 
              in gemütlicher Atmosphäre.
            </p>
          </div>

          <div>
            <h4 className="font-inter font-semibold text-white mb-4">
              Schnelllinks
            </h4>
            <ul className="space-y-2 font-inter text-sm">
              <li>
                <a href="#about" className="text-white/70 hover:text-gold transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#menu" className="text-white/70 hover:text-gold transition-colors">
                  Speisekarte
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-gold transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-gold transition-colors">
                  Impressum
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-inter font-semibold text-white mb-4">
              Folgen Sie uns
            </h4>
            <div className="flex gap-4 mb-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-slate-dark transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-slate-dark transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-slate-dark transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-white/70 font-inter text-sm">
              info@gasthof-linde.de
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 font-inter text-sm">
            © 2024 Gasthof zur Linde. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
