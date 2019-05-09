import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tags = [];
  tagsStr: string = '';
  rightPositionArr = [1, 205, 410, 615, 820]
  // chatBoxes =[];
  chatBoxes = [];
  boxId = new Date().getTime();
  lastDeletedPostion: any = 1000000;
  leftPosition = 1;
  greeting = 'Hello ___, have a nice day!'
  showPDF: boolean = false;
  links = []

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {


    let localStorageTag = JSON.parse(localStorage.getItem('tags'));
    localStorageTag && (this.tags = localStorageTag);

    // var ogs = require('open-graph-scraper');
    // var options = { 'url': 'http://ogp.me/' };
    // ogs(options, function (error, results) {
    //   console.log('error:', error); // This is returns true or false. True if there was a error. The error it self is inside the results object.
    //   console.log('results:', results);
    // });
  }

  getMeta(metaName) {
    const metas = document.getElementsByTagName('meta');
    console.log(metas)
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('name') === metaName) {
        return metas[i].getAttribute('content');
      }
    }

    return '';
  }

  onAddClick() {
    console.log()
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

    this.chatBoxes.length > 4 && this.chatBoxes.pop()
    let calculatedPos = this.chatBoxes.length * 205
    this.leftPosition = calculatedPos < this.lastDeletedPostion ? calculatedPos : this.lastDeletedPostion;
    this.boxId = new Date().getTime();
    this.chatBoxes.push(this.boxId);

  }

  onClose(data) {
    console.log(data.b)
    this.lastDeletedPostion = parseInt(data.b)
    this.chatBoxes.splice(this.chatBoxes.indexOf(data.a), 1);
  }

  onPernolize() {
    this.greeting = this.greeting + " ___";
  }

  setPersonalize() {
    console.log(this.greeting);
    let newGreeting = this.greeting.replace(new RegExp('___', 'g'), 'Murtuza');
    console.log(newGreeting)
  }

  generatePDF() {
    this.showPDF = true;
    console.log(this.showPDF)
    setTimeout(() => {
      var data = document.getElementById('contentToConvert');
      html2canvas(data).then(canvas => {
        // Few necessary setting options 
        var imgWidth = 208;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;

        const contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF 
        var position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdf.save('MYPdf.pdf'); // Generated PDF  
        this.showPDF = false;
      });
    }, 1000)

  }

  insertAtCaret(areaId, text) {
    var txtarea: any = document.getElementById(areaId);
    if (!txtarea) {
      return;
    }

    var scrollPos = txtarea.scrollTop;
    var strPos = 0;
    var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ?
      "ff" : (document['selection'] ? "ie" : false));
    if (br == "ie") {
      txtarea.focus();
      var range = document['selection'].createRange();
      range.moveStart('character', -txtarea.value.length);
      strPos = range.text.length;
    } else if (br == "ff") {
      strPos = txtarea.selectionStart;
    }

    var front = (txtarea.value).substring(0, strPos);
    var back = (txtarea.value).substring(strPos, txtarea.value.length);
    this.greeting = front + text + back;
    // strPos = strPos + text.length;
    if (br == "ie") {
      txtarea.focus();
      var ieRange = document['selection'].createRange();
      ieRange.moveStart('character', -txtarea.value.length);
      ieRange.moveStart('character', strPos);
      ieRange.moveEnd('character', 0);
      ieRange.select();
    } else if (br == "ff") {
      txtarea.selectionStart = 0;
      txtarea.selectionEnd = 5;
      // txtarea.focus();
    }

    txtarea.scrollTop = scrollPos;
  }

}
