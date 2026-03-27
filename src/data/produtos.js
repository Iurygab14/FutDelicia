import hamburguer from "../imgs/hamburguer2.jpg";
import fries from "../imgs/batataFrita.jpeg";
import salada from "../imgs/salada.jpg";
import bebidas from "../imgs/bebidas.jpg";
import sobremesas from "../imgs/doces.jpg";
import molhos from "../imgs/molhos.jpg";
import sopas from "../imgs/sopas.avif"
import pizzas from "../imgs/pizzas.jpg"
import cafes from "../imgs/cafes.jpg"
import massas from "../imgs/massas.jpg"

export const produtos = [
    // HAMBÚRGUERES
    { id: 1, categoria: "hambúrgueres", oferta: true, nome: "Clássico do Povo Burger", desc: "Hambúrguer robusto, bem servido, 'raiz'.", precoOriginal: "R$ 23.10", precoPromo: "R$ 13.90", img: hamburguer },
    { id: 2, categoria: "hambúrgueres", oferta: true, nome: "Burger Galo Forte", desc: "Hambúrguer intenso, sabor marcante.", precoOriginal: "R$ 23.10", precoPromo: "R$ 13.90", img: hamburguer },
    { id: 3, categoria: "hambúrgueres", oferta: true, nome: "Rei da América Burger", desc: "O carro-chefe do cardápio, o mais popular.", precoOriginal: "R$ 23.10", precoPromo: "R$ 13.90", img: hamburguer },
    { id: 4, categoria: "hambúrgueres", oferta: true, nome: "Imortal Tricolor Burger", desc: "Hambúrguer clássico, tradição pura.", precoOriginal: "R$ 23.10", precoPromo: "R$ 13.90", img: hamburguer },
    { id: 5, categoria: "hambúrgueres", oferta: false, nome: "Plano B", desc: "Sabuoorr Libertadores", precoOriginal: "R$ 23.10", precoPromo: "", img: hamburguer },
    { id: 6, categoria: "hambúrgueres", oferta: false, nome: "Porco Louco Burger", desc: "Hambúrguer com pulled pork e molho especial.", precoOriginal: "R$ 27.50", precoPromo: "", img: hamburguer },
    { id: 7, categoria: "hambúrgueres", oferta: false, nome: "Timão Fiel Burger", desc: "Hambúrguer raiz com queijo prato e cebola caramelizada.", precoOriginal: "R$ 25.90", precoPromo: "", img: hamburguer },
    { id: 8, categoria: "hambúrgueres", oferta: false, nome: "Raposa Mineira Burger", desc: "Carne suculenta com molho barbecue e onion rings.", precoOriginal: "R$ 26.00", precoPromo: "", img: hamburguer },
    { id: 9, categoria: "hambúrgueres", oferta: false, nome: "Leão da Ilha Burger", desc: "Hambúrguer com pimenta leve e queijo coalho.", precoOriginal: "R$ 24.90", precoPromo: "", img: hamburguer },

    // BATATAS
    { id: 10, categoria: "batatas-fritas", oferta: true, nome: "Batata Maracanã Lotado", desc: "Porção grande, pra dividir (ou não).", precoOriginal: "R$ 23.10", precoPromo: "R$ 19.90", img: fries },
    { id: 11, categoria: "batatas-fritas", oferta: true, nome: "Batata Mineirão Crocante", desc: "Batata bem crocante, clássica.", precoOriginal: "R$ 23.10", precoPromo: "R$ 18.90", img: fries },
    { id: 12, categoria: "batatas-fritas", oferta: true, nome: "Batata Beira-Rio Temperada", desc: "Batata com tempo especial da casa.", precoOriginal: "R$ 23.10", precoPromo: "R$ 19.50", img: fries },
    { id: 13, categoria: "batatas-fritas", oferta: false, nome: "Batata Castelão Apimentada", desc: "Batata com páprica e toque picante.", precoOriginal: "R$ 22.00", precoPromo: "", img: fries },
    { id: 14, categoria: "batatas-fritas", oferta: false, nome: "Batata Arena da Baixada Suprema", desc: "Com cheddar e bacon.", precoOriginal: "R$ 27.00", precoPromo: "", img: fries },
    { id: 15, categoria: "batatas-fritas", oferta: false, nome: "Batata Vila Belmiro Clássica", desc: "Simples e bem feita, estilo raiz.", precoOriginal: "R$ 20.00", precoPromo: "", img: fries },

    // SALADAS
    { id: 16, categoria: "saladas", oferta: true, nome: "Salada Camarote Maracanã", desc: "Mix de folhas nobres, queijo branco e croutons.", precoOriginal: "R$ 22.00", precoPromo: "R$ 17.60", img: salada },
    { id: 17, categoria: "saladas", oferta: true, nome: "Verdão Allianz", desc: "Rúcula, tomate seco e lascas de parmesão.", precoOriginal: "R$ 20.00", precoPromo: "R$ 16.00", img: salada },

    // BEBIDAS
    { id: 18, categoria: "bebidas", oferta: true, nome: "Suco Muralha", desc: "Suco natural de laranja. Defesa certa contra a sede.", precoOriginal: "R$ 12.00", precoPromo: "R$ 9.90", img: bebidas },
    { id: 19, categoria: "bebidas", oferta: true, nome: "Soda Gol do Gabigol", desc: "Limonada refrescante com hortelã.", precoOriginal: "R$ 10.00", precoPromo: "R$ 8.50", img: bebidas },
    { id: 20, categoria: "bebidas", oferta: true, nome: "Chá VAR da CBF", desc: "Para analisar cada jogada com calma.", precoOriginal: "R$ 9.00", precoPromo: "R$ 7.50", img: bebidas },
    { id: 21, categoria: "bebidas", oferta: false, nome: "Refri Torcida em Festa", desc: "Refrigerante gelado pra acompanhar o jogo.", precoOriginal: "R$ 8.00", precoPromo: "", img: bebidas },

    // SOBREMESAS
    { id: 22, categoria: "sobremesas", oferta: true, nome: "Pudim Rei Pelé", desc: "O doce que é um golaço no ângulo.", precoOriginal: "R$ 14.00", precoPromo: "R$ 9.80", img: sobremesas },
    { id: 23, categoria: "sobremesas", oferta: true, nome: "Mousse Gol de Placa Zico", desc: "Chocolate meio amargo para finalizar a partida.", precoOriginal: "R$ 16.00", precoPromo: "R$ 11.20", img: sobremesas },
    { id: 24, categoria: "sobremesas", oferta: true, nome: "Brownie Liberta na Prorrogação", desc: "Com sorvete, para quem quer esticar o prazer.", precoOriginal: "R$ 21.00", precoPromo: "R$ 14.70", img: sobremesas },
    { id: 25, categoria: "sobremesas", oferta: false, nome: "Açaí Hat-Trick", desc: "Açaí com 3 acompanhamentos à escolha.", precoOriginal: "R$ 18.00", precoPromo: "", img: sobremesas },

    // MOLHOS
    { id: 26, categoria: "molhos", oferta: true, nome: "Maionese Raça Rubro-Negra", desc: "Receita secreta com ervas finas.", precoOriginal: "R$ 4.00", precoPromo: "R$ 3.00", img: molhos },
    { id: 27, categoria: "molhos", oferta: true, nome: "Barbecue Tricolor Imortal", desc: "Defumado e intenso para fechar o placar.", precoOriginal: "R$ 4.50", precoPromo: "R$ 3.50", img: molhos },
    { id: 28, categoria: "molhos", oferta: false, nome: "Molho Pressão Alta", desc: "Levemente picante.", precoOriginal: "R$ 4.50", precoPromo: "", img: molhos },
    { id: 29, categoria: "molhos", oferta: false, nome: "Molho Retranca Cremosa", desc: "Suave e consistente.", precoOriginal: "R$ 4.00", precoPromo: "", img: molhos },

    // MASSAS
    { id: 30, categoria: "massas", oferta: false, nome: "Macarrão Mengão à Bolonhesa", desc: "Clássico forte e marcante, igual o rubro-negro.", precoOriginal: "R$ 26.90", precoPromo: "", img: massas },
    { id: 31, categoria: "massas", oferta: false, nome: "Penne Verdão Cremoso", desc: "Molho branco com frango, estilo campeão.", precoOriginal: "R$ 27.50", precoPromo: "", img: massas },
    { id: 32, categoria: "massas", oferta: false, nome: "Espaguete Timão Raiz", desc: "Alho e óleo direto e sem frescura.", precoOriginal: "R$ 22.00", precoPromo: "", img: massas },
    { id: 33, categoria: "massas", oferta: true, nome: "Lasanha Tricolor Imortal", desc: "Camadas clássicas que nunca caem.", precoOriginal: "R$ 32.00", precoPromo: "R$ 27.90", img: massas },

    // PIZZAS
    { id: 34, categoria: "pizzas", oferta: false, nome: "Pizza Mengão Calabresa", desc: "Explosão de sabor com bastante recheio.", precoOriginal: "R$ 39.90", precoPromo: "", img: pizzas },
    { id: 35, categoria: "pizzas", oferta: false, nome: "Pizza Verdão Suprema", desc: "Frango com catupiry no estilo campeão.", precoOriginal: "R$ 42.00", precoPromo: "", img: pizzas },
    { id: 36, categoria: "pizzas", oferta: true, nome: "Pizza Timão Portuguesa", desc: "Clássica, forte e de respeito.", precoOriginal: "R$ 41.00", precoPromo: "R$ 36.90", img: pizzas },

    // CAFÉS DA MANHÃ
    { id: 37, categoria: "cafés-da-manhã", oferta: false, nome: "Tapioca Leão Nordestino", desc: "Queijo coalho com manteiga.", precoOriginal: "R$ 13.50", precoPromo: "", img: cafes },
    { id: 38, categoria: "cafés-da-manhã", oferta: true, nome: "Cuscuz do Belo", desc: "Com ovo e carne de sol.", precoOriginal: "R$ 16.00", precoPromo: "13.90", img: cafes },

    // SOPAS
    { id: 39, categoria: "sopas", oferta: false, nome: "Sopa Galão", desc: "Sabor refinado e encorpado.", precoOriginal: "R$ 17.00", precoPromo: "", img: sopas },
    { id: 40, categoria: "sopas", oferta: false, nome: "Caldo Leão da Ilha Picante", desc: "Com toque apimentado.", precoOriginal: "R$ 15.50", precoPromo: "", img: sopas }
];