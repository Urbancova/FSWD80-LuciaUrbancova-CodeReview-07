import { Component, OnInit } from '@angular/core';
import { TravelsService } from "../shared/travels.service";

@Component({
  selector: 'app-travels-list',
  templateUrl: './travels-list.component.html',
  styleUrls: ['./travels-list.component.css']
})
export class TravelsListComponent implements OnInit {
	travelsArray =[];
 	showDeletedMessage : boolean;
 	searchText:string = "";
 	
  constructor(private travelsService: TravelsService) { }

  ngOnInit() {
         this.travelsService.getTravels().subscribe(
                 (list) => {
                         this.travelsArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });
 }

 onDelete($key){
     if(confirm("Are you sure you want to delete this record?")){
       this.travelsService.deleteTravels($key);
       this.showDeletedMessage = true;
       setTimeout(()=> this.showDeletedMessage=false , 3000)
     }
   }

   filterCondition(travels){
     return travels.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
      travels.email.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
      travels.mobile.indexOf(this.searchText) != -1 ||
      travels.location.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 
   }

}
