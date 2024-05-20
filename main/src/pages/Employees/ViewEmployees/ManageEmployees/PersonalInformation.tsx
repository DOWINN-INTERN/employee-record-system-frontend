function PersonalInformation() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold">Personal Information</h1>
      <div className="flex flex-row gap-10 -mt-3">
        <div>
          <label className="block mt-5" htmlFor="firstName">
            First Name
          </label>
          <input
            required
            placeholder="e.g Edwin"
            type="text"
            id="firstName"
            className="block p-1 border border-gray-200 rounded-lg w-52 focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
          />
        </div>
        <div>
          <label className="block mt-5" htmlFor="middleName">
            Middle Name
          </label>
          <input
            placeholder="e.g Emen"
            required
            type="text"
            id="middleName"
            className="block p-1 border border-gray-200 rounded-lg w-52 focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
          />
        </div>
        <div>
          <label className="block mt-5" htmlFor="surName">
            Last Name
          </label>
          <input
            placeholder="e.g Calma"
            required
            type="text"
            id="surName"
            className="block p-1 border border-gray-200 rounded-lg w-52 focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
          />
        </div>
        <div>
          <label className="block mt-5" htmlFor="suf">
            Suffix
          </label>
          <input
            placeholder="e.g Jr."
            type="text"
            id="suf"
            className="block p-1 border border-gray-200 rounded-lg w-28 focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
          />
        </div>
      </div>

      <div className="flex flex-row gap-10 -mt-2">
        <div>
          <label className="block mt-5" htmlFor="nationality">
            Nationality
          </label>
          <input
            required
            placeholder="e.g Filipino"
            type="text"
            id="nationality"
            className="block p-1 border border-gray-200 rounded-lg w-52 focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
          />
        </div>

        <div>
          <label className="block mt-5">Sex</label>
          <div className="flex gap-x-[52px]">
            <div className="radio-div h-fit">
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="male" />
            </div>
            <div className="radio-div h-fit">
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" id="female" />
            </div>
          </div>
        </div>

        <div>
          <label className="block mt-5">Birth Date</label>
          <div className="flex gap-x-7">
            <select className="p-2 px-4 border border-gray-300 rounded-lg">
              <option>Month</option>
              <option>January</option>
              <option>May</option>
            </select>
            <select className="p-2 px-3 border border-gray-300 rounded-lg">
              <option>Day</option>
              <option>1</option>
              <option>29</option>
            </select>
            <select className="p-2 ml-2 border border-gray-300 rounded-lg w-28">
              <option>2999</option>
              <option>1111</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-10 -mt-2">
        <div>
          <label className="block mt-5">Marital Status</label>
          <select className="block p-2 border border-gray-200 rounded-lg w-52 focus:outline-none focus:border-gray-500 hover:border-gray-500 ">
            <option>Single</option>
            <option>AAAAAAA</option>
          </select>
        </div>
        <div>
          <label className="block mt-5" htmlFor="phone">
            Phone Number
          </label>
          <input
            placeholder="e.g 0999999999"
            required
            type="text"
            id="phone"
            className="block p-1 border border-gray-200 rounded-lg w-52 focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
          />
        </div>
        <div>
          <label className="block mt-5" htmlFor="email">
            Email Address
          </label>
          <input
            placeholder="e.g Calma"
            required
            type="email"
            id="email"
            className="block p-1 border border-gray-200 rounded-lg w-52 focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
