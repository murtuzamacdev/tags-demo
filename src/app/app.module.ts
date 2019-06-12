import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChatSmallBoxComponent } from './chat-small-box/chat-small-box.component';
import { PersonalizePipe } from './personalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChatSmallBoxComponent,
    PersonalizePipe
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
