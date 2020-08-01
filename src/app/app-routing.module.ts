import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'teams/all',
    pathMatch: 'full'
  },
  {
    path: 'teams',
    children: [
      {
        path: ':type',
        component: WrapperComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
