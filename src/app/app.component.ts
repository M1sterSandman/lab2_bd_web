import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataService} from './data.service';
import {filter, findIndex, flatMap, map, switchMap, takeUntil, tap} from 'rxjs/operators';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lab2-web';

  products$: Observable<Product[]>;

  displayedColumns: string[] = ['id', 'name', 'price', 'shop', 'event'];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.products$ = this.dataService.getProducts();
  }

  editField(element: Product) {
    const product: Product = {
      availability: element.availability,
      by_weight: element.by_weight,
      category: element.category,
      description: element.description,
      id: element.id,
      name: element.name,
      price: element.price,
      shop_id: element.shop_id,
      shop_name: element.shop_name
    };

    this.dataService.editProduct(element.id, product).subscribe(p => p, e => console.error(e));
  }

  deleteField(element: Product) {
    this.products$ = this.products$.pipe(
      map(ps => ps.filter(p => p.id !== element.id)));
    this.dataService.removeProduct(element.id);
  }


  addProduct() {
    console.log('add');
  }
}

