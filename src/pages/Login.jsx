import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:4000/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
    
          if (response.ok) {
            window.location.href = '/'
          } else {
            // Gérer les erreurs d'authentification
          }
        } catch (error) {
          console.error(error);
        }
      };
    
    return(
        <div className="flex flex-col w-full h-screen justify-center items-center bg-gradient-to-br from-indigo-700 via-indigo-300 to-indigo-200">
            <div>
                <form method='POST' onSubmit={handleLogin} className=" w-11/12 m-auto sm:w-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100 px-8 pt-6 pb-8 mb-4">
                    <p className="text-4xl text-center text-white">Heureux de vous revoir !</p>

                    <div className="mb-4 pt-8">
                        <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" className="outline-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-500" type="email" autoComplete="off"></input>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-white text-sm font-bold mb-2">Mot de passe</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" className="outline-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-500" type="password"></input>
                    </div>

                    <div className="flex flex-col w-full sm:flex-row sm:gap-0 gap-5 justify-between items-center pt-4">
                        <button className="text-white bg-blue-500 p-3 rounded text-lg hover:shadow-lg duration-100" type='submit' onClick={handleLogin}>Se connecter</button>
                        <Link to="/register" className="text-gray-500 underline font-medium cursor-pointer hover:text-white duration-150">Créer un compte</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;