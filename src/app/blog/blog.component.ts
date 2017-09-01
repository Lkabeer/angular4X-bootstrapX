import { Component, OnInit } from '@angular/core';
import { BlogService } from "../services/blog.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [ BlogService ]
})
export class BlogComponent implements OnInit {
  id: number = 0;
  photo: string = "";
  title: string = "";
  body: string = "";
  comments: any = [] ;

  single_comment: any = {
    postId: 0,
    id: 0,
    name: "",
    email: "",
    body: ""
  }


  constructor(private _blogServices: BlogService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.params['id'];
    Observable.forkJoin(
      this._blogServices.getBlogData(this.id), 
      this._blogServices.getBlogPhoto(this.id),
      this._blogServices.getBlogComments(this.id)
    ).subscribe(
      data => {
        this.title = data[0].title;
        this.body = data[0].body;
        this.photo = data[1].url;
        for(var i = 0; i < 3; i++) {
          this.comments.push(data[2][i])
        }
        // this.comments = data[2];
      }
    )
  }

  setComment(form: any) {
    this.comments.push(this.single_comment);
  }

}
