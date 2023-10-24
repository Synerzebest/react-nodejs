const Footer = () => {
    return(
        <footer className="bg-blue-950 text-white flex absolute bottom-0 mt-96">
            <div className="w-1/3 m-10">
                <p className="text-3xl pb-3">Resdiasen</p>
                <p>Resdiasen est une plateforme qui réunit la diaspora sénégalaise pour aider le Sénégal à se développer économiquement, socialement et culturellement en facilitant les échanges, les partenariats et les projets. Ensemble, nous pouvons avoir un impact significatif sur la vie des gens et contribuer à la transformation positive du Sénégal.</p>
            </div>
            <div className="w-1/3 m-10">
                <p className="text-3xl pb-3">About Us</p>
                <ul>
                    <li>resdiasen@gmail.com</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                </ul>
            </div>
            <div className="w-1/3 m-10">
                <p className="text-3xl pb-3">Ressources</p>
                <ul>
                    <li>FAQs</li>
                    <li>Termes d'utilisation</li>
                    <li>Politique de confidentialité</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;