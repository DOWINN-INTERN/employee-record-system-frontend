import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import none from "../../../../assets/none.png";

function EmployementInformation() {
  const [imageFile, setImageFile] = useState<File | null>(null);

  const openFileDialog = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    //@ts-expect-error asasa
    input.addEventListener("change", handleFileSelect);
    input.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setImageFile(file);
  };

  const removeImage = () => {
    setImageFile(null);
    console.log("You removed the selected Image");
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
    for (let i = 2000; i <= currentYear; i++) {
      years.push(<option key={i}>{i}</option>);
    }
    return years;
  };
  return (
    <div className="flex flex-col col-span-2 row-span-5 row-start-1 ">
      <div className="flex-1 ">
        <div className="flex items-center justify-center mb-3">
          <label
            className="relative border border-gray-200 rounded-lg cursor-pointer"
            style={{ overflow: "hidden" }}
          >
            <div
              className="flex items-center justify-center p-3"
              style={{ pointerEvents: "none" }}
              onClick={openFileDialog}
            >
              {imageFile ? (
                <img
                  src={URL.createObjectURL(imageFile)}
                  className="size-64 "
                  alt="Selected Image"
                />
              ) : (
                <img src={none} className="size-64" alt="Choose an Image" />
              )}
            </div>
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full upload">
              <p>{imageFile ? "Change your image" : "Choose your image"}</p>
              <input
                type="file"
                accept="image/*"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileSelect}
              />
            </div>
          </label>
        </div>
        <div className="flex items-center justify-center mx-auto -mt-2 cursor-pointer hover:text-red-700 w-fit">
          <RxCross2 className="-mt-1" onClick={removeImage} />
          <button className="ml-2" onClick={removeImage}>
            Remove Image
          </button>
        </div>
      </div>
      <div className="flex flex-col self-center flex-1">
        <h1 className="mx-auto text-2xl font-extrabold">
          Employment Information
        </h1>

        <label className="block mt-5" htmlFor="id">
          Employee ID
        </label>
        <input
          type="text"
          id="id"
          className="block border custom-login-input focus:outline-none focus:border-gray-500 hover:border-gray-500"
        />
        <label className="mt-3">Position</label>
        <select
          id="position"
          className="block px-4 py-2 border border-gray-200 rounded-lg w-80 focus:outline-none hover:border-gray-500"
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <label className="mt-3">Working Status</label>
        <select
          id="status"
          className="block px-4 py-2 border border-gray-200 rounded-lg w-80 focus:outline-none hover:border-gray-500"
        >
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <label className="mt-3">Commencement Date</label>
        <div className="flex gap-x-2">
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
      </div>
    </div>
  );
}

export default EmployementInformation;
