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
      animate(20000)
    ]),

    transition('* => void', [
      animate('200ms ease-out')
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
    /*
    let style = window.getComputedStyle(this.bodytext.nativeElement, null);
    let viewableHeight = parseInt(style.getPropertyValue("height"), 10);
    console.log(viewableHeight);
    if(this.bodytext.nativeElement.scrollHeight > viewableHeight){
      this.renderer.setStyle(this.overflowfade.nativeElement, 'display', 'block');
    } else{
      this.renderer.setStyle(this.overflowfade.nativeElement, 'display', 'none');
    }
    */
  }
  onXButtonClick(){
    this.deleteEvent.emit();
  }
}
