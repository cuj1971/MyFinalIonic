import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdditivesService } from '../shared/additives.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  additives$: Observable<any>;
  max: number = 10;

  constructor(private myAdditives:AdditivesService) { }

  ngOnInit(): void {
    this.myAdditives.fetchData();
    this.additives$ = this.myAdditives.data$;
  }

  getMoreAdditives(){
    this.max = this.max + 10;
  }

}
