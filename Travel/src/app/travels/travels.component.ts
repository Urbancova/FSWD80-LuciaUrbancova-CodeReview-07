import { Component, OnInit } from '@angular/core';
import { TravelsService  } from "../shared/travels.service";

@Component({
  selector: 'travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {

  constructor(private travelsService: TravelsService) { } 
  submitted: boolean;
  formControls = this.travelsService.form.controls;
  showSuccessMessage: boolean;

 ngOnInit() {
 }

 onSubmit(){
   this.submitted = true;
   if(this.travelsService.form.valid){
           if(this.travelsService.form.get("$key").value == null ){                    
          this.travelsService.insertTravels(this.travelsService.form.value);}
          else {
        this.travelsService.updateTravels(this.travelsService.form.value);}
       this.showSuccessMessage =true;// we set the property to true
       setTimeout(()=> this.showSuccessMessage=false,3000); // we used setTimeout here so after 3 second the showSuccessMessage value will be false
       this.submitted = false;
       this.travelsService.form.reset();// the form will be empty after new record created
         }
         // else {
                 //update
         //}
   }
 }

