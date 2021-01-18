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
    }

    @Input() content: Board<string>[];
    @Input() tileWidth: number;
    @Input() tileHeight: number;
    @Input() tileBorderWidth: number;
    @Input() borderColor: string;
}