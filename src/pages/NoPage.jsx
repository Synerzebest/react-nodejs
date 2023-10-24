import { Link } from "react-router-dom";
import Layout from "./Layout";

const NoPage = () => {
    return(
        <div>
            <Layout renderNavbarAndFooter={true}/>
            <div className="w-full flex flex-col justify-center h-60 items-center gap-4">
                <p className="text-3xl">Erreur 404</p>
                <p className="text-xl">Aucune page n'a été trouvée</p>
                <Link to="/" className="text-blue-500 underline hover:no-underline">Accueil</Link>
            </div>
            
        </div>
    );
  };
  
export default NoPage;