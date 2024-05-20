function EmergencyContact() {
  return (
    <div className="flex flex-col">
      <h1 className="mt-5 text-2xl font-extrabold">Emergency Contact</h1>
      <div className="flex flex-row -mt-3 gap-x-7">
        <div>
          <label className="block mt-5" htmlFor="emergencyName1">
            Name
          </label>
          <input
            required
            placeholder="e.g Edwin"
            type="text"
            id="emergencyName1"
            className="block w-48 p-1 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
          />
        </div>
        <div>
          <label className="block mt-5" htmlFor="emergencyRelationship1">
            Relationship
          </label>
          <input
            required
            placeholder="e.g Edwin"
            type="text"
            id="emergencyRelationship1"
            className="block w-48 p-1 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
          />
        </div>
        <div>
          <label className="block mt-5" htmlFor="emergencyPhone1">
            Phone Number
          </label>
          <input
            required
            placeholder="e.g Edwin"
            type="text"
            id="emergencyPhone1"
            className="block w-48 p-1 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
          />
        </div>
      </div>
      <div className="flex flex-row -mt-2 gap-x-7">
        <div>
          <label className="block mt-5" htmlFor="emergencyName2">
            Name
          </label>
          <input
            required
            placeholder="e.g Edwin"
            type="text"
            id="emergencyName2"
            className="block w-48 p-1 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
          />
        </div>
        <div>
          <label className="block mt-5" htmlFor="emergencyRelationship2">
            Relationship
          </label>
          <input
            required
            placeholder="e.g Edwin"
            type="text"
            id="emergencyRelationship2"
            className="block w-48 p-1 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
          />
        </div>
        <div>
          <label className="block mt-5" htmlFor="emergencyPhone2">
            Phone Number
          </label>
          <input
            required
            placeholder="e.g Edwin"
            type="text"
            id="emergencyPhone2"
            className="block w-48 p-1 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 hover:border-gray-500 h-fit"
          />
        </div>
      </div>
    </div>
  );
}

export default EmergencyContact;
