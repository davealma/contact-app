import { Injectable } from "@angular/core";
import { ContactResponse } from "../models/models";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    constructor(private httpClient: HttpClient) {}

    getContacts(): Observable<ContactResponse>  {
        return this.httpClient.get<ContactResponse>('/api/contact');
    }
}