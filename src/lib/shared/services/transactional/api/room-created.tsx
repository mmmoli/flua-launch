import { SendEmailProps } from '../lib/transactional-types';
import { transactionalEmailService } from '../model';
import { RoomCreated, RoomCreatedProps } from '../ui/emails/room-created';

export const send = ({ to, ...props }: Pick<SendEmailProps, 'to'> & RoomCreatedProps) =>
  transactionalEmailService.send({
    to,
    react: <RoomCreated {...props} />,
    subject: 'Test',
  });
