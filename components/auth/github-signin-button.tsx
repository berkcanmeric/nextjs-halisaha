import { signIn } from '@/auth';

import { IconBrandGithub } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

export function GithubSignInButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('github', { redirectTo: '/main' });
      }}
    >
      <Button variant='outline' className='w-full '>
        <IconBrandGithub className='mr-2' />
        Sign in with GitHub
      </Button>
    </form>
  );
}
