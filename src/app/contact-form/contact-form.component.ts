import { Component, Input } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { PanelModule } from 'primeng/panel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";
import { Contact, ContactFormData } from "../../models/models";
import { ContactService } from "../../services/contact.service";
import { Router, RouterLink } from "@angular/router";
import { FileUploadModule } from 'primeng/fileupload';
import { MessageModule } from 'primeng/message';
import { CommonModule } from "@angular/common";
interface UploadEvent {
    files: File[];
}
@Component({
    selector: 'wt-contact-form',
    standalone: true,
    imports: [
        CommonModule,
        PanelModule, 
        InputTextModule, 
        InputTextareaModule,
        ButtonModule,
        FormsModule,
        RouterLink,
        FileUploadModule,
        MessageModule
    ],
    templateUrl: './contact-form.component.html',
    styleUrl: './contact-form.component.scss'
})

export class ContactFormComponent {

    contact: Contact = {firstName:'', lastName: '', image: '', bio: '', phone: '', id: ''}
    isEdit = false;
    errorMessage = ""
    imageFile?: File
    

    constructor(private contactService: ContactService, private router: Router) {}

    @Input()
    set contactId(id: string) {
        this.isEdit = !!id;
        if (id) {
            this.contactService.getContact(id).subscribe(response => this.contact = response.data);
        }
    }

    onUpload(event: UploadEvent) {
        this.imageFile = event.files[0];
    }

    submit() {
        if (this.isEdit) {
            this.contactService.updateContact(this.contact, this.imageFile).subscribe(() => this.router.navigate(['/']));
            return;   
        }
        this.contactService.createContact(this.contact, this.imageFile)
        .subscribe({
            next:() => this.router.navigate(['/']),
            error: error => this.errorMessage = error 
        })
    }
}