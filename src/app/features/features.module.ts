import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddThoughtPageComponent } from './add-thought-page/add-thought-page.component';
import { ThoughtWallPageComponent } from './thought-wall-page/thought-wall-page.component';
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AddThoughtPageComponent, ThoughtWallPageComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class FeaturesModule {}
