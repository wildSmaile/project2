import { Component } from '@angular/core';
import { User } from 'src/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
    user1: User = {
      nameUser : 'robert',
      firstName : 'paul',
      age : 30,
      quote: '',
      photo : 'https://randomuser.me/api/portraits/lego/2.jpg',
      photoAlt : 'blabla'
    }


    showAge():void{
      let el = document.getElementById("userAge");
      el?.removeAttribute("hidden");
    }
}
