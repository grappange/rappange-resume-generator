import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const CareerSummary = () => {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Profile</h2>
      <Card className="border-border shadow-sm">
        <CardContent className="pt-6 space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Gordon Rappange is an experienced full stack Microsoft .NET and BI consultant (AZ-204 and Safe 5 Agile 
            Software Engineer certified) with more than 16 years of experience in system development, data solutions, 
            and cloud implementations. He combines in-depth technical knowledge with a strong sense of project dynamics, 
            making him a valuable link in both development and data teams.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Over the past eight years, Gordon has worked for various leading recruitment agencies (including BT Consulting, 
            Logica/CGI, and IMN) and is currently active as an independent entrepreneur under the name Grantic B.V. He has 
            successfully executed complex projects within government, finance, and logistics, where he was responsible for 
            the design, implementation, and integration of scalable software and BI solutions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            His expertise includes .NET (C#, ASP.NET Core, Web API), Azure (App Services, Functions, DevOps), SQL Server 
            (SSIS, SSRS, SSAS), Entity Framework, Blazor, Angular, and Power BI. Gordon is AZ-204 certified and continuously 
            follows training through Pluralsight, Microsoft events, and professional communities such as .NET Zuid, Agile Breda, 
            and Devnology.
          </p>
          <div className="pt-4 border-t border-border">
            <h3 className="font-semibold text-foreground mb-3">Specializations</h3>
            <div className="flex flex-wrap gap-2">
              {[".NET Core", "Azure", "SQL Server BI", "C#", "REST APIs", "Entity Framework", 
                "Agile/Scrum", "CI/CD", "Azure DevOps", "SSIS/SSRS/SSAS"].map((spec) => (
                <Badge key={spec} className="bg-primary/10 text-primary hover:bg-primary/20">
                  {spec}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
