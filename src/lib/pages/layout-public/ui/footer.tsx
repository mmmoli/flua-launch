import { FC } from 'react';

const year = new Date().getFullYear();

import { AboutPage, CookiesPage, PrivacyPolicyPage, TermsPage } from '@shared/config/routes';
import Link from 'next/link';

const navigation = {
  usecases: [
    { name: 'Standups', href: '#' },
    { name: 'Disputes', href: '#' },
    { name: 'Performance Reviews', href: '#' },
    { name: 'Team Meetings', href: '#' },
  ],
  company: [{ name: AboutPage().label, href: AboutPage().url }],
  legal: [
    { name: CookiesPage().label, href: CookiesPage().url },
    { name: PrivacyPolicyPage().label, href: PrivacyPolicyPage().url },
    { name: TermsPage().label, href: TermsPage().url },
  ],
};

export const Footer: FC = () => {
  return (
    <footer aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          Flua
          <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold leading-6 text-gray-900'>Use Cases</h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.usecases.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-sm font-semibold leading-6 text-gray-900'>Company</h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold leading-6 text-gray-900'>Legal</h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>&copy; Flua. All rights reserved.</div>
    </footer>
  );
};
