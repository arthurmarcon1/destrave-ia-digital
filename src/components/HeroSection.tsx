import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroAi from "@/assets/hero-ai.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Neural Pattern */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      <div className="absolute inset-0 bg-gradient-neural opacity-10 animate-neural-pulse" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url(${heroAi})` }}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary/40 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/6 w-1.5 h-1.5 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-up">
        <Badge className="mb-8 bg-background/20 backdrop-blur-sm border-primary/30 text-primary-foreground shadow-neural hover:shadow-glow transition-neural">
          🚀 +1500 Prompts Profissionais
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-primary-foreground leading-tight">
          Destrave o
          <span className="block bg-gradient-to-r from-primary-foreground via-primary-foreground to-primary/80 bg-clip-text text-transparent drop-shadow-sm">
            Digital IA
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
          🧠 Domine a Inteligência Artificial com nossos prompts profissionais e curso certificado. 
          <span className="block mt-2 font-semibold">Transforme sua carreira e multiplique seus resultados.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button variant="hero" size="lg" className="text-lg px-10 py-5 shadow-floating hover:shadow-elegant transition-neural animate-scale-in">
            ⚡ Começar Agora
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-10 py-5 bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20 hover:border-primary-foreground/50 transition-neural animate-scale-in" style={{ animationDelay: '0.2s' }}>
            📊 Ver Planos
          </Button>
        </div>
        
        {/* Enhanced Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-gradient-card backdrop-blur-sm border-primary/20 p-8 shadow-neural hover:shadow-elegant hover:-translate-y-2 transition-neural animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl font-bold text-primary mb-3 animate-glow">1500+</div>
            <div className="text-primary-foreground/90 font-medium">📚 Prompts Profissionais</div>
            <div className="text-primary-foreground/60 text-sm mt-2">Testados e otimizados</div>
          </Card>
          <Card className="bg-gradient-card backdrop-blur-sm border-primary/20 p-8 shadow-neural hover:shadow-elegant hover:-translate-y-2 transition-neural animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-4xl font-bold text-primary mb-3 animate-glow" style={{ animationDelay: '0.5s' }}>100%</div>
            <div className="text-primary-foreground/90 font-medium">🎓 Certificado Válido</div>
            <div className="text-primary-foreground/60 text-sm mt-2">Instituto3e reconhecido</div>
          </Card>
          <Card className="bg-gradient-card backdrop-blur-sm border-primary/20 p-8 shadow-neural hover:shadow-elegant hover:-translate-y-2 transition-neural animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-4xl font-bold text-primary mb-3 animate-glow" style={{ animationDelay: '1s' }}>24/7</div>
            <div className="text-primary-foreground/90 font-medium">💬 Suporte Premium</div>
            <div className="text-primary-foreground/60 text-sm mt-2">Resposta em até 2h</div>
          </Card>
        </div>
      </div>
    </section>
  );
};