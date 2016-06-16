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
var tab_cmp_1 = require("./tab.cmp");
var App = (function () {
    function App() {
        this.tabs = [];
        this.tabs = [{ content: 'content1', header: 'header1', isSelected: true }];
        console.log(this.tabs);
    }
    App.prototype.addTab = function () {
        this.tabs.push({ content: "content2", header: "header2", isSelected: true });
    };
    App = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [tab_cmp_1.Tab],
            template: "\n<div>\n    <tabs>\n        <tab [header]=\"'tab1'\">This is Tab 1</tab>\n        <tab [header]=\"'tab2'\">This is Tab 2</tab>\n        <tab *ngFor=\"let t of tabs\" [header]=\"t.header\">\n        <div>{{t.content}}</div>\n            \n        </tab>\n        <button (click)=\"addTab()\">add tab </button>\n    </tabs>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.component.js.map