import { useState } from 'react'
import { Heart, Star, Shield, Clock, Users, CheckCircle, Phone, MessageCircle, ShoppingCart, Package } from 'lucide-react'
import './App.css'
import produtoImg from './assets/rosa-oriental-produto.webp'
import mariaSilvaImg from './assets/maria-silva.png'
import carlaMendesImg from './assets/carla-mendes.png'
import logoImg from './assets/RosaOriental-Logotipo.png'
import garantiaImg from './assets/garantia-produtos.png'

function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Carla Mendes",
      age: 45,
      text: "Depois dos 40, achei que não tinha mais jeito. O Rosa Oriental me provou o contrário!",
      image: carlaMendesImg
    },
    {
      name: "Ana Costa", 
      age: 38,
      text: "Nunca pensei que uma cápsula pudesse fazer tanta diferença. Minha pele está radiante!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Maria Silva",
      age: 42, 
      text: "Em apenas 3 semanas já notei minha pele mais firme e hidratada. O Rosa Oriental realmente funciona!",
      image: mariaSilvaImg
    }
  ]

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      title: "Redução de Rugas",
      description: "Diminui visivelmente linhas finas e rugas, devolvendo a juventude à sua pele"
    },
    {
      icon: <Star className="w-8 h-8 text-pink-600" />,
      title: "Hidratação Profunda", 
      description: "Hidratação intensa e duradoura que penetra nas camadas mais profundas da pele"
    },
    {
      icon: <Shield className="w-8 h-8 text-pink-600" />,
      title: "Firmeza e Elasticidade",
      description: "Restaura a firmeza natural da pele, combatendo a flacidez"
    },
    {
      icon: <Star className="w-8 h-8 text-pink-600" />,
      title: "Iluminação Natural",
      description: "Proporciona um brilho saudável e natural ao rosto"
    },
    {
      icon: <Clock className="w-8 h-8 text-pink-600" />,
      title: "Resultados Rápidos",
      description: "Primeiros resultados visíveis em apenas 2-4 semanas"
    },
    {
      icon: <Users className="w-8 h-8 text-pink-600" />,
      title: "Aprovado por Milhares",
      description: "Mais de 50.000 mulheres já transformaram sua pele"
    }
  ]

  const plans = [
    {
      title: "Tratamento 1 mês",
      subtitle: "Ideal para experimentar",
      originalPrice: "R$ 297,00",
      price: "R$ 207,00",
      installments: "à vista",
      discount: "30% OFF",
      popular: false,
      bestValue: false,
      link: "https://seguro.payt.com.br/a/M2o5lG5yC8KQyv4G"
    },
    {
      title: "Tratamento 3 meses", 
      subtitle: "Resultados visíveis",
      originalPrice: "R$ 597,00",
      price: "R$ 297,00",
      installments: "à vista",
      discount: "50% OFF",
      popular: false,
      bestValue: false,
      link: "https://seguro.payt.com.br/a/g0ey0pO6tP6GgoYn"
    },
    {
      title: "Tratamento 5 meses",
      subtitle: "Transformação completa", 
      originalPrice: "R$ 997,00",
      price: "R$ 397,00",
      installments: "à vista",
      discount: "60% OFF",
      popular: true,
      bestValue: false,
      link: "https://seguro.payt.com.br/a/qGW918m1UpZG7WRk"
    },
    {
      title: "Tratamento 9 meses",
      subtitle: "Rejuvenescimento profundo",
      originalPrice: "R$ 1.797,00", 
      price: "R$ 697,00",
      installments: "à vista",
      discount: "61% OFF",
      popular: false,
      bestValue: false,
      link: "https://seguro.payt.com.br/a/Pko6pXzKFnrP1Wn0"
    },
    {
      title: "Tratamento 12 meses",
      subtitle: "Máximos resultados",
      originalPrice: "R$ 2.397,00",
      price: "R$ 797,00", 
      installments: "à vista",
      discount: "67% OFF",
      popular: false,
      bestValue: true,
      link: "https://seguro.payt.com.br/a/nVoQbDkVIZOp4ebq"
    }
  ]

  const faqItems = [
    {
      question: "O QUE É O ROSA ORIENTAL?",
      answer: "O Rosa Oriental é um produto desenvolvido para promover o rejuvenescimento da pele, inspirado nos ingredientes milenares da Ásia. Sua fórmula combina colágeno de origem japonesa, ácido hialurônico fermentado, chá verde antioxidante e vitamina B5, projetados para manter a pele firme, hidratada e iluminada."
    },
    {
      question: "COMO O ROSA ORIENTAL AGE NA PELE?",
      answer: "O Rosa Oriental age de dentro para fora, oferecendo nutrientes essenciais que ajudam a manter a elasticidade e a hidratação da pele, promovendo um efeito rejuvenescedor visível. O colágeno e o ácido hialurônico trabalham na restauração e manutenção da estrutura da pele, enquanto os antioxidantes do chá verde combatem os danos causados pelos radicais livres, protegendo e iluminando a pele."
    },
    {
      question: "QUAIS SÃO OS BENEFÍCIOS DO ROSA ORIENTAL?",
      answer: "* PELE MAIS FIRME E HIDRATADA: Os ingredientes como colágeno e ácido hialurônico ajudam a melhorar a elasticidade da pele.\n\n* REDUÇÃO DE SINAIS DE ENVELHECIMENTO: Atua para minimizar linhas finas e rugas, deixando a pele mais jovem e revitalizada.\n\n* PELE MAIS ILUMINADA E UNIFORME: Os antioxidantes do chá verde e a vitamina B5 ajudam a combater o estresse oxidativo e a dar um brilho saudável à pele."
    },
    {
      question: "QUEM PODE USAR O ROSA ORIENTAL?",
      answer: "O Rosa Oriental foi desenvolvido para mulheres que buscam melhorar a saúde e a aparência da pele, especialmente aquelas que estão preocupadas com sinais de envelhecimento. Não há restrição quanto à idade, mas é recomendado para mulheres a partir dos 30 anos, quando os primeiros sinais de envelhecimento começam a aparecer."
    },
    {
      question: "O ROSA ORIENTAL TEM EFEITOS COLATERAIS?",
      answer: "O Rosa Oriental é formulado com ingredientes naturais e de alta qualidade, sendo seguro para a maioria das pessoas. No entanto, se você tiver alergias ou condições de saúde preexistentes, consulte um médico antes de usar o produto. Em caso de reações adversas, interrompa o uso e procure orientação médica."
    },
    {
      question: "QUANDO VEREI RESULTADOS AO USAR O ROSA ORIENTAL?",
      answer: "Os primeiros resultados podem ser percebidos em cerca de 2 a 4 semanas de uso contínuo, mas os efeitos mais significativos, como pele mais firme e reduzida aparência de linhas finas, geralmente começam a ser notados após 6 a 8 semanas de uso regular."
    },
    {
      question: "ROSA ORIENTAL É VENDIDO NA FARMÁCIA OU MERCADO LIVRE?",
      answer: "Não, a venda é exclusivamente feita por nosso site oficial: www.rosaoriental.com.br Nós não nos responsabilizamos por sites que fraudam o Rosa Oriental. É um grande risco à sua saúde comprar em sites como Mercado Livre porque as cápsulas vendidas nele não passam pelo nosso controle de qualidade nem são aprovadas pela ANVISA."
    },
    {
      question: "O SITE É SEGURO?",
      answer: "Este site é 100% protegido contra recursos de má intenção. Suas informações pessoais são sigilosas segundo a nossa Política de Privacidade e a entrega é garantida! Rosa Oriental é vendido diariamente para pessoas de todo o Brasil."
    },
    {
      question: "COMO RASTREAR O PEDIDO?",
      answer: "Para acompanhar o seu envio clique aqui (coloque o número da sua transação que os dados serão impressos). Após a compra, o prazo para que seus dados estejam no sistema, é de até 72 horas. Caso não consiga depois desse período, entre em contato conosco."
    }
  ]

  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={logoImg} alt="Rosa Oriental" className="h-12 w-auto" />
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#beneficios" className="text-gray-600 hover:text-pink-600 transition-colors">Benefícios</a>
              <a href="#composicao" className="text-gray-600 hover:text-pink-600 transition-colors">Composição</a>
              <a href="#depoimentos" className="text-gray-600 hover:text-pink-600 transition-colors">Depoimentos</a>
              <a href="#kits" className="text-gray-600 hover:text-pink-600 transition-colors">Kits</a>
              <a href="#faq" className="text-gray-600 hover:text-pink-600 transition-colors">FAQ</a>
            </nav>
            <div className="flex space-x-3">
              <a href="https://wa.me/5514981262330" target="_blank" rel="noopener noreferrer">
                <button className="bg-pink-600 hover:bg-pink-700">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </button>
              </a>
              <a href="#kits">
                <button className="bg-green-600 hover:bg-green-700">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Comprar
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center relative">
            <div className="floating-animation">
              <img src={produtoImg} alt="Rosa Oriental" className="max-w-sm w-full h-auto drop-shadow-2xl" />
            </div>
          </div>
          <div>
            <span className="mb-4 bg-pink-100 text-pink-600 border-pink-200">
              <Star className="w-4 h-4 mr-1" />
              Aprovado pela ANVISA
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-pink-600">Rejuvenesça</span><br />
              <span className="text-gray-800">sua pele</span><br />
              <span className="text-pink-600">de dentro pra fora</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Pele mais firme, hidratada e iluminada com apenas <strong>1 cápsula por dia</strong>. 
              Sem precisar de agulhas ou procedimentos invasivos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#kits">
                <button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4">
                  <Heart className="w-5 h-5 mr-2" />
                  Quero Rejuvenescer
                </button>
              </a>
              <a href="https://wa.me/5514981262330" target="_blank" rel="noopener noreferrer">
                <button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </button>
              </a>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                Aprovado ANVISA
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-blue-500 mr-1" />
                Frete Grátis
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-yellow-500 mr-1" />
                Garantia 90 dias
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefícios <span className="text-pink-600">Comprovados</span>
            </h2>
            <p className="text-lg text-gray-600">
              Descubra como o Rosa Oriental pode transformar sua pele de forma natural e eficaz
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <divContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formula Section */}
      <section id="composicao" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Fórmula <span className="text-pink-600">Exclusiva</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Combinação única de ingredientes premium que trabalham em sinergia para rejuvenescer sua pele de dentro para fora.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Colágeno Hidrolisado com Tecnologia Japonesa</h3>
                    <p className="text-gray-600">Recupera firmeza e elasticidade com alta absorção</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Vitamina C</h3>
                    <p className="text-gray-600">Estimula colágeno e combate radicais livres</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Ácido Hialurônico</h3>
                    <p className="text-gray-600">Hidratação intensa e preenchimento de linhas finas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Vitamina B5</h3>
                    <p className="text-gray-600">Fortalece a barreira da pele e acelera cicatrização</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
          
          <div className="max-w-2xl mx-auto">
            <div className="p-8 text-center">
              <divContent>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg italic text-gray-700 mb-6">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={testimonials[activeTestimonial].image} 
                    alt={testimonials[activeTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold">{testimonials[activeTestimonial].name}</div>
                    <div className="text-gray-600">{testimonials[activeTestimonial].age} anos</div>
                  </div>
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

      {/* Guarantee Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="flex justify-center">
              <img src={garantiaImg} alt="Garantia 90 Dias" className="max-w-md w-full h-auto" />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Shield className="w-16 h-16 text-green-500 mr-4" />
                <h2 className="text-3xl font-bold">Garantia de 90 Dias</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Confiamos tanto na eficácia do Rosa Oriental que, se você usá-lo por 90 dias e não ver resultados, devolvemos seu dinheiro!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Compra 100% Segura</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="text-gray-600">Frete Grátis Brasil</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-3" />
                  <span className="text-gray-600">Aprovado ANVISA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="kits" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Escolha seu <span className="text-pink-600">Tratamento</span>
            </h2>
            <p className="text-lg text-gray-600">
              Kits especiais com descontos exclusivos para você começar sua transformação hoje mesmo
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {plans.map((plan, index) => (
              <div key={index} className={`relative ${plan.popular ? 'ring-2 ring-pink-500 scale-105' : ''}`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white">
                    Mais Popular
                  </span>
                )}
                {plan.bestValue && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white">
                    Melhor Custo Benefício
                  </span>
                )}
                <divContent className="p-6 text-center">
                  <span className="mb-4 bg-green-100 text-green-600">{plan.discount}</span>
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-gray-600 mb-4">{plan.subtitle}</p>
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 line-through">{plan.originalPrice}</div>
                    <div className="text-3xl font-bold text-pink-600">{plan.price}</div>
                    <div className="text-sm text-gray-600">{plan.installments}</div>
                  </div>
                  <a href={plan.link} target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-pink-600 hover:bg-pink-700">
                      Comprar Agora
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perguntas <span className="text-pink-600">Frequentes</span>
            </h2>
            <p className="text-lg text-gray-600">
              Tire todas suas dúvidas sobre o Rosa Oriental
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">{item.question}</h3>
                    <div className={`transform transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>
                      +
                    </div>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronta para Transformar sua Pele?
          </h2>
          <p className="text-xl mb-8">
            Junte-se a mais de 50.000 mulheres que já descobriram o segredo para uma pele jovem e radiante com Rosa Oriental
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#kits">
              <button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4">
                <Heart className="w-5 h-5 mr-2" />
                Escolher Meu Kit
              </button>
            </a>
            <a href="https://wa.me/5514981262330" target="_blank" rel="noopener noreferrer">
              <button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={logoImg} alt="Rosa Oriental" className="h-12 w-auto mb-4 filter brightness-0 invert" />
              <p className="text-gray-400 mb-4">
                Rejuvenesça sua pele de dentro para fora com a fórmula exclusiva Rosa Oriental.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Links Rápidos</h3>
              <div className="space-y-2">
                <a href="#beneficios" className="block text-gray-400 hover:text-white transition-colors">Benefícios</a>
                <a href="#composicao" className="block text-gray-400 hover:text-white transition-colors">Composição</a>
                <a href="#depoimentos" className="block text-gray-400 hover:text-white transition-colors">Depoimentos</a>
                <a href="#kits" className="block text-gray-400 hover:text-white transition-colors">Kits</a>
                <a href="#faq" className="block text-gray-400 hover:text-white transition-colors">FAQ</a>
                <a href="https://www.correios.com.br/rastreamento" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Package className="w-4 h-4 mr-2" />
                  Rastrear Pedido
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (14) 98126-2330
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Rosa Oriental. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">
              Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Consulte seu médico antes de usar.
            </p>
          </div>
        </div>
      </footer>

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
  )
}

export default App

