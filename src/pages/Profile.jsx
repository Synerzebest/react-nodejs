import Layout from "./Layout";
import ProfileCards from "../components/ProfileCards";


const Profile = () => {
    return(
        <div>
            <Layout renderNavbar={true}/>
            
            <ProfileCards />

        </div>
    )
}

export default Profile;