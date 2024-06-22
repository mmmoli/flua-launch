import { appRoutes } from '@shared/config/routes';
import { Button } from '@ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@ui/sheet';
import { UserMenu } from '@widgets/auth/user-menu';
import { Package2, PanelLeft } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

const nav = appRoutes.map((route) => route({}));

export const Header: FC = () => (
  <header className='sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
    <div className='flex items-center gap-4'>
      <Sheet>
        <SheetTrigger asChild>
          <Button size='icon' variant='outline' className='sm:hidden'>
            <PanelLeft className='h-5 w-5' />
            <span className='sr-only'>Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='sm:max-w-xs'>
          <nav className='grid gap-6 text-lg font-medium'>
            <Link
              href='#'
              className='group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base'
            >
              <Package2 className='h-5 w-5 transition-all group-hover:scale-110' />
              <span className='sr-only'>Flua</span>
            </Link>
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.url}
                className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
              >
                <item.icon className='h-5 w-5' />
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div>something</div>
    </div>

    <UserMenu />
  </header>
);
