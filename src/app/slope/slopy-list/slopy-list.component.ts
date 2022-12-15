import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ISlope } from '../../shared/interfaces';

@Component({
  selector: 'app-slopy-list',
  templateUrl: './slopy-list.component.html',
  styleUrls: ['./slopy-list.component.css']
})
export class SlopyListComponent implements OnInit {

  slopeList: ISlope[] | null= null;
  errorFetchingData = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadSlopes().subscribe({
      next: (value) => {
        this.slopeList = value;
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.error(err)
      }
    });
  }

}
