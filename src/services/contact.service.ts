import { Injectable } from "@angular/core";
import { Contact, ContactFormData, ContactResponse } from "../models/models";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    constructor(private httpClient: HttpClient) {}

    getContacts(): Observable<ContactResponse<Contact[]>>  {
        return this.httpClient.get<ContactResponse<Contact[]>>('/api/contact');
    }

    getContact(id: string): Observable<ContactResponse<Contact>> {
        return this.httpClient.get<ContactResponse<Contact>>(`/api/contact/${id}`);
    }

    createContact(contact: ContactFormData): Observable<Contact> {
        const formData:FormData = new FormData();
        for (const property in contact) {
            if (contact[property as keyof ContactFormData]) {
                formData.append(property, contact[property as keyof ContactFormData]);
            }
        }
        return this.httpClient.post<Contact>('/api/contact', formData, {
            headers: { 'Accept': '*/*' }
        })
        .pipe(map((contact:Contact) => {
            console.log('contact created', contact);
            return contact
        }))
    }

    deleteContact(id: string): Observable<{}> {
        return this.httpClient.delete(`/api/contact/${id}`);
    }
}