import { Component, OnInit } from '@angular/core';
import { AdditivesService } from '../shared/additives.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchInput: string;
  item: any;

  constructor(private _myAdditives:AdditivesService, private _router:Router) { }
  //constructor(private _route:ActivatedRoute, private _router:Router) {}

  ngOnInit(): void {

  }

 search() {
    console.log(this.searchInput);
    //console.log(this.item);
    //this.item = await this._myAdditives.dispDetail(this.searchInput);
    //this._router.navigate([`../tabs/list/${this.searchInput}`])

    this._router.navigate([`../tabs/list/${this.searchInput}`]);
    this.searchInput = '';

  }

}
