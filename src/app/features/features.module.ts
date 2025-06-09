import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddThoughtPageComponent } from './add-thought-page/add-thought-page.component';
import { ThoughtWallPageComponent } from './thought-wall-page/thought-wall-page.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [AddThoughtPageComponent, ThoughtWallPageComponent],
  imports: [CommonModule, SharedModule],
})
export class FeaturesModule {}
