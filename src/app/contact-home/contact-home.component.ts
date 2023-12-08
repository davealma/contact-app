import { Component } from "@angular/core";
import { SearchBarComponent } from "../search-contact/search-bar.component";
import { RouterLink } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { ContactListComponent } from "../contact-list/contact-list.component";

@Component({
    selector: 'wt-contact-home',
    imports: [SearchBarComponent, ContactHomeComponent, RouterLink, ButtonModule, ContactListComponent],
    standalone: true,
    template: `
        <wt-search-bar></wt-search-bar>
        <a routerLink="/contact"><p-button icon="pi pi-plus" icon-pos="right" label="Add User"></p-button></a>
        <wt-contact-list></wt-contact-list>    
    `
})

export class ContactHomeComponent {};