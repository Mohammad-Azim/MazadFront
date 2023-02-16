import { HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { UserRegister } from 'src/app/models/UserRegister';
import { UserService } from 'src/app/services/user/user.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Component({
  selector: 'app-sing-up-from',
  templateUrl: './sing-up-from.component.html',
  styleUrls: ['./sing-up-from.component.css'],
})
export class SingUpFromComponent {
  email!: string;
  password!: string;
  confirmPassword!: string;
  firstName!: string;
  lastName!: string;

  constructor(private userService: UserService) {}

  @Input() user!: UserRegister;

  ngOnInit(): void {}

  async onSubmit(user: UserRegister) {
    (await this.userService.add(user)).subscribe((res) => {
      console.log(res);
    });
  }
}
