import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';

const Layout = ({renderNavbar, children}) => {
  return (
    <>
      {renderNavbar && (
        <Navbar />
      )}
      
      {children}
      
      <Outlet />
    </>
  )
};

export default Layout;