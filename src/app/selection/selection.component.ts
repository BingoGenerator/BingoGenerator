import { Component, OnInit } from '@angular/core';
import { shuffle } from 'underscore';
import { Delimiters, Delimiter } from '../utilities/delimiters';
import { Board } from '../utilities/interfaces';
import { environment } from '../../environments/environment';

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
        this.rawString = environment.exampleString;
        this.stringDelimiter = Delimiters.find(x => x.displayName == Delimiters[4].displayName);
        this.elements = [];
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
    stringDelimiter: Delimiter;
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
        this.elements = this.splitString(this.rawString, this.stringDelimiter);
        for(let i = 0; i < this.numOfBoards; i++) {
            let list = Object.assign([], this.elements);
            this.boards.push(
                this.create2DArray(
                    this.doShuffle ? shuffle(list) : list,
                    this.rows, 
                    this.columns, 
                    this.defaultElement
                    ));
        }
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
        console.log(value);
        this[property] = value;
        this.recreateContent();
    }
}