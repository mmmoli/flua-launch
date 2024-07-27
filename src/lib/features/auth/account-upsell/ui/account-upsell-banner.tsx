import { auth } from '@shared/services/auth';
import { Alert, AlertDescription, AlertTitle } from '@ui/alert';
import { UserMenu } from '@widgets/auth/user-menu';
import { Lightbulb } from 'lucide-react';
import { FC } from 'react';

export interface AccountUpsellBannerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AccountUpsellBanner: FC<AccountUpsellBannerProps> = async (props) => {
  const session = await auth();
  if (session) return null;

  return (
    <div {...props}>
      <div className='m-4'>
        <Alert className='dark shadow-md'>
          <Lightbulb className='h-4 w-4' />
          <div className='flex items-center justify-between'>
            <div>
              <AlertTitle>Video Calls without the d*ckheads</AlertTitle>
              <AlertDescription>
                Flua&apos;s <strong>Speaking Queues</strong> give everyone their chance to be heard.
              </AlertDescription>
            </div>
            <UserMenu signedOutCta='Sign Up FREE' />
          </div>
        </Alert>
      </div>
    </div>
  );
};
