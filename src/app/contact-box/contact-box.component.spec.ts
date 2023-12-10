import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ContactBoxComponent } from "./contact-box.component";
import { RouterLink } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { By } from "@angular/platform-browser";

describe('Contact Box Component', () => {
    let contactBoxComponent: ContactBoxComponent;
    let fixture: ComponentFixture<ContactBoxComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ContactBoxComponent, RouterLink, RouterTestingModule]
        }).compileComponents();

        fixture = TestBed.createComponent(ContactBoxComponent);
        contactBoxComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('create component', () => {
        expect(contactBoxComponent).toBeTruthy();
    });

    it('renders correct name', () => {
        contactBoxComponent.contact = {id: '1', firstName: 'David', lastName: 'Almanza', bio: '', image: '', phone: ''};
        fixture.detectChanges();
        const nameContainer = fixture.debugElement.query(
            By.css('.image-name')
        )
        expect(nameContainer.nativeElement.textContent).toBe('David Almanza');
    });
});