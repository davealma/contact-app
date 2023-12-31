import { Component, Input } from "@angular/core";
import { Contact } from "../../models/models";
import { RouterLink } from "@angular/router";
import { CommonModule, NgOptimizedImage } from "@angular/common";

@Component({
    selector: "wt-contact-box",
    standalone: true,
    imports: [RouterLink, NgOptimizedImage, CommonModule],
    templateUrl: './contact-box.component.html',
    styleUrl:'./contact-box.component.scss'
})

export class ContactBoxComponent {
    @Input() contact:Contact = {} as Contact;
}