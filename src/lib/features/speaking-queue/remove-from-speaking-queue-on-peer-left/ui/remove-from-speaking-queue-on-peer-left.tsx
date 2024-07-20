'use client';

import { HMSNotificationTypes, useHMSNotifications } from '@100mslive/react-sdk';
import { useLeaveSpeakingQueue } from '@entities/speaking-queue';
import { FC, useEffect } from 'react';

export const RemoveFromSpeakingQueueOnPeerLeft: FC = () => {
  const notification = useHMSNotifications();
  const leave = useLeaveSpeakingQueue();

  useEffect(() => {
    if (!notification) return;
    if (notification.type !== HMSNotificationTypes.PEER_LEFT) return;
    leave({
      id: notification.data.id,
    });
  }, [leave, notification]);

  return null;
};
