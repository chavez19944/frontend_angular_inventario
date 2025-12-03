import { Routes } from '@angular/router';
import { Inicio } from './web/inicio/inicio';
import { Nosotros } from './web/nosotros/nosotros';
import { Galeria } from './web/galeria/galeria';
import { Profile } from './admin/profile/profile';
import { authRoutes } from './auth/auth-routing-module';

export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'nosotros', component: Nosotros },
    { path: 'galeria', component: Galeria },

    { path: 'auth', children: authRoutes },

    { path: 'admin/perfil', component: Profile }
];
