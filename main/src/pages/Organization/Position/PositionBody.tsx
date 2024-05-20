import CardPosition, { Position } from './CardPosition';

export type PosBodyProps = {
  positions: Position[];
};

function OrgPositionBody({ positions }: PosBodyProps) {
  const sortedPositions = [...positions].sort((a, b) => {
    const branchA = a.branchName.toLowerCase();
    const branchB = b.branchName.toLowerCase();
    if (branchA < branchB) return -1;
    if (branchA > branchB) return 1;
    return 0;
  });

  return (
    <div className='overflow-y-auto h-[730px] p-7'>
      <div className='grid grid-cols-5 gap-10'>
        {sortedPositions.map((position, index) =>
          index % 2 === 0 ? (
            <CardPosition
              key={position.id}
              position={position}
              color='bg-teal-50'
            />
          ) : (
            <CardPosition
              key={position.id}
              position={position}
              color='bg-yellow-100'
            />
          )
        )}
      </div>
    </div>
  );
}

export default OrgPositionBody;
