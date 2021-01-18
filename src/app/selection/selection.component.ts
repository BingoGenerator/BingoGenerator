import { Component, OnInit } from '@angular/core';
import { shuffle } from 'underscore';
import { Delimiters, Delimiter } from '../utilities/delimiters';
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
        this.defaultElement = " ";
        this.cellWidth = 80;
        this.cellHeight = 50;
        this.cellBorderWidth = 1;
        this.cellBorderColor = "black";
        this.stringDelimiter = Delimiters.find(x => x.displayName == Delimiters[4].displayName);
        this.rawString = "";
        this.exampleText = "Here's an example that contains numbers 1 to ~!";
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
    rawString: string;
    stringDelimiter: Delimiter;
    exampleText: string;
    cellWidth: number;
    cellHeight: number;
    cellBorderWidth: number;
    cellBorderColor: string;
    console = console;

    create2DArray<T>(arr: T[], rows: number, columns: number, defaultElement: T): Board<T> {
        let content = [];
        while(arr.length > 0) {
            content.push(arr.splice(0, columns));
            if(content.length >= rows) break;
        }
        while(content.length > 0 && content[content.length - 1].length < columns) {
            content[content.length - 1].push(defaultElement);
        }
        while(content.length < rows) {
            content.push(this.createEmptyRow<T>(columns, defaultElement));
        }
        return content;
    }

    createEmptyRow<T>(columns: number, defaultElement: T): T[] {
        let list = [];
        for(let i = 0; i < columns; i++) {
            list.push(defaultElement);
        }
        return list;
    }

    recreateContent() {
        this.boards = [];
        
        if(this.rawString.length == 0) this.rawString = this.exampleText;
        this.rawString = this.trimEnd(this.rawString, this.stringDelimiter);

        let elements: any[] = this.splitString(this.rawString, this.stringDelimiter);
        for(let i = 0; i < this.numOfBoards; i++) {
            let list = Object.assign([], elements);
            this.boards.push(
                this.create2DArray(
                    this.doShuffle ? shuffle(list) : list,
                    this.rows, 
                    this.columns, 
                    this.defaultElement
                    ));
        }
    }

    trimEnd(content: string, delimiter: Delimiter): string {
        while(content.length > 0) {
            content = content.trim();
            if(content[content.length - 1] === delimiter.value) {
                content = content.substring(0, content.length - 1);
            } else {
                break;
            }
        }
        if(content.length === 0) {
            content = " ";//Alt + 255
        }
        return content;
    }

    splitString(content: string, delimiter: Delimiter): string[] {
        let list = [];
        for(let result = 0, last = 0; result = content.indexOf(delimiter.value, last);) {
            if(result === -1) {
                list.push(content.slice(last, content.length));
                break;
            } else {
                list.push(content.slice(last, result));
            }
            last = result + 1;
        }
        return list;
    }

    public valueChanged(value, property: string) {
        this[property] = value;
        this.recreateContent();
    }
}