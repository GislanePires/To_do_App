import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./Style.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword ]= useState("");
    const [usernameFocused, setUsernameFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);  
    
    //alterar input ao ser clicado

    const handleUsernameFocus = () => {
        setUsernameFocused(true);
    };

    const handleUsernameBlur = () => {
        setUsernameFocused(false);
    };

    const handlePasswordFocus = () => {
        setPasswordFocused(true);
    };

    const handlePasswordBlur = () => {
        setPasswordFocused(false);
    };



    //função para envio do formulário para o servidor/backend
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Username: ", username, password);
        alert("Enviando dados: " + username + " - " + password);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form-login"> 
                <h1>Acesse o Sistema</h1>
                <div className={`input-field ${usernameFocused ? 'focused' : ''}`}>
                    <input 
                    type="e-mail" 
                    placeholder="E-mail" 
                    // value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                    <FaUser className="icon"/>
                </div>
                <div className="input-field">
                    <input type="password" 
                    placeholder="Senha" 
                    // value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className="icon"/>
                            </div>
                    <div className="recall-forget">
                        <label>
                            <input className="input-checkbox"
                            type="checkbox" />
                            Lembre de mim
                        </label>
                        <a href="a">Esqueceu a senha?</a>
                    </div>
                <button type="submit">Entrar</button>
                <div className="signup-link">
                    <p>Não tem uma conta? <a href = "a">Registrar</a></p>
                </div>

            </form>
        </div>

    );
}

export default Login;