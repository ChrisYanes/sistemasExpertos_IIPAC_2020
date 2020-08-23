import { Component, OnInit } from '@angular/core';
import{ faFolder} from '@fortawesome/free-solid-svg-icons';
import{ faFileCode} from '@fortawesome/free-solid-svg-icons';
import{ faCode} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  faFolder=faFolder;
  faCode=faCode;
  faFileCode=faFileCode;

  constructor() { }

  ngOnInit(): void {
  }

}
