import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import { Phonenumber } from "./phonenumber";

@Injectable({
  providedIn: 'root'
})
export class PhonenumberService {
  phonenumberList: AngularFireList<any>;
  selectedPhonenumber: Phonenumber = new Phonenumber();

  constructor(private firebase :AngularFireDatabase) { }

  getData() {
    this.phonenumberList = this.firebase.list('phonenumbers');
    return this.phonenumberList;
  }

  insertPhonenumber(phonenumber : Phonenumber) {
    this.phonenumberList.push({
      name: phonenumber.name,
      info: phonenumber.info,
      pNumber: phonenumber.pNumber
    });
  }

  /*updatePhonenumber(phonenumber : Phonenumber) {
    this.phonenumberList.update(phonenumber.$key,
      {
        name: phonenumber.name,
      info: phonenumber.info,
      pNumber: phonenumber.pNumber
      });
  }*/

  deletePhonenumber($key : string){
    this.phonenumberList.remove($key);
  }

}
