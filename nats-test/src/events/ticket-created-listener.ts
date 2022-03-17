import { Message } from 'node-nats-streaming';
import { Listener } from './base-listener';
import { TicketCreatedEvent } from './ticket-created-events';
import { Subjects } from './subjects';


export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = 'payments-service';

  onMessage(data: any, msg: Message) {
    console.log('Event data!', data);

    console.log(data.name);
    console.log(data.cost);

    msg.ack();
  }
}
