'use client';

import { AccountPage, DashPage } from '@shared/config/routes';
import { signOut, User } from '@shared/services/auth/client';
import { initials } from '@shared/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@ui/avatar';
import { buttonVariants } from '@ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@ui/dropdown-menu';
import Link from 'next/link';
import { FC } from 'react';

export interface SignedInUserMenuProps {
  user: User;
}

const dash = DashPage();
const account = AccountPage();

export const SignedInUserMenu: FC<SignedInUserMenuProps> = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center gap-2 text-sm'>
        <Avatar className='h-6 w-6'>
          {user.image ? <AvatarImage src={user.image} alt={user.name!} /> : null}
          <AvatarFallback>{initials(user.name!)}</AvatarFallback>
        </Avatar>
        <span>{user.name}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem asChild>
          <Link className='cursor-pointer' href={dash.url}>
            {dash.label}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link className='cursor-pointer' href={account.url}>
            {account.label}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='cursor-pointer' onClick={() => signOut()}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
