import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const ProductsSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 shadow-neural animate-fade-up">
            ✨ Nossos Produtos
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Tudo que você precisa para
            <span className="block bg-gradient-primary bg-clip-text text-transparent">dominar a IA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            🎯 Acesso completo a prompts profissionais, curso certificado e mentoria especializada
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Enhanced Prompts Card */}
          <Card className="group relative overflow-hidden border-border/50 shadow-neural hover:shadow-floating hover:-translate-y-3 transition-neural bg-gradient-card animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="absolute inset-0 bg-gradient-primary opacity-5 group-hover:opacity-10 transition-neural" />
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-primary opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-neural" />
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between mb-6">
                <Badge className="bg-primary/10 text-primary border-primary/20 shadow-sm">
                  🎯 Biblioteca de Prompts
                </Badge>
                <Badge variant="secondary" className="bg-gradient-accent text-primary-foreground font-semibold">1500+ Prompts</Badge>
              </div>
              <CardTitle className="text-3xl mb-4 group-hover:text-primary transition-neural">Prompts Profissionais Testados</CardTitle>
              <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                📚 Mais de 1500 prompts otimizados e testados para diversas áreas profissionais, 
                organizados por categoria para máxima eficiência
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-4 group/item hover:translate-x-2 transition-neural">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full shadow-glow" />
                  <span className="font-medium">💼 Marketing Digital e Copywriting</span>
                </li>
                <li className="flex items-center gap-4 group/item hover:translate-x-2 transition-neural">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full shadow-glow" />
                  <span className="font-medium">💻 Desenvolvimento e Programação</span>
                </li>
                <li className="flex items-center gap-4 group/item hover:translate-x-2 transition-neural">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full shadow-glow" />
                  <span className="font-medium">🎨 Design e Criatividade</span>
                </li>
                <li className="flex items-center gap-4 group/item hover:translate-x-2 transition-neural">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full shadow-glow" />
                  <span className="font-medium">📈 Negócios e Estratégia</span>
                </li>
                <li className="flex items-center gap-4 group/item hover:translate-x-2 transition-neural">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full shadow-glow" />
                  <span className="font-medium">🎓 Educação e Treinamento</span>
                </li>
              </ul>
              <Button variant="gradient" className="w-full text-lg py-6 shadow-primary hover:shadow-elegant transition-neural">
                🚀 Acessar Prompts
              </Button>
            </CardContent>
          </Card>

          {/* Enhanced Course Card */}
          <Card className="group relative overflow-hidden border-border/50 shadow-neural hover:shadow-floating hover:-translate-y-3 transition-neural bg-gradient-card animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <div className="absolute inset-0 bg-gradient-secondary opacity-5 group-hover:opacity-10 transition-neural" />
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-secondary opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-neural" />
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between mb-6">
                <Badge className="bg-primary/10 text-primary border-primary/20 shadow-sm">
                  🎓 Curso Completo
                </Badge>
                <Badge variant="secondary" className="bg-gradient-accent text-primary-foreground font-semibold">Certificado</Badge>
              </div>
              <CardTitle className="text-3xl mb-4 group-hover:text-primary transition-neural">Curso Completo de IA</CardTitle>
              <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                🧠 Aprenda desde fundamentos até técnicas avançadas com certificação oficial 
                reconhecida pelo Instituto3e
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-4 group/item hover:translate-x-2 transition-neural">
                  <div className="w-3 h-3 bg-gradient-secondary rounded-full shadow-glow" />
                  <span className="font-medium">🔬 Fundamentos da Inteligência Artificial</span>
                </li>
                <li className="flex items-center gap-4 group/item hover:translate-x-2 transition-neural">
                  <div className="w-3 h-3 bg-gradient-secondary rounded-full shadow-glow" />
                  <span className="font-medium">⚡ Prompt Engineering Avançado</span>
                </li>
                <li className="flex items-center gap-4 group/item hover:translate-x-2 transition-neural">
                  <div className="w-3 h-3 bg-gradient-secondary rounded-full shadow-glow" />
                  <span className="font-medium">🤖 Automação com IA</span>
                </li>
                <li className="flex items-center gap-4 group/item hover:translate-x-2 transition-neural">
                  <div className="w-3 h-3 bg-gradient-secondary rounded-full shadow-glow" />
                  <span className="font-medium">💼 Cases Práticos e Projetos</span>
                </li>
                <li className="flex items-center gap-4 group/item hover:translate-x-2 transition-neural">
                  <div className="w-3 h-3 bg-gradient-secondary rounded-full shadow-glow" />
                  <span className="font-medium">🏆 Certificado pelo Instituto3e</span>
                </li>
              </ul>
              <Button variant="gradient" className="w-full text-lg py-6 shadow-primary hover:shadow-elegant transition-neural">
                🎯 Começar Curso
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};