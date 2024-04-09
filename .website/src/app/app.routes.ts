import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MaterialsComponent } from './materials/materials.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'materials',
    component: MaterialsComponent,
  },
];
