import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoteEditComponent } from './components/note-edit/note-edit.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'archive', component: DashboardComponent },
  { path: 'edit/:id', component: NoteEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
