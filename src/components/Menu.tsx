import { Card, CardContent } from "@/components/ui/card";
import foodImage from "@/assets/german-food.jpg";

const menuItems = [
  {
    category: "Vorspeisen",
    items: [
      { name: "Bayerische Brezn", description: "Frisch gebacken mit Butter", price: "4,50 €" },
      { name: "Obazda", description: "Pikanter Käseaufstrich mit Zwiebeln", price: "7,90 €" },
      { name: "Leberknödelsuppe", description: "Hausgemachte Kraftbrühe", price: "6,50 €" },
    ],
  },
  {
    category: "Hauptgerichte",
    items: [
      { name: "Wiener Schnitzel", description: "Vom Kalb mit Kartoffelsalat und Preiselbeeren", price: "24,90 €" },
      { name: "Schweinshaxe", description: "Knusprig gebraten mit Semmelknödel und Kraut", price: "19,90 €" },
      { name: "Sauerbraten", description: "In Rotwein mariniert mit Rotkohl und Knödel", price: "22,50 €" },
      { name: "Käsespätzle", description: "Hausgemacht mit Röstzwiebeln", price: "16,90 €" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Apfelstrudel", description: "Warm mit Vanilleeis", price: "7,50 €" },
      { name: "Schwarzwälder Kirschtorte", description: "Nach Originalrezept", price: "6,90 €" },
      { name: "Kaiserschmarrn", description: "Mit Zwetschgenröster", price: "8,90 €" },
    ],
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-primary font-inter text-sm tracking-widest uppercase mb-4">
            Unsere Speisekarte
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kulinarische Highlights
          </h2>
          <p className="text-muted-foreground text-lg font-inter max-w-2xl mx-auto">
            Entdecken Sie unsere Auswahl an traditionellen deutschen Gerichten, 
            zubereitet mit Liebe zum Detail und regionalen Zutaten.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {menuItems.map((section) => (
            <Card key={section.category} className="border-border/50 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-primary mb-6">
                  {section.category}
                </h3>
                <div className="space-y-6">
                  {section.items.map((item) => (
                    <div key={item.name} className="border-b border-border/30 pb-4 last:border-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-inter font-semibold text-foreground text-lg">
                          {item.name}
                        </h4>
                        <span className="font-playfair text-primary font-bold text-lg ml-4">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground font-inter text-sm">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
          <img 
            src={foodImage} 
            alt="German Food" 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center pb-8">
            <p className="text-white text-center font-playfair text-2xl italic">
              "Genuss mit allen Sinnen"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
