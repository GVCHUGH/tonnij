import { Component } from '@angular/core';
import { CommonService } from 'src/app/core/service/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    public commomService : CommonService
  ){}

}
