import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoofyFrontendSharedComponent } from './moofy-frontend-shared.component';

describe('MoofyFrontendSharedComponent', () => {
  let component: MoofyFrontendSharedComponent;
  let fixture: ComponentFixture<MoofyFrontendSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoofyFrontendSharedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoofyFrontendSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
