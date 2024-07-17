import {
  Book,
  BookCopy,
  Dice5,
  DoorOpen,
  Home,
  KanbanSquareDashed,
  Settings,
  User,
} from 'lucide-react';
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

export const RoomPage: Route<{ slug: string }> = ({ slug }) => ({
  url: `/r/${slug}`,
  label: 'Room',
  icon: Home,
});

export const RoomListPage: Route = () => ({
  url: `/rooms`,
  label: 'Rooms',
  icon: BookCopy,
});

export const RoomSettingsPage: Route<{ slug: string }> = ({ slug }) => ({
  url: `/rooms/${slug}`,
  label: 'Room Settings',
  icon: Settings,
});

export const AccountPage: Route = () => ({
  url: `/account`,
  label: 'Account',
  icon: User,
});

export const PrivacyPolicyPage: Route = () => ({
  url: `/privacy-policy`,
  label: 'Privacy Policy',
  icon: Book,
});

export const TermsPage: Route = () => ({
  url: `/terms`,
  label: 'Terms & Conditions',
  icon: Book,
});

export const CookiesPage: Route = () => ({
  url: `/cookies`,
  label: 'Cookies',
  icon: Book,
});

export const routes = {
  AboutPage,
  AccountPage,
  PrivacyPolicyPage,
  CookiesPage,
  TermsPage,
  DashPage,
  HomePage,
  RoomListPage,
  RoomPage,
  RoomSettingsPage,
};

export const publicRoutes: Route<any | null>[] = [HomePage, AboutPage];
export const appRoutes: Route<any | null>[] = [DashPage, RoomListPage];
