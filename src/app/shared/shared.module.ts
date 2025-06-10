import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThoughtCardComponent } from './components/thought-card/thought-card.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonIconComponent } from './components/button-icon/button-icon.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ThoughtCardComponent,
    ButtonComponent,
    ButtonIconComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    ThoughtCardComponent,
  ],
})
export class SharedModule {}
