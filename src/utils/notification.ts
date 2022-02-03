import notifee, {
  RepeatFrequency,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
import {FormState} from '@app/types/form';

export async function onCreateTriggerNotification(
  payload: FormState,
  idChannel: string,
  frequency?: RepeatFrequency
) {
  try {
    const date = payload.notification;
    const channelId = await notifee.createChannel({
      id: idChannel,
      name: 'Default Channel',
    });
    // Create a time-based trigger
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
      repeatFrequency: frequency,
    };

    // Create a trigger notification
    await notifee.createTriggerNotification(
      {
        id: payload.id || '',
        title: `Pill ${payload.name}`,
        body: `Today at ${payload.notification.getHours()}:${payload.notification.getMinutes()}`,
        android: {
          channelId,
        },
      },
      trigger
    );
  } catch (error) {
    console.log('ERROR ', error);
  }
}
