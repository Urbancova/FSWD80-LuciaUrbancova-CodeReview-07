import { Injectable } from '@angular/core';
import { FormControl , FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class TravelsService {

  constructor(private firebase: AngularFireDatabase) { } 

  customerList: AngularFireList<any>;

  form = new FormGroup({
     $key: new FormControl(null),
     fullName: new FormControl('', Validators.required),//We add Validators option and we used required so the user must fill the input
     email: new FormControl('', Validators.email),// to check if the value inside the input is an email
     mobile: new FormControl('', [Validators.required, Validators.minLength(8)]), // here we put an array because we want the user to fill the input and the input length must be at least 8
     location: new FormControl('')
         });

  populateForm(travels){
    this.form.setValue(travels);
  }

  getTravels(){
                 this.customerList = this.firebase.list('travels');
                 return this.customerList.snapshotChanges();
         }
  insertTravels(travels){
                 this.customerList.push({
                         fullName: travels.fullName,
                         email: travels.email,
                         mobile: travels.mobile,
                         location:travels.location
                  });
          }

  updateTravels(travels){
            this.customerList.update(travels.$key,{
                fullName: travels.fullName,
                email: travels.email,
                mobile: travels.mobile,
                location:travels.location
            });
          }

  deleteTravels($key: string){
        this.customerList.remove($key);
     
  }


}

