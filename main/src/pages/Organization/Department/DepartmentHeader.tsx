import { FaUsers } from 'react-icons/fa';
import { MdAddBox } from 'react-icons/md';
import { Branch } from './CardDepartment';
import { useEffect } from 'react';

export type Props = {
  id?: number;
  departmentName: string;
  setDepartmentName(e: React.ChangeEvent<HTMLInputElement>): void;
  departmentEmail: string;
  setDepartmentEmail(e: React.ChangeEvent<HTMLInputElement>): void;
  departmentPhoneNumber: string;
  setDepartmentPhoneNumber(e: React.ChangeEvent<HTMLInputElement>): void;
  setDepartmentId(e: React.ChangeEvent<HTMLSelectElement>): void;
  handleAddDepartment(): void;
  branches: Branch[];
  isModalOpen: boolean;
  openModal(): void;
  closeModal(): void;
};

function OrgDepartmentHeader(props: Props) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && props.isModalOpen) {
        props.closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [props.isModalOpen, props.closeModal, props]);
  return (
    <>
      <div className='flex flex-col flex-grow px-4 '>
        <div className='flex items-center justify-center gap-8 mt-5 '>
          <div className='header-logo'>
            <FaUsers
              fontSize={55}
              className='text-main'
            />
          </div>
          <h1 className='text-6xl font-extrabold'>Departments</h1>
        </div>
        <div className='flex flex-row mt-5 ml-5 sm-max:hidden '>
          <div className='mr-4'>
            <label
              className='block mb-2 text-sm font-semibold'
              htmlFor='search'
            >
              Search a Department
            </label>
            <input
              type='text'
              id='search'
              className='block border custom-login-input focus:outline-none focus:border-gray-500 hover:border-gray-500 sm:w-56 md:w-72 lg:w-80'
            />
          </div>
          <div className='mr-4'>
            <label
              className='block mb-2 text-sm font-semibold'
              htmlFor='filter'
            >
              Filter by Branch
            </label>
            <select
              id='filter'
              className='block px-4 py-2 border border-gray-200 rounded-lg w-72 focus:outline-none hover:border-gray-500 sm:w-56 md:w-72 lg:w-80'
            >
              <option
                disabled
                selected
                hidden
              >
                Select Branch
              </option>
              {props.branches.map((department) => (
                <option
                  key={department.id}
                  value={department.id}
                >
                  {department.name}
                </option>
              ))}
            </select>
          </div>
          <div className='mr-4'>
            <label
              className='block mb-2 text-sm font-semibold'
              htmlFor='filter'
            >
              Filter by Status
            </label>
            <select
              id='filter'
              className='block w-40 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none hover:border-gray-500 lg:w-40 sm:w-16'
            >
              <option value='All'>All</option>
              <option value='Active'>Active</option>
              <option value='Inactive'>Inactive</option>
            </select>
          </div>
          <div className='flex items-center justify-center mt-5 ml-4'>
            <button className='w-20 text-white rounded-lg bg-main h-9 hover:bg-prime '>
              <p className='mt-1'>Go</p>
            </button>
          </div>
          <div
            className='addBtn'
            onClick={props.openModal}
          >
            <MdAddBox
              fontSize={30}
              className='mr-2 text-white'
            />
            <button
              type='button'
              className='mt-1 text-white '
            >
              Add Department
            </button>
          </div>
        </div>
      </div>
      <div className='border-b-2 border-gray-100 mt-7'></div>

      {props.isModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-800 bg-opacity-50 animate-fade-in'>
          <div className='bg-white p-8 rounded-lg w-[20%] h-auto '>
            <h1 className='mb-4 text-4xl font-extrabold text-center'>
              Add Department
            </h1>
            <div className='grid grid-flow-row gap-y-5'>
              <div className='flex flex-col'>
                <label>Branch Name</label>
                <select
                  className='py-2 border-gray-lg'
                  onChange={(e) => props.setDepartmentId(e)}
                >
                  <option
                    disabled
                    selected
                    hidden
                  >
                    Select branch
                  </option>
                  {props.branches
                    .filter((branch) => branch.status === 'Active')
                    .map((branch) => (
                      <option
                        key={branch.id}
                        value={branch.id}
                      >
                        {branch.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className='flex flex-col'>
                <label>Department Name</label>
                <input
                  required
                  type='text'
                  placeholder='Department Name'
                  className='py-2 border-gray-lg'
                  value={props.departmentName}
                  onChange={(e) => props.setDepartmentName(e)}
                />
              </div>
              <div className='flex flex-col'>
                <label>Department Email Address</label>
                <input
                  required
                  type='text'
                  placeholder='Department '
                  className='py-2 border-gray-lg'
                  value={props.departmentEmail}
                  onChange={(e) => props.setDepartmentEmail(e)}
                />
              </div>
              <div className='flex flex-col'>
                <label>Department Phone Number</label>
                <input
                  required
                  type='text'
                  placeholder='edwin'
                  className='py-2 border-gray-lg'
                  value={props.departmentPhoneNumber}
                  onChange={(e) => props.setDepartmentPhoneNumber(e)}
                />
              </div>
            </div>

            <div className='mt-12 '>
              <button
                className='w-full px-4 py-2 font-bold text-white rounded-lg shadow-md bg-cyan-800 hover:bg-cyan-900'
                onClick={props.handleAddDepartment}
              >
                Add Department
              </button>
            </div>
            <div>
              <button
                className='w-full px-4 py-2 mt-8 mr-4 font-bold text-gray-800 bg-gray-300 rounded-md shadow-lg hover:bg-gray-400'
                onClick={props.closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OrgDepartmentHeader;
