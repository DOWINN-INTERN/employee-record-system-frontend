import CardRequirements from "./CardRequirements";
import { branchData } from "../../../fakeData";

function RequirementsBody() {
  return (
    <div className="flex  h-[691px]">
      <div className="flex-1 overflow-y-auto border-black ">
        <div className="flex flex-col items-center h-full gap-4 p-4 overflow-y-auto text-center no-scrollbar">
          {branchData.map((requirement, index) => (
            <div key={requirement.id} className="h-full">
              {index % 2 === 0 ? (
                <CardRequirements
                  requirements={requirement}
                  color="bg-gradient-to-b from-white to-amber-100"
                />
              ) : (
                <CardRequirements
                  requirements={requirement}
                  color="bg-gradient-to-b from-white to-teal-50"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto border-gray-200 border-x-2">
        <div className="flex flex-col items-center h-full gap-4 p-4 overflow-y-auto text-center no-scrollbar">
          {branchData.map((requirement, index) => (
            <div key={requirement.id} className="h-full">
              {index % 2 === 0 ? (
                <CardRequirements
                  requirements={requirement}
                  color="bg-gradient-to-b from-white to-amber-100"
                />
              ) : (
                <CardRequirements
                  requirements={requirement}
                  color="bg-gradient-to-b from-white to-teal-50"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto border-gray-200 border-x-0">
        <div className="flex flex-col items-center h-full gap-4 p-4 overflow-y-auto text-center no-scrollbar">
          {branchData.map((requirement, index) => (
            <div key={requirement.id} className="h-full">
              {index % 2 === 0 ? (
                <CardRequirements
                  requirements={requirement}
                  color="bg-gradient-to-b from-white to-amber-100"
                />
              ) : (
                <CardRequirements
                  requirements={requirement}
                  color="bg-gradient-to-b from-white to-teal-50"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto border-gray-200 border-x-2">
        <div className="flex flex-col items-center h-full gap-4 p-4 overflow-y-auto text-center no-scrollbar">
          {branchData.map((requirement, index) => (
            <div key={requirement.id} className="h-full">
              {index % 2 === 0 ? (
                <CardRequirements
                  requirements={requirement}
                  color="bg-gradient-to-b from-white to-amber-100"
                />
              ) : (
                <CardRequirements
                  requirements={requirement}
                  color="bg-gradient-to-b from-white to-teal-50"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RequirementsBody;
