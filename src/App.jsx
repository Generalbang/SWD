import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";

import "./output.css";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import SignUp from "./components/SignUp";
import Regular from "./components/register/Regular";
import Reset from "./components/Reset";
import Forgot from "./components/Forgot";
import OTPsent from "./components/otp/OTPsent";
import OTP from "./components/otp/OTP";
import Features from "./components/Features";
import NoPage from "./components/NoPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/sign-up' element={<SignUp />}>
            <Route path='' element={<Regular />} />
            <Route path='user' element={<Regular />} />
            <Route path='provider' element={<Regular />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/features' element={<Features />} />
          <Route path='/password-reset' element={<Reset />} />
          <Route path='/forgot-password' element={<Forgot />} />
          <Route path='/check-mail' element={<OTPsent />} />
          <Route path='/input-code' element={<OTP />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
