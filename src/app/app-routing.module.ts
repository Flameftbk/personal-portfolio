import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { SpanishComponent } from './spanish/spanish.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'spanisch', component: SpanishComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
