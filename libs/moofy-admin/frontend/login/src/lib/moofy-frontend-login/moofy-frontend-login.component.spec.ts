import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoofyFrontendLoginComponent } from './moofy-frontend-login.component';

describe('MoofyFrontendLoginComponent', () => {
  let component: MoofyFrontendLoginComponent;
  let fixture: ComponentFixture<MoofyFrontendLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoofyFrontendLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoofyFrontendLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
