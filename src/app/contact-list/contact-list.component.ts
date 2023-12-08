import { Component } from "@angular/core";
import { ContactBox } from "../contact-box/contact-box.component";
import { ButtonModule } from "primeng/button";

@Component({
    selector: 'wt-contact-list',
    standalone: true,
    imports:[ContactBox, ButtonModule],
    templateUrl: './contact-list.component.html',
    styleUrl: './contact-list.component.scss'
})

export class ContactListComponent {

}