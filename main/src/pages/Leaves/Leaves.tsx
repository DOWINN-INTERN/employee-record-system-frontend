import { FaRegCalendarDays } from 'react-icons/fa6';
import Card from '../../Card';

function Leaves() {
  return (
    <div className='flex items-center justify-center animate-fade-in py-52'>
      <Card
        title={'Time-Off'}
        icon={<FaRegCalendarDays size={250} />}
        to={'/leaves'}
      />
    </div>
  );
}

export default Leaves;
