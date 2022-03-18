import { Publisher, OrderCreatedEvent, Subjects } from "@mt51tickets/common";


export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
