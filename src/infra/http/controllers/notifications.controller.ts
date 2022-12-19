import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from '../../../application/useCases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private senNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.senNotification.execute({
      recipientId,
      content,
      category,
    });

    return { notification };
  }
}
