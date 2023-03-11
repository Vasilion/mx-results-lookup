import { Component, OnInit } from '@angular/core';
import { RacerProfile } from '../interfaces/rider';
import { RiderService } from '../services/rider.service';

@Component({
  selector: 'app-rider-profile',
  templateUrl: './rider-profile.component.html',
  styleUrls: ['./rider-profile.component.scss']
})
export class RiderProfileComponent implements OnInit {

  racerProfile:RacerProfile;

  constructor(private riderService: RiderService) { }

  ngOnInit(): void {
    this.racerProfile = this.riderService.getLocalProfile();
  }

}
