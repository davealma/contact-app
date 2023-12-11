export type Contact = {
    id: string;
    firstName: string;
    lastName: string;
    image: string;
    bio: string;
    phone: string;
}

export type ContactFormData = Omit<Contact, 'id, image'>;

export type ContactResponse<T> = {
    data: T
}