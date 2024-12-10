import { NavLink, Outlet } from "react-router-dom";

function SignUp() {
  return (
    <div className='container mx-auto w-1/3 p-8 my-8'>
      <div>
        <h3>Sign up for free!</h3>
        <h1>
          <strong>Get started</strong>
        </h1>
        <div className='flex gap-8'>
          <NavLink
            className={`py-4 px-8 rounded`}
            to={"/sign-up/user"}
            style={({ isActive }) => ({
              border: isActive ? "2px solid #532F82" : "",
            })}
          >
            <img src='' alt='' />
            <p>Regular user</p>
          </NavLink>
          <NavLink
            className={"py-4 px-8 rounded"}
            to={"/sign-up/provider"}
            style={({ isActive }) => ({
              border: isActive ? "2px solid #532F82" : "",
            })}
          >
            <img src='' alt='' />
            <p>Service provider</p>
          </NavLink>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
// let a = ["#532F82"];
