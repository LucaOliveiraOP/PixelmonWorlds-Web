import React, { useState } from 'react';
import backgroundImage from '../../assets/icon.jpeg'; // Imagem de fundo
import clickSound from '../../assets/pokeball.mp3'; // Som da Pokébola
import pokeballImage from '../../assets/logo4.png'; // Imagem da Pokébola
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('E-mail:', email);
        console.log('Senha:', password);
        
        // Tocar o som
        const audio = new Audio(clickSound);
        audio.volume = 0.15;
        audio.play();

        // Navegar para a página home após um pequeno delay
        setTimeout(() => {
            navigate('/home');
        }, 1000);
    };

    return (
        <div className="login-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-logo">
                        <img src={pokeballImage} alt="Pokébola" style={{ width: '50px', height: 'auto' }} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
