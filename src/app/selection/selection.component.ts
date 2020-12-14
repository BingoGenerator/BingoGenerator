import { Component, OnInit } from '@angular/core';
import { shuffle } from 'underscore';
import { Delimiters } from '../utilities/delimiters';
import { Board } from '../utilities/interfaces';

@Component({
    selector: 'app-selection',
    templateUrl: './selection.component.html',
    styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
    constructor() { }
    ngOnInit(): void {
        this.boards = [];
        this.numOfBoards = 1;
        this.rows = 3;
        this.columns = 3;
        this.doShuffle = false;
        this.defaultElement = "";
        this.rawString = "";
        this.stringDelimiter = Delimiters.ENTER;
        //this.elements = ["test", "we", "shall", "do", "it", "every", "day"];
        this.elements = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"];
        this.recreateContent();
    }

    obj = Object;
    delimiters = Delimiters;
    boards: Board<string>[];
    numOfBoards: number;
    rows: number;
    columns: number;
    doShuffle: boolean;
    defaultElement: string;
    elements: any[];
    rawString: string;
    stringDelimiter: string;

    private create2DArray<T>(arr: T[]): Board<T> {
        let content = [];
        while(arr.length > 0) {
            content.push(arr.splice(0, this.columns));
            if(!(content.length < this.rows)) return content;
        }
        while(content.length > 0 && content[content.length - 1].length < this.columns) {
            content[content.length - 1].push(this.defaultElement);
        }
        while(content.length > 0 && content.length < this.rows) {
            content.push(this.createEmptyRow(this.columns));
        }
        return content;
    }

    private createEmptyRow(columns): any[] {
        let list = [];
        for(let i = 0; i < columns; i++) {
            list.push(this.defaultElement);
        }
        return list;
    }

    private recreateContent() {
        this.boards = [];
        for(let i = 0; i < this.numOfBoards; i++) {
            let list = Object.assign([], this.elements);
            this.boards.push(this.create2DArray((this.doShuffle ? shuffle(list) : list)));
        }
    }

    public valueChanged(value, property: string) {
        console.log(value);
        this[property] = value;
        this.recreateContent();
    }
}