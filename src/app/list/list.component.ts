import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public obj:CommunicationService)  { }

  ngOnInit(): void {
  }


}
