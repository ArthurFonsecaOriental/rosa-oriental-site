import { useState } from 'react';
import { Heart, Star, Shield, Clock, Users, CheckCircle, Phone, MessageCircle, ShoppingCart, Package } from 'lucide-react';
import './App.css';
import produtoImg from './imagem-hero.png';
import garantiaImg from './imagem-garantia.png';
import logoImg from './RosaOriental-Logotipo.png';

// Importação das 10 novas imagens de depoimento
import depoimento1Antes from './depoimento-1-antes.jpg';
import depoimento1Depois from './depoimento-1-depois.jpg';
import depoimento2Antes from './depoimento-2-antes.jpg';
import depoimento2Depois from './depoimento-2-depois.jpg';
import depoimento3Antes from './depoimento-3-antes.jpg';
import depoimento3Depois from './depoimento-3-depois.jpg';
import depoimento4Antes from './depoimento-4-antes.jpg';
import depoimento4Depois from './depoimento-4-depois.jpg';
import depoimento5Antes from './depoimento-5-antes.jpg';
import depoimento5Depois from './depoimento-5-depois.jpg';

function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Nova estrutura de depoimentos com as duas imagens
  const testimonials = [
    {
      name: "Carla Mendes",
      age: 45,
      text: "Depois dos 40, achei que não tinha mais jeito. O Rosa Oriental me provou o contrário! Minha pele está visivelmente mais firme.",
      imageBefore: depoimento1Antes,
      imageAfter: depoimento1Depois
    },
    {
      name: "Sofia Almeida", 
      age: 52,
      text: "As manchinhas que me incomodavam clarearam muito e as linhas de expressão suavizaram. Voltei a me sentir confiante com a minha pele.",
      imageBefore: depoimento2Antes,
      imageAfter: depoimento2Depois
    },
    {
      name: "Maria Silva",
      age: 42, 
      text: "Em apenas 3 semanas já notei minha pele mais firme e hidratada. O Rosa Oriental realmente funciona!",
      imageBefore: depoimento3Antes,
      imageAfter: depoimento3Depois
    },
    {
      name: "Juliana Lima",
      age: 48,
      text: "Meu problema era a flacidez, sentia o rosto 'caído'. Com o tratamento, a diferença é nítida. Sinto o contorno do meu rosto mais definido.",
      imageBefore: depoimento4Antes,
      imageAfter: depoimento4Depois
    },
    {
      name: "Ana Costa",
      age: 38,
      text: "Nunca pensei que uma cápsula pudesse fazer tanta diferença. Minha pele está com um brilho saudável, muito mais radiante!",
      imageBefore: depoimento5Antes,
      imageAfter: depoimento5Depois
    }
  ];

  const benefits = [
    // ... (O restante do seu código permanece o mesmo)
    // Apenas a seção de depoimentos foi reescrita abaixo.
  ];
  
  // (O restante do seu código App.jsx continua aqui, sem alterações, até a seção de depoimentos)

  // ... (código das seções Hero, Benefits, Formula, etc.)

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* ... (código do Header, Hero, Benefits, Formula, etc. - sem alterações) ... */}
      
      {/* Testimonials Section - TOTALMENTE REESCRITA */}
      <section id="depoimentos" className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que nossas <span className="text-pink-600">clientes dizem</span>
            </h2>
            <p className="text-lg text-gray-600">
              Mais de 50.000 mulheres já transformaram sua pele com Rosa Oriental
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg italic text-gray-700 mb-6">
                "{testimonials[activeTestimonial].text}"
              </blockquote>
              
              {/* Novo Container para as Imagens Antes e Depois */}
              <div className="mt-8 flex gap-4 md:gap-8 justify-center">
                <div>
                  <img 
                    src={testimonials[activeTestimonial].imageBefore} 
                    alt={`Depoimento de ${testimonials[activeTestimonial].name} (antes)`} 
                    className="rounded-lg shadow-sm w-full"
                  />
                  <p className="text-sm font-semibold text-gray-600 mt-2 tracking-widest">ANTES</p>
                </div>
                <div>
                  <img 
                    src={testimonials[activeTestimonial].imageAfter} 
                    alt={`Depoimento de ${testimonials[activeTestimonial].name} (depois)`} 
                    className="rounded-lg shadow-sm w-full"
                  />
                  <p className="text-sm font-semibold text-pink-600 mt-2 tracking-widest">DEPOIS</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4 mt-6">
                <div className="text-left">
                  <div className="font-semibold">{testimonials[activeTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[activeTestimonial].age} anos</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-pink-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ... (código das seções Guarantee, Plans, FAQ, CTA, Footer - sem alterações) ... */}
      
      <style jsx>{`
        @keyframes floating {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .floating-animation {
          animation: floating 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default App;