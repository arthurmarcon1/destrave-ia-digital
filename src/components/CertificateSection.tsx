import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Shield, Star } from "lucide-react";

export const CertificateSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            🏆 Certificação Oficial
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Certificado pelo Instituto3e
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Obtenha uma certificação reconhecida no mercado e comprove suas habilidades em IA
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Certificate Preview */}
          <div className="relative mb-16">
            <Card className="bg-gradient-hero p-8 shadow-glow border-primary/20">
              <div className="text-center text-primary-foreground">
                <div className="mb-6">
                  <Award className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">CERTIFICADO DE CONCLUSÃO</h3>
                  <p className="text-primary-foreground/80">Instituto3e - Educação Tecnológica</p>
                </div>
                
                <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                  <p className="text-lg mb-2">Certifica que</p>
                  <p className="text-3xl font-bold mb-2">[SEU NOME]</p>
                  <p className="text-lg mb-4">concluiu com aproveitamento o curso</p>
                  <p className="text-2xl font-semibold mb-2">Inteligência Artificial Profissional</p>
                  <p className="text-primary-foreground/80">Carga horária: 40 horas</p>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <div>Data: [DATA DE CONCLUSÃO]</div>
                  <div>Código: IA-[CÓDIGO ÚNICO]</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center border-border/50 shadow-card hover:shadow-primary transition-smooth">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Reconhecido no Mercado</h4>
              <p className="text-sm text-muted-foreground">
                Certificação aceita por empresas e instituições
              </p>
            </Card>
            
            <Card className="p-6 text-center border-border/50 shadow-card hover:shadow-primary transition-smooth">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Validação Digital</h4>
              <p className="text-sm text-muted-foreground">
                Verifique a autenticidade online a qualquer momento
              </p>
            </Card>
            
            <Card className="p-6 text-center border-border/50 shadow-card hover:shadow-primary transition-smooth">
              <Star className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Diferencial Profissional</h4>
              <p className="text-sm text-muted-foreground">
                Destaque-se no mercado de trabalho
              </p>
            </Card>
            
            <Card className="p-6 text-center border-border/50 shadow-card hover:shadow-primary transition-smooth">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Carga Horária Completa</h4>
              <p className="text-sm text-muted-foreground">
                40 horas de conteúdo teórico e prático
              </p>
            </Card>
          </div>

          {/* CTA */}
          <Card className="bg-gradient-secondary p-8 text-center border-primary/20">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Pronto para se certificar?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Junte-se a milhares de profissionais que já transformaram suas carreiras com nossa certificação em IA
            </p>
            <Button variant="hero" size="lg" className="bg-background text-primary hover:bg-background/90">
              Começar Certificação
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};