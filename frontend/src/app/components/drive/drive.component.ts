import { Component, OnInit } from '@angular/core';
import {faPlus} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.css']
})
export class DriveComponent implements OnInit {
  faPlus=faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
