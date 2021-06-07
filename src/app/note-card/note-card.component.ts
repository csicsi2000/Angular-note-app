import { trigger, animate, transition, style } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild, Renderer2, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
  animations:[
    trigger('fade', [
    //Entry
    transition('void => *', [
      style({
        height: 0,
        opacity: 0,
      }),
      animate(200)
    ]),

    transition('* => void', [
      animate(200,style({
        height: 0
      }))
    ])
  ])]
})
export class NoteCardComponent implements OnInit {
  @Input() title: string;
  @Input() body:string;
  @Input() link:string;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();
  //@ViewChild('overflowfade') overflowfade: ElementRef<HTMLElement>;
  //@ViewChild('bodytext') bodytext: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) {
    
  }

  ngOnInit(){
    
  }
  onXButtonClick(){
    this.deleteEvent.emit();
  }
}
