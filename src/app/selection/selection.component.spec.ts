import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Delimiters } from '../utilities/delimiters';
import { Board } from '../utilities/interfaces';

import { SelectionComponent } from './selection.component';

describe('SelectionComponent', () => {
    let component: SelectionComponent;
    let fixture: ComponentFixture<SelectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SelectionComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SelectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('create2DArray: 3:3_complete', () => {
        jasmine.createSpy('createEmptyRow').and.returnValue(new Array(3).fill(""));
        let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let exp = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];
        expect(component.create2DArray(arr, 3, 3, "")).toEqual(exp);
    });

    it('create2DArray: 3:4_fill', () => {
        jasmine.createSpy('createEmptyRow').and.returnValue(new Array(4).fill(""));
        let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let exp: Board<string> = [["1", "2", "3", "4"], ["5", "6", "7", "8"], ["9", "", "", ""]];
        expect(component.create2DArray<string>(arr, 3, 4, "")).toEqual(exp);
    });

    it('create2DArray: 6:2_fill', () => {
        jasmine.createSpy('createEmptyRow').and.returnValue(new Array(2).fill(""));
        let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let exp: Board<string> = [["1", "2"], ["3", "4"], ["5", "6"], ["7", "8"], ["9", ""], ["", ""]];
        expect(component.create2DArray<string>(arr, 6, 2, "")).toEqual(exp);
    });

    it('create2DArray: 2:3_crop', () => {
        jasmine.createSpy('createEmptyRow').and.returnValue(new Array(3).fill(""));
        let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let exp: Board<string> = [["1", "2", "3"], ["4", "5", "6"]];
        expect(component.create2DArray<string>(arr, 2, 3, "")).toEqual(exp);
    });

    it('create2DArray: 3:3_fill', () => {
        jasmine.createSpy('createEmptyRow').and.returnValue(new Array(3).fill(""));
        let arr = ["1", "2", "3", "4", "5", "6", "7", "8"];
        let exp = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", ""]];
        expect(component.create2DArray<string>(arr, 3, 3, "")).toEqual(exp);
    });

    it('createEmptyRow: 1', () => {
        expect(component.createEmptyRow(1, "")).toEqual([""]);
    });

    it('createEmptyRow: 2', () => {
        expect(component.createEmptyRow(2, "")).toEqual(["", ""]);
    });

    it('createEmptyRow: 3', () => {
        expect(component.createEmptyRow(3, "")).toEqual(["", "", ""]);
    });

    it('splitString: enter', () => {
        expect(component.splitString("test\nwe\nshall", Delimiters.find(x => x.displayName == "ENTER"))).toEqual(["test", "we", "shall"]);
    });

    it('splitString: space', () => {
        expect(component.splitString("test we shall", Delimiters.find(x => x.displayName == "SPACE"))).toEqual(["test", "we", "shall"]);
    });

    it('splitString: ,', () => {
        expect(component.splitString("test,we,shall", Delimiters.find(x => x.displayName == ","))).toEqual(["test", "we", "shall"]);
    });

    it('splitString: :', () => {
        expect(component.splitString("test:we:shall", Delimiters.find(x => x.displayName == ":"))).toEqual(["test", "we", "shall"]);
    });

    it('splitString: ;', () => {
        expect(component.splitString("test;we;shall", Delimiters.find(x => x.displayName == ";"))).toEqual(["test", "we", "shall"]);
    });
});