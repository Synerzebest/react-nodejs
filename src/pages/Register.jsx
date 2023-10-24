import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';


const buttonClicked = () => toast.success('Compte créé avec succès!')

const Register = () => {
  return(
    <div className="flex flex-col w-full h-screen justify-center items-center bg-gradient-to-br from-indigo-700 via-indigo-300 to-indigo-200">
      <div>
        <form className=" w-11/12 m-auto sm:w-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100 px-8 pt-6 pb-8 mb-4">
          <p className="text-4xl text-center text-white">Rejoignez la communauté !</p>

          <div className="mb-4 pt-8">
            <label for="name" className="block text-white text-sm font-bold mb-2">Nom</label>
            <input name="name" className="outline-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-500" autoComplete="off"></input>
          </div>

          <div className="mb-4">
            <label for="firstname" className="block text-white text-sm font-bold mb-2">Prénom</label>
            <input name="firstname" className="outline-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-500" autoComplete="off"></input>
          </div>
          
          <div className="mb-4">
            <label for="email" className="block text-white text-sm font-bold mb-2">Email</label>
            <input name="email" className="outline-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-500" type="email" autoComplete="off"></input>
          </div>

          <div className="mb-4">
            <label for="password" className="block text-white text-sm font-bold mb-2">Mot de passe</label>
            <input name="password" className="outline-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-500" type="password"></input>
          </div>

          <div className="mb-4">
            <label for="phone" className="block text-white text-sm font-bold mb-2">N° de téléphone</label>
            <input name="phone" className="outline-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-500" autoComplete="off"></input>
          </div>

          <div className="flex flex-col w-full sm:flex-row sm:gap-0 gap-5 justify-between items-center">
            <button className="text-white bg-blue-500 p-3 rounded text-lg hover:shadow-lg duration-100" onClick={buttonClicked}>Créer un compte</button>
            <div className='flex flex-col gap-2 items-center sm:align-baseline'>
              <label className="text-sm text-gray-500 underline font-medium cursor-pointer hover:text-white duration-150">Mot de passe oublié ?</label>
              <Link to="/login" className="text-sm text-gray-500 underline font-medium cursor-pointer hover:text-white duration-150">Se connecter</Link>
            </div>
            <Toaster />
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Register;