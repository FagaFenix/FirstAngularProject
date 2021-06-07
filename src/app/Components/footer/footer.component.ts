import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

createContactUsForm: FormGroup


  constructor(
    private formBuilder: FormBuilder
  ) {
    this.validator()
   }

  ngOnInit(): void {
  }
  validator(){
    this.createContactUsForm = this.formBuilder.group({
      Name:['', Validators.required],
      Email:['',[Validators.required, Validators.email]],
      Phone:['',Validators.required],
      Textarea:['',Validators.required]
    })
  }
  sendData(){
    if (this.createContactUsForm.valid){
      alert('Gracias por tu información, nos comunicaremos pronto contigo')
    }else{
      alert('Necesitamos todos tus datos y que estén correctos')
    }
  }
}
