import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2 } from "lucide-react";

const clients = [
  { name: "Amadeus Hospitality", industry: "Travel" },
  { name: "ABN AMRO Commercial Finance", industry: "Financial" },
  { name: "BDO", industry: "Financial" },
  { name: "Interpolis/Achmea", industry: "Insurance" },
  { name: "Pon", industry: "Automotive" },
  { name: "Procter & Gamble", industry: "Consumer Goods" },
  { name: "Rabobank", industry: "Financial" },
  { name: "Raet/YouForce", industry: "HRM & Payroll" },
  { name: "Sunweb Group", industry: "Travel" },
  { name: "Shell", industry: "Internal Global Audit" },
  { name: "VGZ", industry: "Healthcare Insurance" },
];

export const NotableClients = () => {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-2">
        <Building2 className="w-7 h-7 text-primary" />
        Notable Clients & Projects
      </h2>
      <Card className="border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Organizations I've Worked With</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clients.map((client) => (
              <div key={client.name} className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">{client.name}</p>
                  <p className="text-sm text-muted-foreground">{client.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
