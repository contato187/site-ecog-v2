
import React, { useState } from 'react';
import VideoGenerator from '../components/VideoGenerator';

interface SimulationCardProps {
  number: string;
  title: string;
  type: 'video' | 'image';
  src: string;
  isActive?: boolean;
  mediaClassName?: string;
}

const SimulationCard: React.FC<SimulationCardProps> = ({ number, title, type, src, isActive, mediaClassName }) => {
  return (
    <div className="relative group aspect-video rounded-3xl overflow-hidden bg-ecog-noite border border-white/5 hover:border-ecog-lima/30 transition-all duration-500 shadow-2xl">
      {/* Mídia: Preenchendo Todo o Card (Sem barras pretas) */}
      {type === 'video' ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ${mediaClassName || ''}`}
          src={src}
        />
      ) : (
        <img
          src={src}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ${mediaClassName || ''}`}
          referrerPolicy="no-referrer"
        />
      )}
      
      {/* Overlay de Sombra no Topo para Leitura */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/80 via-black/20 to-transparent z-10"></div>

      {/* Conteúdo de Texto no Topo */}
      <div className="relative z-20 p-6 flex flex-col items-start space-y-2">
        <span className="inline-block px-3 py-1 text-[10px] font-bold text-ecog-espaco bg-ecog-lima rounded-full tracking-wider uppercase">
          Simulação {number} {isActive ? '• Ativa' : ''}
        </span>
        <h3 className="text-lg font-bold text-white leading-tight">
          {title}
        </h3>
      </div>

      {/* Ícone de Play central (Apenas visual para indicar interatividade) */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all duration-300 z-10">
        <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
          <i className="fa-solid fa-play text-xl text-white"></i>
        </div>
      </div>
    </div>
  );
};

const VisualExperience: React.FC = () => {
  const [showLab, setShowLab] = useState(false);

  return (
    <section id="experience" className="py-32 bg-ecog-espaco relative overflow-hidden">
      <div className="absolute inset-0 ecog-pattern opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-ecog-folha"></span>
            <span className="text-ecog-folha font-bold tracking-[0.3em] uppercase text-xs">Inovação ECOG</span>
            <span className="w-12 h-[2px] bg-ecog-folha"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">
            Neurociência <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-ecog-folha to-ecog-lima">Aplicada.</span>
          </h2>
          
          {!showLab && (
            <button 
              onClick={() => setShowLab(true)}
              className="mt-10 px-8 py-4 border border-ecog-folha/30 text-ecog-folha rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-ecog-folha hover:text-ecog-espaco transition-all"
            >
              <i className="fa-solid fa-flask-vial mr-2"></i> Acessar Laboratório de Simulação
            </button>
          )}
        </div>

        {showLab ? (
          <div className="animate-in fade-in zoom-in-95 duration-700">
             <VideoGenerator />
             <div className="mt-8 text-center">
                <button onClick={() => setShowLab(false)} className="text-ecog-mar/50 hover:text-ecog-folha text-[9px] font-black uppercase tracking-widest transition-colors">
                  <i className="fa-solid fa-eye-slash mr-2"></i> Minimizar Laboratório
                </button>
             </div>
          </div>
        ) : (
          /* Galeria de Exemplos Estáticos para o Público */
          <div className="grid md:grid-cols-3 gap-8 animate-in fade-in duration-1000">
             {/* Simulação 01 - Dinâmica de Pulso Magnético */}
             <SimulationCard 
                number="01"
                title="Dinâmica de Pulso Magnético"
                type="video"
                src="https://i.imgur.com/c471wof.mp4"
                isActive={true}
                mediaClassName="scale-[1.3] origin-bottom" // Crop para ocultar erro da IA (tcog -> ecog)
             />

             {/* Simulação 02 - Avaliação Cognitiva VR */}
             <SimulationCard 
                number="02"
                title="Avaliação Cognitiva VR"
                type="video"
                src="https://i.imgur.com/c471wof.mp4" // Usando o link disponível como placeholder para VR
                isActive={true}
             />

             {/* Simulação 03 - Mapeamento de Redes Neurais */}
             <SimulationCard 
                number="03"
                title="Mapeamento de Redes Neurais"
                type="image"
                src="https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=800"
             />
          </div>
        )}
      </div>

      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] border-[1px] border-ecog-folha/10 rounded-full -z-10 animate-pulse-slow"></div>
    </section>
  );
};

export default VisualExperience;
