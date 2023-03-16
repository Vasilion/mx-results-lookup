import { Component, OnInit } from '@angular/core';
import { Racer, RacerProfileRaceResult, RacerProfile } from '../interfaces/rider';
import { RiderService } from '../services/rider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rider-lookup',
  templateUrl: './rider-lookup.component.html',
  styleUrls: ['./rider-lookup.component.scss']
})
export class RiderLookupComponent implements OnInit {
  racerName: string = '';
  racerCity: string = '';
  isData: boolean = true;
  racerFirstName: string = '';
  racerLastName: string = '';
  racerId: string = '';
  racerList: Racer[];
  racer: Racer;
  racerProfile: RacerProfile;
  results: any[] = [];
  currentTime = new Date()
  seasonYear: number = this.currentTime.getFullYear();
  riderSeasonlevel: string = "";
  years: number[] = [2021, 2022]
  isLoading: boolean = false;

  constructor(private riderService: RiderService, private router: Router) { }

  ngOnInit(): void {
  }

  searchForRacer(riderName: string) {
    this.racerList = [];
    this.isLoading = true;
    this.riderService.getRacerList(riderName).subscribe(res => {
      if(res.count === 0){
        this.isData = false;
      }
      res.data.forEach(element => {
        let racer: Racer = {
          name: element.name,
          slug: element.slug,
          state: element.state,
          city: element.city
        }
        this.racerList.push(racer);        
      });
      this.isData = true;
      this.isLoading = false;
    });
  }

  buildRacerProfile(racerSlug: string) {
    this.riderService.getRacerProfile(racerSlug).subscribe(res => {
      let allRaces: RacerProfileRaceResult[] = [];
      res.runs.forEach(race => {
        let result: RacerProfileRaceResult = {
          class: race.name,
          position: race.results[0].position_in_class,
          dateString: race.started_at
        }
        allRaces.push(result);
      })
      let racerProfileResponse: RacerProfile = {
        firstName: res.profile.first_name,
        lastName: res.profile.last_name,
        birthdate: res.profile.birthdate,
        city: res.profile.city,
        homeTown: res.profile.homeTown,
        amaNumber: res.profile.meta.ama_num,
        class: res.profile.meta.levels.MX,
        slug: res.profile.slug,
        state: res.profile.state,
        raceResults: allRaces
      }
      this.racerProfile = racerProfileResponse
      this.riderService.updateLocalProfile(this.racerProfile);
      this.router.navigateByUrl('/riderProfile')
    })
  }


}




