import { Link, NavLink } from "react-router-dom";

function Regular() {
  return (
    <div>
      <form action='' className='regular'>
        <label className='text-[#532F82] font-bold' htmlFor=''>
          Full name
        </label>
        <br />
        <input
          className='focus:ring-2 focus:ring-gray-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-5 ring-1 ring-slate-200 shadow-sm mb-2'
          type='text'
          name=''
          id=''
        />

        <br />
        <label className='text-[#532F82] font-bold' htmlFor=''>
          Email
        </label>
        <br />
        <input
          className='focus:ring-2 focus:ring-gray-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-5 ring-1 ring-slate-200 shadow-sm mb-2'
          type='email'
          name=''
          id=''
        />

        <br />
        <label className='text-[#532F82] font-bold' htmlFor=''>
          Phone number
        </label>
        <br />
        <input
          className='focus:ring-2 focus:ring-gray-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-5 ring-1 ring-slate-200 shadow-sm mb-2'
          type='text'
          name=''
          id=''
        />

        <br />
        <label className='text-[#532F82] font-bold' htmlFor=''>
          password
        </label>
        <br />
        <input
          className='focus:ring-2 focus:ring-gray-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-5 ring-1 ring-slate-200 shadow-sm mb-2'
          type='password'
          name=''
          id=''
        />

        <br />
        <label className='text-[#532F82] font-bold' htmlFor=''>
          Re-enter password
        </label>
        <br />
        <input
          className='focus:ring-2 focus:ring-gray-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-5 ring-1 ring-slate-200 shadow-sm mb-2'
          type='password'
          name=''
          id=''
        />

        <br />
        <div className='flex gap-4'>
          <input type='checkbox' name='' id='' />
          <p>
            I agree to Dutiful's{" "}
            <Link className='text-[#532F82] font-bold'>
              terms and conditions
            </Link>
          </p>
        </div>

        <br />

        <button
          className='w-full h-12 mt-6 px-6 font-semibold rounded-md text-white'
          style={{ backgroundColor: "#532F82" }}
          type='submit'
        >
          Signup
        </button>
        <div>
          <p>
            Already have an account?{" "}
            <NavLink className='text-[#532F82] font-bold' to={"/login"}>
              Login
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Regular;
