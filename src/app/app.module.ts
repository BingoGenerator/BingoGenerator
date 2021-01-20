import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ColorChromeModule } from 'ngx-color/chrome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectionComponent } from './selection/selection.component';
import { DetailBoardComponent } from './detail-board/detail-board.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        SelectionComponent,
        DetailBoardComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ColorChromeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
