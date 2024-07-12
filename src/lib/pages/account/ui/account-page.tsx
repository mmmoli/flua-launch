import { DeleteAccountDialog } from '@features/auth/delete-account';
import { AccountPage as AccountPageRoute } from '@shared/config/routes';
import { assertUser } from '@shared/services/auth/api';
import { Button } from '@ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@ui/card';
import { Metadata } from 'next';
import Link from 'next/link';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export const AccountPage: FC = async () => {
  const session = await assertUser({ next: AccountPageRoute().url });
  if (!session) return null;
  return (
    <>
      <div className='mx-auto grid w-full max-w-6xl gap-2'>
        <h1 className='text-3xl font-semibold'>Account</h1>
      </div>

      <div className='mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]'>
        <nav className='grid gap-4 text-sm text-muted-foreground'>
          <Link href='#billing'>Billing</Link>
          <Link href='#danger'>Danger Zone</Link>
        </nav>
        <div className='grid gap-6'>
          <Card id='billing'>
            <CardHeader>
              <CardTitle>Billing</CardTitle>
              <CardDescription>Used to identify your room when people join.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <a href='https://billing.stripe.com/p/login/test_6oE2ce9n0b6Fc5W7ss'>
                  Visit Billing Portal
                </a>
              </Button>
            </CardContent>
          </Card>
          <Card id='danger' className='dark'>
            <CardHeader>
              <CardTitle>Danger zone</CardTitle>
            </CardHeader>
            <CardContent>
              <DeleteAccountDialog userId={session.user.id} />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
