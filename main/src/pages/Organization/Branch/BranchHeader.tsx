/* eslint-disable @typescript-eslint/no-explicit-any */
import { LuNetwork } from 'react-icons/lu';
import none from '../../../assets/none.png';
import { RxCross2 } from 'react-icons/rx';
import { MdAddBox } from 'react-icons/md';
import { useEffect, useState } from 'react';
import axios from '../../../api/mainkey';
import { FaSpinner } from 'react-icons/fa';

type Props = {
  openFileDialog(): void;
  handleSubmit(event: React.FormEvent): Promise<void>;
  setBranchName(event: React.ChangeEvent<HTMLInputElement>): void;
  setBranchAddress(event: React.ChangeEvent<HTMLInputElement>): void;
  branchName: string;
  branchAddress: string;
  isModalOpen: boolean;
  openModal(): void;
  closeModal(): void;
  imageFile: any;
  handleFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => any;
  removeImage(): any;
  setTempValue: any;
  setDefaultHide(): void;
  isSubmitting: boolean;
  successMessage: string;
};

function OrgBranchHeader(props: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(event.target.value);
  };
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

  const handleBranchSearch = () => {
    axios
      .post(
        `/branches/search?branchName=${searchQuery}&branchStatus=${filterStatus}`
      )
      .then((res) => {
        props.setTempValue(res.data);
        console.log(res.data);
      });
    console.log('Filter Status:', filterStatus);
    props.setDefaultHide();
  };

  return (
    <>
      <div className='flex flex-col flex-grow px-4 '>
        <div className='flex items-center justify-center gap-8 mt-5 '>
          <div className='header-logo '>
            <LuNetwork
              fontSize={55}
              className='-mt-1 text-main'
            />
          </div>
          <h1 className='text-6xl font-extrabold'>Branches</h1>
        </div>
          <div className='flex flex-row ml-5 sm-max:flex-col sm-max:mx-auto'>
            <div className='mr-4'>
              <label
                className='block mb-2 text-sm font-semibold sm-max:mb-0 '
                htmlFor='search'
              >
                Search a branch
              </label>
              <input
                onChange={handleSearchChange}
                type='text'
                id='search'
                className='block border custom-login-input focus:outline-none focus:border-gray-500 hover:border-gray-500 sm:w-56 md:w-72 lg:w-80'
              />
            </div>
            <div className='mr-4 '>
              <label
                className='block mb-2 text-sm font-semibold sm-max:mb-0 sm-max:mt-2'
                htmlFor='filter'
              >
                Filter Status
              </label>
              <select
                onChange={handleFilterChange}
                id='filter'
                className='block w-40 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none hover:border-gray-500 lg:w-40 sm:w-16 sm-max:w-full'
              >
                <option value='All'>All</option>
                <option value='Active'>Active</option>
                <option value='Inactive'>Inactive</option>
              </select>
            </div>
            <div className='flex items-center justify-center mt-6 ml-4'>
              <button
                className='w-20 text-white rounded-lg bg-main h-9 hover:bg-prime'
                type='submit'
                onClick={handleBranchSearch}
              >
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
                Add Branch
              </button>
            </div>
          </div>
      </div>
      <div className='border-b-2 border-gray-100 mt-7'></div>

      {props.isModalOpen && (
        <div className='modalDiv'>
          <div
            className='bg-white p-8 rounded-lg w-[20%] h-auto text-xl'
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className='mb-4 text-4xl font-extrabold text-center'>
              Add Branch
            </h2>
            <div className='relative'>
              <div
                className='flex items-center justify-center mb-3 border border-gray-200 rounded-lg cursor-pointer'
                onClick={props.openFileDialog}
              >
                {props.imageFile ? (
                  <img
                    src={URL.createObjectURL(props.imageFile)}
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
              <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full upload'>
                <p>
                  {props.imageFile ? 'Change your image' : 'Choose your image'}
                </p>
                <input
                  type='file'
                  accept='image/*'
                  className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                  onChange={props.handleFileSelect}
                />
              </div>
            </div>
            <div className='flex items-center justify-center mx-auto mb-3 -mt-2 cursor-pointer hover:text-red-700 w-fit'>
              <RxCross2
                className='-mt-1'
                onClick={props.removeImage}
              />
              <button
                className='ml-2'
                onClick={props.removeImage}
              >
                Remove Image
              </button>
            </div>
            <form onSubmit={(e) => props.handleSubmit(e)}>
              <div className=''>
                <label className='block text-sm '>Branch Name</label>
                <input
                  value={props.branchName}
                  type='text'
                  id='name'
                  className='border custom-login-input focus:outline-none focus:border-gray-500 hover:border-gray-500 sm:w-2/3 md:w-1/2 lg:w-full'
                  onChange={(e) => {
                    props.setBranchName(e);
                  }}
                />
                <label className='block mt-3 text-sm '>Branch Address</label>
                <input
                  value={props.branchAddress}
                  type='text'
                  id='address'
                  className='border custom-login-input focus:outline-none focus:border-gray-500 hover:border-gray-500 sm:w-2/3 md:w-1/2 lg:w-full'
                  onChange={(e) => {
                    props.setBranchAddress(e);
                  }}
                />
              </div>
              <div className='mt-10'>
                <button
                  className={`w-full px-4 py-2 font-bold text-white rounded-md bg-cyan-800 hover:bg-cyan-900 ${props.isSubmitting ? 'cursor-not-allowed' : ''}`}
                  type='submit'
                  disabled={props.isSubmitting}
                >
                  {props.isSubmitting ? <FaSpinner className='mx-auto animate-spin' /> : 'Submit'}
                </button>
              </div>
              {props.successMessage && (
                <div className='mt-4 font-bold text-center text-green-600'>
                  {props.successMessage}
                </div>
              )}
              <div className=''>
                <button
                  className='w-full px-4 py-2 mr-4 font-bold text-gray-800 bg-gray-300 rounded-md mt-7 hover:bg-gray-400'
                  onClick={props.closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default OrgBranchHeader;
