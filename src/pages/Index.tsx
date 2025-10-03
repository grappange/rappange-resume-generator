import { ResumeHeader } from "@/components/ResumeHeader";
import { CareerSummary } from "@/components/CareerSummary";
import { NotableClients } from "@/components/NotableClients";
import { SkillsSection } from "@/components/SkillsSection";
import { WorkExperience } from "@/components/WorkExperience";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { EducationSection } from "@/components/EducationSection";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <ResumeHeader />
        <CareerSummary />
        <NotableClients />
        <SkillsSection />
        <WorkExperience />
        <TechnologiesSection />
        <ProjectsSection />
        <EducationSection />
        <TestimonialsSection />
        
        <section className="mt-12 text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-12 border border-border">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Interested in Working Together?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Looking for an experienced full-stack developer to build your web app or ship your software product? 
            Let's start a conversation.
          </p>
          <a href="mailto:g.rappange@grantic.nl">
            <Button size="lg" className="gap-2">
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
          </a>
        </section>
      </div>
    </div>
  );
};

export default Index;
