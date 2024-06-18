import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='bg-green-100'>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/footer">Footer</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
