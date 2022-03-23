import { Message } from 'node-nats-streaming';
import { Listener, OrderCreatedEvent, Subjects } from "@mt51tickets/common";
import { queueGroupName } from "./queue-group-name";


export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  onMessage(data: OrderCreatedEvent['data'], msg: Message) {
    
  }
}
