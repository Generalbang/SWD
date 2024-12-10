import { Link } from "react-router-dom";
import { useStates } from "../context/Context";

function Forgot() {
  const { forgotMail, setForgotMail } = useStates();
  const handleChange = (e) => setForgotMail(e.target.value);

  return (
    <div className='container mx-auto w-1/3'>
      <h1 className='text-3xl  pb-8'>
        {/* text-[#532F82] */}
        <strong>Forgot password</strong>
      </h1>
      <div>
        Enter your email and we'll send a mail on how to reset your password.
      </div>
      <form action=''>
        <br />
        <br />
        <label className='text-[#532F82] font-bold' htmlFor=''>
          Email
        </label>
        <br />
        <input
          className='focus:ring-2 focus:ring-gray-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-5 ring-1 ring-slate-200 shadow-sm mb-2'
          type='text'
          name=''
          id=''
          onChange={handleChange}
          value={forgotMail}
        />
        <br />

        {forgotMail === '' || !forgotMail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) ? <button
            className='w-full h-12 mt-6 px-6 font-semibold rounded-md text-white'
            style={{ backgroundColor: "gray" }}
            onClick = {(e)=> e.preventDefault()}
          >
            Input your email address in the provided field above
          </button> : <Link to={"/check-mail"}>
          <button
            className='w-full h-12 mt-6 px-6 font-semibold rounded-md text-white'
            style={{ backgroundColor: "#532F82" }}
            type='submit'
          >
            Send email
          </button>
        </Link>}
      </form>
      <div className='flex justify-center p-4 gap-2'>
        or
        <Link className='text-[#532F82] font-bold' to={"/sign-up"}>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Forgot;
