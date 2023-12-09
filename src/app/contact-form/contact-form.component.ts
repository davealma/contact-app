import { Component, Input } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { PanelModule } from 'primeng/panel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";
import { Contact, ContactFormData } from "../../models/models";
import { ContactService } from "../../services/contact.service";
import { Router, RouterLink } from "@angular/router";
@Component({
    selector: 'wt-contact-form',
    standalone: true,
    imports: [PanelModule, InputTextModule, InputTextareaModule, ButtonModule , FormsModule, RouterLink],
    templateUrl: './contact-form.component.html'
})

export class ContactFormComponent {

    contact: Contact = {firstName:'', lastName: '', image: '', bio: '', phone: '', id: ''}
    isEdit = false;

    constructor(private contactService: ContactService, private router: Router) {}

    @Input()
    set contactId(id: string) {
        this.isEdit = !!id;
        if (id) {
            this.contactService.getContact(id).subscribe(response => this.contact = response.data);
        }
    }

    submit() {
        if (this.isEdit) {
            console.log('edit only');
            this.contactService.updateContact(this.contact).subscribe(() => this.router.navigate(['/']));
            return;   
        }
        this.contactService.createContact(this.contact)
        .subscribe({
            next:() => this.router.navigate(['/'])
        })
    }
}