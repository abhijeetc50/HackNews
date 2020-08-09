import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengesComponent } from './challenges/challenges.component';

const routes: Routes = [
  { path: 'challenges', component: ChallengesComponent },
  { path: '',   redirectTo: '/challenges', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
