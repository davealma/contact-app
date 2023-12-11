import { Component, Input } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { DividerModule } from 'primeng/divider';
import { ContactService } from "../../services/contact.service";
import { Contact } from "../../models/models";
import { Router, RouterLink } from "@angular/router";
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { MessageModule } from 'primeng/message';

@Component({
    selector: 'wt-contact-detail',
    standalone: true,
    imports: [ButtonModule , DividerModule, RouterLink, NgOptimizedImage, MessageModule, CommonModule],
    templateUrl: './contact-detail.component.html',
    styleUrl: './contact-detail.component.scss'
})

export class ContactDetailComponent {

    contact: Contact = {image: '/assets/placeholder-image.png'} as Contact;
    errorMessage = '';
    

    constructor(private contactService: ContactService, private router: Router){}

    @Input()
    set contactId(id: string) {
        /*this.contactService.getContact(id).subscribe(response => {
            this.contact = response.data;
            // if (!response.data.image) {
            //     this.contact.image = '/assets/placehlolder-image.png';
            // }
        });*/
        this.contactService.getContact(id)
            .subscribe({
                next: response => this.contact = response.data,
                error: error => this.errorMessage = error
            })
    }

    deleteContact() {
        if (confirm(`Are you sure you want to remove the contact ${this.contact.firstName}`)) {
            this.contactService.deleteContact(this.contact.id).subscribe(() => this.router.navigate(['/']));
        }
    }
}