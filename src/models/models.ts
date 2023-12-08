export type Contact = {
    id: string;
    firstName: string;
    lastName: string;
    image: string;
    bio: string;
    telephone: string;
}

export type ContactFormData = Omit<Contact, 'id'>;

export type ContactResponse = {
    data: Contact[]
}