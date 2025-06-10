import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss'],
})
export class ButtonIconComponent implements OnInit {
  @Output() onClick = new EventEmitter<void>();
  @Input() iconPath = '/assets/icons/edit.svg';
  @Input() alt = '';

  constructor() {}

  ngOnInit(): void {}
  emitClick() {
    this.onClick.emit();
  }
}
