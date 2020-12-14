import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnChanges {

    constructor(private elemRef: ElementRef) { }

    ngOnChanges(changes: SimpleChanges): void {
        
    }

    ngOnInit(): void {

    }
    
    @Input() content: any[][];
}