import { Component, Input } from "@angular/core";
import { Contact } from "../../models/models";

@Component({
    selector: "wt-contact-box",
    standalone: true,
    templateUrl: './contact-box.component.html',
    styleUrl:'./contact-box.component.scss'
})

export class ContactBox {
    @Input() contact:Contact = {} as Contact;
}