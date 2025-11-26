import interiorImage from "@/assets/interior.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="text-primary font-inter text-sm tracking-widest uppercase mb-4">
              Unsere Geschichte
            </div>
            
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tradition trifft Moderne
            </h2>
            
            <p className="text-muted-foreground text-lg font-inter mb-6 leading-relaxed">
              Seit 1987 verwöhnt der Gasthof zur Linde seine Gäste mit authentischer deutscher Küche. 
              Was als kleines Familienrestaurant begann, ist heute ein beliebter Treffpunkt für Genießer 
              aus nah und fern.
            </p>
            
            <p className="text-muted-foreground text-lg font-inter mb-8 leading-relaxed">
              Unsere Küche verbindet traditionelle bayerische Rezepte mit modernen Akzenten. 
              Wir arbeiten ausschließlich mit regionalen Lieferanten zusammen und legen größten 
              Wert auf Qualität und Frische.
            </p>

            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-playfair font-bold text-primary mb-2">35+</div>
                <div className="text-sm font-inter text-muted-foreground">Jahre Erfahrung</div>
              </div>
              <div>
                <div className="text-3xl font-playfair font-bold text-primary mb-2">150+</div>
                <div className="text-sm font-inter text-muted-foreground">Sitzplätze</div>
              </div>
              <div>
                <div className="text-3xl font-playfair font-bold text-primary mb-2">50+</div>
                <div className="text-sm font-inter text-muted-foreground">Gerichte</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={interiorImage} 
                alt="Restaurant Interior" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
