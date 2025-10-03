import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Good luck Gordon, it was great having you, anyone else will be lucky!",
    author: "Previous Client",
  },
  {
    text: "Gordon is very friendly and easy to work with. He integrated very quickly in our team. He's never afraid of doing the dirty work and he also likes sharing his knowledge. His vast experience of .NET was very useful to me.",
    author: "Team Member",
  },
  {
    text: "Gordon heeft laten zien dat hij in korte tijd structuur heeft kunnen aanbrengen en de kwaliteit van de software ontwikkeling heeft kunnen verhogen. Kortom goed werk geleverd.",
    author: "Project Lead",
  },
  {
    text: "Gordon heeft ons projectteam als Sr. Software Engineer versterkt en heeft een belangrijke bijdrage geleverd aan het ontwikkelen van de Prepayment module. Kernwoorden: resultaatgerichtheid, focus, rust, kwaliteit, teamspeler.",
    author: "ACF Team",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-l-4 border-l-[hsl(var(--quote-border))] shadow-sm">
            <CardContent className="pt-6">
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <p className="text-sm text-muted-foreground italic mb-3">{testimonial.text}</p>
              <p className="text-sm font-semibold text-foreground">— {testimonial.author}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
