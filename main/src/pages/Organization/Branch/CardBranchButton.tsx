/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { BsToggles } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import none from '../../../assets/none.png';
import { RxCross2 } from 'react-icons/rx';
import axios from '../../../api/mainkey';

function CardBranchButton(props: any) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [branchData, setBranchData] = useState({
    bid: '',
    image: props.branchImage,
    branchName: '',
    branchAddress: '',
  });

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

  const openFileEditDialog = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.addEventListener('change', handleFileSelect);
    input.click();
  };

  const handleFileSelect = (e: any) => {
    const file = e.target.files && e.target.files[0];
    setBranchData({ ...branchData, image: file });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setBranchData({ ...branchData, [name]: value });
  };

  const handleEditBranch = () => {
    const editBranch = new FormData();
    editBranch.append('bid', branchData.bid);
    editBranch.append('file', branchData.image);
    editBranch.append('name', branchData.branchName);
    editBranch.append('address', branchData.branchAddress);

    axios
      .patch('/branches', editBranch)
      .then((response) => {
        console.log('PATCH request successful:', response);
        window.location.reload();
        closeEditModal();
      })
      .catch((error) => {
        console.error('Error occurred while making PATCH request:', error);
      });
  };

  const handleEditStatus = () => {
    const status = props.status === 'Active' ? 'Inactive' : 'Active';
    axios
      .patch(`/branches`, {
        bid: props.bid,
        status: status,
      })
      .then((response) => {
        console.log('PATCH request successful:', response);
        closeStatusModal();
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error occurred while making PATCH request:', error);
      });
  };

  useEffect(() => {
    if (isEditModalOpen) {
      setBranchData({
        bid: props.bid,
        image: props.branchImage.thumbnail,
        branchName: props.statusBranchName,
        branchAddress: props.branchAddress,
      });
    } else {
      setBranchData({
        bid: '',
        image: '', //if props.branchImage.thumbnail sometimes runs sometimes not
        branchName: '',
        branchAddress: '',
      });
    }
  }, [isEditModalOpen, props]);

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

  return (
    <div>
      <div className='flex flex-col gap-10 my-auto sm-max:flex-row sm-max:justify-between'>
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
              Edit Branch
            </h2>
            <div className='relative'>
              <div
                className='flex items-center justify-center mb-3 border border-gray-200 rounded-lg cursor-pointer'
                onClick={openFileEditDialog}
              >
                {branchData.image ? (
                  <img
                    src={
                      typeof branchData.image === 'string'
                        ? props.branchImage.thumbnail
                        : URL.createObjectURL(branchData.image)
                    }
                    className='size-64'
                    alt='Selected Image'
                  />
                ) : (
                  <img
                    src={none}
                    className='size-64'
                    alt='Choose an Image'
                  />
                )}
              </div>
            </div>
            <div className='flex items-center justify-center mb-3 -mt-2 cursor-pointer hover:text-red-700'>
              <RxCross2 className='-mt-1' />
              <button
                className='ml-2'
                onClick={() => setBranchData({ ...branchData, image: null })}
              >
                Remove Image
              </button>
            </div>

            <div className=''>
              <label className='block text-sm '>Branch Name</label>
              <input
                required
                type='text'
                name='branchName'
                value={branchData.branchName}
                onChange={handleChange}
                className='block border custom-login-input focus:outline-none focus:border-gray-500 hover:border-gray-500 sm:w-full md:w-full lg:w-full'
              />
              <label className='block mt-3 text-sm '>Branch Address</label>
              <input
                required
                type='text'
                name='branchAddress'
                value={branchData.branchAddress}
                onChange={handleChange}
                className='block border custom-login-input focus:outline-none focus:border-gray-500 hover:border-gray-500 sm:w-full md:w-full lg:w-full'
              />
            </div>

            <div className='mt-10'>
              <button
                className='w-full px-4 py-2 font-bold text-white rounded-md bg-cyan-800 hover:bg-cyan-900'
                onClick={handleEditBranch}
              >
                Submit
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

      {props.status === 'Active'
        ? isStatusModalOpen && (
            <div className='modalDiv'>
              <div className='bg-white p-8 rounded-lg w-[20%] h-auto text-xl'>
                <h1 className='mb-4 text-4xl font-extrabold text-center'>
                  Branch Status
                </h1>
                <p className='mx-auto text-center w-72'>
                  {` Setting the ${props.statusBranchName} Branch to inactive will also set all associated
                  records to inactive.`}
                  <div className='mt-10'>Continue?</div>
                </p>

                <div className='mt-3 '>
                  <button
                    className='w-full px-4 py-2 font-bold text-white rounded-lg shadow-md bg-cyan-800 hover:bg-cyan-900'
                    onClick={handleEditStatus}
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
                  Branch Status
                </h1>
                <p className='mx-auto text-center w-72'>
                  {` Set ${props.statusBranchName} Branch to Active?`}
                  <div className='mt-10'>Continue?</div>
                </p>

                <div className='mt-3 '>
                  <button
                    className='w-full px-4 py-2 font-bold text-white rounded-lg shadow-md bg-cyan-800 hover:bg-cyan-900'
                    onClick={handleEditStatus}
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

export default CardBranchButton;
