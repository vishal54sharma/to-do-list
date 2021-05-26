import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClosedTasksComponent } from './closed-tasks/closed-tasks.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { OpenTaskListingComponent } from './open-task-listing/open-task-listing.component';

const routes: Routes = [
  { path:'', redirectTo:'/open-task-listing',pathMatch:"full"},
  { path:'new-task-create', component:NewTaskComponent},
  { path:'open-task-listing', component:OpenTaskListingComponent},
  {path:"close-task", component:ClosedTasksComponent},
  { path:'**', component:ErrorPageComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingPath=[NewTaskComponent, ErrorPageComponent,OpenTaskListingComponent];