import { Component, OnInit } from '@angular/core';
import { UtilServiceService } from 'src/app/_services/util-service.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
declare const $, swal: any
export const ErrorPoll = new Map([
  [1, "ایمیل را وارد کنید"],
  [2, "کلمه عبور را وارد کنید"],
  [3, "کلمه عبور و تکرار کلمه عبور یکسان نیست"],
  [4,"ایمیل و کلمه عبور اشتباه است"],
  [5,"ایمیل تکراری است"],
  [6,"خطای سمت سرور, لطفا چند دقیقه بعد دوباره تلاش کنید"]
]);
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(300)),
    ]),
  ]
})
export class LoginComponent implements OnInit {
  loginPage = true;
  emailLogin;
  passwordLogin;
  emailSign;
  passwordSign;
  repasswordSign;
  errorList = [];
  sendLogin=false;
  sendSign=false;
  constructor(private utilService: UtilServiceService) { }

  ngOnInit(): void {
  }
  changePage() {
    this.errorList = [];
    this.loginPage = !this.loginPage;
  }
  resetPassModal() {
    swal({
      text: 'ایمیل خود را وارد کنید',
      content: "input",
      button: {
        text: "بازیابی کلمه عبور",
        closeModal: false,
      },
    }).then(name => {
      if (!name) throw null;
      return this.sleep();

    }).then(() => {
      swal({
        title: "بازیابی کلمه عبور",
        text: "یک ایمیل حاوی کلمه عبور جدید برای شما ارسال شد.",
        icon: "success",
        button: "حله!",
      });
    }).catch(err => {
      if (err) {
        swal("ایمیل وارد شده یافت نشد", "error");
      } else {
        swal.stopLoading();
        swal.close();
      }
    });
  }
  sleep() {
    return new Promise(resolve => {
      setTimeout(resolve, 5000);
    })
  }
  validateLogin() {
    this.errorList = [];
    let hasError = false;
    if (!this.emailLogin.trim()) {
      this.errorList.push(ErrorPoll.get(1));
      hasError = true;
    }
    if (!this.passwordLogin.trim()) {
      this.errorList.push(ErrorPoll.get(2));
      hasError = true;
    }
    return !hasError;
  }
  validateSignUp() {
    this.errorList = [];
    let hasError = false;
    if (!this.emailSign) {
      this.errorList.push(ErrorPoll.get(1));
      hasError = true;
    }
    if (!this.passwordSign) {
      this.errorList.push(ErrorPoll.get(2));
      hasError = true;
    }
    if (this.passwordSign != this.repasswordSign) {
      this.errorList.push(ErrorPoll.get(3));
      hasError = true;
    }
    return !hasError;
  }
  async login() {
    if (!this.validateLogin())
      return;
    this.sendLogin = true;
    await this.sleep();
    this.errorList.push(ErrorPoll.get(4));
    this.sendLogin = false
  }
  async signup() {
    if (!this.validateSignUp()) 
      return
    this.sendSign = true;
    await this.sleep();
    this.sendSign=false;
  }

}
