import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Developer",
    company: "Amadeus Hospitality",
    period: "2018 - 2020",
    description: "Responsible for the development (front and backend) of new functionality in an existing SPA (single page app) Property Management System (Hospitality) hosted in Azure. Part of a scrum team of 10 people including 5 Sr. developers (2 QA and a PO).",
    technologies: ["Azure DevOps", "C#", "Angular", "Webpack", "HTML/SASS", "SQL Azure"],
  },
  {
    title: "Senior Software Developer",
    company: "Rabobank",
    period: "2016 - 2018",
    description: "Responsible for the development of a workflow engine in an existing credit rating system and for the development of the data Warehouse for reporting. Worked in a scrum team of 12 people including seven experienced Sr. developers.",
    achievements: "UX improvements and improved time consuming creation of risk models",
    technologies: ["Vue/JavaScript", "C#", "SQL", "SQL BI"],
  },
  {
    title: "Senior Software Developer",
    company: "ABN AMRO",
    period: "2014 - 2016",
    description: "In a team of four responsible for the development of the prepayment Module of ABN Commercial Finance. A Windows application that handles the handling of applications for asset based (invoices/stocks) loans. In addition, realized a connection to a new core system (Aquarius) through Web services.",
    technologies: ["ASP.NET", "VB.NET", "SQLServer", "HPD – Aquarius"],
  },
  {
    title: "Senior Web Developer (Scrum Master)",
    company: "Sunweb",
    period: "2014",
    description: "Responsible of the development of a Gateway tool. This gateway tool (scheduled Windows application) imports accommodations, prices (including discounts), and inventories from vendors (hotels, apartments, campings, via XML links) to a central data warehouse of Sundio Group.",
    technologies: ["ASP.NET", "jQuery", "HTML/LESS", "C#.NET", "SQLServer"],
  },
  {
    title: "Senior Web Developer",
    company: "Visma (Raet)",
    period: "2012 - 2013",
    description: "The current payroll system of the barge made suitable for administration and accountants offices (project). Especially backend development work in C# in a 3-tier architecture with links to various internal (self-service, file online) and external parties (Deloitte, POSTNL).",
    technologies: ["ASP.NET", "jQuery", "EAV database model", "C#.NET", "SQLServer"],
  },
];

export const WorkExperience = () => {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-2">
        <Briefcase className="w-7 h-7 text-primary" />
        Work Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="border-border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <CardDescription className="text-base font-semibold text-primary mt-1">
                    {exp.company}
                  </CardDescription>
                </div>
                <Badge variant="outline" className="text-sm">
                  {exp.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
              {exp.achievements && (
                <div className="mb-3">
                  <p className="text-sm font-semibold text-foreground mb-1">Achievements:</p>
                  <p className="text-sm text-muted-foreground">{exp.achievements}</p>
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-[hsl(var(--skill-tag))] text-[hsl(var(--skill-tag-foreground))]">
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
