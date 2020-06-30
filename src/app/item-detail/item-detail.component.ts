import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdditivesService } from '../shared/additives.service';
import { WikiService } from '../shared/wiki/wiki.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  item: {
    id: '',
    name: '',
    level: '',
		type: '',
		info: ''
  }

  wiki: {
    extract?: string
    extract_html?: string
  }

  constructor(
    private _myAdditives:AdditivesService, 
    private _myRoute:ActivatedRoute,
    private _myWiki: WikiService
    ) { }

  async ngOnInit(): Promise<void> {
    console.log('this._myRoute.snapshot.params', this._myRoute.snapshot.params);
    const {id = null} = this._myRoute.snapshot.params
    if (!id) return;
    this.item = await this._myAdditives.dispDetail(id);

    this.wiki = await this._myWiki.getWikiDetail(id);

  }

}
