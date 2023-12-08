import { Component } from "@angular/core";
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'wt-search-bar',
    imports:[InputTextModule],
    standalone: true,
    templateUrl: './search-bar.html',
    styleUrl:'./search-bar.component.scss'
})

export class SearchBarComponent {

}