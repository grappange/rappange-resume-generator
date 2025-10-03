import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer (.NET / Angular / Azure)",
    company: "BDO Holding B.V.",
    location: "Eindhoven",
    period: "May 2024 - Present",
    description: "As senior full stack .NET developer in a team of 8, worked on addressing security issues found by the Security Improvement Group. Working on a custom application developed in .NET WebForms (MVC/Angular) for time registration by all BDO employees (3,500) and the entire CRM and invoicing (including SQL Reports) process. Also mentored and onboarded junior developers.",
    technologies: ["Visual Studio 2022", "C#", "AngularJS", ".NET 4.8", "MVC", "SQLServer 2022", "SSRS", "Scrum", "Azure DevOps"],
  },
  {
    title: "Full Stack Developer (.NET / Angular / Azure / Sitecore)",
    company: "Achmea",
    location: "Tilburg",
    period: "December 2020 - April 2024",
    description: "Worked in a DevOps team on maintenance (adding new features) of web APIs for completing AOV insurance. Also co-responsible for maintaining portals/sales funnels built in Sitecore.",
    technologies: ["Visual Studio 2019/2022", "C#", "Angular 10", ".NET 4.8", ".NET Core", "Scrum", "Azure DevOps", "Streamserve", "SAP"],
  },
  {
    title: "Full Stack Developer (.NET / Angular / K8s / Azure)",
    company: "VGZ",
    location: "Arnhem",
    period: "December 2020 - April 2024",
    description: "Worked on the development of a voice chatbot. At VGZ's innovation department, a voice-chatbot was developed to handle customer contacts via telephone. Contributed to a management tool so that flow builders can develop flows (BPMN) to model conversation flows, such as address changes, querying reimbursements, etc.",
    technologies: ["Visual Studio 2019", "C#", "Angular 9", ".NET Core 5.0", "Scrum", "Azure DevOps", "Azure SQL", "K8s", "Azure Dev Spaces", "Telecats API"],
  },
  {
    title: "Full Stack Developer (Azure)",
    company: "Amadeus Hospitality",
    location: "Breda",
    period: "August 2018 - June 2020",
    description: "In a scrum team of 8 people (5 dev, 2 QA, 1 PO) responsible for the development of a cloud Property Management System. The team's domain was accounting (folios/ledgers/postings/payment). Did both front-end (Angular) and backend (C#) development. Also heavily involved in test automation through deployment of Selenium in frontend and SpecFlow in backend.",
    technologies: ["Visual Studio 2019", "C#", "Angular 6", "Scrum", "Azure DevOps", "Azure SQL", "Selenium (BDD)", "SpecFlow"],
  },
  {
    title: "Sr. BI Developer",
    company: "Rabobank International",
    location: "Utrecht",
    period: "January 2016 - July 2018",
    description: "Responsible for the development of a workflow engine in an existing credit rating system and for the development of the data warehouse for reporting. Worked in a scrum team of 12 people including seven experienced Sr. developers, all according to TDD.",
    achievements: "UX improvements and improved time-consuming creation of risk models",
    technologies: ["Visual Studio 2017", "C#", "Scrum", "TFS 2017", "SQLServer 2016", "SSIS/SSRS", "Selenium", "SpecFlow", "TDD", "MVC", "CQRS", "SOLID"],
  },
  {
    title: "Sr. (BI) Developer / Architect",
    company: "ABN AMRO Commercial Finance",
    location: "Den Bosch",
    period: "October 2014 - December 2015",
    description: "In a team of four responsible for the development of the Prepayment Module of ACF. A Windows application that handles applications for asset-based (invoices/stocks) loans. In addition, realized a connection to a new core system (Aquarius) through web services.",
    technologies: ["Visual Studio 2013/2015", "VB.NET", "Scrum", "TFS 2013", "SQLServer 2014", "SSIS", "HPD - Aquarius"],
  },
  {
    title: "Sr. Developer / Scrum Master",
    company: "Sundio Group / Sunweb",
    location: "Rotterdam",
    period: "January 2014 - September 2014",
    description: "Development of the gateway tool. This tool (scheduled Windows application) imports accommodations, prices (including discounts), and inventories from vendors (via XML links) to a central database of Sundio. The data is then exported via stored procedures to the back office system named Davinci.",
    technologies: ["Visual Studio 2012", "ASP.NET", "C#.NET", "Scrum/Agile", "Unit/Integration tests (TDD)", "SVN", "TeamCity", "SQLServer 2012", "SSIS/SSRS"],
  },
  {
    title: "Sr. Developer",
    company: "Raet / YouForce",
    location: "Amersfoort",
    period: "March 2012 - December 2013",
    description: "Made the current Raet payroll system suitable for Administration and Accountants Offices (AAK project). Mainly backend development work in C# in a 3-tier architecture with links to various internal (self service, dossier online) and external parties (Deloitte, PostNL).",
    technologies: ["Visual Studio 2012", "ASP.NET", "C#.NET 4.0", "Scrum", "Unit/Integration tests (BDD)", "TFS 2012", "SQLServer 2008 R2", "EAV database model"],
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
                  {exp.location && (
                    <CardDescription className="text-sm mt-1">
                      {exp.location}
                    </CardDescription>
                  )}
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
