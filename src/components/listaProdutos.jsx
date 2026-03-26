import "C:/Users/Windows 11/futdelicia/src/assets/listaProdutos.css";
import hamburguer from "../imgs/hamburguer2.jpg";
import fries from "../imgs/batataFrita.jpeg";
import salada from "../imgs/salada.jpg";
import bebidas from "../imgs/bebidas.jpg";
import lanches from "../imgs/lanches.jpg";
import sobremesas from "../imgs/doces.jpg";
import molhos from "../imgs/molhos.jpg";

function ListaProdutos(){
    const secoes = [
        {
            titulo: "Hambúrgueres",
            produtos: [
                { id: 1, nome: "Clássico do Povo Burger", desc: "Hambúrguer robusto, bem servido, 'raiz'.", precoOriginal: "R$ 23.10", precoPromo: "R$ 18.90", img: hamburguer },
                { id: 2, nome: "Burger Galo Forte", desc: "Hambúrguer intenso, sabor marcante.", precoOriginal: "R$ 23.10", precoPromo: "R$ 19.50", img: hamburguer },
                { id: 3, nome: "Rei da América Burger", desc: "O carro-chefe do cardápio, o mais popular.", precoOriginal: "R$ 23.10", precoPromo: "R$ 17.90", img: hamburguer },
                { id: 4, nome: "Imortal Tricolor Burger", desc: "Hambúrguer clássico, tradição pura.", precoOriginal: "R$ 23.10", precoPromo: "R$ 18.50", img: hamburguer },
            ]
        },
        {
            titulo: "Batatas-Fritas",
            produtos: [
                { id: 7, nome: "Batata Maracanã Lotado", desc: "Porção grande, pra dividir (ou não).", precoOriginal: "R$ 23.10", precoPromo: "R$ 19.90", img: fries },
                { id: 8, nome: "Batata Mineirão Crocante", desc: "Batata bem crocante, clássica.", precoOriginal: "R$ 23.10", precoPromo: "R$ 18.90", img: fries },
                { id: 9, nome: "Batata Beira-Rio Temperada", desc: "Batata com tempero especial da casa.", precoOriginal: "R$ 23.10", precoPromo: "R$ 19.50", img: fries },
            ]
        },
        {
            titulo: "Lanches",
            produtos: [
                { id: 13, nome: "Misto Torcida Jovem", desc: "O clássico presunto e queijo que não falha no intervalo.", precoOriginal: "R$ 15.00", precoPromo: "R$ 12.00", img: lanches },
                { id: 14, nome: "Hot-Dog Galoucura", desc: "Salsicha dupla, purê e batata palha. O terror dos visitantes.", precoOriginal: "R$ 18.50", precoPromo: "R$ 15.90", img: lanches },
                { id: 15, nome: "Beirute Maestro da 10", desc: "Pão sírio, rosbife, queijo e ovo. Elegância no ataque.", precoOriginal: "R$ 28.90", precoPromo: "R$ 24.90", img: lanches },
            ]
        },
        {
            titulo: "Saladas",
            produtos: [
                { id: 16, nome: "Salada Camarote Maracanã", desc: "Mix de folhas nobres, queijo branco e croutons.", precoOriginal: "R$ 22.00", precoPromo: "R$ 18.90", img: salada },
                { id: 17, nome: "Verdão Allianz", desc: "Rúcula, tomate seco e lascas de parmesão.", precoOriginal: "R$ 20.00", precoPromo: "R$ 16.90", img: salada },
            ]
        },
        {
            titulo: "Bebidas",
            produtos: [
                { id: 18, nome: "Suco Muralha", desc: "Suco natural de laranja. Defesa certa contra a sede.", precoOriginal: "R$ 12.00", precoPromo: "R$ 9.90", img: bebidas },
                { id: 19, nome: "Soda Gol do Gabigol", desc: "Limonada refrescante com hortelã.", precoOriginal: "R$ 10.00", precoPromo: "R$ 8.50", img: bebidas },
                { id: 20, nome: "Chá VAR da CBF", desc: "Para analisar cada jogada com calma.", precoOriginal: "R$ 9.00", precoPromo: "R$ 7.50", img: bebidas },
            ]
        },
        {
            titulo: "Sobremesas",
            produtos: [
                { id: 21, nome: "Pudim Rei Pelé", desc: "O doce que é um golaço no ângulo.", precoOriginal: "R$ 14.00", precoPromo: "R$ 11.90", img: sobremesas },
                { id: 22, nome: "Mousse Gol de Placa Zico", desc: "Chocolate meio amargo para finalizar a partida.", precoOriginal: "R$ 16.00", precoPromo: "R$ 13.90", img: sobremesas },
                { id: 23, nome: "Brownie Liberta na Prorrogação", desc: "Com sorvete, para quem quer esticar o prazer.", precoOriginal: "R$ 21.00", precoPromo: "R$ 17.90", img: sobremesas },
            ]
        },
        {
            titulo: "Molhos",
            produtos: [
                { id: 24, nome: "Maionese Raça Rubro-Negra", desc: "Receita secreta com ervas finas.", precoOriginal: "R$ 4.00", precoPromo: "R$ 3.00", img: molhos },
                { id: 25, nome: "Barbecue Tricolor Imortal", desc: "Defumado e intenso para fechar o placar.", precoOriginal: "R$ 4.50", precoPromo: "R$ 3.50", img: molhos },
            ]
        }
    ];

    return (
    <main className="produtos-container">
        {secoes.map((secao, index) => (
            <section 
            key={index} 
            id={secao.titulo.toLowerCase().replace(/\s+/g, '-')} 
            className="secao-produtos"
            >
            <h2 className="secao-titulo">{secao.titulo}</h2>
            <div className="produtos-grid">
                {secao.produtos.map((produto) => (
                <div key={produto.id} className="produto-card">
                    <div className="produto-detalhes">
                    <h3>{produto.nome}</h3>
                    <p>{produto.desc}</p>
                    <p className="preco">
                        <span className="preco-original">{produto.precoOriginal}</span>
                        <span className="preco-promo">{produto.precoPromo}</span>
                    </p>
                    </div>
                    <div className="produto-imagem-wrapper">
                    <img src={produto.img} alt={produto.nome} className="produto-img" />
                    <button className="btn-add-item">+</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ListaProdutos