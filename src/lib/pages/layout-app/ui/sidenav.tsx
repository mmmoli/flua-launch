import { appRoutes } from '@shared/config/routes';
import { Tooltip, TooltipContent, TooltipTrigger } from '@ui/tooltip';
import { Settings } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

const nav = appRoutes.map((route) => route({}));

export const SideNav: FC = () => (
  <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex'>
    <nav className='flex flex-col items-center gap-4 px-2 sm:py-5'>
      {nav.map((item) => (
        <Tooltip key={item.label}>
          <TooltipTrigger asChild>
            <Link
              href={item.url}
              className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
            >
              <item.icon className='h-5 w-5' />
              <span className='sr-only'>{item.label}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side='right'>{item.label}</TooltipContent>
        </Tooltip>
      ))}
    </nav>
    <nav className='mt-auto flex flex-col items-center gap-4 px-2 sm:py-5'>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href='#'
            className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
          >
            <Settings className='h-5 w-5' />
            <span className='sr-only'>Settings</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side='right'>Settings</TooltipContent>
      </Tooltip>
    </nav>
  </aside>
);
