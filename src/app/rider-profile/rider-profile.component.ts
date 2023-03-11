import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';
import { RacerProfile } from '../interfaces/rider';
import { RiderService } from '../services/rider.service';

@Component({
  selector: 'app-rider-profile',
  templateUrl: './rider-profile.component.html',
  styleUrls: ['./rider-profile.component.scss']
})
export class RiderProfileComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  racerProfile:RacerProfile;
  panelOpenState: boolean = false;

  constructor(private riderService: RiderService) { }

  ngOnInit(): void {
    this.racerProfile = this.riderService.getLocalProfile();
  } 

  togglePanel() {
      this.panelOpenState = !this.panelOpenState
  }

}
