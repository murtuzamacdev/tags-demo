import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tags = [];
  tagsStr: string = '';

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

}
