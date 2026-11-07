import Link from 'next/link';
import { MANIFEST_LINKS } from '@/lib/eyewear-catalog';

export default function HomePage() {
  return (
    <main className="p-6 font-serif text-base text-black bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-2">Dum Dum Eyewear UI Manifest</h1>
      <p className="mb-4">
        Dum Dum, Kolkata, West Bengal — Select a landing page UI design below:
      </p>
      <ul className="list-disc pl-8 space-y-1">
        {MANIFEST_LINKS.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className="text-[#0000EE] underline visited:text-[#551A8B] hover:text-[#FF0000]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
