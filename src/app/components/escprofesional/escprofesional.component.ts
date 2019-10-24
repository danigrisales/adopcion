import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-escprofesional',
  templateUrl: './escprofesional.component.html',
  styleUrls: ['./escprofesional.component.scss']
})
export class EscprofesionalComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute




  ) { }

  ngOnInit() {
  }

}
