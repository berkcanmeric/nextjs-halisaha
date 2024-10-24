import { Button } from '@/components/ui/button';
import { IconLogin } from '@tabler/icons-react';
import Link from 'next/link';

export function SignInButton() {
  return (
    <Link href='/signin'>
      <Button>
        Sign in
        <IconLogin className='h-4 w-4 ml-2' />
      </Button>
    </Link>
  );
}
