'use client';

import { LiveCallPage } from '@pages/live-call';
import { WaitingRoomPage } from '@pages/waiting-room';
import { useCallback, useState } from 'react';

export interface Props {
  params: { slug: string };
}

export default function Page({ params }: Props) {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = useCallback(() => {
    setHasEntered(true);
  }, []);

  return hasEntered ? (
    <LiveCallPage roomSlug={params.slug} />
  ) : (
    <WaitingRoomPage roomSlug={params.slug} enterCallback={handleEnter} />
  );
}
