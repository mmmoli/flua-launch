import { Participant, UserId } from '../model/call-model';

export function filterUniqueParticipants(array: Participant[]): Participant[] {
  const seen = new Set<UserId>();
  const result: Participant[] = [];

  for (const item of array) {
    if (!seen.has(item.id)) {
      seen.add(item.id);
      result.push(item);
    }
  }

  return result;
}
