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
    function Location() {
    }
    return Location;
}());
exports.Location = Location;
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
    Cell = __decorate([
        core_1.Component({
            selector: 'cell',
            templateUrl: "\n    <div *ngIf=\"state = CellState.visited\">\n        V\n    </div>\n    <div *ngIf=\"state = CellState.unvisited\">\n        U\n    </div>\n    \n    \n"
        }), 
        __metadata('design:paramtypes', [Boolean, Number])
    ], Cell);
    return Cell;
}());
exports.Cell = Cell;
(function (CellState) {
    CellState[CellState["visited"] = 0] = "visited";
    CellState[CellState["unvisited"] = 1] = "unvisited";
})(exports.CellState || (exports.CellState = {}));
var CellState = exports.CellState;
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
            template: "\n<table>\n    <tr *ngFor=\"let row of board\">\n        <td *ngFor=\"let col of row\">{{col.hasBomb}}</td>\n    </tr>\n</table>    \n"
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
            template: "\n<div><grid></grid></div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.component.js.map