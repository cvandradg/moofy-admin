import { MODULES } from '@moofy/shared';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-moofy-frontend-login',
  standalone: true,
  imports: [MODULES],
  templateUrl: './moofy-frontend-login.component.html',
  styleUrl: './moofy-frontend-login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoofyFrontendLoginComponent {

}
