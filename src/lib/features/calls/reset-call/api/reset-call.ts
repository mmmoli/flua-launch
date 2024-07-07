'use server';

import { env } from '@shared/config/env';
import assert from 'assert';
import { Fail, Ok, Result } from 'rich-domain';

export interface ResetCallParams {
  roomId: string;
}

export const resetCall = async (data: ResetCallParams): Promise<Result<void>> => {
  try {
    assert(data.roomId, 'Room ID is required');
    const url = `https://api.liveblocks.io/v2/rooms/${data.roomId}/storage`;
    const fetchResult = await fetch(url, {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${env.LIVEBLOCK_SECRET_KEY}`,
      },
      method: 'DELETE',
    });
    if (!fetchResult.ok) throw new Error(fetchResult.statusText);
    return Ok();
  } catch (e) {
    console.error(e);
    return Fail('Reset Call Failed');
  }
};
