import { Link } from "react-router-dom";
import { useStates } from "../../context/Context";

function OTPsent() {
  const { forgotMail } = useStates();
  return (
    <div className='container mx-auto w-3/6 p-16'>
      <div className='text-center'>
        <img src='' alt='' />
        <p className='px-2 text-sm'>
          An OTP code has been sent to {forgotMail},
          <br />
          Check your email to get the code
        </p>
        <Link to={"/input-code"}>
          <button
            className='w-full h-12 mt-6 px-6 font-semibold rounded-md text-white'
            style={{ backgroundColor: "#532F82" }}
            type='submit'
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OTPsent;
