(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<video width=\"320\" height=\"240\" controls>\n\n</video> \n\n<button (click)=\"startRecording()\">Start Recording</button>\n<button (click)=\"stopRecording()\">Stop Recording</button>\n<button (click)=\"playVideo()\">Play Recording</button>\n<button (click)=\"uploadRecording()\">Upload Recording</button>\n\n<meta property=\"video\" content=\"https://stackoverflow.com/questions/7524585/how-do-i-get-the-information-from-a-meta-tag-with-javascript\" />\n<input type=\"button\" value=\"CPTURE\" (click)=\"generatePDF()\" />\n<div *ngIf=\"showPDF\">\n  <table id=\"contentToConvert\">\n    <tr>\n      <th>Column1</th>\n      <th>Column2</th>\n      <th>Column3</th>\n    </tr>\n    <tr>\n      <td>Row 1</td>\n      <td>Row 1</td>\n      <td>Row 1</td>\n    </tr>\n    <tr>\n      <td>Row 2</td>\n      <td>Row 2</td>\n      <td>Row 2</td>\n    </tr>\n    <tr>\n      <td>Row 3</td>\n      <td>Row 3</td>\n      <td>Row 3</td>\n    </tr>\n    <tr>\n      <td>Row 4</td>\n      <td>Row 4</td>\n      <td>Row 4</td>\n    </tr>\n  </table>\n</div>\n<h1 *ngIf=\"showPDF\">{{greeting | personalize: 'Murtuza'}}</h1>\n\n<input id=\"textareaid111\" [ngModel]=\"greeting | personalize: 'Murtuza'\" (ngModelChange)=\"onInputChange($event)\"  style=\"width: 500px;\">\n<button (click)=\"insertAtCaret('textareaid111', '___')\" >Persnalize</button>\n<button (click)=\"setPersonalize()\">Set Persnalize </button>\n\n\n<div class=\"chat-small-box-cntr\">\n  <app-chat-small-box *ngFor=\"let chatBox of chatBoxes\" [chatBox]=\"chatBox\" [leftPosition]=\"leftPosition\" (onClose)=\"onClose($event)\"></app-chat-small-box>\n</div>\n\n\n<button (click)=\"addChatBox()\" type=\"button\" class=\"close\" aria-label=\"Add Chat box\">\n  <span aria-hidden=\"true\">&times;</span>\n</button>\n<div class=\"main-ctnr\">\n  Type tags here using comma, semicolor and line break as delimeters:\n  <br>\n  <textarea [(ngModel)]=\"tagsStr\" rows=\"7\" cols=\"60\" type=\"text\" class=\"md-textarea\"></textarea>\n  <br>\n  <button (click)=\"onAddClick()\" type=\"button\" class=\"btn btn-primary\">Add tags</button>\n  <div class=\"tags-ctnr\">\n    <ul class=\"tag-ul-list\">\n      <li *ngFor=\"let tag of tags; let i = index\" class=\"tag-list-item\" [ngStyle]=\"tag >= 0?{'background-color': '#ff9999'} : {'background-color': '#b2b2ff'}\">\n        {{tag}}\n        <button (click)=\"onDeleteTag(i)\" type=\"button\" class=\"close\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </li>\n    </ul>\n  </div>\n  <br>\n  <button (click)=\"onEditTagClick(content)\" type=\"button\" class=\"btn btn-primary\">Edit tags</button>\n</div>\n\n\n<!-- Edit tags dialog -->\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Edit Tags</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <br>\n    <textarea [(ngModel)]=\"tagsStr\" rows=\"7\" cols=\"60\" type=\"text\" class=\"md-textarea\"></textarea>\n    <br>\n    <div class=\"tags-ctnr\">\n      <ul class=\"tag-ul-list\">\n        <li *ngFor=\"let tag of tags; let i = index\" class=\"tag-list-item\" [ngStyle]=\"tag >= 0?{'background-color': '#ff9999'} : {'background-color': '#b2b2ff'}\">\n          {{tag}}\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-ctnr {\n  margin-top: 20px;\n  margin-left: 40px; }\n\n.tags-ctnr {\n  height: 150px;\n  width: 440px;\n  border: 1px solid grey;\n  border-radius: 5px;\n  background: yellow;\n  margin-top: 20px;\n  overflow-y: scroll; }\n\n.tag-ul-list {\n  list-style: none;\n  padding: 0; }\n\n.tag-list-item {\n  min-width: 50px;\n  background: yellow;\n  border-radius: 5px;\n  text-align: center;\n  margin: 2px;\n  float: left;\n  padding: 3px 6px; }\n\n.close {\n  font-size: 1.3rem;\n  padding-left: 3px; }\n\nbutton:focus {\n  outline: none; }\n\n.chat-small-box-cntr {\n  border: 1px solid blue;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  display: flex; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_audio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/audio.service */ "./src/app/services/audio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var AppComponent = /** @class */ (function () {
    function AppComponent(modalService, http, audioService) {
        this.modalService = modalService;
        this.http = http;
        this.audioService = audioService;
        this.tags = [];
        this.tagsStr = '';
        this.rightPositionArr = [1, 205, 410, 615, 820];
        // chatBoxes =[];
        this.chatBoxes = [];
        this.boxId = new Date().getTime();
        this.lastDeletedPostion = 1000000;
        this.leftPosition = 1;
        this.greeting = 'Hello ___, have a nice day!';
        this.showPDF = false;
        this.links = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.http.get('http://va1ihgdeet02.ihgext.global:8080/ics/prefs/v1/prefsdata?prefKey=new_key_4').subscribe(function (result) {
            console.log(result['prefVal']);
            console.log(JSON.parse(result['prefVal']));
        });
        // fetch('http://va1ihgdeet02.ihgext.global:8080/ics/prefs/v1/prefsdata?prefKey=new_key').then((resp) => resp.json()) // Transform the data into json
        // .then(function(data) {
        //   console.log('fetch ',JSON.stringify(data))
        //   console.log(JSON.parse(data.prefVal))
        //   // Create and append the li's to the ul
        //   })
        var localStorageTag = JSON.parse(localStorage.getItem('tags'));
        localStorageTag && (this.tags = localStorageTag);
        // var ogs = require('open-graph-scraper');
        // var options = { 'url': 'http://ogp.me/' };
        // ogs(options, function (error, results) {
        //   console.log('error:', error); // This is returns true or false. True if there was a error. The error it self is inside the results object.
        //   console.log('results:', results);
        // });
    };
    AppComponent.prototype.getMeta = function (metaName) {
        var metas = document.getElementsByTagName('meta');
        console.log(metas);
        for (var i = 0; i < metas.length; i++) {
            if (metas[i].getAttribute('name') === metaName) {
                return metas[i].getAttribute('content');
            }
        }
        return '';
    };
    AppComponent.prototype.onAddClick = function () {
        var _this = this;
        console.log();
        this.tags = [];
        var tags = this.tagsStr.replace(/[\n,;]/g, ',').split(",");
        tags.forEach(function (element) {
            var isBlank = /^\s*$/.test(element);
            !isBlank && !isNaN(+element) && _this.tags.push(+element);
        });
        localStorage.setItem('tags', JSON.stringify(this.tags));
        this.tagsStr = '';
    };
    AppComponent.prototype.onEditTagClick = function (content) {
        var _this = this;
        this.tagsStr = this.tags.join(',');
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.onAddClick();
        }, function (reason) {
            _this.tagsStr = '';
        });
    };
    AppComponent.prototype.onDeleteTag = function (index) {
        this.tags.splice(index, 1);
        localStorage.setItem('tags', JSON.stringify(this.tags));
    };
    AppComponent.prototype.addChatBox = function () {
        this.chatBoxes.length > 4 && this.chatBoxes.pop();
        var calculatedPos = this.chatBoxes.length * 205;
        this.leftPosition = calculatedPos < this.lastDeletedPostion ? calculatedPos : this.lastDeletedPostion;
        this.boxId = new Date().getTime();
        this.chatBoxes.push(this.boxId);
    };
    AppComponent.prototype.onClose = function (data) {
        console.log(data.b);
        this.lastDeletedPostion = parseInt(data.b);
        this.chatBoxes.splice(this.chatBoxes.indexOf(data.a), 1);
    };
    AppComponent.prototype.onPernolize = function () {
        this.greeting = this.greeting + " ___";
    };
    AppComponent.prototype.setPersonalize = function () {
        console.log(this.greeting);
        // let newGreeting = this.greeting.replace(new RegExp('___', 'g'), 'Murtuza');
        // console.log(newGreeting)
    };
    AppComponent.prototype.generatePDF = function () {
        var _this = this;
        this.showPDF = true;
        console.log(this.showPDF);
        setTimeout(function () {
            var data = document.getElementById('contentToConvert');
            html2canvas__WEBPACK_IMPORTED_MODULE_3___default()(data).then(function (canvas) {
                // Few necessary setting options 
                var imgWidth = 208;
                var pageHeight = 295;
                var imgHeight = canvas.height * imgWidth / canvas.width;
                var heightLeft = imgHeight;
                var contentDataURL = canvas.toDataURL('image/png');
                var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__('p', 'mm', 'a4'); // A4 size page of PDF 
                var position = 0;
                pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
                pdf.save('MYPdf.pdf'); // Generated PDF  
                _this.showPDF = false;
            });
        }, 1000);
    };
    AppComponent.prototype.insertAtCaret = function (areaId, text) {
        var txtarea = document.getElementById(areaId);
        txtarea.focus();
        if (!txtarea) {
            return;
        }
        var scrollPos = txtarea.scrollTop;
        var strPos = 0;
        var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ?
            "ff" : (document['selection'] ? "ie" : false));
        if (br == "ie") {
            var range = document['selection'].createRange();
            range.moveStart('character', -txtarea.value.length);
            strPos = range.text.length;
        }
        else if (br == "ff") {
            strPos = txtarea.selectionStart;
        }
        var front = (txtarea.value).substring(0, strPos);
        var back = (txtarea.value).substring(strPos, txtarea.value.length);
        this.greeting = (front + text + back).replace(new RegExp('Murtuza', 'g'), '___');
        strPos = strPos + text.length;
        var cursorPos = (front + 'Murtuza').length;
        setTimeout(function () {
            if (br == "ie") {
                txtarea.focus();
                var ieRange = document['selection'].createRange();
                ieRange.moveStart('character', -txtarea.value.length);
                ieRange.moveStart('character', strPos);
                ieRange.moveEnd('character', 0);
                ieRange.select();
            }
            else if (br == "ff") {
                console.log(cursorPos);
                txtarea.setSelectionRange(cursorPos, cursorPos);
                // txtarea.focus();
            }
        }, 100);
        txtarea.scrollTop = scrollPos;
    };
    AppComponent.prototype.seeEvent = function (event) {
        console.log('event', event);
    };
    AppComponent.prototype.onInputChange = function (evt) {
        this.greeting = evt.replace(new RegExp('Murtuza', 'g'), '___');
        // this.greeting = evt;
    };
    AppComponent.prototype.startRecording = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // this.recorder = await this.audioService.recordAudio();
                this.recorder.start();
                return [2 /*return*/];
            });
        });
    };
    AppComponent.prototype.stopRecording = function () {
        return __awaiter(this, void 0, void 0, function () {
            var audio;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.recorder.stop()];
                    case 1:
                        audio = _a.sent();
                        this.outputAudio = audio;
                        console.log(audio);
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.playRecording = function () {
        this.outputAudio.play();
    };
    AppComponent.prototype.playVideo = function () {
        var video = document.querySelector('video');
        var videoUrl = window.URL.createObjectURL(this.outputAudio.audioBlob); // blob.data gives actual data
        video.src = videoUrl;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            src_app_services_audio_service__WEBPACK_IMPORTED_MODULE_5__["AudioService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_small_box_chat_small_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat-small-box/chat-small-box.component */ "./src/app/chat-small-box/chat-small-box.component.ts");
/* harmony import */ var _personalize_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./personalize.pipe */ "./src/app/personalize.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _chat_small_box_chat_small_box_component__WEBPACK_IMPORTED_MODULE_7__["ChatSmallBoxComponent"],
                _personalize_pipe__WEBPACK_IMPORTED_MODULE_8__["PersonalizePipe"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat-small-box/chat-small-box.component.html":
/*!**************************************************************!*\
  !*** ./src/app/chat-small-box/chat-small-box.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-box-main-cntr\">\n  <div class=\"chat-box-main\">\n    <div (click)=\"minimize()\" style=\"height: 40px;width: 100%;background: blue\">\n      <button (click)=\"close()\" type=\"button\" class=\"close\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div *ngIf=\"showBody\" style=\"height: 300px;width: 100%\">\n      chat-small-box works! {{chatBox}}\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/chat-small-box/chat-small-box.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/chat-small-box/chat-small-box.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-box-main {\n  background: gray;\n  color: white;\n  width: 200px; }\n\n.chat-box-main-cntr {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/chat-small-box/chat-small-box.component.ts":
/*!************************************************************!*\
  !*** ./src/app/chat-small-box/chat-small-box.component.ts ***!
  \************************************************************/
/*! exports provided: ChatSmallBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSmallBoxComponent", function() { return ChatSmallBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { EventEmitter } from 'events';
var ChatSmallBoxComponent = /** @class */ (function () {
    function ChatSmallBoxComponent() {
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.showBody = true;
    }
    ChatSmallBoxComponent.prototype.ngOnInit = function () {
        this.leftPositionStr = this.leftPosition + 'px';
        this.tempPos = this.leftPosition.toString();
    };
    ChatSmallBoxComponent.prototype.ngOnDestroy = function () { };
    ChatSmallBoxComponent.prototype.close = function () {
        var x = +this.leftPosition;
        this.onClose.emit({
            a: this.chatBox,
            b: this.tempPos
        });
    };
    ChatSmallBoxComponent.prototype.minimize = function () {
        this.showBody = !this.showBody;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChatSmallBoxComponent.prototype, "chatBox", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChatSmallBoxComponent.prototype, "leftPosition", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChatSmallBoxComponent.prototype, "onClose", void 0);
    ChatSmallBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-small-box',
            template: __webpack_require__(/*! ./chat-small-box.component.html */ "./src/app/chat-small-box/chat-small-box.component.html"),
            styles: [__webpack_require__(/*! ./chat-small-box.component.scss */ "./src/app/chat-small-box/chat-small-box.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatSmallBoxComponent);
    return ChatSmallBoxComponent;
}());



/***/ }),

/***/ "./src/app/personalize.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/personalize.pipe.ts ***!
  \*************************************/
/*! exports provided: PersonalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalizePipe", function() { return PersonalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PersonalizePipe = /** @class */ (function () {
    function PersonalizePipe() {
    }
    PersonalizePipe.prototype.transform = function (value, args) {
        // console.log(value, args)
        return value.replace(new RegExp('___', 'g'), args);
    };
    PersonalizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'personalize'
        })
    ], PersonalizePipe);
    return PersonalizePipe;
}());



/***/ }),

/***/ "./src/app/services/audio.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/audio.service.ts ***!
  \*******************************************/
/*! exports provided: AudioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioService", function() { return AudioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/// <reference types="@types/dom-mediacapture-record" />
var AudioService = /** @class */ (function () {
    function AudioService() {
    }
    AudioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], AudioService);
    return AudioService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/murtuzachakkiwala/STUFF/work/tags-demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map