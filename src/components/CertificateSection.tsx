import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Shield, Star } from "lucide-react";

export const CertificateSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 shadow-neural animate-fade-up">
            🏆 Certificação Oficial
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Certificado pelo
            <span className="block bg-gradient-primary bg-clip-text text-transparent">Instituto3e</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            🎯 Obtenha uma certificação reconhecida no mercado e comprove suas habilidades em IA para o futuro profissional
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Enhanced Certificate Preview */}
          <div className="relative mb-20 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Card className="bg-gradient-hero p-12 shadow-floating border-primary/30 hover:shadow-elegant transition-neural animate-glow">
              <div className="text-center text-primary-foreground">
                <div className="mb-8">
                  <Award className="w-20 h-20 mx-auto mb-6 animate-float" />
                  <h3 className="text-3xl font-bold mb-3">🏆 CERTIFICADO DE CONCLUSÃO</h3>
                  <p className="text-primary-foreground/90 text-lg">Instituto3e - Educação Tecnológica</p>
                </div>
                
                <div className="bg-background/15 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-primary-foreground/20">
                  <p className="text-xl mb-3">Certifica que</p>
                  <p className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary-foreground to-primary-foreground/80 bg-clip-text text-transparent">[SEU NOME]</p>
                  <p className="text-xl mb-6">concluiu com aproveitamento o curso</p>
                  <p className="text-3xl font-bold mb-3 text-primary-foreground">🧠 Inteligência Artificial Profissional</p>
                  <p className="text-primary-foreground/90 text-lg">⏱️ Carga horária: 40 horas | 📚 15 módulos práticos</p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground/80 gap-4">
                  <div className="text-lg">📅 Data: [DATA DE CONCLUSÃO]</div>
                  <div className="text-lg">🔐 Código: IA-[CÓDIGO ÚNICO]</div>
                  <div className="text-lg">✅ Verificação Online</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Enhanced Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="group p-8 text-center border-border/50 shadow-neural hover:shadow-floating hover:-translate-y-3 transition-neural bg-gradient-card animate-scale-in" style={{ animationDelay: '0.8s' }}>
              <Shield className="w-16 h-16 text-primary mx-auto mb-6 group-hover:animate-pulse" />
              <h4 className="font-bold text-xl mb-4 group-hover:text-primary transition-neural">🏢 Reconhecido no Mercado</h4>
              <p className="text-muted-foreground leading-relaxed">
                Certificação aceita por empresas multinacionais e startups de tecnologia
              </p>
            </Card>
            
            <Card className="group p-8 text-center border-border/50 shadow-neural hover:shadow-floating hover:-translate-y-3 transition-neural bg-gradient-card animate-scale-in" style={{ animationDelay: '1s' }}>
              <Users className="w-16 h-16 text-primary mx-auto mb-6 group-hover:animate-pulse" />
              <h4 className="font-bold text-xl mb-4 group-hover:text-primary transition-neural">🔍 Validação Digital</h4>
              <p className="text-muted-foreground leading-relaxed">
                Verifique a autenticidade online através de QR Code e plataforma exclusiva
              </p>
            </Card>
            
            <Card className="group p-8 text-center border-border/50 shadow-neural hover:shadow-floating hover:-translate-y-3 transition-neural bg-gradient-card animate-scale-in" style={{ animationDelay: '1.2s' }}>
              <Star className="w-16 h-16 text-primary mx-auto mb-6 group-hover:animate-pulse" />
              <h4 className="font-bold text-xl mb-4 group-hover:text-primary transition-neural">⭐ Diferencial Profissional</h4>
              <p className="text-muted-foreground leading-relaxed">
                Destaque-se no mercado de trabalho e aumente seu salário em até 150%
              </p>
            </Card>
            
            <Card className="group p-8 text-center border-border/50 shadow-neural hover:shadow-floating hover:-translate-y-3 transition-neural bg-gradient-card animate-scale-in" style={{ animationDelay: '1.4s' }}>
              <Award className="w-16 h-16 text-primary mx-auto mb-6 group-hover:animate-pulse" />
              <h4 className="font-bold text-xl mb-4 group-hover:text-primary transition-neural">📊 Carga Horária Completa</h4>
              <p className="text-muted-foreground leading-relaxed">
                40+ horas de conteúdo teórico, prático e projetos hands-on
              </p>
            </Card>
          </div>

          {/* Enhanced CTA */}
          <Card className="bg-gradient-hero p-12 text-center border-primary/30 shadow-floating hover:shadow-elegant transition-neural animate-scale-in" style={{ animationDelay: '1.6s' }}>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                🚀 Pronto para se certificar?
              </h3>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Junte-se a mais de 5000 profissionais que já transformaram suas carreiras com nossa certificação em IA. 
                <span className="block mt-2 font-semibold">Seja o próximo a conquistar o futuro!</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button variant="hero" size="lg" className="bg-background text-primary hover:bg-background/90 text-lg px-10 py-5 shadow-primary">
                  🎓 Começar Certificação
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-background/10 text-lg px-10 py-5">
                  📋 Ver Currículo do Curso
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};