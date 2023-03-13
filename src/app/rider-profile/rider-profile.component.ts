import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';
import { Event, RacerProfile } from '../interfaces/rider';
import { RiderService } from '../services/rider.service';

@Component({
  selector: 'app-rider-profile',
  templateUrl: './rider-profile.component.html',
  styleUrls: ['./rider-profile.component.scss']
})
export class RiderProfileComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  racerProfile:RacerProfile;
  racerResults: Event[];
  panelOpenState: boolean = false;

  constructor(private riderService: RiderService) { }

  ngOnInit(): void {
    this.racerProfile = this.riderService.getLocalProfile();
    this.getRacerResults();
  }
  
  getRacerResults(){
    this.riderService.getResults(this.racerProfile.slug).subscribe( res =>{
      console.log(res);
      let allResults: Event[] = [];
      res.results.forEach( race =>{
        let result: Event = {
          dateString: race.event.started_at,
          eventName: race.event.name,
          trackName: race.event.venue.name,
          slug: race.event.slug,
          id: race.event.id,
          city: race.event.meta.city,
          district: race.event.meta.district,
          year: race.event.meta.season,
          state: race.event.meta.state,
          class: race.racer_class,
          racerName: race.racer_name,
          amaNumber: race.racer_number,
          moto1Result: race.meta.moto1Finish,
          moto2Result: race.meta.moto2Finish,
          overallResult: race.position_in_class,
          eventPoints: race.meta.points
        }
        allResults.push(result);
      })
      this.racerResults = allResults;
      console.log(this.racerResults);
    })
  }

  togglePanel() {
      this.panelOpenState = !this.panelOpenState
  }

}
