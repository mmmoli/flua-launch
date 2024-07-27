import { db, eq, schema } from '@shared/services/db';
import { logger } from '@shared/services/logger';
import { Fail, Ok, Result } from 'rich-domain';

export interface CreateCustomerParams {
  customerId: string;
  email: string;
}

export const createCustomer = async (data: CreateCustomerParams): Promise<Result<void>> => {
  try {
    const user = await db.query.users.findFirst({
      where: eq(schema.users.email, data.email),
    });

    if (!user) return Fail(`Create Customer Failed. No user found for email: ${data.email}.`);

    const result = await db.insert(schema.customers).values({
      id: user.id,
      stripeCustomerId: data.customerId,
    });

    return Ok();
  } catch (e) {
    logger.error(e);
    return Fail('Create Subscription Failed');
  }
};
