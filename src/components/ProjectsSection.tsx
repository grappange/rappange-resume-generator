import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    client: "Thebe",
    title: "360 Feedback System",
    description: "Created a comprehensive 360 feedback system/website for a healthcare organisation.",
    type: "SaaS Product",
    tech: ["MVC", "C#", "Bootstrap", "MS SqlServer"],
  },
  {
    client: "KNZB",
    title: "Accreditation Management",
    description: "Development of an accreditation management system.",
    type: "Webapp Development",
    tech: ["MVC", "jQuery", "C#", "MS SqlServer"],
  },
  {
    client: "Wial",
    title: "Dynamics NAV Integration",
    description: "Created a website based on top of MS Dynamics NAV webservices.",
    type: "Web Development",
    tech: ["MS Dynamics Nav", "C#", "Bootstrap", "Angular"],
  },
];

export const ProjectsSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.client} className="border-border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardDescription className="text-primary font-semibold">Client: {project.client}</CardDescription>
              <CardTitle className="text-lg">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
