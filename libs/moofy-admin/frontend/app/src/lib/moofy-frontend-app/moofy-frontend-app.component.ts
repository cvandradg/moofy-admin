import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-moofy-frontend-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moofy-frontend-app.component.html',
  styleUrl: './moofy-frontend-app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoofyFrontendAppComponent {}
