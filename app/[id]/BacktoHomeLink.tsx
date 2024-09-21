import Link from 'next/link';

const BackToHomeLink: React.FC = () => {
  return (
    <Link href={'/'}>
      <span className="icon-[lucide--arrow-left] absolute left-1 top-[160px] ml-[40px] h-8 w-8 md:left-2 2xl:left-3"></span>
    </Link>
  );
};
export default BackToHomeLink;
