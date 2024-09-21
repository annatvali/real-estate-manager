import Image from 'next/image';
import { formatDate } from '@/utils/formatDate';
import { RealEstate } from '@/types/realEstate.types';

type RealEstateImgProps = Pick<
  RealEstate,
  'image' | 'created_at' | 'is_rental'
>;

const RealEstateImg: React.FC<RealEstateImgProps> = ({
  image,
  created_at,
  is_rental,
}) => {
  return (
    <div>
      {image && (
        <div className="relative">
          <Image
            src={image}
            alt="Real Estate"
            width={300}
            height={200}
            className="h-[670px] w-[839px] object-cover"
          />
          <div
            className={`absolute left-[23px] top-[23px] rounded-[20px] bg-black-primary-50 px-[26px] py-[8px] text-xl font-medium text-white`}
          >
            {is_rental ? 'ქირავდება' : 'იყიდება'}
          </div>
          <time
            dateTime={created_at}
            className="absolute bottom-[-32px] right-0 flex items-center gap-[10px] text-gray-medium"
          >
            <span>გამოქვეყნების თარიღი</span>{' '}
            <span>{formatDate(created_at!)}</span>
          </time>
        </div>
      )}
    </div>
  );
};

export default RealEstateImg;
