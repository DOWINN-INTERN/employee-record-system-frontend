import { HiOutlineDocumentSearch } from "react-icons/hi"
import Card from "../../Card";
import { LiaUsersCogSolid } from "react-icons/lia";

function Employees() {
  return (
    <div className="flex justify-center gap-72 py-52 animate-fade-in">
    <Card
      title="Requirements"
      icon={<HiOutlineDocumentSearch  size={300} />}
      to="/requirements"
    />
    <Card
      title="Employees"
      icon={<LiaUsersCogSolid  size={300} />}
      to="/view-employees"
    />
    
  </div>
  )
}

export default Employees