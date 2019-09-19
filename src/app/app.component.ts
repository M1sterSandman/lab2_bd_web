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

  shops: Shop[];

  products: Product[];

  displayedColumns: string[] = ['id', 'name', 'price', 'shop'];
  dataSource;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getProducts().subscribe(data => {
      this.dataService.getShops().subscribe(d => {
        this.shops = d;
      });
      this.products = data;
      this.dataSource = data;
    });
  }

}

