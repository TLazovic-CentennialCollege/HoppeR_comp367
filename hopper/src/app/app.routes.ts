import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '**', redirectTo: 'login' }, //sets all things route to login
  {
    path: 'ticketedit',
    component: TicketEditComponent,
  },
];

// Not going to use Modules(for routing)
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
