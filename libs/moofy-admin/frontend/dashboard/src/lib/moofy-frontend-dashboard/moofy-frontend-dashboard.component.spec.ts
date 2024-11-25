import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoofyFrontendDashboardComponent } from './moofy-frontend-dashboard.component';

describe('MoofyFrontendDashboardComponent', () => {
  let component: MoofyFrontendDashboardComponent;
  let fixture: ComponentFixture<MoofyFrontendDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoofyFrontendDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoofyFrontendDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
