import { Card, CardContent } from "@/components/ui/card";

export const CareerSummary = () => {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Career Summary</h2>
      <Card className="border-border shadow-sm">
        <CardContent className="pt-6">
          <p className="text-muted-foreground leading-relaxed">
            Gordon Rappange is a full stack .NET developer with more than fifteen years' experience in software 
            development and implementations. He worked for different IT contract agencies like CGI, BT Consulting 
            and IMN. The last nine years he has been working as a freelance .NET consultant. Because of the many 
            roles that Gordon has successfully fulfilled, he is able to make a good contribution to a project in 
            many ways. Great dedication, motivation and quality of delivered work are characteristics that belong 
            to Gordon. Gordon is MCAD and MCSD certified and has recently dealt with Microsoft Windows Azure 
            (cloud websites, services and mobile apps) and iOS app development. He keeps his knowledge up to date 
            by attending various developer days such as SDN, Devnology, Microsoft TechDays, .NET South community 
            and is member of the Agile Meetup Breda.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
