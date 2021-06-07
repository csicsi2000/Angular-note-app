import { trigger, transition,style,animate, query, animateChild, group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  /*
  animations: [
    trigger('pageChange',[
    transition('void => *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [style({ right: '-100%', opacity: 0 })]),
      query(':leave', animateChild()),
      group([
          query(':leave', [animate('1s ease-out', style({ right: '100%', opacity: 0 }))]),
          query(':enter', [animate('1s ease-out', style({ right: '0%', opacity: 1 }))])
        ]),
      query(':enter', animateChild())

    ])
  ])]
  */
})

export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && 
      outlet.activatedRouteData && 
      outlet.activatedRouteData['pageChange'];
   }
}
