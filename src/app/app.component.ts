import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public formApp: FormGroup;
  public submitted: boolean = false;
  public userList: any = [];
  
constructor(private fb: FormBuilder){

}

get f() { return this.formApp.controls; }

ngOnInit(): void{
this.loadBasicInfo();
}


loadBasicInfo(): void{
  this.formApp = this.fb.group({
    firstName: ['', Validators.compose([Validators.required])],
    lastName: ['', Validators.compose([Validators.required])],
    address: ['', Validators.compose([Validators.required])],
    country: ['', Validators.compose([Validators.required])],
    phoneNo: ['', Validators.compose([Validators.required])],
    pcode: ['', Validators.compose([Validators.required])],
    email: ['', Validators.compose([Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
    password: ['', Validators.compose([Validators.required,
      Validators.minLength(7), Validators.maxLength(20)])],
  });
}


  onSubmit(param: any) {
    this.submitted = true;
    if (this.formApp.invalid) {
      return;
    }
    const params = param.value;
    this.userList.push(params);

    
  }
}
