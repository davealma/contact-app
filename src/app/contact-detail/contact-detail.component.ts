import { Component, Input } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { DividerModule } from 'primeng/divider';

@Component({
    selector: 'wt-contact-form',
    standalone: true,
    imports: [ButtonModule , DividerModule],
    templateUrl: './contact-detail.component.html'
})

export class ContactDetailComponent {

    

    @Input()
    set contactId(id: string) {
        console.log('c', id);
    }
}