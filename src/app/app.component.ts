import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName: string = "";
  userId: string = "1";
  responce: any;

  constructor(private http: HttpClient){

  }

  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
    .subscribe((responce)=>{
      this.responce = responce;
      console.log(this.responce);
    })
  }

  mysearch() {
    this.http.get('http://localhost:5000/user/' + this.userId).subscribe((responce)=>{
      console.log(this.userId);
      this.responce = responce;
      console.log(this.responce);
    })
  }
}
