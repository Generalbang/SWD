import group698 from "/Group 698.svg";
import group5018 from "/Group 5018.svg";
import frame12 from "/Frame 12.svg";
import frame5018 from "/Frame 5018.svg";

function Homepage() {
  return (
    <div className='grid gap-8 py-8 px-16'>
      <div className='flex items-center gap-16'>
        <div>
          <p style={{ fontWeight: "bold", color: "#1E1E48", fontSize: "35px" }}>
            List and grow your business with just few clicks
          </p>
          <h3>
            Eliminate manuel work and save time by listing your business or
            service on the best business directory in Nigeria.
          </h3>
        </div>
        <div>
          <img src={group698} alt='' />
        </div>
      </div>
      <div className='flex items-center gap-16'>
        <div>
          <img src={group5018} alt='' />
        </div>
        <div>
          <p style={{ fontWeight: "bold", color: "#1E1E48", fontSize: "35px" }}>
            Collect reviews and ratings from customers
          </p>
          <h3>
            Accelerate your business reputation by 90% and gain social proof
            through reviews and ratings requested from customers.
          </h3>
        </div>
      </div>
      <div>
        <img src={frame12} alt='' />
      </div>
      <div className='flex items-center gap-16'>
        <div>
          <img src={frame5018} alt='' />
        </div>
        <div>
          <p style={{ fontWeight: "bold", color: "#1E1E48", fontSize: "35px" }}>
            Accept and sell appointments
          </p>
          <h3>
            Let customers book their own appointment or consultation.
            <br />
            Start accepting payments for appointments through your booking page.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
