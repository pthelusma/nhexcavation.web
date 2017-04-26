import * as uuid from 'uuid';

export class Communication {
    public Id: string;

    constructor(
        public FirstName: string,
        public LastName: string,
        public EmailAddress: string,
        public PhoneNumber: string,
        public ContactMethod: string,
        public DiscoverMethod: string,
        public Message: string,
        public CreateDate: Date
    ) { this.Id = uuid.v4(); }
}
