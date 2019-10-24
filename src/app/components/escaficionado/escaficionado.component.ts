import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-escaficionado',
  templateUrl: './escaficionado.component.html',
  styleUrls: ['./escaficionado.component.scss']
})
export class EscaficionadoComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute




  ) { }

  ngOnInit() {
  }

}
