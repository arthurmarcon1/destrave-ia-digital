import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroAi from "@/assets/hero-ai.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroAi})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <Badge className="mb-6 bg-background/20 backdrop-blur-sm border-primary/30 text-primary-foreground">
          🚀 +1500 Prompts Profissionais
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
          Destrave o
          <span className="block bg-gradient-to-r from-white to-primary-foreground bg-clip-text text-transparent">
            Digital IA
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
          Domine a Inteligência Artificial com nossos prompts profissionais e curso certificado. 
          Transforme sua carreira e multiplique seus resultados.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Começar Agora
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20">
            Ver Planos
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-background/10 backdrop-blur-sm border-primary/20 p-6">
            <div className="text-3xl font-bold text-primary-foreground mb-2">1500+</div>
            <div className="text-primary-foreground/80">Prompts Profissionais</div>
          </Card>
          <Card className="bg-background/10 backdrop-blur-sm border-primary/20 p-6">
            <div className="text-3xl font-bold text-primary-foreground mb-2">100%</div>
            <div className="text-primary-foreground/80">Certificado Válido</div>
          </Card>
          <Card className="bg-background/10 backdrop-blur-sm border-primary/20 p-6">
            <div className="text-3xl font-bold text-primary-foreground mb-2">24/7</div>
            <div className="text-primary-foreground/80">Suporte Premium</div>
          </Card>
        </div>
      </div>
    </section>
  );
};