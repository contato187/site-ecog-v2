
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ecog-espaco py-24 border-t border-white/5 relative overflow-hidden">
      {/* Brand Arc Support no Footer */}
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] border-[20px] border-ecog-folha/5 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <div className="mb-10">
              <Logo variant="light" />
            </div>
            <p className="max-w-md text-ecog-mar leading-relaxed font-light mb-12 text-lg">
              Excelência em neuromodulação clínica e aprimoramento cognitivo. Tecnologia de ponta e humanização no coração de Londrina.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
               <div>
                  <span className="block text-[10px] font-black uppercase tracking-widest text-ecog-folha mb-4">Direção Técnica</span>
                  <div className="space-y-1">
                    <span className="block text-white font-bold text-base">Dr. Breno Santos</span>
                    <span className="block text-[10px] text-ecog-ceu font-black uppercase tracking-widest">CRM-PR 37798</span>
                  </div>
               </div>
               <div className="border-l border-white/10 pl-8">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-ecog-folha mb-4">Especialidades</span>
                  <div className="space-y-1">
                    <span className="block text-white font-bold text-xs">Neurologia (RQE 22068)</span>
                    <span className="block text-white font-bold text-xs">Neurorradiologia (RQE 27948)</span>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-white font-black mb-10 uppercase text-xs tracking-[0.3em]">Navegação</h4>
            <ul className="space-y-6 text-sm">
              <li><a href="#about" className="text-ecog-ceu hover:text-ecog-folha transition-colors font-medium">A Marca</a></li>
              <li><a href="#procedures" className="text-ecog-ceu hover:text-ecog-folha transition-colors font-medium">Portfólio Clínico</a></li>
              <li><a href="#education" className="text-ecog-ceu hover:text-ecog-folha transition-colors font-medium">Área Educativa</a></li>
              <li><a href="#contact" className="text-ecog-ceu hover:text-ecog-folha transition-colors font-medium">Contato</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-5">
            <h4 className="text-white font-black mb-10 uppercase text-xs tracking-[0.3em]">Segurança e Ética</h4>
            <div className="space-y-8">
              <div>
                <h5 className="text-ecog-folha font-black text-[10px] uppercase tracking-widest mb-2">Privacidade (LGPD)</h5>
                <p className="text-ecog-mar text-[11px] leading-relaxed">
                  Seus dados e diálogos com o NeuroMentor são protegidos por criptografia. Não compartilhamos informações clínicas com terceiros.
                </p>
              </div>
              <div>
                <h5 className="text-ecog-folha font-black text-[10px] uppercase tracking-widest mb-2">Direitos do Paciente</h5>
                <p className="text-ecog-mar text-[11px] leading-relaxed">
                  Garantimos o sigilo médico absoluto, o direito à informação clara sobre procedimentos e o acolhimento humanizado.
                </p>
              </div>
              <div>
                <h5 className="text-ecog-folha font-black text-[10px] uppercase tracking-widest mb-2">Consentimento</h5>
                <p className="text-ecog-mar text-[11px] leading-relaxed italic">
                  Esta IA possui fins exclusivamente educativos e não substitui o diagnóstico clínico do Dr. Breno Santos.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:grid md:grid-cols-3 items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-ecog-ceu/40">
          <p className="text-center md:text-left">
            &copy; 2026 ECOG Londrina — Dr. Breno Santos (CRM-PR 37798)
          </p>
          
          <div className="flex items-center justify-center gap-2">
             <span className="w-1.5 h-1.5 bg-ecog-folha rounded-full"></span>
             <span>Londrina, PR — Brasil</span>
          </div>

          <p className="text-center md:text-right">
            Neurociência de Alta Performance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
