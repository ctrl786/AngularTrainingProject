import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pastsearch',
  templateUrl: './pastsearch.component.html',
  styleUrls: ['./pastsearch.component.css']
})
export class PastsearchComponent implements OnInit {
 pastSearch :any[]=[];
  constructor(private router:Router) {
    
  }

  ngOnInit(): void {
    if(!sessionStorage['user']){
       this.router.navigate(['login'])
    }
    this.pastSearch = localStorage['pastSearch']?JSON.parse(localStorage['pastSearch']):[];
  }
navSearch(searchItem:string){
this.router.navigate(["search",{"sitem":searchItem}])
}
}
