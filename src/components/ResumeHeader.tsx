import { Mail, Phone, MapPin, Calendar, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ResumeHeader = () => {
  return (
    <header className="relative bg-gradient-to-br from-primary to-accent text-primary-foreground py-16 px-6 rounded-lg shadow-lg mb-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-3">Gordon Rappange</h1>
        <p className="text-xl mb-2 text-primary-foreground/90">Senior Full-Stack .NET & BI Consultant</p>
        <p className="text-base mb-6 text-primary-foreground/80 max-w-2xl">
          AZ-204 & Safe 5 Certified • 16+ years in .NET, Azure, and BI solutions • Specialized in .NET Core, Angular, SQL Server BI
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Duigendreef 17, Oosterhout</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>06-14321733</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:g.rappange@grantic.nl" className="hover:underline">g.rappange@grantic.nl</a>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Born: September 5, 1974</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <a href="https://rappange.info" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg">
              Portfolio
            </Button>
          </a>
          <a href="http://nl.linkedin.com/in/grappange" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};
