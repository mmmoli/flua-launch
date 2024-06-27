import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ui/accordion';
import { FC, ReactNode } from 'react';

import { OBJECTIONS } from '../lib/objection-data';

export interface ObjectionListProps {}

export const ObjectionList: FC<ObjectionListProps> = () => {
  return (
    <section className='flex justify-center py-4 md:py-8'>
      <Accordion
        type='multiple'
        className='w-full sm:w-4/5 lg:w-1/2'
        defaultValue={[OBJECTIONS[0].id]}
      >
        {OBJECTIONS.map((objection) => (
          <AccordionItem key={objection.id} value={objection.id}>
            <AccordionTrigger className='text-xl font-bold'>{objection.question}</AccordionTrigger>
            <AccordionContent className='text-lg'>{objection.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
