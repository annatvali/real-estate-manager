import { useGetRealEstatesQuery } from '@/services/apiSlice';
import Card from './Card';
import Loading from '../Loading/Loading';

const RealEstatesList: React.FC = () => {
  const { data, error, isLoading } = useGetRealEstatesQuery();

  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="p-2 text-center text-2xl font-medium text-red-primary">
        Error loading real-estate data!
      </div>
    );

  return (
    <div className="mx-auto mt-[77px] grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 lg:gap-5 xl:grid-cols-3 2xl:grid-cols-4">
      {data?.map((estate) => (
        <Card
          key={estate.id}
          id={estate.id}
          image={estate.image}
          price={estate.price}
          city={estate.city}
          address={estate.address}
          bedrooms={estate.bedrooms}
          area={estate.area}
          zipCode={estate.zip_code}
          isRental={estate.is_rental}
        />
      ))}
    </div>
  );
};

export default RealEstatesList;
