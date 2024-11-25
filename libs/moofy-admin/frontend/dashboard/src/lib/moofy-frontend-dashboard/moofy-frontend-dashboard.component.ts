import { AsyncPipe, CommonModule } from '@angular/common';
import { ThemeManager } from '@moofy/shared';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ChangeDetectionStrategy, inject, Component } from '@angular/core';

@Component({
  selector: 'lib-moofy-frontend-dashboard',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    AsyncPipe,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './moofy-frontend-dashboard.component.html',
  styleUrl: './moofy-frontend-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoofyFrontendDashboardComponent {
  title = 'moofy-admin';
  themeManager = inject(ThemeManager);
  isDark$ = this.themeManager.isDark$;

  changeTheme(theme: string) {
    this.themeManager.changeTheme(theme);
  }
}