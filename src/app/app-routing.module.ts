import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
// import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

// import { ExpenseGuard } from './guards/expense.guard';

const routes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'logout', component: LogoutComponent },
  //  { path: 'expenses', component: ExpenseEntryListComponent, canActivate: [ExpenseGuard]},
  //  { path: 'expenses/detail/:id', component: ExpenseEntryComponent, canActivate: [ExpenseGuard]},
   { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }