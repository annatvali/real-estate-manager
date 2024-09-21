import { RealEstate } from '@/types/realEstate.types';
import { formatThousands } from '@/utils/formatThousands';

const DetailsCard: React.FC<RealEstate> = ({
  price,
  address,
  city,
  description,
  area,
  bedrooms,
  zip_code,
}) => {
  return (
    <div className="flex gap-[68px]">
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-primary-black mb-6 mt-[30px] text-3xl font-bold">
            {formatThousands(price)} ₾
          </p>
          <div className="flex flex-col gap-4 text-black-primary-50">
            <p className="flex items-center gap-[5px]">
              <span className="icon-[heroicons-solid--location-marker] h-6 w-6"></span>
              <span className="whitespace-nowrap">
                {city.name}, {address}
              </span>
            </p>
            <p className="flex items-center gap-[5px]">
              <span className="icon-[bxs--area] h-6 w-6"></span>
              <span>ფართი {area} მ²</span>
            </p>
            <span className="flex items-center gap-[5px]">
              <span className="icon-[ion--bed] h-6 w-6"></span>
              <span>საძინებელი {bedrooms}</span>
            </span>
            <span className="flex items-center gap-[5px]">
              <span className="icon-[bi--signpost-fill] h-6 w-6"></span>
              <span>საფოსტო ინდექსი {zip_code}</span>
            </span>
          </div>
        </div>
        <p className="text-gray-dark">{description}</p>
      </div>
    </div>
  );
};

export default DetailsCard;
