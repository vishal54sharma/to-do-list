import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,RoutingPath } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignnewtaskService } from './assignnewtask.service';
import { ClosedTasksComponent } from './closed-tasks/closed-tasks.component';




@NgModule({
  declarations: [
    AppComponent,
    RoutingPath,
    ClosedTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AssignnewtaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
