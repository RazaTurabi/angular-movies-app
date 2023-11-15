import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.ratings);
    this.outer_width=this.ratings*this.outer_width
     new Error('Method not implemented.');
  }

  @Input() ratings:number=0

  outer_width:number=16
 
  @Output() to_parent=new EventEmitter <string>();

  send_to_parent() {
    this.to_parent.emit("Hello Parent")
  }

}
