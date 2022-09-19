import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginModel :any={}
  constructor(private router:Router) { }
loginDet :any = [{uname:'Admin',pwd:'12345'},
{uname:'Admin',pwd:'Admin'},
{uname:'User',pwd:'User'}
]
  ngOnInit(): void {
  }

  loginCheck(){
  //   this.loginDet.forEach((element:any) => {
  //   if (element.pwd == this.loginModel.pwd&&element.uname == this.loginModel.uname )
  //   {

  //     alert('Login Success')
  //   }
  // });
  // console.log('login works',this.loginModel);
  if(this.loginDet.filter((user:any)=>user.pwd==this.loginModel.pwd&&user.uname==this.loginModel.uname).length>0){
    sessionStorage.setItem('user',this.loginModel)
    this.router.navigate(['/'])
  }


  }

}
