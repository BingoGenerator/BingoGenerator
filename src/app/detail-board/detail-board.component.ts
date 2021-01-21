import { Component, Input, OnInit } from '@angular/core';
import { Board } from '../utilities/interfaces';

@Component({
    selector: 'app-detail-board',
    templateUrl: './detail-board.component.html',
    styleUrls: ['./detail-board.component.scss']
})
export class DetailBoardComponent implements OnInit {
    constructor() { }
    ngOnInit(): void {
        this.rowsIndexs = Array(this.content.length).fill(0).map((x,i)=>i);
        this.columnsIndexs = Array(this.content[0].length).fill(0).map((x,i)=>i);
    }

    rowsIndexs: number[];
    columnsIndexs: number[];
    @Input() content: Board<string>[];
    @Input() tileWidth: number;
    @Input() tileHeight: number;
    @Input() tileBorderWidth: number;
    @Input() borderColor: string;
}