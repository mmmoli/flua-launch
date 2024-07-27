import { assertUser } from '@shared/services/auth/api';
import { Alert, AlertDescription, AlertTitle } from '@ui/alert';
import { FlaskConical } from 'lucide-react';
import { FC } from 'react';

export const TrialBanner: FC = async () => {
  const session = await assertUser();
  if (!session?.user.isTrialing) return null;

  return (
    <Alert className='border border-primary shadow-sm'>
      <FlaskConical className='h-5 w-5' />
      <AlertTitle>Flua Trial</AlertTitle>
      <AlertDescription>
        What you still doing on the free plan? 🤔
        <br />
        Upgrading gets you <strong>unlimited Rooms</strong>,{` `}
        <strong>Room Tiers</strong>,{` `}
        <strong>Stats</strong> and more.
      </AlertDescription>
    </Alert>
  );
};
