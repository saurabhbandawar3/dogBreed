import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayDogListComponent } from './display-dog-list/display-dog-list.component';

const routes: Routes = [
  { path: "", redirectTo: "/dog", pathMatch: "full" },
  { path: "dog", component: DisplayDogListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
