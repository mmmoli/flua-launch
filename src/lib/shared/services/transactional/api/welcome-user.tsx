import { SendEmailProps } from '../lib/transactional-types';
import { transactionalEmailService } from '../model';
import { WelcomeUser } from '../ui/emails/welcome-user';

export const send = (to: SendEmailProps['to']) =>
  transactionalEmailService.send({
    to,
    react: <WelcomeUser name='Michele' />,
    subject: 'Test',
  });
