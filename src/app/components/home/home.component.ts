import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../service/home.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName:string= "pranav"
  constructor(private home:HomeService) { }

  getUsername(){
    this.home.userName.subscribe(
      resp=> this.userName = resp
    )
  }

  ngOnInit() {
    this.getUsername()
  }
}
