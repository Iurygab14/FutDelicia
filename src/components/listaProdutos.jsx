import "C:/Users/Windows 11/futdelicia/src/assets/listaProdutos.css";
import { produtos } from '../data/produtos';

function ListaProdutos(){
    const produtosEmOferta = produtos.filter(p => p.oferta === true);

    const categoriasUnicas = [...new Set(produtosEmOferta.map(p => p.categoria))];

    return (
    <div className="produtos-container">
      {categoriasUnicas.map(categoria => {
        
        const produtosDaCategoria = produtosEmOferta.filter(p => p.categoria === categoria);

        return (
          <section key={categoria} id={categoria} className="secao-categoria">
            <h2 className="titulo-categoria">
              {categoria.replace(/-/g, ' ').charAt(0).toUpperCase() + categoria.slice(1).replace(/-/g, ' ')}
            </h2>

            <div className="produtos-grid">
              {produtosDaCategoria.map(produto => (
                <div className="produto-card" key={produto.id}>
                  <div className="produto-detalhes">
                    <h3>{produto.nome}</h3>
                    <p>{produto.desc}</p>
                    <div className="preco-container">
                      {produto.precoPromo !== "" && (
                        <span className="preco-original">{produto.precoOriginal}</span>
                      )}
                      
                      <span className={produto.precoPromo ? "preco-verde" : "preco-preto"}>
                        {produto.precoPromo || produto.precoOriginal}
                      </span>
                    </div>
                  </div>

                  <div className="produto-imagem-wrapper">
                    <img 
                      src={produto.img} 
                      className="produto-img" 
                      alt={produto.nome} 
                    />
                    <button className="btn-add-item">+</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default ListaProdutos