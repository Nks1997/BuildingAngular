import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyid:any;

  constructor(private route:ActivatedRoute,private routes:Router) { }

  ngOnInit(): void {
    this.propertyid=+this.route.snapshot.params["id"];
    //to convert to number
    //this.propertyid=Number(this.route.snapshot.params["id"]);

    this.route.params.subscribe(
      (params)=>{
        this.propertyid=+params['id'];
      }
    );

  }
  onSelectNext()
  {
    this.propertyid+=1;
    this.routes.navigate(['property-detail',this.propertyid]);
    //this.routes.navigate(['property-detail'+this.propertyid])
  }

}
