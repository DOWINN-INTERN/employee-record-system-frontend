/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import OrgBranchBody from './BranchBody';
import axios from '../../../api/mainkey';
import { Branch } from './CardBranch';
import { AxiosError } from 'axios';
import BranchHeader from './BranchHeader';

function OrgBranch() {
  const [branch, setBranch] = useState<Branch[]>([]); 
  const [imageFile, setImageFile] = useState<any>(null);
  const [branchName, setBranchName] = useState('');
  const [branchAddress, setBranchAddress] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredBranch, setFilteredBranch] = useState([]);
  const [defaultHide, setDefaultHide] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    axios.get<Branch[]>('/branches').then((res) => {
      setBranch(res.data);
      console.log(res);
    });
  }, []);

  //@ts-expect-error assa
  const handleSubmit = async (e) => {
    console.log('justine pogi');
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('')
    if (!imageFile) {
      setImageFile(null);
    }

    try {
      const addBranch = new FormData();
      addBranch.append('name', branchName);
      addBranch.append('address', branchAddress);
      addBranch.append('file', imageFile);
      console.log(imageFile);

      const response = await axios.post('/branches', addBranch);
      axios.get<Branch[]>('/branches').then((res) => {
        setBranch(res.data);
        setImageFile(null);
        setBranchName('');
        setBranchAddress('');
        setSuccessMessage('Branch Successfully Added')
      });
      console.log(response);
      setIsSubmitting(false);
      setIsModalOpen(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error('Error:', error.response?.data);
      }
    }
  };

  const openFileDialog = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    //@ts-expect-error asasa
    input.addEventListener('change', handleFileSelect);
    input.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setImageFile(file);
  };

  const removeImage = () => {
    setImageFile(null);
    console.log('You removed the selected Image');
  };

  return (
    <div className='animate-fade-in '>
      <BranchHeader
        imageFile={imageFile}
        handleFileSelect={handleFileSelect}
        removeImage={removeImage}
        handleSubmit={handleSubmit}
        setBranchAddress={(e) => setBranchAddress(e.target.value)}
        setBranchName={(e) => setBranchName(e.target.value)}
        branchAddress={branchAddress}
        branchName={branchName}
        openFileDialog={openFileDialog}
        closeModal={() => setIsModalOpen(false)}
        isModalOpen={isModalOpen}
        openModal={() => setIsModalOpen(true)}
        setTempValue={setFilteredBranch}
        setDefaultHide={()=> setDefaultHide(true)}
        isSubmitting={isSubmitting}
        successMessage={successMessage}
      />
      <OrgBranchBody
        branches={branch}
        filteredBranch={filteredBranch}
        defaultHide={defaultHide}
      />
    </div>
  );
}

export default OrgBranch;
