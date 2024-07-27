import { Send } from '../lib/transactional-types';
import { transactionalEmailService } from '../model';
import { WelcomeUser, WelcomeUserProps } from '../ui/emails/welcome-user';

export const send: Send<WelcomeUserProps> = ({ to, ...props }) =>
  transactionalEmailService.send({
    to,
    react: <WelcomeUser {...props} />,
    subject: 'Welcome to Flua',
  });
