import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-milonga',
  templateUrl: './milonga.component.html',
  styleUrls: ['./milonga.component.scss']
})
export class MilongaComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute




  ) { }

  ngOnInit() {
  }

}
