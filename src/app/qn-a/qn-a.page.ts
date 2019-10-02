import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qn-a',
  templateUrl: './qn-a.page.html',
  styleUrls: ['./qn-a.page.scss'],
})
export class QnAPage {

  items;

  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      {name: 'Sarah', question: 'Bagaimana cara merawat traktor?', like : '6', comments : '7', log: '8'},
      {name: 'Andi', question: 'Apakah traktor bajak singkal cocok untuk lahan rawa?',like : '12', comments : '134', log: '4'},
      {name: 'Bagus', question: 'Apakah traktor rotari bisa digunakan untuk membajak semua jenis lahan?',like : '200', comments : '1021', log: '12'}
      
      
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.name.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}

