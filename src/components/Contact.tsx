import { Clock, MapPin, Phone, Mail, Instagram, Facebook, Mic } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const openingHours = [
    { day: "Montag", hours: "Ruhetag" },
    { day: "Dienstag - Donnerstag", hours: "17:00 - 23:00" },
    { day: "Freitag", hours: "17:00 - 00:00" },
    { day: "Samstag - Sonntag", hours: "12:00 - 00:00" },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-primary font-inter text-sm tracking-widest uppercase mb-4">
            Besuchen Sie uns
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kontakt & Öffnungszeiten
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Opening Hours */}
          <Card className="border-border/50 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground">
                  Öffnungszeiten
                </h3>
              </div>
              <div className="space-y-3">
                {openingHours.map((item) => (
                  <div key={item.day} className="flex justify-between font-inter">
                    <span className="text-muted-foreground">{item.day}</span>
                    <span className="text-foreground font-semibold">{item.hours}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Address */}
          <Card className="border-border/50 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground">
                  Adresse
                </h3>
              </div>
              <div className="space-y-4 font-inter">
                <p className="text-foreground font-semibold">
                  Gasthof zur Linde
                </p>
                <p className="text-muted-foreground">
                  Marienplatz 12<br />
                  80331 München<br />
                  Deutschland
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Route planen
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="border-border/50 shadow-lg md:col-span-2 lg:col-span-1">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground">
                  Kontakt
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-inter">
                  <Phone className="w-5 h-5 text-primary" />
                  <a 
                    href="tel:+498912345678" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +49 89 1234 5678
                  </a>
                </div>
                <div className="flex items-center gap-3 font-inter">
                  <Mail className="w-5 h-5 text-primary" />
                  <a 
                    href="mailto:info@gasthof-linde.de" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    info@gasthof-linde.de
                  </a>
                </div>
                
                <div className="pt-4 border-t border-border/30">
                  <p className="text-sm text-muted-foreground font-inter mb-3">
                    Folgen Sie uns
                  </p>
                  <div className="flex gap-3">
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reservation CTA */}
        <div className="mt-12 text-center">
          <Card className="border-primary/20 shadow-xl max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-12">
              <h3 className="font-playfair text-3xl font-bold text-foreground mb-4">
                Tisch reservieren
              </h3>
              <p className="text-muted-foreground font-inter mb-6">
                Sichern Sie sich Ihren Platz für ein unvergessliches kulinarisches Erlebnis
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter"
                  onClick={() => {
                    const widget = document.querySelector('vapi-widget');
                    if (widget) {
                      widget.setAttribute('mode', 'chat');
                      (widget as any).open?.();
                    }
                  }}
                >
                  Online reservieren
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter group"
                  onClick={() => {
                    const widget = document.querySelector('vapi-widget');
                    if (widget) {
                      widget.setAttribute('mode', 'voice');
                      (widget as any).open?.();
                    }
                  }}
                >
                  <Mic className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  KI-Sprachbuchung
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter"
                  asChild
                >
                  <a href="tel:+498912345678">Anrufen</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
