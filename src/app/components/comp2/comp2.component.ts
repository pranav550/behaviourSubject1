import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../service/home.service";
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  userName
  constructor(private home:HomeService) { }

  getUsername(){
    this.home.userName.subscribe(
      resp=> this.userName = resp
    )
  }

  updateUsername(username){
    this.home.userName.next(username.value)
 
   }

  ngOnInit() {
    this.getUsername()
  }
}
