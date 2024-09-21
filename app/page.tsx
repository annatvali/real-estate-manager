'use client';
import Button from './components/Button';
import Filter from './components/Filter/Filter';
import RealEstatesList from './components/RealEstates/RealEstatesList';

const Home: React.FC = () => {
  return (
    <section className="mt-[77px] flex flex-col">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <Filter />
        <div className="flex w-full gap-8 md:w-auto">
          <Button href={'/add-listing'} hasIcon>
            ლისტინგის დამატება
          </Button>
          <Button href={'/add-agent'} variant={'secondary'} hasIcon>
            აგენტის დამატება
          </Button>
        </div>
      </div>
      <RealEstatesList />
    </section>
  );
};

export default Home;
