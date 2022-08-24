import { Component, Input, OnInit } from "@angular/core";
import { HousingService } from "src/app/services/housing.service";
import { IProperty } from "../interface/iproperty";


@Component({
  selector:'app-property-card',
  templateUrl:'./property-card.component.html',
  styleUrls: ['./property-card.component.css']
}

)
export class PropertyCardComponent  {
   @Input()
  property!: IProperty;
  // properties: Array<IProperty>=[];

  // constructor(private housingservice: HousingService) {}

  // ngOnInit(): void {
  //   this.housingservice.getallproperties().subscribe(
  //     data=>{
  //       this.properties=data;
  //       console.log(data);
  //     },
  //     error=>
  //     {
  //       console.log(error);
  //     }
  //   );
  // }
}
