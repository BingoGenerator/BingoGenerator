import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectionComponent } from './selection/selection.component';
import { BoardComponent } from './board/board.component';
import { DetailBoardComponent } from './detail-board/detail-board.component';

@NgModule({
    declarations: [
        AppComponent,
        SelectionComponent,
        BoardComponent,
        DetailBoardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
