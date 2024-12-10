import { Link } from "react-router-dom";

function Login() {
  return (
    <div className='container mx-auto w-1/3'>
      <p>Jump right back in</p>
      <h1 className='text-3xl text-[#532F82] pb-8'>
        <strong>Login</strong>
      </h1>
      <form action=''>
        <label className='text-[#532F82] font-bold' htmlFor=''>
          Email
        </label>
        <br />
        <input
          className='focus:ring-2 focus:ring-gray-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-5 ring-1 ring-slate-200 shadow-sm mb-2'
          type='text'
          name=''
          id=''
        />
        <br />
        <br />
        <label className='text-[#532F82] font-bold' htmlFor=''>
          Password
        </label>
        <br />
        <input
          className='focus:ring-2 focus:ring-gray-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-5 ring-1 ring-slate-200 shadow-sm mb-2'
          type='password'
          name=''
          id=''
        />
        <br />
        <Link
          to={"/forgot-password"}
          className='flex justify-end text-[#532F82] font-semibold'
        >
          Forgot password?
        </Link>

        <button
          className='w-full h-12 mt-6 px-6 font-semibold rounded-md text-white'
          style={{ backgroundColor: "#532F82" }}
          type='submit'
        >
          Login
        </button>
      </form>
      <div className='flex justify-center p-4'>
        Don't have an account?{" "}
        <Link className='text-[#532F82] font-bold' to={"/sign-up"}>
          Sign Up
        </Link>{" "}
      </div>
    </div>
  );
}

export default Login;
