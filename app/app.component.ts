import {Component, Input} from "@angular/core";
// import {Grid} from "./app.co";

export class Location {
    constructor(row:number,
                col:number) {
    }

}
export enum CellState {
    visited,
    unvisited,
}
export enum CellIcon{
    unvisited,
    visited_no_bomb,
    visited_with_bomb
}
//
// @Component({
//     selector: 'cell',
//     template: `<td>blabla</td>`
// })

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

    getCellIconEnum():CellIcon {
        if (this._state == CellState.unvisited) {
            return CellIcon.unvisited;
        }
        else if (this._state == CellState.visited) {
            if (this._hasBomb) {
                return CellIcon.visited_with_bomb;
            }
            else {
                return CellIcon.visited_no_bomb;
            }
        }

    }

}


export enum Direction{
    UP, RIGHT, DOWN, LEFT
}

@Component({
    selector: 'grid',
    template: `
<table>
    <tr *ngFor="let row of board">
        <td *ngFor="let cell of row"> 
            <div [ngSwitch]="cell.getCellIconEnum()">
                <img *ngSwitchWhen="0" src="./app/images/unknown.png" alt="unknown" height="42" width="42" style="position: relative; top: 0; left: 0;" class="{{(cell == currentCell) ? 'saturate':''}}" >
                <img *ngSwitchWhen="1" src="./app/images/visited_no_bomb.png" alt="unknown" height="42" width="42" style="position: relative; top: 0; left: 0;">
                <img *ngSwitchWhen="2" src="./app/images/visited_with_bomb.png" alt="unknown" height="42" width="42" style="position: relative; top: 0; left: 0;">                                
            </div>
            
        </td>
    </tr>
</table>    
`,
    styles: [`

.saturate {-webkit-filter: saturate(3); filter: saturate(3);}
.grayscale {-webkit-filter: grayscale(100%); filter: grayscale(100%);}
.contrast {-webkit-filter: contrast(160%); filter: contrast(160%);}
.brightness {-webkit-filter: brightness(0.25); filter: brightness(0.25);}
.blur {-webkit-filter: blur(3px); filter: blur(3px);}
.invert {-webkit-filter: invert(100%); filter: invert(100%);}
.sepia {-webkit-filter: sepia(100%); filter: sepia(100%);}
.huerotate {-webkit-filter: hue-rotate(180deg); filter: hue-rotate(180deg);}
.rss.opacity {-webkit-filter: opacity(50%); filter: opacity(50%);}
`]
})
export class Grid {
    currentCell:Cell;
    currentLocation:Location;
    bombCount:number = 13;
    cellsInPath:number = 0;
    totalRows:number = 10;
    totalCols:number = 10;
    board:Cell[][] = [];

    ngOnInit() {
        this.plantBombs();
    }

    getRandom(limit:number):number {
        return Math.floor(Math.random() * limit);
    }

    private plantBombs() {
        // mark all cells as clean from bombs
        for (let i = 0; i < this.totalRows; ++i) {
            this.board[i] = [];
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
            cell.hasBomb = true;

        }
        this.currentCell = this.board[0][0];
        this.currentLocation = new Location(0, 0);

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
<br><br>
`
})
export class App {

}
