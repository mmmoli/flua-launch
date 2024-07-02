'use client';

import { DashPage } from '@shared/config/routes';
import { signOut, User } from '@shared/services/auth/client';
import { buttonVariants } from '@ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@ui/dropdown-menu';
import Link from 'next/link';
import { FC } from 'react';

export interface SignedInUserMenuProps {
  user: User;
}

export const SignedInUserMenu: FC<SignedInUserMenuProps> = ({ user }) => {
  const dash = DashPage(null);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={buttonVariants({ variant: 'outline' })}>
        {user.name}
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link className='cursor-pointer' href={dash.url}>
            {dash.label}
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
