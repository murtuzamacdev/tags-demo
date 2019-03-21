import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-chat-small-box',
  templateUrl: './chat-small-box.component.html',
  styleUrls: ['./chat-small-box.component.scss']
})
export class ChatSmallBoxComponent implements OnInit {

  @Input() chatBox;
  @Input() leftPosition;
  @Output() onClose = new EventEmitter;
  showBody = true;

  leftPositionStr: any;

  constructor() { }

  ngOnInit() {
    this.leftPositionStr = this.leftPosition + 'px'
  }

  ngOnDestroy() { }

  close() {
    this.onClose.emit(this.chatBox);
  }

  minimize() {
    this.showBody = !this.showBody
  }

}
