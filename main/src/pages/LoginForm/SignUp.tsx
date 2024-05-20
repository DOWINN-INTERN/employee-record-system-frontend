import logo from "../../assets/logo.png";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../../index.css";
import ReCAPTCHA from "react-google-recaptcha";

function SignUp() {
  const [phone, setPhone] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const generateMonthOptions = () => {
    const months = [];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    for (let i = 0; i < 12; i++) {
      months.push(<option key={i}>{monthNames[i]}</option>);
    }

    return months;
  };

  const generateDayOptions = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(<option key={i}>{i}</option>);
    }
    return days;
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = 1900; i <= currentYear; i++) {
      years.push(<option key={i}>{i}</option>);
    }
    return years;
  };

  return (
    <>
      <div className="parent-div">
        <div className="red-div">
          <div className="logo-div">
            <img
              src={logo}
              className="object-fill mx-auto "
              alt="Logo"
            />
          </div>
        </div>
        <div className="white-div">
          <div className="flex flex-col items-center justify-center h-full md:mt-30">
            <h1 className="text-5xl font-extrabold">Sign Up</h1>
            <div className="flex flex-col items-center mt-6 ">
              <input
                type="text"
                placeholder="First Name"
                className="p-1 mt-4 border-gray-lg w-80"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-1 mt-4 border-gray-lg w-80"
              />
              <div className="mt-4 ">
                <PhoneInput
                  country={"ph"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                />
              </div>
              <p className="w-full mt-4">Birthday</p>
              <div className="flex w-80">
                <select className="p-1 mr-2 border-gray-lg w-28">
                  {generateMonthOptions()}
                </select>
                <select className="w-20 p-1 mr-2 border-gray-lg ">
                  {generateDayOptions()}
                </select>
                <select className="w-24 p-1 border-gray-lg ">
                  {generateYearOptions()}
                </select>
              </div>

              <p className="w-full mt-4">Sex</p>
              <div className="flex w-full gap-2">
                <div className="radio-div">
                  <label htmlFor="male">Male</label>
                  <input type="radio" name="gender" id="male" />
                </div>
                <div className="radio-div">
                  <label htmlFor="female">Female</label>
                  <input type="radio" name="gender" id="female" />
                </div>
              </div>

              <input
                type="text"
                className="mb-5 mt-14 custom-login-input"
                placeholder="Email"
              />
              <input
                type="text"
                className="mb-5 custom-login-input"
                placeholder="Username"
              />
              <input
                type="text"
                className="mb-5 custom-login-input"
                placeholder="New Password"
              />
              <div className="mt-3">
                <ReCAPTCHA
                  sitekey="6LfFWbApAAAAAMcGrOAJ_supGOgjxb1c8YZJVYmh"
                  onChange={(value: unknown) =>
                    console.log("reCAPTCHA value: ", value)
                  }
                />
              </div>
              <button
                onClick={openModal}
                className="flex items-center justify-center p-1 mt-16 text-white rounded-lg bg-main w-80 hover:bg-prime"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-800 bg-opacity-50">
          <div className="bg-white p-10 rounded-lg w-[25%]  text-xl">
            <h1 className="mb-8 text-2xl font-extrabold text-center">
              Sign Up Successful
            </h1>
            <p>
              You will receive an email once your sign-up details have been
              reviewed. Thank you for your patience.
            </p>
            <button
              onClick={closeModal}
              className="flex items-center justify-center w-full p-1 mt-16 text-white rounded-lg bg-prime hover:bg-main"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SignUp;
