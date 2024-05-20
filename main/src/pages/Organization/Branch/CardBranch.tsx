import CardBranchButton from './CardBranchButton';
import none from '../../../assets/none.png';

export interface Branch {
  id: string;
  name: string;
  branchImage: {
    id: number;
    thumbnail: string;
  };
  address: string;
  status: string;
  deptCount: string;
  alias: string;
}
interface BranchCardProps {
  branch: Branch;
  color: string;
}

function CardBranch({ branch, color }: BranchCardProps) {
  //@ts-expect-error asas
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = none;
  };

  return (
    <div
      className={`flex lg:w-full p-4 border shadow-md rounded-2xl lg:h-fit hover:shadow-lg sm:h-fit sm:flex-col md:flex-row lg-max:h-fit lg-max:mx-auto lg-max:w-max  ${color}`}
    >
      <div>
        <img
          src={branch.branchImage ? branch.branchImage.thumbnail : none}
          className=' rounded-2xl w-[300px] h-[200px] md:size-32 lg:w-[300px] lg:h-[200px] sm:w-full sm-max:h-1/3 '
          alt='Branch Image'
          onError={handleImageError}
        />
      </div>
      <div className='flex flex-col justify-between ml-4 sm-max:flex-row lg-max:gap-x-0'>
        <div>
          <h1 className='text-2xl font-extrabold w-[370px] break-words whitespace-normal'>
            Name
          </h1>
          <h2 className='text-lg'>{branch.name}</h2>
        </div>
        <div>
          <h1 className='text-2xl font-extrabold'>Status</h1>
          <p className='text-lg'>{branch.status}</p>
        </div>
      </div>
      <div className='grid grid-cols-3 mx-auto gap-x-16 '>
        <div className='flex flex-col col-span-3'>
          <h1 className='text-2xl font-extrabold'>Address</h1>
          <p className='text-lg break-words whitespace-normal h-34 w-96'>
            {branch.address}
          </p>
        </div>
        <div className='flex flex-col justify-end'>
          <h1 className='text-2xl font-extrabold'>Departments</h1>
          <p className='text-lg'>{branch.deptCount}</p>
        </div>
        <div className='flex flex-col justify-end'>
          <h1 className='text-2xl font-extrabold'>Employees</h1>
          <p className='text-lg'>{branch.id}</p>
        </div>
      </div>
      <div className='my-auto'>
        <CardBranchButton
          bid={branch.id}
          status={branch.status}
          statusBranchName={branch.name}
          branchImage={branch.branchImage}
          branchAddress={branch.address}
          branchAlias={branch.alias}
        />
      </div>
    </div>
  );
}

export default CardBranch;
