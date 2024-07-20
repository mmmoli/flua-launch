'use client';

import { HMSNotificationTypes, useHMSNotifications } from '@100mslive/react-sdk';
import { logger } from '@shared/services/logger';
import { toast } from '@ui/sonner';
import { FC, useEffect } from 'react';

export const CallNotification: FC = () => {
  const notification = useHMSNotifications();

  useEffect(() => {
    if (!notification) return;

    switch (notification.type) {
      case HMSNotificationTypes.PEER_JOINED:
        toast.success(`${notification.data.name} joined.`);
        break;
      case HMSNotificationTypes.PEER_LEFT:
        toast.info(`${notification.data.name} left.`);
        break;
      case HMSNotificationTypes.NEW_MESSAGE:
        break;
      case HMSNotificationTypes.ERROR:
        logger.log(`[Error] ${notification.data}`);
        toast.error(notification.data.message);
        break;
      case HMSNotificationTypes.RECONNECTING:
        toast.info(`Reconnecting: ${notification.data?.message}`);
        break;
      case HMSNotificationTypes.RECONNECTED:
        toast.success(`Reconnected`);
        break;
      case HMSNotificationTypes.NAME_UPDATED:
      case HMSNotificationTypes.METADATA_UPDATED:
      case HMSNotificationTypes.ROLE_UPDATED:
        break;
      case HMSNotificationTypes.TRACK_DEGRADED:
      case HMSNotificationTypes.TRACK_RESTORED:
        break;
      case HMSNotificationTypes.ROOM_ENDED:
      case HMSNotificationTypes.REMOVED_FROM_ROOM:
      case HMSNotificationTypes.DEVICE_CHANGE_UPDATE:
        break;
      default:
        break;
    }
  }, [notification]);

  return null;
};
