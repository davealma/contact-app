import { Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

export const routes: Routes = [
    { path: '', component: ContactHomeComponent },
    { path: 'contact', component: ContactFormComponent},
    { path: 'contact/:contactId', component: ContactDetailComponent },
    { path: 'contact/:contactId/edit', component: ContactFormComponent },
];
