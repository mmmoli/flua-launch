import { ReactNode } from 'react';
import { IResult } from 'rich-domain';

export interface SendEmailProps {
  react: ReactNode;
  subject: string;
  to: string | string[];
}

export interface TransactionalEmailServiceTrait {
  send(input: SendEmailProps): Promise<IResult<void>>;
}

export type Send<T = Record<string, unknown>> = (
  props: Pick<SendEmailProps, 'to'> & T
) => Promise<IResult<void>>;
