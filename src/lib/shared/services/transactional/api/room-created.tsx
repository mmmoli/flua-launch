import { Send } from '../lib/transactional-types';
import { transactionalEmailService } from '../model';
import { RoomCreated, RoomCreatedProps } from '../ui/emails/room-created';

export const send: Send<RoomCreatedProps> = ({ to, ...props }) =>
  transactionalEmailService.send({
    to,
    react: <RoomCreated {...props} />,
    subject: 'Flua: Your room is ready',
  });
