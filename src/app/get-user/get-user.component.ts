import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    // let resp = this.http.get('http://127.0.0.1:5000/admin/user/user/normalUser')
    // resp.subscribe(data => {
    //   console.log(data)
    // })

  }

}
