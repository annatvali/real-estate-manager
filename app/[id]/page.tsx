'use client';

import React from 'react';
import { useGetRealEstateByIdQuery } from '@/services/apiSlice';
import Loading from '../components/Loading/Loading';
import RealEstateImg from './RealEstateImg';
import DetailsCard from './DetailsCard';
import Button from '../components/Button';
import AgentCard from './AgentCard';
import BackToHomeLink from './BacktoHomeLink';

interface PageProps {
  params: {
    id: number;
  };
}

const DetailsPage: React.FC<PageProps> = ({ params }) => {
  const {
    data: realEstate,
    error,
    isLoading,
  } = useGetRealEstateByIdQuery(params.id);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="container-2xl my-20">
        <p className="text-red-500">Failed to load real estate data.</p>
      </div>
    );
  }

  return (
    <div className="container-2xl mt-[125px] flex gap-12">
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
          <Button component={'button'} variant={'delete'}>
            ლისტინგის წაშლა
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
