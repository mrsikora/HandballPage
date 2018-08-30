import { Inject, Injectable, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Router } from '@angular/router';

@Injectable()
export class EventService implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public getEvents(): Observable<any> {
    const dateObj = new Date();
    const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);

    const data: any = [{
      id: 1,
      title: 'Juwenaliowy turniej piłki ręcznej',
      start: '2018-05-17',
      description: 'xxxdsfasdfasdf',
      allDay: 'true',
      backgroundColor: '#DC213C',
      borderColor: '#DC213C',
      textColor: '#FFFFFF'
    },
    {
      id: 2,
      title: 'Finał Akademickich Mistrzostw Polski - Opole',
      url: 'https://www.facebook.com/ampy.pilka.reczna.kobiet.final/',
      start: '2018-05-30',
      end: '2018-06-03',
      backgroundColor: '#DC213C',
      borderColor: '#DC213C'
    }];
    return Observable.of(data);
  }
}
