import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() class = '';
  @Output() onClick = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  emitClick() {
    this.onClick.emit();
  }
}
