import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from 'primeng/inputtext';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";


@Component({
    selector: 'wt-search-bar',
    imports:[InputTextModule, FormsModule],
    standalone: true,
    templateUrl: './search-bar.html',
    styleUrl:'./search-bar.component.scss'
})

export class SearchBarComponent {

    search = ""
    constructor(private router: Router, private activetedRoute: ActivatedRoute) {
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd)
        ).subscribe((event) => {
            const searchParams = new URLSearchParams(window.location.search);
            const search = searchParams.get('search');
            if (search) {
                this.search = search
            }
        })
    }
    
    submit() {
        const url = this.router.createUrlTree([], {relativeTo: this.activetedRoute, queryParams: {search: this.search}}).toString();
        this.router.navigateByUrl(url);
    }
}