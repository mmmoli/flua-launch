import { RoomPageRoute } from '@shared/config/routes';
import { Button } from '@ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@ui/popover';
import { DoorOpen, Settings2 } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

export interface RoomItemProps {
  name: string;
  id: string;
}

export const RoomItem: FC<RoomItemProps> = ({ name, id }) => {
  const { url } = RoomPageRoute(id);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>{name}</Button>
      </PopoverTrigger>
      <PopoverContent className='flex space-x-2'>
        <Button asChild size='sm' variant='outline'>
          <Link href={'#'}>
            <Settings2 className='size-4' /> Edit
          </Link>
        </Button>
        <Button asChild size='sm'>
          <Link href={url}>
            <DoorOpen className='size-4' /> Join
          </Link>
        </Button>
      </PopoverContent>
    </Popover>
  );
};
