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
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 shadow-neural animate-fade-up">
            💰 Planos e Preços
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Escolha o plano
            <span className="block bg-gradient-primary bg-clip-text text-transparent">ideal para você</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            🚀 Invista no seu futuro profissional com nossos planos flexíveis e acessíveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-border/50 shadow-neural hover:shadow-floating hover:-translate-y-3 transition-neural bg-gradient-card animate-scale-in ${
                plan.popular ? 'border-primary/50 shadow-primary scale-105 ring-2 ring-primary/20' : ''
              }`}
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-primary-foreground text-center py-3 text-sm font-bold animate-glow">
                  🔥 Mais Popular
                </div>
              )}
              
              <CardHeader className={`${plan.popular ? 'pt-16' : 'pt-8'} pb-6`}>
                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-neural">{plan.name}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{plan.description}</CardDescription>
                
                <div className="pt-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-xl text-muted-foreground line-through opacity-75">{plan.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{plan.period}</p>
                  {plan.originalPrice && (
                    <div className="mt-2 text-sm font-semibold text-primary">
                      💰 Economia de R$ {parseInt(plan.originalPrice.replace('R$ ', '')) - parseInt(plan.price.replace('R$ ', ''))}
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-4 text-sm group/item hover:translate-x-1 transition-neural">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:animate-pulse" />
                      <span className="font-medium leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "hero" : "gradient"} 
                  className={`w-full text-lg py-6 font-semibold shadow-primary hover:shadow-elegant transition-neural ${
                    plan.popular ? 'animate-glow' : ''
                  }`}
                >
                  {plan.name === "Mentoria VIP" ? "🤝 Agendar Conversa" : "🛒 Comprar Agora"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '1.4s' }}>
          <div className="bg-gradient-card rounded-2xl p-8 max-w-4xl mx-auto shadow-neural border border-border/50">
            <p className="text-lg text-muted-foreground mb-6 font-medium">
              ✅ Garantia de 7 dias • 🔒 Pagamento seguro • ⚡ Acesso imediato
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                <span className="font-medium">SSL Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💳</span>
                <span className="font-medium">Cartão ou PIX</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📱</span>
                <span className="font-medium">Acesso Mobile</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <span className="font-medium">Instituto3e</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};