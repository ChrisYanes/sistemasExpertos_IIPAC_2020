import { Component, OnInit } from '@angular/core';
import{faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})
export class TarifasComponent implements OnInit {
  faFileInvoiceDollar=faFileInvoiceDollar;

  constructor() { }

  ngOnInit(): void {
  }

}
