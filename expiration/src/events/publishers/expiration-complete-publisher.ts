import { Subjects, Publisher, ExpirationCompleteEvent } from '@mt51tickets/common';


export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
