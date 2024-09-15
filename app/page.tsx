import Button from './components/Button';

const Home: React.FC = () => {
  return (
    <section className="mt-[77px] flex justify-between">
      <div></div>
      <div className="flex gap-[32px]">
        <Button href={'/add-listing'}>ლისტინგის დამატება</Button>
        <Button href={'/add-agent'} variant={'secondary'}>
          აგენტის დამატება
        </Button>
      </div>
    </section>
  );
};

export default Home;
