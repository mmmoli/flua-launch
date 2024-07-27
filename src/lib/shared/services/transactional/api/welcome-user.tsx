import { SendEmailProps } from '../lib/transactional-types';
import { transactionalEmailService } from '../model';
import { WelcomeUser, WelcomeUserProps } from '../ui/emails/welcome-user';

export const send = ({ to, ...props }: Pick<SendEmailProps, 'to'> & WelcomeUserProps) =>
  transactionalEmailService.send({
    to,
    react: <WelcomeUser {...props} />,
    subject: 'Test',
  });
