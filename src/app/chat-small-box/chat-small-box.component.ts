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
  tempPos: string;
  showBody = true;

  leftPositionStr: any;

  constructor() { }

  ngOnInit() {
    this.leftPositionStr = this.leftPosition + 'px';
    this.tempPos = this.leftPosition.toString();
  }

  ngOnDestroy() { }

  close() {
    let x = +this.leftPosition
    this.onClose.emit({
      a: this.chatBox,
      b:  this.tempPos
    });
  }

  minimize() {
    this.showBody = !this.showBody
  }

}
