import { Card } from "@/components/ui/card";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Destrave o Digital IA
            </h3>
            <p className="text-background/80 mb-4 max-w-md">
              Transforme sua carreira com inteligência artificial. Prompts profissionais, 
              curso certificado e mentoria especializada.
            </p>
            <div className="text-sm text-background/60">
              <p>Certificação emitida pelo Instituto3e</p>
              <p>CNPJ: XX.XXX.XXX/XXXX-XX</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Biblioteca de Prompts</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Curso de IA</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Certificação</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mentoria VIP</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">WhatsApp</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-background/60">
              © 2024 Destrave o Digital IA. Todos os direitos reservados.
            </div>
            <div className="flex gap-6 text-sm text-background/60">
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Termos de Compra</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};