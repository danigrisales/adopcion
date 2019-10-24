import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-paficionado',
  templateUrl: './paficionado.component.html',
  styleUrls: ['./paficionado.component.scss']
})
export class PaficionadoComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute



  ) { }

  ngOnInit() {
  }

}
