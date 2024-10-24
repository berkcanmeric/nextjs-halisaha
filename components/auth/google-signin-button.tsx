import { signIn } from '@/auth';

import { IconBrandGoogle } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

export function GoogleSignInButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google', { redirectTo: '/main' });
      }}
    >
      <Button variant='outline' className='w-full '>
        <IconBrandGoogle className='mr-2' />
        Sign in with Google
      </Button>
    </form>
  );
}
