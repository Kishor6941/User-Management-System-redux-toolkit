import { NavLink } from "react-router-dom";
import "./Layout.css"
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          
        </ul>
      </nav>
    </>
  );
};

export default Layout;
