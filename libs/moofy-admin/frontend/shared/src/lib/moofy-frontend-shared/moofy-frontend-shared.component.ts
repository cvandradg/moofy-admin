import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-moofy-frontend-shared',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moofy-frontend-shared.component.html',
  styleUrl: './moofy-frontend-shared.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoofyFrontendSharedComponent {}
