import { Component, OnInit } from '@angular/core';
import { DateFormats } from 'src/app/app.module';

@Component({
  selector: 'app-flex-date',
  templateUrl: './flex-date.component.html',
  styleUrls: ['./flex-date.component.scss'],
  providers: [
    
  ]
 /*  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ], */
})


export class FlexDateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
