/**
 * Created by moshe.apelbaum on 6/15/2016.
 */
import {Component, OnInit, Input} from '@angular/core';

@Component({

    selector: 'tab',
    template: `
<ng-content></ng-content>
`

})
export class Tab {
    content:string;
    @Input()
    header:string;
    isSelected:boolean = false;
}