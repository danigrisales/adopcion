import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-pprofesional',
  templateUrl: './pprofesional.component.html',
  styleUrls: ['./pprofesional.component.scss']
})
export class PprofesionalComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute




  ) { }

  ngOnInit() {
  }

}
