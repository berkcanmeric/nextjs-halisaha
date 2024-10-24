import { signOut } from '@/auth';
import { IconLogout } from '@tabler/icons-react';

export function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button
        type='submit'
        className='w-full flex items-center justify-between'
      >
        Sign out
        <IconLogout className='h-4 w-4 ml-2' />
      </button>
    </form>
  );
}
