import {Component} from "@angular/core";
import {Tab} from "./tab.cmp";
@Component({
    selector: 'my-app',
    directives: [Tab],
    template: `
<div>
    <tabs>
        <tab [header]="'tab1'">This is Tab 1</tab>
        <tab [header]="'tab2'">This is Tab 2</tab>
        <tab *ngFor="let t of tabs" [header]="t.header">
        <div>{{t.content}}</div>
            
        </tab>
        <button (click)="addTab()">add tab </button>
    </tabs>
</div>
`
})
export class App {
    tabs:Tab[] = [];

    constructor() {
        this.tabs = [{content: 'content1', header: 'header1', isSelected: true}];
        console.log(this.tabs);
    }

    addTab() {
        this.tabs.push({content: "content2", header: "header2", isSelected: true});
    }
}


