import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Anna Schmidt",
    rating: 5,
    date: "Vor 2 Wochen",
    text: "Absolut fantastisch! Das Schnitzel war perfekt zubereitet und die Atmosphäre ist unglaublich gemütlich. Der Service ist aufmerksam und freundlich. Definitiv mein neues Lieblingsrestaurant!",
  },
  {
    name: "Michael Weber",
    rating: 5,
    date: "Vor 1 Monat",
    text: "Die Schweinshaxe ist ein Traum! Knusprig außen, zart innen. Die Portionen sind großzügig und die Preise fair. Die bayerische Gemütlichkeit wird hier wirklich gelebt.",
  },
  {
    name: "Sabine Müller",
    rating: 5,
    date: "Vor 3 Wochen",
    text: "Hier stimmt einfach alles - vom Essen über die Weinauswahl bis zum herzlichen Service. Besonders empfehlenswert ist der Apfelstrudel zum Dessert. Wir kommen gerne wieder!",
  },
];

const Reviews = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-primary font-inter text-sm tracking-widest uppercase mb-4">
            Gästebewertungen
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Was unsere Gäste sagen
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber text-amber" />
              ))}
            </div>
            <span className="text-foreground font-inter text-xl ml-2">
              4,9 von 5 Sternen
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className="border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber text-amber" />
                  ))}
                </div>

                <p className="text-foreground font-inter mb-6 leading-relaxed">
                  "{review.text}"
                </p>

                <div className="border-t border-border/30 pt-4">
                  <p className="font-inter font-semibold text-foreground">
                    {review.name}
                  </p>
                  <p className="text-sm text-muted-foreground font-inter">
                    {review.date}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
