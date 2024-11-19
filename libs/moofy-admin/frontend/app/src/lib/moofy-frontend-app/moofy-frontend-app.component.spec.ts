import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoofyFrontendAppComponent } from './moofy-frontend-app.component';

describe('MoofyFrontendAppComponent', () => {
  let component: MoofyFrontendAppComponent;
  let fixture: ComponentFixture<MoofyFrontendAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoofyFrontendAppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoofyFrontendAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
