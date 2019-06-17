import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../service/home.service";
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
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
