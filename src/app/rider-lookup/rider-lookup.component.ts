import { Component, OnInit } from '@angular/core';
import { RiderService } from '../services/rider.service';

@Component({
  selector: 'app-rider-lookup',
  templateUrl: './rider-lookup.component.html',
  styleUrls: ['./rider-lookup.component.scss']
})
export class RiderLookupComponent implements OnInit {
racerName:string = '';
racerCity:string = '';
racerFirstName:string = '';
racerLastName:string = '';
racerId: string = '';
racer:any[] = [];
racerProfile:any[] = [];
results: any[]=[];
currentTime = new Date()
seasonYear:number = this.currentTime.getFullYear();
riderSeasonlevel: string = "";
years:number[] = [2021,2022]

  constructor(private riderService: RiderService) { }

  ngOnInit(): void {
  }

  searchForRacer(name:string){
    this.racer = []
    this.racerProfile = [];
    this.results = [];
    this.riderSeasonlevel= "";
    this.riderService.getRacerList(name).subscribe(res =>{
      this.racer = res.data;
      console.log(this.racer)
    })
    
  }

}
