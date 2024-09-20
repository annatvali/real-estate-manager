import Image from 'next/image';
import Link from 'next/link';
import { RealEstate } from '@/types/realEstate.types';
import { formatPrice } from '@/utils/formatPrice';

const Card: React.FC<RealEstate> = ({
  id,
  image,
  price,
  city,
  address,
  bedrooms,
  area,
  zipCode,
  isRental,
}) => {
  return (
    <Link
      href={`/${id}`}
      className="rouned-md border-primary-gray relative max-w-[384px] rounded-[14px] border font-firago"
    >
      <Image
        width={1000}
        height={1000}
        src={image}
        alt="Real Estate"
        className="h-[307px] w-full rounded-tl-[14px] rounded-tr-[14px] object-cover"
      />
      <div className="px-[25px] py-[22px]">
        <div
          className={`absolute left-[23px] top-[23px] rounded-[15px] bg-black-primary-50 px-[18px] py-[6px] font-medium text-white`}
        >
          {isRental ? 'ქირავდება' : 'იყიდება'}
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[6px]">
            <p className="font-black-primary text-3xl font-bold">
              {formatPrice(price)} ₾
            </p>
            <p className="flex gap-[5px] text-black-primary-50">
              <span className="icon-[heroicons-solid--location-marker] h-6 w-6"></span>
              <span>{city.name}, </span>
              <span>{address}</span>
            </p>
          </div>
          <div className="flex gap-[32px] text-black-primary-50">
            <span className="flex items-center gap-[5px]">
              <span className="icon-[ion--bed] h-6 w-6"></span>
              <span> {bedrooms}</span>
            </span>
            <span className="flex items-center gap-[5px]">
              <span className="icon-[bxs--area] h-6 w-6"></span>
              <span>{area} მ²</span>
            </span>
            <span className="flex items-center gap-[5px]">
              <span className="icon-[bi--signpost-fill] h-6 w-6"></span>
              <span>{zipCode}</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
