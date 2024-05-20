import OrgDepartmentBody from './DepartmentBody';
import OrgDepartmentHeader from './DepartmentHeader';
import axios from '../../../api/mainkey';
import { useEffect, useState } from 'react';
import { Department } from './CardDepartment';
import { Branch } from './CardDepartment';

function OrgDepartment() {
  const [department, setDepartment] = useState<Department[]>([]);
  const [branch, setBranch] = useState<Branch[]>([]);
  const [departmentName, setDepartmentName] = useState('');
  const [departmentEmail, setDepartmentEmail] = useState('');
  const [departmentId, setdepartmentId] = useState(0);
  const [departmentPhoneNumber, setDepartmentPhoneNumber] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get<Department[]>('/departments').then((res) => {
      setDepartment(res.data);
      console.log(res);
    });
  }, []);

  useEffect(() => {
    axios.get<Branch[]>('/branches').then((res) => {
      setBranch(res.data);
    });
  }, []);

  const handleAddDepartment = () => {
    const addDepartment = {
      bid: departmentId,
      name: departmentName,
      email: departmentEmail,
      phone: departmentPhoneNumber,
    };

    axios
      .post('/departments', addDepartment)
      .then((response) => {
        console.log('Department added successfully:', response.data);
        axios.get<Department[]>('/departments').then((res) => {
          setDepartment(res.data);
          console.log(res);
          setDepartmentName('');
          setDepartmentEmail('');
          setDepartmentPhoneNumber('');
        });
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error('Error adding department:', error);
      });
  };

  return (
    <div>
      <OrgDepartmentHeader
        branches={branch}
        departmentName={departmentName}
        setDepartmentName={(e) => setDepartmentName(e.target.value)}
        departmentEmail={departmentEmail}
        setDepartmentEmail={(e) => setDepartmentEmail(e.target.value)}
        departmentPhoneNumber={departmentPhoneNumber}
        setDepartmentPhoneNumber={(e) =>
          setDepartmentPhoneNumber(e.target.value)
        }
        setDepartmentId={(e) => setdepartmentId(+e.target.value)}
        handleAddDepartment={handleAddDepartment}
        isModalOpen={isModalOpen}
        openModal={() => setIsModalOpen(true)}
        closeModal={() => setIsModalOpen(false)}
      />
      <OrgDepartmentBody
        departments={department}
        branches={branch}
      />
    </div>
  );
}

export default OrgDepartment;
