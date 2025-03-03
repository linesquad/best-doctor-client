import { NavLink } from "react-router-dom";

function NavItems({ links, ActiveBg }) {
  return (
    <ul className=" flex gap-12 flex-col lg:flex-row justify-center items-center">
      {links.map((link) => (
        <li key={link.id} className="text-white">
          <NavLink
            to={link.path}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={({ isActive }) =>
              isActive ? `rounded-lg py-2 px-4 w-full ${ActiveBg}` : "py-2 px-4"
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavItems;
