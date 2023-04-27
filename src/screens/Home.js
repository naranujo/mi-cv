import React, { Component } from 'react';
import { db } from "../firebase/config";
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            email_enviado: false,
            email_session_storage: sessionStorage.getItem("email_enviado"),
        };
    }

    handleEmailChange = (e) => {
        e.preventDefault();
        this.setState({ email: e.target.value });
    };

    saveEmail = async (email) => {
        const emailRef = db.collection("emails").doc(email);
        const doc = await emailRef.get();
        if (!doc.exists) {
            await emailRef.set({ email });
            this.setState({ email_enviado: true });
            sessionStorage.setItem("email_enviado", true);
        }
    };

    render() {
        return (
            <div className='banner'>
                <div className='banner-logo'>
                    <img src='/logo512.png' alt='Logo' />
                </div>
                <div className='banner-content'>
                    <h2>¡Sitio web en construcción!</h2>
                    <p>¡Suscríbete a nuestro newsletter para recibir actualizaciones!</p>
                    <form>
                        <label htmlFor='email'>Suscríbete a nuestro newsletter:</label>
                        <div className='input-group'>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                placeholder='Ingresa tu correo electrónico'
                                required
                                onChange={this.handleEmailChange}
                            />
                            {
                                this.state.email_enviado || this.state.email_session_storage
                                ?
                                    <button type='submit' className='enviado' >
                                        ¡Gracias por suscribirte!
                                    </button>
                                :
                                    <button type='submit' onClick={(e) => {e.preventDefault();this.saveEmail(this.state.email);}} >
                                        Suscribirme
                                    </button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;