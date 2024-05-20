import CardDepartment, { Branch, Department } from './CardDepartment';

export type DeptBodyProps = {
  departments: Department[];
  branches: Branch[];
};

function OrgDepartmentBody({ departments, branches }: DeptBodyProps) {
  const priorityDepartments = [...departments].sort((a, b) => {
    if (a.status === 'Active' && b.status !== 'Active') return -1;
    if (a.status !== 'Active' && b.status === 'Active') return 1;
    return 0;
  });

  return (
    <div className='overflow-y-auto h-[725px] p-2'>
      <div className='grid grid-flow-row gap-8 p-7 '>
        {priorityDepartments.map((department, index) =>
          index % 2 === 0 ? (
            <CardDepartment
              key={department.id}
              department={department}
              branch={branches}
              color='bg-gradient-to-b from-white to-amber-100'
            />
          ) : (
            <CardDepartment
              key={department.id}
              department={department}
              branch={branches}
              color='bg-gradient-to-b from-white to-teal-50'
            />
          )
        )}
      </div>
    </div>
  );
}

export default OrgDepartmentBody;
