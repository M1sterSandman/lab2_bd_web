import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lab2-web';

  shops: string;

  products: string;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getShops().subscribe(data => {
      this.shops = JSON.stringify(data);
    });
    this.dataService.getProducts().subscribe(data => {
      this.products = JSON.stringify(data);
    });
  }

}

