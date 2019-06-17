import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  userName=new BehaviorSubject('John Doe')
}
