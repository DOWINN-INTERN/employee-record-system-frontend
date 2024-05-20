/* eslint-disable @typescript-eslint/no-explicit-any */
import CardBranch, { Branch } from './CardBranch';

export type OrgBodyProps = {
  branches: Branch[];
  filteredBranch: Ibranch[];
  defaultHide: boolean;
};

interface Ibranch {
  address: string;
  alias: string;
  departments: string | number;
  deptCount: number;
  id: string;
  name: string;
  status: string;
}

function OrgBranchBody(props: OrgBodyProps) {
  const { branches, filteredBranch } = props;

  console.log('Filtered Branches: ', filteredBranch);

  const filteredBranches = branches.filter((branch) =>
    filteredBranch.some((filtered) => filtered.id === branch.id)
  );

  const priorityBranches = filteredBranches.sort((a, b) => {
    if (a.status === 'Active' && b.status !== 'Active') return -1;
    if (a.status !== 'Active' && b.status === 'Active') return 1;
    return 0;
  });

  return (
    <div className='overflow-y-auto h-[745px] p-2'>
      <div className='grid grid-flow-row gap-8 p-7'>
        {priorityBranches.map((branch, index) =>
          index % 2 === 0 ? (
            <CardBranch
              key={branch.id}
              branch={branch}
              color='bg-gradient-to-b from-white to-amber-100'
            />
          ) : (
            <CardBranch
              key={branch.id}
              branch={branch}
              color='bg-gradient-to-b from-white to-teal-50'
            />
          )
        )}
        {!props.defaultHide
          ? branches.map((branch, index) =>
              index % 2 === 0 ? (
                <CardBranch
                  key={branch.id}
                  branch={branch}
                  color='bg-gradient-to-b from-white to-amber-100'
                />
              ) : (
                <CardBranch
                  key={branch.id}
                  branch={branch}
                  color='bg-gradient-to-b from-white to-teal-50'
                />
              )
            )
          : ''}
      </div>
    </div>
  );
}

export default OrgBranchBody;
