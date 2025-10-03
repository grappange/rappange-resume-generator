import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ResumeHeader = () => {
  return (
    <header className="relative bg-gradient-to-br from-primary to-accent text-primary-foreground py-16 px-6 rounded-lg shadow-lg mb-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-3">Gordon Rappange</h1>
        <p className="text-xl mb-2 text-primary-foreground/90">Senior Full-Stack Developer</p>
        <p className="text-base mb-6 text-primary-foreground/80 max-w-2xl">
          8+ years building rich web applications for clients worldwide. Specialized in .NET, Angular, and modern web technologies.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <a href="mailto:g.rappange@grantic.nl">
            <Button variant="secondary" size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              g.rappange@grantic.nl
            </Button>
          </a>
          <a href="https://rappange.info" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              rappange.info
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};
