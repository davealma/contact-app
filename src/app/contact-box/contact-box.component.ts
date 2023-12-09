import { Component, Input } from "@angular/core";
import { Contact } from "../../models/models";
import { RouterLink } from "@angular/router";

@Component({
    selector: "wt-contact-box",
    standalone: true,
    imports: [RouterLink],
    templateUrl: './contact-box.component.html',
    styleUrl:'./contact-box.component.scss'
})

export class ContactBox {
    @Input() contact:Contact = {} as Contact;
}