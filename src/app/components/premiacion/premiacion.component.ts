import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-premiacion',
  templateUrl: './premiacion.component.html',
  styleUrls: ['./premiacion.component.scss']
})
export class PremiacionComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute



  ) { }

  ngOnInit() {
  }

}
