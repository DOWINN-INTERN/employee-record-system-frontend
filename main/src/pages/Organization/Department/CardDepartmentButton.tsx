/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import { BsToggles } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import axios from '../../../api/mainkey';
import { Branch } from './CardDepartment';

function CardDepartmentButton({
  id,
  branches,
  departmentStatus,
  departmentName,
  departmentEmail,
  departmentPhone,
}: {
  id: number;
  branches: Branch[];
  departmentStatus: string;
  departmentName: string;
  departmentEmail: string;
  departmentPhone: string;
}) {
  console.log(branches);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [deptId, setDeptId] = useState('');
  const [branchName, setBranchName] = useState('');
  const [editDepartmentName, setEditDepartmentName] = useState({
    branchEditName: '',
  });
  const [departmentEmailAddress, setDepartmentEmailAddress] = useState({
    deptEmail: '',
  });
  const [departmentPhoneNumber, setDepartmentPhoneNumber] = useState({
    deptPhone: '',
  });
  const selectRef = useRef<HTMLSelectElement>(null);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const openStatusModal = () => {
    setIsStatusModalOpen(true);
  };

  const closeStatusModal = () => {
    setIsStatusModalOpen(false);
  };

  const handleEditDepartment = () => {
    console.log(branchName);

    const editDepartment = {
      did: +id,
      deptId,
      bid: +branchName,
      name: editDepartmentName?.branchEditName,
      email: departmentEmailAddress?.deptEmail,
      phone: departmentPhoneNumber?.deptPhone,
    };

    console.log('Justine Pogi', editDepartment);

    axios
      .patch('/departments', editDepartment)
      .then((response) => {
        console.log('PATCH request successful:', response);
        window.location.reload();
        closeEditModal();
      })
      .catch((error) => {
        console.error('Error occurred while making PATCH request:', error);
      });
  };

  const editStatusDepartment = () => {
    const status = departmentStatus === 'Active' ? 'Inactive' : 'Active';
    axios
      .patch('/departments', {
        did: +id,
        status: status,
      })
      .then((response) => {
        console.log('Edit successful: ', response);
        closeStatusModal();
        window.location.reload();
      })
      .catch(({ error, response }) => {
        console.log('Edit successful: ', response);
        console.error("There's an error while editing this branch: ", error);
      });
  };

  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === 'Escape') {
        if (isEditModalOpen) {
          closeEditModal();
        }
        if (isStatusModalOpen) {
          closeStatusModal();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isEditModalOpen, isStatusModalOpen]);

  useEffect(() => {
    if (isEditModalOpen) {
      setEditDepartmentName({
        branchEditName: departmentName,
      });
      setDepartmentEmailAddress({ deptEmail: departmentEmail });
      setDepartmentPhoneNumber({ deptPhone: departmentPhone });
    } else {
      setEditDepartmentName({
        branchEditName: '',
      });
      setDepartmentEmailAddress({ deptEmail: '' });
      setDepartmentPhoneNumber({ deptPhone: '' });
    }
  }, [departmentEmail, departmentName, departmentPhone, isEditModalOpen]);

  return (
    <div>
      <div className='flex flex-col gap-10 my-auto'>
        <button
          type='button'
          onClick={openEditModal}
          className='flex items-center w-32 h-12 mr-2 text-xl text-white duration-300 ease-in-out delay-150 rounded-lg bg-editBtn hover:scale-110'
        >
          <FaEdit
            fontSize={25}
            className='mx-auto text-white'
          />
          <span className='mt-1.5 mr-auto'>Edit</span>
        </button>

        <button
          type='button'
          onClick={openStatusModal}
          className='flex items-center w-32 h-12 text-xl text-white duration-300 ease-in-out delay-150 rounded-lg bg-stsBtn hover:scale-110'
        >
          <BsToggles
            fontSize={25}
            className='mx-auto text-white'
          />
          <span className='mt-1.5 mr-auto'>Status</span>
        </button>
      </div>

      {isEditModalOpen && (
        <div className='modalDiv'>
          <div className='bg-white p-8 rounded-lg w-[20%] h-auto text-xl'>
            <h2 className='mb-4 text-4xl font-extrabold text-center'>
              Edit Department
            </h2>
            <div className='relative'></div>
            <div className='grid grid-flow-row gap-y-5'>
              <div className='flex flex-col'>
                <label>Branch Name</label>

                <select
                  name='branchName'
                  ref={selectRef}
                  onChange={(e) => {
                    setBranchName(e.target.value);
                    setDeptId(e.target.value);
                    console.log(e.target.value);
                  }}
                  className='py-2 border-gray-lg'
                >
                  <option
                    hidden
                    disabled
                    selected
                  >
                    Select Branch
                  </option>
                  {branches
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
                  name='departmentName'
                  value={editDepartmentName?.branchEditName}
                  onChange={(e) =>
                    setEditDepartmentName({
                      ...editDepartmentName,
                      branchEditName: e.target.value,
                    })
                  }
                  required
                  type='text'
                  placeholder='Department Name'
                  className='py-2 border-gray-lg'
                />
              </div>
              <div className='flex flex-col'>
                <label>Department Email Address</label>
                <input
                  onChange={(e) =>
                    setDepartmentEmailAddress({
                      ...departmentEmailAddress,
                      deptEmail: e.target.value,
                    })
                  }
                  value={departmentEmailAddress?.deptEmail}
                  required
                  type='text'
                  placeholder='Department Email'
                  name='departmentEmailAddress'
                  className='py-2 border-gray-lg'
                />
              </div>
              <div className='flex flex-col'>
                <label>Department Phone Number</label>
                <input
                  onChange={(e) =>
                    setDepartmentPhoneNumber({
                      ...departmentPhoneNumber,
                      deptPhone: e.target.value,
                    })
                  }
                  value={departmentPhoneNumber?.deptPhone}
                  name='departmentPhoneNumber'
                  required
                  type='text'
                  placeholder='Department Phone'
                  className='py-2 border-gray-lg'
                />
              </div>
              <div className='flex flex-col'>
                <label>Department Head</label>
                <select className='py-2 border-gray-lg'>
                  <option>Senior Intern</option>
                  <option>Full Charge</option>
                </select>
              </div>
            </div>

            <div className='mt-10'>
              <button
                className='w-full px-4 py-2 font-bold text-white rounded-md bg-cyan-800 hover:bg-cyan-900'
                onClick={handleEditDepartment}
              >
                Save Changes
              </button>
            </div>

            <div className=''>
              <button
                className='w-full px-4 py-2 mr-4 font-bold text-gray-800 bg-gray-300 rounded-md mt-7 hover:bg-gray-400'
                onClick={closeEditModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {departmentStatus === 'Active'
        ? isStatusModalOpen && (
            <div className='modalDiv'>
              <div className='bg-white p-8 rounded-lg w-[20%] h-auto text-xl'>
                <h1 className='mb-4 text-4xl font-extrabold text-center'>
                  Department Status
                </h1>
                <p className='mx-auto text-center w-72'>
                  {`Setting the ${departmentName} Department to inactive will also set all associated
                  records to inactive.`}
                  <div className='mt-10'>Continue?</div>
                </p>

                <div className='mt-3 '>
                  <button
                    className='w-full px-4 py-2 font-bold text-white rounded-lg shadow-md bg-cyan-800 hover:bg-cyan-900'
                    onClick={editStatusDepartment}
                  >
                    Set to Inactive
                  </button>
                </div>
                <div>
                  <button
                    className='w-full px-4 py-2 mt-8 mr-4 font-bold text-gray-800 bg-gray-300 rounded-md shadow-lg hover:bg-gray-400'
                    onClick={closeStatusModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )
        : isStatusModalOpen && (
            <div className='modalDiv'>
              <div className='bg-white p-8 rounded-lg w-[20%] h-auto text-xl'>
                <h1 className='mb-4 text-4xl font-extrabold text-center'>
                  Department Status
                </h1>
                <p className='mx-auto text-center w-72'>
                  {`Set the ${departmentName} Department to Active?`}
                  <div className='mt-10'>Continue?</div>
                </p>

                <div className='mt-3 '>
                  <button
                    className='w-full px-4 py-2 font-bold text-white rounded-lg shadow-md bg-cyan-800 hover:bg-cyan-900'
                    onClick={editStatusDepartment}
                  >
                    Set to Active
                  </button>
                </div>
                <div>
                  <button
                    className='w-full px-4 py-2 mt-8 mr-4 font-bold text-gray-800 bg-gray-300 rounded-md shadow-lg hover:bg-gray-400'
                    onClick={closeStatusModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
    </div>
  );
}

export default CardDepartmentButton;
