import { Component, Input, OnInit } from '@angular/core';
import { ThoughtCardSize, ThoughtCardVariant } from '../../types/ui.types';

@Component({
  selector: 'app-thought-card',
  templateUrl: './thought-card.component.html',
  styleUrls: ['./thought-card.component.scss'],
})
export class ThoughtCardComponent implements OnInit {
  @Input() variant: ThoughtCardVariant = 'dark-blue';
  @Input() size: ThoughtCardSize = '';
  imgQuote!: string;
  constructor() {}

  ngOnInit(): void {
    this.imgQuote = this.getQuoteIconPath();
  }

  getClasses() {
    const block = 'thought-card';
    const classes = [`${block}--${this.variant}`];
    if (this.size) {
      classes.push(`${block}--${this.size}`);
    }
    return classes;
  }
  getQuoteIconPath() {
    return `/assets/icons/icon-quote-${this.variant}.svg`;
  }
}
