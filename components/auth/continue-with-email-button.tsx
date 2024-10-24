import { signIn } from '@/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ContinueWithEmailButton() {
  return (
    <form
      action={async (formData) => {
        'use server';
        await signIn('resend', { email: 'berkcanmeric99@hotmail.com' });
      }}
    >
      <div className='space-y-4'>
        <Input type='email' placeholder='john@doe.com' />
        <Button type='submit' className='w-full'>
          Continue with Email
        </Button>
      </div>
    </form>
  );
}
