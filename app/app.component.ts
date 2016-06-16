import {Component, Input} from "@angular/core";
// import {Grid} from "./app.co";

export class Location {
    row:number;
    col:number;
}

@Component({
    selector: 'cell',

    templateUrl: `
    <div *ngIf="state = CellState.visited">
        V
    </div>
    <div *ngIf="state = CellState.unvisited">
        U
    </div>
    
    
`
})

export class Cell {
    constructor(private _hasBomb:boolean,
                private _state:CellState) {
    }

    get hasBomb():boolean {
        return this._hasBomb;
    }

    get state():CellState {
        return this._state;
    }

    set hasBomb(val:boolean) {
        this._hasBomb = val;
    }

}
export enum CellState {
    visited,
    unvisited,
}

export enum Direction{
    UP, RIGHT, DOWN, LEFT
}

@Component({
    selector: 'grid',
    template: `
<table>
    <tr *ngFor="let row of board">
        <td *ngFor="let col of row">{{col.hasBomb}}</td>
    </tr>
</table>    
`
})
export class Grid {
    currentCell:Cell;
    currentLocation:Location;
    bombCount:number = 13;
    cellsInPath:number = 0;
    totalRows:number = 10;
    totalCols:number = 10;
    board:Cell[][]=[];

    ngOnInit() {
        this.plantBombs();
    }

    getRandom(limit:number):number {
        return Math.floor(Math.random() * limit);
    }

    private plantBombs() {
        // mark all cells as clean from bombs
        for (let i = 0; i < this.totalRows; ++i) {
            this.board[i]=[];
            for (let j = 0; j < this.totalCols; ++j) {
                this.board[i][j] = new Cell(false, CellState.unvisited);
            }
        }
        //fill the bombs
        var cell:any;
        for (let b = 0; b < this.bombCount; ++b) {
            var isExist = false;
            do {
                var x = this.getRandom(this.totalRows);
                var y = this.getRandom(this.totalCols);
                cell = this.board[x][y];
                if (cell.hasBomb) {
                    isExist = true;
                }
                else {
                    isExist = false;
                }
            } while (isExist);
            cell.hasBomb=true;

        }

    }


    getNewLocation(direction:Direction):Location {
        return null;
    }

    isMovePossible(location:Location):boolean {
        return false;
    }

    move(locaiton:Location) {

    }
}

export class Controls {
    @Input() gridModel:Grid;

    move(direction:Direction) {

    }


}

export class Score {
    bombCount:number;
    steps:number;
}
export class ScoreBoard {
    results:Score[];
}

@Component({
    selector: 'my-app',
    directives: [Grid],
    template: `
<div><grid></grid></div>
`
})
export class App {

}
