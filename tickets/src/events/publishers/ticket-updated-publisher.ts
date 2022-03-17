import { Publisher, Subjects, TicketUpdatedEvent } from '@mt51tickets/common';


export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated; 
}
