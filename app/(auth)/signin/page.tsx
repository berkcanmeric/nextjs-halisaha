import { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { GithubSignInButton } from '@/components/auth/github-signin-button';
import { GoogleSignInButton } from '@/components/auth/google-signin-button';
import { ContinueWithEmailButton } from '@/components/auth/continue-with-email-button';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your account',
};

export default function SignInPage() {
  return (
    <div className='flex min-h-screen items-center justify-center  '>
      <Card className='w-full max-w-md'>
        <CardContent className='space-y-6 p-8'>
          <div className='text-center'>
            <Image
              src='/logo.png'
              alt='StreakUp Logo'
              width={64}
              height={64}
              className='mx-auto'
            />
            <h2 className='mt-6 text-3xl font-bold  first-letter:'>
              Sign in to StreakUp
            </h2>
            <p className='mt-2 text-sm '>
              Start building your new habits here.
            </p>
          </div>

          <div className='space-y-4'>
            <GoogleSignInButton />
            <GithubSignInButton />
          </div>
          <ContinueWithEmailButton />
        </CardContent>
      </Card>
    </div>
  );
}
