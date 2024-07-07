import { BookCopy, Dice5, DoorOpen, Gift, Home, KanbanSquareDashed } from 'lucide-react';
import { ComponentType } from 'react';

export type RouteDefinition = {
  url: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
};

export type Route<T = undefined> = T extends undefined
  ? () => RouteDefinition
  : (params: T) => RouteDefinition;

export const HomePage: Route = () => ({
  url: '/',
  label: 'Home',
  icon: Home,
});

export const SignInPageRoute: Route<{ next?: string }> = (params = {}) => {
  const { next } = params;
  const url = '/sign-in';
  if (next) url.concat('?next=', encodeURIComponent(next));
  return {
    label: 'Sign In',
    url: url.toString(),
    icon: DoorOpen,
  };
};

export const DashPage: Route = () => ({
  url: '/dashboard',
  label: 'Dashboard',
  icon: KanbanSquareDashed,
});

export const AboutPage: Route = () => ({
  url: '/about',
  label: 'About',
  icon: Dice5,
});

export const WaitinglistPage: Route = () => ({
  url: '/join-waiting-list',
  label: 'Join Waitinglist',
  icon: Gift,
});

export const RoomPage: Route<{ slug: string }> = ({ slug }) => ({
  url: `/r/${slug}`,
  label: 'Room',
  icon: Home,
});

export const AccountPage: Route = () => ({
  url: `/account`,
  label: 'Account',
  icon: Home,
});

export const routes = {
  AboutPage,
  AccountPage,
  DashPage,
  HomePage,
  RoomPage,
  WaitinglistPage,
};

export const publicRoutes: Route<any | null>[] = [HomePage, AboutPage, WaitinglistPage];
export const appRoutes: Route<any | null>[] = [DashPage];
