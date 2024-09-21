import Image from 'next/image';
import { Agent } from '@/types/realEstate.types';
import { formatThousands } from '@/utils/formatThousands';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  return (
    <div className="flex flex-col gap-4 rounded-[8px] border border-gray-primary px-5 py-6 text-sm">
      <div className="flex items-center gap-[14px]">
        <Image
          src={agent.avatar}
          width={800}
          height={800}
          alt={`${agent.name} ${agent.surname}`}
          className="h-[72px] w-[72px] rounded-full"
        />
        <div className="flex flex-col gap-[4px]">
          <p className="text-base text-black-primary">{`${agent.name} ${agent.surname}`}</p>
          <p className="text-gray-medium">აგენტი</p>
        </div>
      </div>
      <div className="flex flex-col gap-[4px] text-gray-medium">
        <p className="flex items-center gap-[5px]">
          <span className="icon-[ic--outline-email] h-4 w-4"></span>
          <span>{agent.email}</span>
        </p>
        <p className="flex items-center gap-[5px]">
          <span className="icon-[tabler--phone-call] h-4 w-4"></span>
          <span>{formatThousands(agent.phone)}</span>
        </p>
      </div>
    </div>
  );
};

export default AgentCard;
