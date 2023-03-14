import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';
import { IonModal } from '@ionic/angular';
import { Event, RacerProfile } from '../interfaces/rider';
import { RiderService } from '../services/rider.service';

@Component({
  selector: 'app-rider-profile',
  templateUrl: './rider-profile.component.html',
  styleUrls: ['./rider-profile.component.scss']
})
export class RiderProfileComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @ViewChild(IonModal) modal: IonModal;

  racerProfile:RacerProfile;
  racerResults: Event[];
  panelOpenState: boolean = false;
  modalID: string;
  eventResults: any[];
  riderRank: string;
  experienceToLevelUp: string;
  isLoading: boolean = false;

  constructor(private riderService: RiderService) { }

  ngOnInit(): void {
    this.racerProfile = this.riderService.getLocalProfile();
    this.getRacerResults();
  }

  cancel() {
    this.modal.dismiss();
  }
  
  getRacerResults(){
    this.riderService.getResults(this.racerProfile.slug).subscribe( res =>{
      this.isLoading = true;
      let allResults: Event[] = [];
      res.results.forEach( race =>{
        let classSlugIndex = race.run.results_url.lastIndexOf('/');
        let cSlug = race.run.results_url.substring(classSlugIndex + 1)
        let result: Event = {
          dateString: race.event.started_at,
          eventName: race.event.name,
          trackName: race.event.venue.name,
          eventSlug: race.event.slug,
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
          eventPoints: race.meta.points,
          classSlug: cSlug
        }
        allResults.push(result);
        this.isLoading = false;
      })
      this.racerResults = allResults.reverse();
      this.setRiderRank(this.racerResults);
    })
  }

  setRiderRank(results: Event[]){
    let experience: number = 0;

    //1xp for each race, regardless of finish
    experience = results.length * 1;

    //gain xp for podiums, better spot = more xp
    results.forEach(r =>{
      if(r.overallResult == '3'){
        experience += 1
      }
      if(r.overallResult == '2'){
        experience += 2
      }
      if(r.overallResult == '1'){
        experience += 3
      }
    })

    if(experience < 10){
      this.riderRank = 'Bronze'
    }
    if(experience >= 10 && experience < 30){
      this.experienceToLevelUp = (30 - experience).toString() + " xp to level up."
      this.riderRank = 'Silver'
    }
    if(experience >= 30 && experience < 70){
      this.experienceToLevelUp = (70 - experience).toString() + " xp to level up."
      this.riderRank = 'Gold'
    }
    if(experience >= 70 && experience < 120){
      this.experienceToLevelUp = (120 - experience).toString() + " xp to level up."
      this.riderRank = 'Platinum'
    }
    if(experience >= 120 && experience < 300){
      this.experienceToLevelUp = (300 - experience).toString() + " xp to level up."
      this.riderRank = 'Diamond'
    }
    if(experience >= 300 && experience < 600){
      this.experienceToLevelUp = (600 - experience).toString() + " xp to level up."
      this.riderRank = 'Champion'
    }
    if(experience > 600){
      this.experienceToLevelUp = "Max Level Achieved!"
      this.riderRank = 'Master'
    }

    console.log(experience);
  }

  getRaceDetails(classSlug: string){
    this.modal.present();
    this.riderService.getClassDetailsByEvent(classSlug).subscribe(res =>{
      console.log(res);
      this.eventResults = res.results.sort((a, b) => (a.position_in_class > b.position_in_class) ? 1 : -1);
      console.log(this.eventResults);
    })
  }

  togglePanel() {
      this.panelOpenState = !this.panelOpenState
  }

}
