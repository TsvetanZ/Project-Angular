import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { IPost } from '../../shared/interfaces';

@Component({
  selector: 'app-resent-post-list',
  templateUrl: './resent-post-list.component.html',
  styleUrls: ['./resent-post-list.component.css']
})
export class ResentPostListComponent implements OnInit {

  listPosts: IPost[] | null= null;
  errorFetchingData = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadPost().subscribe({
        next: (value) => {
          this.listPosts = value;
        },
        error: (err) => {
          this.errorFetchingData = true;
          console.error(err)
        }
    });
  }

}
