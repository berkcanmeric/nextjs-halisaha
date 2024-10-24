import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { auth } from '../../auth';

export default async function UserAvatar() {
  const session = await auth();

  return (
    <Avatar>
      <AvatarImage
        src={session?.user?.image ?? ''}
        alt='User Avatar'
        className='object-cover'
      />
      <AvatarFallback>
        {session?.user?.name
          ?.split(' ')
          .map((n) => n[0])
          .join('')}
      </AvatarFallback>
    </Avatar>
  );
}
