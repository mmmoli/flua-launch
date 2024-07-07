import { HomePage, publicRoutes } from '@shared/config/routes';
import { Button } from '@ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@ui/sheet';
import { UserMenu } from '@widgets/auth/user-menu';
import { Menu, Package2 } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

const navMenu = publicRoutes.map((route) => route({}));

export const PublicMasthead: FC = () => {
  return (
    <header className='sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6'>
      <nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
        <Link
          href={HomePage().url}
          className='flex items-center gap-2 text-lg font-semibold md:text-base'
        >
          <Package2 className='h-6 w-6' />
          <span className='sr-only'>Flua</span>
        </Link>
        {navMenu.map((item) => (
          <Button key={item.url} asChild variant='link' className='px-0 text-foreground'>
            <Link href={item.url}>{item.label}</Link>
          </Button>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='shrink-0 md:hidden'>
            <Menu className='h-5 w-5' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <nav className='grid gap-6 text-lg font-medium'>
            <Link href='#' className='flex items-center gap-2 text-lg font-semibold'>
              <Package2 className='h-6 w-6' />
              <span className='sr-only'>Acme Inc</span>
            </Link>
            {navMenu.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className='text-muted-foreground hover:text-foreground'
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className='flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
        <UserMenu />
      </div>
    </header>
  );
};
