import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public userApp: FormGroup;
  public submitted: boolean = false;
  public userList: any = [];
  constructor(private fb: FormBuilder){

  }
  
  get f() { return this.userApp.controls; }

  ngOnInit(): void{
    this.loadBasicInfo();
    }
    
    
    loadBasicInfo(): void{
      this.userApp = this.fb.group({
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
        debugger;
        this.submitted = true;
        if (this.userApp.invalid) {
          return;
        }
        const params = param.value;
        this.userList.push(params);
    
        console.log(this.userList);
      }
    }
    