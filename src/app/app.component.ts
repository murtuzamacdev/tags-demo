import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ChatSmallBoxComponent } from './chat-small-box/chat-small-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tags = [];
  tagsStr: string = '';
  // chatBoxes =[];
  chatBoxes = [];
  boxId = new Date().getTime();
  leftPosition = 1;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    let localStorageTag = JSON.parse(localStorage.getItem('tags'));
    localStorageTag && (this.tags = localStorageTag);
  }

  onAddClick() {
    this.tags = [];
    let tags = this.tagsStr.replace(/[\n,;]/g, ',').split(",");
    tags.forEach(element => {
      let isBlank = /^\s*$/.test(element);
      !isBlank && !isNaN(+element) && this.tags.push(+element)
    });

    localStorage.setItem('tags', JSON.stringify(this.tags));
    this.tagsStr = '';
  }

  onEditTagClick(content) {
    this.tagsStr = this.tags.join(',');
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.onAddClick();
    }, (reason) => {
      this.tagsStr = '';
    });
  }

  onDeleteTag(index) {
    this.tags.splice(index, 1);
    localStorage.setItem('tags', JSON.stringify(this.tags));
  }

  addChatBox() {

    this.chatBoxes.length > 2 && this.chatBoxes.pop()
    this.leftPosition = (this.chatBoxes.length * 205);
    this.boxId = new Date().getTime();
    this.chatBoxes.push(this.boxId);

  }

  onClose(boxId) {
    this.chatBoxes.splice(this.chatBoxes.indexOf(boxId), 1);
  }

}
