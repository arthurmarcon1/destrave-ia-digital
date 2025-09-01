import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Prompts",
      description: "Acesso completo à biblioteca de prompts",
      price: "R$ 97",
      period: "pagamento único",
      popular: false,
      features: [
        "1500+ Prompts profissionais",
        "Atualizações constantes",
        "Suporte por email",
        "Acesso vitalício",
        "Categorias organizadas"
      ]
    },
    {
      name: "Curso + Certificado",
      description: "Curso completo com certificação oficial",
      price: "R$ 197",
      period: "pagamento único",
      popular: false,
      features: [
        "Curso completo de IA",
        "Certificado Instituto3e",
        "40+ horas de conteúdo",
        "Projetos práticos",
        "Suporte por email",
        "Acesso vitalício"
      ]
    },
    {
      name: "Combo Completo",
      description: "Prompts + Curso com desconto especial",
      price: "R$ 247",
      period: "pagamento único",
      originalPrice: "R$ 294",
      popular: true,
      features: [
        "1500+ Prompts profissionais",
        "Curso completo de IA",
        "Certificado Instituto3e",
        "Atualizações vitalícias",
        "Suporte prioritário",
        "Bônus exclusivos",
        "Comunidade VIP"
      ]
    },
    {
      name: "Mentoria VIP",
      description: "Acompanhamento personalizado 1:1",
      price: "R$ 497",
      period: "por mês",
      popular: false,
      features: [
        "Tudo do Combo Completo",
        "Mentoria 1:1 semanal",
        "Análise de projetos",
        "Suporte no WhatsApp",
        "Sessões ao vivo",
        "Acesso antecipado",
        "Networking exclusivo"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Planos e Preços
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Escolha o plano ideal para você
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Invista no seu futuro profissional com nossos planos flexíveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border-border/50 shadow-card hover:shadow-primary transition-smooth ${
                plan.popular ? 'border-primary/50 shadow-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                  🔥 Mais Popular
                </div>
              )}
              
              <CardHeader className={plan.popular ? 'pt-12' : ''}>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription className="text-sm">{plan.description}</CardDescription>
                
                <div className="pt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">{plan.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.period}</p>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "hero" : "gradient"} 
                  className="w-full"
                >
                  {plan.name === "Mentoria VIP" ? "Agendar Conversa" : "Comprar Agora"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Garantia de 7 dias • Pagamento seguro • Acesso imediato
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <span>🔒 SSL Seguro</span>
            <span>💳 Cartão ou PIX</span>
            <span>📱 Acesso Mobile</span>
          </div>
        </div>
      </div>
    </section>
  );
};