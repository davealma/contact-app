import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from 'primeng/inputtext';
import { ContactService } from "../../services/contact.service";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
    selector: 'wt-search-bar',
    imports:[InputTextModule, FormsModule],
    standalone: true,
    templateUrl: './search-bar.html',
    styleUrl:'./search-bar.component.scss'
})

export class SearchBarComponent {

    search = ""
    constructor(private contactService: ContactService, private router: Router, private activetedRoute: ActivatedRoute) {}
    
    submit() {
        const url = this.router.createUrlTree([], {relativeTo: this.activetedRoute, queryParams: {search: this.search}}).toString();
        this.router.navigateByUrl(url);
    }
}