import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="flex items-center justify-between p-10 w-full h-24 bg-blue-950 text-white">
            <p className="text-5xl">Resdiasen</p>
            <div>
                <ul className="flex gap-10 pr-40">
                    <li className="text-xl hover:underline"><Link to="/">Accueil</Link></li>
                    <li className="text-xl hover:underline"><Link to="/community">Communauté</Link></li>
                    <li className="text-xl hover:underline"><Link to="/profile">Profil</Link></li>
                </ul>
            </div>
      </nav>
    )
}

export default Navbar;