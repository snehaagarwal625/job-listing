import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getLocalstorageitem(LocalstorageItem:any){
    if(localStorage.getItem(LocalstorageItem)){
      return JSON.parse(localStorage.getItem(LocalstorageItem))
    }
  }

  setLocalstorageitem(LocalstorageItemName:any, LocalstorageItemValue:any)
  {
    localStorage.setItem(LocalstorageItemName,JSON.stringify(LocalstorageItemValue));
  }
}
