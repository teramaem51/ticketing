import { Subjects, Publisher, PaymentCreatedEvent } from '@mt51tickets/common';


export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
