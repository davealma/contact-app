import { Injectable } from "@angular/core";
import { Contact, ContactFormData, ContactResponse } from "../models/models";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    constructor(private httpClient: HttpClient) {}

    getContacts(): Observable<ContactResponse>  {
        return this.httpClient.get<ContactResponse>('/api/contact');
    }

    createContact(contact: ContactFormData): Observable<Contact> {
        const formData:FormData = new FormData();
        for (const property in contact) {
            if (contact[property as keyof ContactFormData]) {
                formData.append(property, contact[property as keyof ContactFormData]);
            }
        }
        // formData.append('firstName', contact.firstName);
        // formData.append('lastName', contact.lastName);
        // if (contact.phone) {
        //     formData.append('telephone', contact.phone);
        // }
        return this.httpClient.post<Contact>('/api/contact', formData, {
            headers: { 'Accept': '*/*' }
        })
        .pipe(map((contact:Contact) => {
            console.log('contact created', contact);
            return contact
        }))
    }
}