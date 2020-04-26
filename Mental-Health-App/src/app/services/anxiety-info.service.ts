import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IInfo} from "../classes/info";

@Injectable({
  providedIn: 'root'
})
export class AnxietyInfoService {

  private _url: string = "/assets/data.json";

  constructor(private http: HttpClient) { }

  getInfo(): Observable<IInfo[]> {
    return this.http.get<IInfo[]>(this._url);
  }
}
