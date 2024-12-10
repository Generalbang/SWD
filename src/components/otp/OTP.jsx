import { Link } from "react-router-dom";
import { useStates } from "../../context/Context";

function OTP() {
  const { forgotMail } = useStates();
  return (
    <div className='container mx-auto w-1/3 p-16 text-center' style={{}}>
      <form>
        <div className='flex gap-4 font-semibold justify-center'>
          <input
            className='focus:ring-2 focus:ring-gray-500 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-4 px-6  ring-1 ring-slate-200 w-14 shadow-sm'
            type='text'
          />
          <input
            className='focus:ring-2 focus:ring-gray-500 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-4 px-6  ring-1 ring-slate-200 w-14 shadow-sm'
            type='text'
          />
          <input
            className='focus:ring-2 focus:ring-gray-500 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-4 px-6  ring-1 ring-slate-200 w-14 shadow-sm'
            type='text'
          />
          <input
            className='focus:ring-2 focus:ring-gray-500 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-4 px-6  ring-1 ring-slate-200 w-14 shadow-sm'
            type='text'
          />
        </div>
        <div className='py-4 pb-2'>
          <p>
            Enter OTP code that was sent to your email,
            <br />
            {forgotMail}
          </p>
        </div>
        <Link to={"/"}>
          <button
            className='w-full h-12 mt-6 px-6 font-semibold rounded-md text-white'
            style={{ backgroundColor: "#532F82" }}
            type='submit'
          >
            Confirm OTP
          </button>
        </Link>
      </form>
      <div>
        Didn't get a code? <Link>Resend</Link>
      </div>
    </div>
  );
}

export default OTP;
