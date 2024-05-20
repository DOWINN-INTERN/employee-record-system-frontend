import CardRequirementButton from "./CardRequirementButton";

interface Requirements {
  name: string;
}

interface RequirementCardProps {
  requirements: Requirements;
  color: string;
}

function CardRequirements({ requirements, color }: RequirementCardProps) {
  return (
    <div
      className={`flex flex-col justify-center items-center p-4 border shadow-md h-fit w-52 rounded-2xl  hover:shadow-lg ${color}`}
    >
      <h1 className="mb-5 text-2xl font-bold">Name</h1>
      <div className="mb-5">{requirements.name}</div>
      <div className="ml-3"><CardRequirementButton /></div>
    </div>
  );
}

export default CardRequirements;
