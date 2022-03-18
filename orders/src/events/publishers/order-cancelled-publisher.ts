import { Publisher, OrderCancelledEvent, Subjects } from "@mt51tickets/common";


export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
