import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../service/home.service";
@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
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
