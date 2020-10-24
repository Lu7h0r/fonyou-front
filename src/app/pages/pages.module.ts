import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Mis modulos
import { SharedModule } from '../shared/shared.module';
// Mis Views
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [DashboardComponent, PagesComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [DashboardComponent, PagesComponent],
})
export class PagesModule {}
