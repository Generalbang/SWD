import { Link } from "react-router-dom";

function Reset() {
  return (
    <div className='container mx-auto w-1/3'>
      <h1 className='text-3xl pb-4'>
        {/* text-[#532F82] */}
        <strong>Reset password</strong>
      </h1>
      <div className='pb-8'>Set your new password</div>
      <form action=''>
        <label className='text-[#532F82] font-bold' htmlFor=''>
          Enter new password
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
          Re-enter new password
        </label>
        <br />
        <input
          className='focus:ring-2 focus:ring-gray-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-5 ring-1 ring-slate-200 shadow-sm mb-2'
          type='password'
          name=''
          id=''
        />
        <br />

        <button
          className='w-full h-12 mt-6 px-6 font-semibold rounded-md text-white'
          style={{ backgroundColor: "#532F82" }}
          type='submit'
        >
          Reset password
        </button>
      </form>
      <div className='flex justify-center p-4 gap-2'>
        or{" "}
        <Link className='text-[#532F82] font-bold' to={"/sign-up"}>
          Create new account
        </Link>{" "}
      </div>
    </div>
  );
}

export default Reset;
