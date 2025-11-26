import { Star } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl">
          <div className="mb-6 text-gold font-inter text-sm tracking-widest uppercase animate-fade-in">
            Seit 1987
          </div>
          
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
            "Die authentischste deutsche Küche"
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl font-inter mb-8 max-w-2xl animate-fade-in leading-relaxed">
            Genießen Sie traditionelle bayerische Spezialitäten in gemütlicher Atmosphäre. 
            Unsere Küche vereint zeitlose Rezepte mit frischen, regionalen Zutaten.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-4 animate-fade-in">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-white font-inter text-lg">
              4,9 <span className="text-white/70">(892 Bewertungen)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
