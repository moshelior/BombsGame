"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
// import {Grid} from "./app.co";
var Location = (function () {
    function Location(row, col) {
    }
    return Location;
}());
exports.Location = Location;
(function (CellState) {
    CellState[CellState["visited"] = 0] = "visited";
    CellState[CellState["unvisited"] = 1] = "unvisited";
})(exports.CellState || (exports.CellState = {}));
var CellState = exports.CellState;
(function (CellIcon) {
    CellIcon[CellIcon["unvisited"] = 0] = "unvisited";
    CellIcon[CellIcon["visited_no_bomb"] = 1] = "visited_no_bomb";
    CellIcon[CellIcon["visited_with_bomb"] = 2] = "visited_with_bomb";
})(exports.CellIcon || (exports.CellIcon = {}));
var CellIcon = exports.CellIcon;
//
// @Component({
//     selector: 'cell',
//     template: `<td>blabla</td>`
// })
var Cell = (function () {
    function Cell(_hasBomb, _state) {
        this._hasBomb = _hasBomb;
        this._state = _state;
    }
    Object.defineProperty(Cell.prototype, "hasBomb", {
        get: function () {
            return this._hasBomb;
        },
        set: function (val) {
            this._hasBomb = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    Cell.prototype.getCellIconEnum = function () {
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
    };
    return Cell;
}());
exports.Cell = Cell;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["RIGHT"] = 1] = "RIGHT";
    Direction[Direction["DOWN"] = 2] = "DOWN";
    Direction[Direction["LEFT"] = 3] = "LEFT";
})(exports.Direction || (exports.Direction = {}));
var Direction = exports.Direction;
var Grid = (function () {
    function Grid() {
        this.bombCount = 13;
        this.cellsInPath = 0;
        this.totalRows = 10;
        this.totalCols = 10;
        this.board = [];
    }
    Grid.prototype.ngOnInit = function () {
        this.plantBombs();
    };
    Grid.prototype.getRandom = function (limit) {
        return Math.floor(Math.random() * limit);
    };
    Grid.prototype.plantBombs = function () {
        // mark all cells as clean from bombs
        for (var i = 0; i < this.totalRows; ++i) {
            this.board[i] = [];
            for (var j = 0; j < this.totalCols; ++j) {
                this.board[i][j] = new Cell(false, CellState.unvisited);
            }
        }
        //fill the bombs
        var cell;
        for (var b = 0; b < this.bombCount; ++b) {
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
    };
    Grid.prototype.getNewLocation = function (direction) {
        return null;
    };
    Grid.prototype.isMovePossible = function (location) {
        return false;
    };
    Grid.prototype.move = function (locaiton) {
    };
    Grid = __decorate([
        core_1.Component({
            selector: 'grid',
            template: "\n<table>\n    <tr *ngFor=\"let row of board\">\n        <td *ngFor=\"let cell of row\"> \n            <div [ngSwitch]=\"cell.getCellIconEnum()\">\n                <img *ngSwitchWhen=\"0\" src=\"./app/images/unknown.png\" alt=\"unknown\" height=\"42\" width=\"42\" style=\"position: relative; top: 0; left: 0;\" class=\"{{(cell == currentCell) ? 'saturate':''}}\" >\n                <img *ngSwitchWhen=\"1\" src=\"./app/images/visited_no_bomb.png\" alt=\"unknown\" height=\"42\" width=\"42\" style=\"position: relative; top: 0; left: 0;\">\n                <img *ngSwitchWhen=\"2\" src=\"./app/images/visited_with_bomb.png\" alt=\"unknown\" height=\"42\" width=\"42\" style=\"position: relative; top: 0; left: 0;\">                                \n            </div>\n            \n        </td>\n    </tr>\n</table>    \n",
            styles: ["\n\n.saturate {-webkit-filter: saturate(3); filter: saturate(3);}\n.grayscale {-webkit-filter: grayscale(100%); filter: grayscale(100%);}\n.contrast {-webkit-filter: contrast(160%); filter: contrast(160%);}\n.brightness {-webkit-filter: brightness(0.25); filter: brightness(0.25);}\n.blur {-webkit-filter: blur(3px); filter: blur(3px);}\n.invert {-webkit-filter: invert(100%); filter: invert(100%);}\n.sepia {-webkit-filter: sepia(100%); filter: sepia(100%);}\n.huerotate {-webkit-filter: hue-rotate(180deg); filter: hue-rotate(180deg);}\n.rss.opacity {-webkit-filter: opacity(50%); filter: opacity(50%);}\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], Grid);
    return Grid;
}());
exports.Grid = Grid;
var Controls = (function () {
    function Controls() {
    }
    Controls.prototype.move = function (direction) {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Grid)
    ], Controls.prototype, "gridModel", void 0);
    return Controls;
}());
exports.Controls = Controls;
var Score = (function () {
    function Score() {
    }
    return Score;
}());
exports.Score = Score;
var ScoreBoard = (function () {
    function ScoreBoard() {
    }
    return ScoreBoard;
}());
exports.ScoreBoard = ScoreBoard;
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [Grid],
            template: "\n<div><grid></grid></div>\n<br><br>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.component.js.map