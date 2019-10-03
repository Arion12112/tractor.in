import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage {

  items;
  jaraks;

  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Bengkel Sindojaya',
      'Bengkel Majucerah',
      'Bengkel Tigacahaya'
    ];
 
  }
  

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  

}

