import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="border-b border-[primary-gray] px-1 py-[38px] md:px-2 2xl:px-3">
      <Link href={'/'}>
        <Image
          src={'/logo.svg'}
          alt="redberry logo"
          width={150}
          height={24}
          priority
        />
        <h1 className="sr-only">REDBERRY</h1>
      </Link>
    </header>
  );
};

export default Header;
