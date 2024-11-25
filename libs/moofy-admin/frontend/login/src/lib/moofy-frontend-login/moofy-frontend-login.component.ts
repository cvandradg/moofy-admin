import { Fontawesome, MODULES } from '@moofy/shared';
import {
  ChangeDetectionStrategy,
  inject,
  Component,
  signal,
} from '@angular/core';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-moofy-frontend-login',
  standalone: true,
  imports: [MODULES, Fontawesome],
  templateUrl: './moofy-frontend-login.component.html',
  styleUrl: './moofy-frontend-login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoofyFrontendLoginComponent {
  title = 'moofy-admin';

  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly password = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  errorMessage = signal('');

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  formBuilder = inject(FormBuilder);
  loginInputForm = this.formBuilder.group({
    user: [
      '',
      [
        Validators.required,
        Validators.min(5),
        Validators.max(30),
        Validators.email,
      ],
    ],
    pass: ['', [Validators.required, Validators.min(5), Validators.max(30)]],
  });

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
