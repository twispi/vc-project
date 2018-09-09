import { Component, Inject, OnInit } from '@angular/core';
import { CompanyCollectionService } from './shared/services/company-collection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vc';
  constructor(@Inject(CompanyCollectionService) private collSvc: CompanyCollectionService) {

  }
  ngOnInit() {
    this.collSvc.getAllTodos().subscribe(obs => console.log(obs));
  }
}
