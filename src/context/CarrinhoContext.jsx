import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('futdelicia_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('futdelicia_cart', JSON.stringify(cart));
    }, [cart]);

    // ADICIONAR
    const addToCart = (produto) => {
        setCart(prevCart => {
            const itemExiste = prevCart.find(item => item.id === produto.id);
            if (itemExiste) {
                return prevCart.map(item =>
                    item.id === produto.id ? { ...item, qtd: item.qtd + 1 } : item
                );
            }
            return [...prevCart, { ...produto, qtd: 1 }];
        });
    };

    // REMOVER/DIMINUIR QUANTIDADE
    const removeFromCart = (produtoId) => {
        setCart(prevCart => {
            const item = prevCart.find(i => i.id === produtoId);
            if (item.qtd > 1) {
                return prevCart.map(i =>
                    i.id === produtoId ? { ...i, qtd: i.qtd - 1 } : i
                );
            }
            return prevCart.filter(i => i.id !== produtoId);
        });
    };

    // LIMPAR CARRINHO
    const clearCart = () => setCart([]);

    // PREÇO FINAL
    const totalCarrinho = cart.reduce((acc, item) => {
        const precoTexto = item.precoPromo || item.precoOriginal;
        
        const precoLimpo = parseFloat(
            precoTexto.replace('R$', '').replace(',', '.').trim()
        );

        return acc + (isNaN(precoLimpo) ? 0 : precoLimpo * item.qtd);
    }, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalCarrinho, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);