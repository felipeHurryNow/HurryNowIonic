import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class RedditService{
    http:any;
    baseUrl: String;

    constructor(http : HttpClient){
        this.http = http;
        this.baseUrl = 'http://localhost:8080/products/';
    }

    getPosts(){
        return this.http.get(this.baseUrl);
    }

    getPostId(idProduct){
        return this.http.get(this.baseUrl+idProduct+"/"+idProduct);
    }

}
