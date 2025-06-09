import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThoughtCardComponent } from './components/thought-card/thought-card.component';
import { ButtonComponent } from './compomemts/button/button.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ThoughtCardComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, ButtonComponent]
})
export class SharedModule { }
