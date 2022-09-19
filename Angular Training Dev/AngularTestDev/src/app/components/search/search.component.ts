import { Component, OnInit } from '@angular/core';
import { SearchserviceService } from 'src/app/searchservice.service';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 searchText = '';
 imageData:any= [];
  constructor(private router:Router,private searchService:SearchserviceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(!sessionStorage['user']){
       this.router.navigate(['login'])
    }
    let searchItem =this.route.snapshot.paramMap.get('sitem')
if(searchItem){
  this.searchImages(searchItem)
}
  }
  searchImages(item:string){
    //console.log('click works',this.searchText)
    let pSearch:any[] =localStorage['pastSearch']?JSON.parse(localStorage['pastSearch']):[];
    pSearch.push(item)
    this.searchService.getimages(item).pipe(take(20)).subscribe((data:any)=>{
      console.log(data);
      this.imageData = data.hits;
      localStorage['pastSearch']= JSON.stringify(pSearch)   
    })
  }
}
