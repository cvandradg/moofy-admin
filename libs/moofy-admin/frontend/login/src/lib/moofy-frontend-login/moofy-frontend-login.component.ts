import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-moofy-frontend-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moofy-frontend-login.component.html',
  styleUrl: './moofy-frontend-login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoofyFrontendLoginComponent {}
