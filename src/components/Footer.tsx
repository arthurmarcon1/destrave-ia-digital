import { Card } from "@/components/ui/card";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Enhanced Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-fade-up">
              🧠 Destrave o Digital IA
            </h3>
            <p className="text-background/90 mb-6 max-w-md leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
              🚀 Transforme sua carreira com inteligência artificial. Prompts profissionais, 
              curso certificado e mentoria especializada para o futuro digital.
            </p>
            <div className="text-sm text-background/70 space-y-2 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <p className="flex items-center gap-2">
                <span className="text-primary">🏆</span>
                Certificação emitida pelo Instituto3e
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary">🏢</span>
                CNPJ: XX.XXX.XXX/XXXX-XX
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary">⚡</span>
                +5000 alunos transformados
              </p>
            </div>
          </div>

          {/* Enhanced Links */}
          <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <h4 className="font-bold mb-6 text-lg text-primary">📚 Produtos</h4>
            <ul className="space-y-3 text-background/85">
              <li><a href="#" className="hover:text-primary transition-neural hover:translate-x-1 flex items-center gap-2">
                <span>🎯</span> Biblioteca de Prompts
              </a></li>
              <li><a href="#" className="hover:text-primary transition-neural hover:translate-x-1 flex items-center gap-2">
                <span>🎓</span> Curso de IA
              </a></li>
              <li><a href="#" className="hover:text-primary transition-neural hover:translate-x-1 flex items-center gap-2">
                <span>🏆</span> Certificação
              </a></li>
              <li><a href="#" className="hover:text-primary transition-neural hover:translate-x-1 flex items-center gap-2">
                <span>🤝</span> Mentoria VIP
              </a></li>
            </ul>
          </div>

          {/* Enhanced Support */}
          <div className="animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <h4 className="font-bold mb-6 text-lg text-primary">💬 Suporte</h4>
            <ul className="space-y-3 text-background/85">
              <li><a href="#" className="hover:text-primary transition-neural hover:translate-x-1 flex items-center gap-2">
                <span>❓</span> Central de Ajuda
              </a></li>
              <li><a href="#" className="hover:text-primary transition-neural hover:translate-x-1 flex items-center gap-2">
                <span>📧</span> Contato
              </a></li>
              <li><a href="#" className="hover:text-primary transition-neural hover:translate-x-1 flex items-center gap-2">
                <span>📱</span> WhatsApp
              </a></li>
              <li><a href="#" className="hover:text-primary transition-neural hover:translate-x-1 flex items-center gap-2">
                <span>🤔</span> FAQ
              </a></li>
            </ul>
          </div>
        </div>

        {/* Enhanced Bottom */}
        <div className="border-t border-background/20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 animate-fade-up" style={{ animationDelay: '1s' }}>
            <div className="text-background/70 text-center md:text-left">
              © 2024 Destrave o Digital IA. Todos os direitos reservados. 
              <span className="block md:inline md:ml-2 text-primary">Feito com 💜 para transformar carreiras</span>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-background/70">
              <a href="#" className="hover:text-primary transition-neural">📋 Termos de Uso</a>
              <a href="#" className="hover:text-primary transition-neural">🔐 Política de Privacidade</a>
              <a href="#" className="hover:text-primary transition-neural">🛒 Termos de Compra</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};