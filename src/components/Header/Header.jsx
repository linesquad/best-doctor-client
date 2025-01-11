import Navbar from "./Navbar/NavBar";
import { navLinks } from "../../lib/navLinks";
function Header() {
  return (
    <header>
      <Navbar
        links={navLinks}
        bgColor="bg-darkBlue"
        ActiveBg="bg-lightBlue"
        paddingX="px-4"
        paddingY="py-4"
      />
    </header>
  );
}

export default Header;
