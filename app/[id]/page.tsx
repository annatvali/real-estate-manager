'use client';

import {
  useGetRealEstateByIdQuery,
  useDeleteRealEstateByIdMutation,
} from '@/services/apiSlice';
import { useRouter } from 'next/navigation';
import Loading from '../components/Loading/Loading';
import RealEstateImg from '../components/DetailsPage/RealEstateImg';
import DetailsCard from '../components/DetailsPage/DetailsCard';
import Button from '../components/Button';
import AgentCard from '../components/DetailsPage/AgentCard';
import BackToHomeLink from '../components/DetailsPage/BacktoHomeLink';
import Carousel from '../components/DetailsPage/Carousel';

interface PageProps {
  params: {
    id: number;
  };
}

const DetailsPage: React.FC<PageProps> = ({ params }) => {
  const router = useRouter();
  const {
    data: realEstate,
    error,
    isLoading,
  } = useGetRealEstateByIdQuery(params.id);
  const [deleteRealEstate] = useDeleteRealEstateByIdMutation();

  const handleDelete = async (): Promise<void> => {
    try {
      await deleteRealEstate(params.id).unwrap();
      alert('Real estate listing deleted successfully.');
      router.push('/');
    } catch (err) {
      console.error('Failed to delete the real estate listing:', err);
      alert('Failed to delete the real estate listing.');
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="my-[125px]">
        <p className="text-red-500">Failed to load real estate data.</p>
      </div>
    );
  }

  return (
    <>
      <div className="mt-[125px] flex justify-start gap-[68px]">
        <BackToHomeLink />
        {realEstate!.image && realEstate?.created_at && (
          <RealEstateImg
            image={realEstate.image}
            created_at={realEstate.created_at}
            is_rental={realEstate.is_rental}
          />
        )}
        <div className="flex flex-col justify-between">
          {realEstate && (
            <DetailsCard
              image={realEstate.image}
              created_at={realEstate.created_at}
              price={realEstate.price}
              address={realEstate.address}
              city={realEstate.city}
              area={realEstate.area}
              bedrooms={realEstate.bedrooms}
              zip_code={realEstate.zip_code}
              description={realEstate.description}
            />
          )}
          {realEstate!.agent && <AgentCard agent={realEstate!.agent} />}
          <div>
            <Button
              component={'button'}
              variant={'delete'}
              onClick={handleDelete}
            >
              ლისტინგის წაშლა
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-[97px]">
        {realEstate && <Carousel region={String(realEstate.city.region)} />}
      </div>
    </>
  );
};

export default DetailsPage;
