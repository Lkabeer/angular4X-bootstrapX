import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()

export class BlogService {
    constructor(private _http: Http) {
    
    }
    getBlogData(id: number) {
        return this._http.get("https://jsonplaceholder.typicode.com/posts/" + id)
                        .map(res => res.json());
    }

    getBlogPhoto(id: number) {
        return this._http.get("https://jsonplaceholder.typicode.com/photos/" + id)
                        .map(res => res.json());
    }

    getBlogComments(id: number) {
        return this._http.get("https://jsonplaceholder.typicode.com/comments?postId" + id)
                        .map(res => res.json());
    }

    // sendComment(comment: any) {
    //     this._http.post(url, comment, function() {

    //     })
    // }
}