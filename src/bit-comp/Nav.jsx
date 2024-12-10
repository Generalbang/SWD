import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className='flex justify-between items-center w-2/3 lg:w-3/5'>
      <ul
        className='flex gap-4'
        style={{ fontWeight: "bolder", color: "#656565" }}
      >
        <NavLink to={"/bus-directory"}>Business Directory</NavLink>
        <NavLink to={"/features"}>Features</NavLink>
        <NavLink to={"/pricing"}>Pricing</NavLink>
        <NavLink to={"/blog"}>Blog</NavLink>
      </ul>
      <ul
        className='flex items-center gap-8'
        style={{ fontWeight: "bolder", color: "#532F82" }}
      >
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink
          className='py-2 px-8 rounded'
          style={{ border: "2px solid #532F82" }}
          to={"/sign-up"}
        >
          Sign up
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
