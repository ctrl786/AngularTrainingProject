import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {
key = '29584774-e401e130968a13b3dd12e9b24';
  constructor(private http:HttpClient) {

   }

   getimages(color:string){
    return this.http.get(`https://pixabay.com/api/?key=${this.key}&q=${color}+flowers&image_type=photo`)
   }

  
}
