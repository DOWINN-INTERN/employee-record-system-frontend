import OrgPositionButton from "./PositionButton";

export interface Position {
  id: number;
  name: string;
  status: string;
  branchName: string;
  posCount: number;
}

interface PositionCardProps {
  position: Position;
  color: string;
}

function CardPosition({ position, color }: PositionCardProps) {
  return (
    <div
      className={`flex flex-col p-4 text-center border rounded-lg shadow-md  h-fit hover:scale-110 transition-transform duration-400 ${color}`}
    >
      <div className="">
        <h1 className="text-2xl font-extrabold">Branch</h1>
        <h2 className="mt-1">{position.branchName}</h2>
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-extrabold">Department</h1>
        <h2 className="mt-1">{position.name}</h2>
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-extrabold">Positions</h1>
        <h2 className="mt-1">{position.posCount}</h2>
      </div>
      <OrgPositionButton  />
    </div>
  );
}

export default CardPosition;
