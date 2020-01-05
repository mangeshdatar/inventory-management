import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { AddInventoryPage } from '../add-inventory/add-inventory.page';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async openAddInventoryPage() {
    console.log('reched')
    const modal = await this.modalController.create({
      component: AddInventoryPage
    });
    return await modal.present();
  }
}
