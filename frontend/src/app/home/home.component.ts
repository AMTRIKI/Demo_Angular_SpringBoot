import { Component, OnInit } from '@angular/core';
import { Message } from '../entities/message';
import { BackendService } from '../service/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message!:Message
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    
  }
  envoyer(chaine:String){
    this.backendService.getHelloMessage(chaine).subscribe(
      data => { this.message = data; console.log(data)}
    )
  }

}
