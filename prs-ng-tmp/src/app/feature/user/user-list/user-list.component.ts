import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { JsonResponse } from 'src/app/model/json-response.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  jr: JsonResponse;
  users: User[];

  constructor(private userSvc: UserService) { }

  ngOnInit() {
    this.userSvc.list().subscribe(
      jresp => {
        this.jr = jresp;
        this.users = this.jr.data as User[];
        console.log(this.users);
      }
    )
  }

}
