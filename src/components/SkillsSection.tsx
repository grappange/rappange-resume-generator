import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["Redux/Angular", "JavaScript", "Webpack/Gulp/Grunt", "HTML/CSS/SASS/LESS"],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["VB/C#", "SQLServer/MySQL", "Node.js", "MS Queue"],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: ["Azure DevOps", "Unit Testing", "Selenium/Specflow", "WordPress/Shopify", "Docker"],
  },
];

export const SkillsSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Technical Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.title} className="border-border shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Icon className="w-5 h-5 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-[hsl(var(--skill-tag))] text-[hsl(var(--skill-tag-foreground))]">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
