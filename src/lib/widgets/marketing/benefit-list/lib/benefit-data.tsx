import Image from 'next/image';

import { Benefit } from './benefit-type';

export const BENEFITS: Benefit[] = [
  {
    id: '1',
    headline: 'Enhanced Meeting Efficiency',
    body: (
      <p>
        I built this system to eliminate interruptions – everyone gets their turn to speak without
        being cut off, ensuring orderly and respectful communication. By reducing chaos and
        cross-talk, discussions stay on topic and more productive, making better use of
        everyone&apos;s time.
      </p>
    ),
    image: (
      <Image
        src='https://via.placeholder.com/500'
        width={500}
        height={500}
        alt='Enhanced Meeting Efficiency'
      />
    ),
  },
  {
    id: '2',
    headline: 'Equal Participation',
    body: (
      <p>
        I designed this system to ensure that all voices are heard, not just the loudest ones. This
        is particularly beneficial in diverse teams where some members may be less likely to speak
        up. It guarantees that each participant has an opportunity to contribute, fostering a more
        democratic and inclusive meeting culture.
      </p>
    ),
    image: (
      <Image
        src='https://via.placeholder.com/500'
        width={500}
        height={500}
        alt='Equal Participation'
      />
    ),
  },
  {
    id: '3',
    headline: 'Improved Communication Quality',
    body: (
      <p>
        By encouraging participants to think before they speak, I built this system to lead to more
        thoughtful and meaningful contributions. With a structured queue, there&apos;s less chance
        of overlapping speech, making it easier for everyone to understand and follow the
        conversation.
      </p>
    ),
    image: (
      <Image
        src='https://via.placeholder.com/500'
        width={500}
        height={500}
        alt='Improved Communication Quality'
      />
    ),
  },
];
