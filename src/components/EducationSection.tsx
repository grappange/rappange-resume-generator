import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Languages, Heart } from "lucide-react";

const education = [
  {
    institution: "Avans Hogeschool",
    degree: "Hogere Informatica",
    year: "1997",
  },
  {
    institution: "Markenhage Scholengemeenschap",
    degree: "HAVO",
    year: "1993",
  },
];

const certifications = [
  {
    title: "MCSD",
    description: "Microsoft Certified Solution Developer",
    year: "2006",
  },
  {
    title: "MCAD",
    description: "Microsoft Certified Application Developer",
    year: "2006",
  },
  {
    title: "MSRS/MSAS @ Computrain",
    year: "2005",
  },
];

const languages = [
  { language: "Dutch", level: "Native" },
  { language: "English", level: "Professional" },
];

const interests = ["Playing Guitar", "Snowboarding", "Cooking"];

export const EducationSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      {/* Education */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-2">
          <GraduationCap className="w-7 h-7 text-primary" />
          Education
        </h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <Card key={index} className="border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">{edu.degree}</CardTitle>
                <CardDescription className="text-base">{edu.institution}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline">{edu.year}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-2">
          <Award className="w-7 h-7 text-primary" />
          Certifications
        </h2>
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">{cert.title}</CardTitle>
                {cert.description && (
                  <CardDescription className="text-base">{cert.description}</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <Badge variant="outline">{cert.year}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-2">
          <Languages className="w-7 h-7 text-primary" />
          Languages
        </h2>
        <Card className="border-border shadow-sm">
          <CardContent className="pt-6">
            <div className="space-y-3">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{lang.language}</span>
                  <Badge variant="secondary" className="bg-[hsl(var(--skill-tag))] text-[hsl(var(--skill-tag-foreground))]">
                    {lang.level}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Interests */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-2">
          <Heart className="w-7 h-7 text-primary" />
          Interests
        </h2>
        <Card className="border-border shadow-sm">
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <Badge key={index} variant="secondary" className="bg-[hsl(var(--skill-tag))] text-[hsl(var(--skill-tag-foreground))]">
                  {interest}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};
