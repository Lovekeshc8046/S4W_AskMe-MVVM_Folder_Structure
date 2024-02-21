// add-business.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-business',
  templateUrl: './add-business.component.html',
  styleUrls: ['./add-business.component.css']
})
export class AddBusinessComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  SixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;

  paymentDetails: string = '';
  consultationFees: number = 0;
  modeOfPayment: string = '';
  onSubmit: any;
  businessForm!: FormGroup;
  formGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      businessName: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      openAt: ['', Validators.required]
    });

    this.thirdFormGroup = this._formBuilder.group({
      consultationFees: ['', Validators.required]
    });

    this.fourthFormGroup = this._formBuilder.group({
      consultationFees: ['', Validators.required]
    });

    this.fifthFormGroup = this._formBuilder.group({
      closedDay: ['', Validators.required],
      openAtHour: ['', Validators.required],
      openAtPeriod: ['', Validators.required],
      closeAtHour: ['', Validators.required],
      closeAtPeriod: ['', Validators.required]
    });

    this.SixthFormGroup = this._formBuilder.group({
      consultationFees: ['', Validators.required]
    });

    this.seventhFormGroup = this._formBuilder.group({
      consultationFees: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Initialization may also happen here, based on your requirements
  }

  onFileSelected(event: any) {
    // Implement file selection logic here
  }

  uploadImage() {
    // Implement image upload logic here
  }
}
