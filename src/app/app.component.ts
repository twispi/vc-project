import { Component, Inject, OnInit } from '@angular/core';
import { CompanyCollectionService } from './shared/services/company-collection.service';
import { MetaDataCollectionService } from './shared/services/meta-data-collection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vc';
  constructor(@Inject(MetaDataCollectionService) private metaCollSvc: MetaDataCollectionService) {

  }
  ngOnInit() {
    this.metaCollSvc.getAllActivityTypes().subscribe(obs => console.log(obs));
  }
}
