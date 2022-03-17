import { Publisher, Subjects, TicketCreatedEvent } from '@mt51tickets/common';


export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated; 
}
