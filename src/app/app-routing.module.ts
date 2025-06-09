import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import path from 'path';
import { ThoughtWallPageComponent } from './features/thought-wall-page/thought-wall-page.component';
import { AddThoughtPageComponent } from './features/add-thought-page/add-thought-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: ThoughtWallPageComponent },
      { path: 'add-thought', component: AddThoughtPageComponent },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
