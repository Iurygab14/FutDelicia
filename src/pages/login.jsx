import React, { useState, useEffect } from 'react';
import '../assets/login.css';
import { usuarios } from '../data/usuarios';

function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    useEffect(() => {
        if (!localStorage.getItem('usuarios_db')) {
            localStorage.setItem('usuarios_db', JSON.stringify(usuarios));
        }
    }, []);

    const handleRegisterInternal = (email, senha, nome) => {
        const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios_db')) || [];
        const usuarioExiste = usuariosSalvos.find(user => user.email === email);

        if (usuarioExiste) {
            alert("Este e-mail já está cadastrado!");
            return;
        }

        const novoUsuario = {
            id: Date.now(),
            nome: nome, 
            email: email,
            senha: senha,
            role: 'cliente'
        };

        usuariosSalvos.push(novoUsuario);
        localStorage.setItem('usuarios_db', JSON.stringify(usuariosSalvos));

        alert("Usuário cadastrado com sucesso! Agora você pode logar.");
        setIsLogin(true);
    };

    const handleLoginInternal = (email, senha) => {
        const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios_db')) || [];

        const usuarioValido = usuariosSalvos.find(
            user => user.email === email && user.senha === senha
        );

        if (usuarioValido) {
            localStorage.setItem('usuario_logado', JSON.stringify(usuarioValido));
            alert(`Bem-vindo, ${usuarioValido.nome || 'Jogador'}!`);
            window.location.href = "/"; 
        } else {
            alert("E-mail ou senha incorretos.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isLogin) {
            handleLoginInternal(email, senha);
        } else {
            if (senha !== confirmarSenha) {
                alert("As senhas não conferem!");
                return;
            }
            handleRegisterInternal(email, senha, nome);
        }
    };

    return (
        <div className="auth-container">
        <div className="auth-card">
            <h2>{isLogin ? 'Entrar no FutDelícia' : 'Criar Nova Conta'}</h2>
            <form onSubmit={handleSubmit}>
                
                {!isLogin && (
                    <div className="input-group">
                        <input 
                            type="text" 
                            placeholder='Nome'
                            value={nome} 
                            onChange={(e) => setNome(e.target.value)} 
                            required 
                        />
                    </div>
                )}

                <div className="input-group">
                    <input 
                        type="email" 
                        placeholder='E-mail'
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>

                <div className="input-group">
                    <input 
                        type="password" 
                        placeholder='Senha'
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)} 
                        required 
                    />
                </div>

                {!isLogin && (
                    <div className="input-group">
                        <input 
                            type="password" 
                            placeholder='Confirme sua Senha'
                            value={confirmarSenha} 
                            onChange={(e) => setConfirmarSenha(e.target.value)} 
                            required 
                        />
                    </div>
                )}

                <button type="submit" className="btn-auth">
                    {isLogin ? 'Entrar' : 'Cadastrar'}
                </button>
            </form>

            <p onClick={() => {
                setIsLogin(!isLogin);
                setNome('');
                setConfirmarSenha('');
            }} className="toggle-auth">
                {isLogin ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Faça Login'}
            </p>
        </div>
    </div>
    );
}

export default Login;