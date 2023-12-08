export type Contact = {
    id: string;
    firstName: string;
    lastName: string;
    image: string;
    bio?: string;
    phone?: string;
}

export type ContactResponse = {
    data: Contact[]
}