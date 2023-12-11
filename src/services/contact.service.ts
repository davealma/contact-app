import { Injectable } from "@angular/core";
import { Contact, ContactFormData, ContactResponse } from "../models/models";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, map, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    constructor(private httpClient: HttpClient) {}

    private handleError(error: HttpErrorResponse) {
        console.log(error)
        return throwError(() => new Error(error.error));
    }

    getContacts({size, search}:{size?: Number, search?: string}): Observable<ContactResponse<Contact[]>>  {
        const objParam = {};
        if (size) {
            Object.assign(objParam, {size});
        }
        if (search) {
            Object.assign(objParam, {search});
        }
        const queryParams = new URLSearchParams(objParam);
        const url = queryParams.toString() ? `/api/contact?${queryParams.toString()}` : '/api/contact';
        return this.httpClient.get<ContactResponse<Contact[]>>(url);
    }

    getContact(id: string): Observable<ContactResponse<Contact>> {
        return this.httpClient.get<ContactResponse<Contact>>(`/api/contact/${id}`)
            .pipe(
                catchError(this.handleError)
            );
    }

    createContact(contact: ContactFormData, imageFile?: File): Observable<Contact> {
        const formData:FormData = new FormData();
        for (const property in contact) {
            if (contact[property as keyof ContactFormData]) {
                formData.append(property, contact[property as keyof ContactFormData]);
            }
        }
        if (imageFile) {
            formData.append('image', imageFile);
        }
        return this.httpClient.post<Contact>('/api/contact', formData, {
            headers: { 'Accept': '*/*' }
        })
        .pipe(map((contact:Contact) => {
            return contact
        }))
        .pipe(
            catchError(this.handleError)
        )
    }

    updateContact(contact: ContactFormData, imageFile?: File) {
        const formData: FormData = new FormData();
        for (const prop in contact) {
            if (Object.prototype.hasOwnProperty.call(contact, prop)) {
                const element = contact[prop as keyof Contact];
                formData.append(prop, contact[prop as keyof Contact]);
            }
        }
        if (imageFile) {
            formData.append('image', imageFile)    
        }

        return this.httpClient.put(`/api/contact/${contact.id}`, formData);
    }

    deleteContact(id: string): Observable<{}> {
        return this.httpClient.delete(`/api/contact/${id}`);
    }
}