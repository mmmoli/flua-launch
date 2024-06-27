import { Objection } from './objection-type';

export const OBJECTIONS: Objection[] = [
  {
    id: '1',
    question: 'Does this mess up the flow of conversation?',
    answer:
      'Not at all! I built this system to keep things smooth and efficient, especially in big meetings. No more interruptions – everyone gets their turn to speak without being cut off. It’s great for formal meetings, brainstorms, and any structured discussions.',
  },
  {
    id: '2',
    question: 'Does this make me wait too long to speak?',
    answer: `Depends who you're in a call with, and how long they take to express themselves. If this is too frustrating, but probably need to find new colleagues, but I'm open to ideas e.g. add a speaking time limit. What do you think?`,
  },
  {
    id: '3',
    question: 'Does this kill spontaneity?',
    answer:
      'Nope! I included "urgent" or "priority" slots for must-have-now reactions. Plus, there’s a parallel text chat for spontaneous thoughts. It’s the best of both worlds – organised speaking with room for impromptu contributions.',
  },
  {
    id: '4',
    question: 'Does this handle large meetings?',
    answer:
      'Absolutely! I built the system for scalability with a microservices architecture. It’s stress-tested and optimised for performance, so it works great even in big meetings. Dynamic scaling ensures it runs smoothly, no matter the size.',
  },
  {
    id: '5',
    question: 'Does this make it worth it?',
    answer:
      'For sure! This system rocks for education, corporate board meetings, public forums, and more. Plus, features like analytics, speaking time tracking, and better meeting summaries add tons of value. It’s also perfect for hybrid and virtual events, making it easy to manage large audiences.',
  },
];
