import Hero from "../components/Hero";
import Layout from './Layout';
import Announcements from '../components/Announcements'

const Home = () => {
    return(
        <>
            <Layout renderNavbar={true}/>

            <Hero />

            <Announcements />

        </>
    )
}

export default Home;