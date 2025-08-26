import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const ProductsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Nossos Produtos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Tudo que você precisa para dominar a IA
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acesso completo a prompts profissionais, curso certificado e mentoria especializada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Prompts */}
          <Card className="relative overflow-hidden border-border/50 shadow-card hover:shadow-primary transition-smooth">
            <div className="absolute inset-0 bg-gradient-primary opacity-5" />
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  🎯 Prompts
                </Badge>
                <Badge variant="secondary">1500+ Prompts</Badge>
              </div>
              <CardTitle className="text-2xl">Biblioteca de Prompts Profissionais</CardTitle>
              <CardDescription className="text-base">
                Mais de 1500 prompts testados e otimizados para diversas áreas profissionais
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Marketing Digital e Copywriting</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Desenvolvimento e Programação</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Design e Criatividade</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Negócios e Estratégia</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Educação e Treinamento</span>
                </li>
              </ul>
              <Button variant="gradient" className="w-full">
                Acessar Prompts
              </Button>
            </CardContent>
          </Card>

          {/* Curso */}
          <Card className="relative overflow-hidden border-border/50 shadow-card hover:shadow-primary transition-smooth">
            <div className="absolute inset-0 bg-gradient-secondary opacity-5" />
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  🎓 Curso
                </Badge>
                <Badge variant="secondary">Certificado</Badge>
              </div>
              <CardTitle className="text-2xl">Curso Completo de IA</CardTitle>
              <CardDescription className="text-base">
                Aprenda desde o básico até técnicas avançadas com certificação oficial
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Fundamentos da Inteligência Artificial</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Prompt Engineering Avançado</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Automação com IA</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Cases Práticos e Projetos</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Certificado pelo Instituto3e</span>
                </li>
              </ul>
              <Button variant="gradient" className="w-full">
                Começar Curso
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};