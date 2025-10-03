import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, BarChart3, TestTube } from "lucide-react";

const techCategories = [
  {
    title: "Development",
    icon: Code,
    items: [
      "Visual Studio .NET 2003-2022",
      "Visual Studio Code",
      "Azure AI Foundry",
      "Azure DevOps",
      ".NET Core 3.1-9.0",
      ".NET Framework 4.8",
      "ASP.NET / WinForms (WPF)",
      "C# and VB.NET",
      "JavaScript/JSON/Ajax/jQuery",
      "MVC (Razor)",
      "Angular 11",
      "XCode (Objective-C and Swift iOS)",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: [
      "Microsoft SqlServer 2018/2022 (including SSIS/SSAS)",
      "SQL Azure",
      "Oracle 9i/10i",
    ],
  },
  {
    title: "Reporting & BI",
    icon: BarChart3,
    items: [
      "SqlServer Reporting Server 2022",
      "SqlServer Analysis Server / Power BI",
      "SqlServer Integration Server",
      "Crystal Reports 2008/12",
      "Telerik Reporting",
    ],
  },
  {
    title: "Testing Frameworks",
    icon: TestTube,
    items: [
      "nUnit",
      "MSTest",
      "Selenium",
      "SpecFlow",
      "BDD / TDD",
    ],
  },
];

export const TechnologiesSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Technologies & Tools</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {techCategories.map((category) => {
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
                  {category.items.map((item) => (
                    <Badge key={item} variant="secondary" className="bg-[hsl(var(--skill-tag))] text-[hsl(var(--skill-tag-foreground))]">
                      {item}
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
