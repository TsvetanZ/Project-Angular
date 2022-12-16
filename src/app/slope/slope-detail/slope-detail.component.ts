import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slope-detail',
  templateUrl: './slope-detail.component.html',
  styleUrls: ['./slope-detail.component.css']
})
export class SlopeDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { 
    console.log(this.activatedRoute.snapshot.data?.['slope'])
  }

  ngOnInit(): void {
  }

}
