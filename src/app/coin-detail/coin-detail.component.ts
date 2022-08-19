import { Component, OnInit } from '@angular/core';
import {ApiService} from "../service/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss']
})
export class CoinDetailComponent implements OnInit {
  coinData: any;
  coinId!: string;
  days: string = '1';
  currency: string = 'UAH';

  constructor(private api: ApiService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(res => {
      this.coinId = res['id']
    })
    this.getCoinData()
  }

  getCoinData() {
    this.coinData = this.api.getCurrencyById(this.coinId).subscribe(res => {
      this.coinData = res
      console.log(this.coinData)
    })
  }

}
