import { Objection } from './objection-type';

export const OBJECTIONS: Objection[] = [
  {
    id: '1',
    question: 'Does this mess up the flow of conversation?',
    answer: `A bit, sure, but that's kind of the point. It's designed to make everyone on the call take a moment before they respond. In my experience, you get better conversation that way.`,
  },
  {
    id: '2',
    question: 'Does this make me wait too long to speak?',
    answer: `It depends on who you're in a call with and how long they take to express themselves. If this is too frustrating, you might need to find new colleagues. I am open to ideas, though, like adding a speaking time limit. What do you think?`,
  },
  {
    id: '3',
    question: 'Does this kill spontaneity?',
    answer: `You can still be spontaneous, just in a more thoughtful way. It's not designed for fast-paced, interrupting chat. I’m likely to add reactions soon, too.`,
  },
  {
    id: '4',
    question: 'Does this handle large meetings?',
    answer: `Absolutely! It's built on top of 100ms servers – designed to handle millions of videos.`,
  },
];
