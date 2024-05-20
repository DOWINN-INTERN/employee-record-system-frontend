import { useState } from "react";

function Address() {
  const [sameAsPermanent, setSameAsPermanent] = useState(false);
  const [permanentAddress, setPermanentAddress] = useState({
    roomUnitNo: "",
    lotBlockNo: "",
    street: "",
    barangay: "",
    cityMunicipality: "",
    provinceState: "",
    country: "",
    zipCode: "",
  });
  
  //@ts-expect-error asas
  const handleChange = (e) => {
    const { id, value } = e.target;
    setPermanentAddress({ ...permanentAddress, [id]: value });
  };

  const handleCheckboxChange = () => {
    setSameAsPermanent(!sameAsPermanent);
    if (!sameAsPermanent) {
      setPermanentAddress((prevState) => ({
        ...prevState,
        cityMunicipality: prevState.cityMunicipality,
        country: prevState.country,
        lotBlockNo: prevState.lotBlockNo,
        provinceState: prevState.provinceState,
        roomUnitNo: prevState.roomUnitNo,
        street: prevState.street,
        barangay: prevState.barangay,
        zipCode: prevState.zipCode,
      }));
    } else {
      setPermanentAddress({
        roomUnitNo: "",
        lotBlockNo: "",
        street: "",
        barangay: "",
        cityMunicipality: "",
        provinceState: "",
        country: "",
        zipCode: "",
      });
    }
  };
  return (
    <div>
      <div className="flex flex-col mt-5">
        <h1 className="text-2xl font-extrabold">Permanent Address</h1>
        <div className="flex flex-row -mt-3 gap-x-7">
          <div>
            <label className="block mt-5" htmlFor="roomUnitNo">
              Room/Unit No.
            </label>
            <input
              required
              placeholder="e.g Edwin"
              type="text"
              id="roomUnitNo"
              value={permanentAddress.roomUnitNo}
              onChange={handleChange}
              className="block w-48 p-1 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
            />
          </div>
          <div>
            <label className="block mt-5" htmlFor="lotBlockNo">
              Lot/Block No.
            </label>
            <input
              required
              placeholder="e.g Edwin"
              type="text"
              id="lotBlockNo"
              value={permanentAddress.lotBlockNo}
              onChange={handleChange}
              className="block w-48 p-1 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
            />
          </div>
          <div>
            <label className="block mt-5" htmlFor="street">
              Street
            </label>
            <input
              required
              placeholder="e.g Edwin"
              type="text"
              id="street"
              value={permanentAddress.street}
              onChange={handleChange}
              className="block w-48 p-1 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
            />
          </div>
          <div>
            <label className="block mt-5" htmlFor="barangay">
              Barangay
            </label>
            <input
              required
              placeholder="e.g Edwin"
              type="text"
              id="barangay"
              value={permanentAddress.barangay}
              onChange={handleChange}
              className="block w-48 p-1 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
            />
          </div>
        </div>
        <div className="flex flex-row -mt-2 gap-x-7">
          <div>
            <label className="block mt-5" htmlFor="cityMunicipality">
              City/Municipality
            </label>
            <input
              required
              placeholder="e.g Edwin"
              type="text"
              id="cityMunicipality"
              value={permanentAddress.cityMunicipality}
              onChange={handleChange}
              className="block w-48 p-1 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
            />
          </div>
          <div>
            <label className="block mt-5" htmlFor="provinceState">
              Province/State
            </label>
            <input
              required
              placeholder="e.g Edwin"
              type="text"
              id="provinceState"
              value={permanentAddress.provinceState}
              onChange={handleChange}
              className="block w-48 p-1 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
            />
          </div>
          <div>
            <label className="block mt-5" htmlFor="country">
              Country
            </label>
            <input
              required
              placeholder="e.g Edwin"
              type="text"
              id="country"
              value={permanentAddress.country}
              onChange={handleChange}
              className="block w-48 p-1 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
            />
          </div>
          <div>
            <label className="block mt-5" htmlFor="zipCode">
              Zip Code
            </label>
            <input
              required
              placeholder="e.g Edwin"
              type="text"
              id="zipCode"
              value={permanentAddress.zipCode}
              onChange={handleChange}
              className="block w-48 p-1 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="mt-5 text-2xl font-extrabold">Current Address</h1>
          <div className="flex items-center mt-5 mr-[85px] gap-x-3">
            <label htmlFor="squareCheckbox" className="mt-1 ">
              Same as permanent address
            </label>
            <input
              type="checkbox"
              id="squareCheckbox"
              checked={sameAsPermanent}
              onChange={handleCheckboxChange}
              className="w-5 h-5 border-gray-300 rounded cursor-pointer focus:ring-gray-400"
            />
          </div>
        </div>
        <div className="flex flex-row -mt-3 gap-x-7">
          <div>
            <label className="block mt-5" htmlFor="crrntRoom/Unit No.">
              Room/Unit No.
            </label>
            <input
              required
              placeholder="e.g Edwin"
              type="text"
              id="crrntRoom/Unit No."
              value={sameAsPermanent ? permanentAddress.roomUnitNo : ""}
              readOnly={sameAsPermanent}
              className="block w-48 p-1 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
            />
          </div>
          <div>
            <label className="block mt-5" htmlFor="crrntLot/Block No.">
              Lot/Block No.
            </label>
            <input
              required
              placeholder="e.g Edwin"
              type="text"
              id="crrntLot/Block No."
              value={sameAsPermanent ? permanentAddress.lotBlockNo : ""}
              className="block w-48 p-1 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
            />
          </div>
          <div>
            <label className="block mt-5" htmlFor="crrntStreet">
              Street
            </label>
            <input
              required
              placeholder="e.g Edwin"
              type="text"
              id="crrntStreet"
              value={sameAsPermanent ? permanentAddress.street : ""}
              className="block w-48 p-1 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
            />
          </div>
          <div>
            <label className="block mt-5" htmlFor="crrntBarangay">
              Barangay
            </label>
            <input
              required
              placeholder="e.g Edwin"
              type="text"
              id="crrntBarangay"
              value={sameAsPermanent ? permanentAddress.barangay : ""}
              className="block w-48 p-1 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
            />
          </div>
        </div>
        <div className="flex flex-row -mt-2 gap-x-7">
          <div>
            <label className="block mt-5" htmlFor="crrntCity/Municipality">
              City/Municipality
            </label>
            <input
              required
              placeholder="e.g Edwin"
              type="text"
              id="crrntCity/Municipality"
              value={sameAsPermanent ? permanentAddress.cityMunicipality : ""}
              className="block w-48 p-1 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
            />
          </div>
          <div>
            <label className="block mt-5" htmlFor="crrntProvince/State">
              Province/State
            </label>
            <input
              required
              placeholder="e.g Edwin"
              type="text"
              id="crrntProvince/State"
              value={sameAsPermanent ? permanentAddress.provinceState : ""}
              className="block w-48 p-1 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
            />
          </div>
          <div>
            <label className="block mt-5" htmlFor="crrntcountry">
              Country
            </label>
            <input
              required
              placeholder="e.g Edwin"
              type="text"
              id="crrntcountry"
              value={sameAsPermanent ? permanentAddress.country : ""}
              className="block w-48 p-1 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
            />
          </div>
          <div>
            <label className="block mt-5" htmlFor="crrntzip">
              Zip Code
            </label>
            <input
              required
              placeholder="e.g Edwin"
              type="text"
              id="crrntzip"
              value={sameAsPermanent ? permanentAddress.zipCode : ""}
              className="block w-48 p-1 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
