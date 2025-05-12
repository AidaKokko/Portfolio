import { headers } from 'next/headers';

export default function Favicon() {
  const headersList = headers();
  headersList.set('Cache-Control', 'no-store, must-revalidate');
  headersList.set('Pragma', 'no-cache');
  headersList.set('Expires', '0');

  return (
    <link
      rel="icon"
      href="/favicon.ico"
      type="image/x-icon"
      sizes="any"
    />
  );
} 