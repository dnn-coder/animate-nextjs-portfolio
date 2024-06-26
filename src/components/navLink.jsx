'use-client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ link }) {
  const patName = usePathname();

  return (
    <Link
      className={`rounded p-1 ${patName === link.url && 'bg-black text-white'}`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
}
