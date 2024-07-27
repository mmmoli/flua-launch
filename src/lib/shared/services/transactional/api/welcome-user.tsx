import { WelcomeUser } from '../lib/emails/welcome-user';
import { SendEmailProps } from '../lib/transactional-types';
import { transactionalEmailService } from '../model';

export const send = (to: SendEmailProps['to']) =>
  transactionalEmailService.send({
    to,
    react: <WelcomeUser name='Michele' />,
    subject: 'Test',
  });
