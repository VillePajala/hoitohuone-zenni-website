'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Energiahoito' },
  { href: '/bodymind', label: 'BodyMind' },
  { href: '/minusta', label: 'Minusta' },
  { href: '/ajanvaraus', label: 'Ajanvaraus ja hinnasto' },
  { href: '/arvostelut', label: 'Kokemuksia' },
  { href: '/yhteystiedot', label: 'Yhteystiedot' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:flex-col lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-64 lg:border-r lg:border-gray-200 lg:bg-white lg:p-8">
      <div className="mb-12">
        <Link href="/">
          <h1 className="text-2xl font-semibold text-gray-900 cursor-pointer hover:text-gray-700 transition-colors">
            Hoitohuone Zenni
          </h1>
        </Link>
      </div>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-gray-100 text-gray-900 font-medium'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
