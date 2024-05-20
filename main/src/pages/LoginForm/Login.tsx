import { FaFacebookF } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "../../index.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function Login() {
  const inputDesign =
    "mt-2 custom-login-input md:mt-5 block px-2.5 pb-2.5 pt-4 w-full text-base text-black bg-white rounded-lg border-1 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";

  const labelDesign =
    "absolute text-sm text-gray-500 dark:text-gray-400 duration-75 transform translate-y-[5px] top-0 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-placeholder-shown:top-8 peer-focus:top-1 peer-focus:translate-y-[1px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1";

  return (
    <div className="parent-div">
      <div className=" red-div">
        <div className="logo-div">
          <img src={logo} className="flex object-fill mx-auto " alt="Logo" />
        </div>
      </div>
      <div className="white-div md:mt-30">
        <div className="flex flex-col items-center justify-center h-full ">
          <h1 className="mb-8 text-5xl font-extrabold">Log In</h1>

          <div className="relative">
            <input
              type="text"
              id="floating_outlined"
              className={inputDesign}
              placeholder=" "
            />
            <label htmlFor="floating_outlined" className={labelDesign}>
              Username
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              id="password"
              className={inputDesign}
              placeholder=" "
            />
            <label htmlFor="password" className={labelDesign}>
              Password
            </label>
          </div>

          <div className="relative h-[100px] border-b border-gray-500 w-fit mb-5">
            <Link to="/">
              <button
                type="submit"
                className="p-1 mt-2 text-white rounded-lg bg-main w-80 md:mt-5"
              >
                <p className="mt-1">LOG IN</p>
              </button>
            </Link>
            <p className="absolute bottom-[-12px] right-[140px] bg-white">
              <pre> OR </pre>
            </p>
          </div>
          <div className="mt-6 ml-1">
            <button className="relative flex items-center px-[5.4rem] py-1.5 text-white bg-facebook rounded-lg ">
              <div className="login-option-button border-l-blue-900 border-y-blue-900">
                <FaFacebookF fontSize={28} color="blue" className="z-10" />
              </div>
              <div className="mt-1">Log in with Facebook</div>
            </button>

            <button className="relative flex items-center px-[5.9rem] py-1.5 text-white bg-google rounded-lg mt-4 mb-3">
              <div className="login-option-button border-l-blue-500 border-y-blue-500">
                <FcGoogle fontSize={28} color="blue" className="z-10" />
              </div>
              <div className="mt-1">Log in with Google</div>
            </button>
          </div>

          <p className="mt-3 -mb-4 ">
            Don't have an account?
            <Link to="/signup">
              <span className="font-bold"> Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
