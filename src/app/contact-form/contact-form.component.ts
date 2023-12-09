import { Component } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { PanelModule } from 'primeng/panel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";
import { Contact, ContactFormData } from "../../models/models";
import { ContactService } from "../../services/contact.service";
import { Router } from "@angular/router";
@Component({
    selector: 'wt-contact-form',
    standalone: true,
    imports: [PanelModule, InputTextModule, InputTextareaModule, ButtonModule , FormsModule],
    templateUrl: './contact-form.component.html'
})

export class ContactFormComponent {

    contact: ContactFormData = {firstName:'', lastName: '', image: '', bio: '', phone: ''}

    constructor(private contactService: ContactService, private router: Router) {}

    create() {
        this.contactService.createContact(this.contact)
        .subscribe({
            next:() => this.router.navigate(['/'])
        })
    }
}