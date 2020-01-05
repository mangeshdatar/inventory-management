import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomePage } from '../login/login.page';
import { AddInventoryPage } from '../add-inventory/add-inventory.page';
import { InventoryListService } from '../inventory-list.service';
import { Inventory } from '../interface';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { UpdateInventoryPage } from '../update-inventory/update-inventory.page';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {
  inventoryList: Inventory[];
  constructor(public modalController: ModalController,private inventoryService:InventoryListService) { }

  ngOnInit() {
    this.inventoryList = this.inventoryService.getInventory();
  }
  async openAddInventoryPage() {
    const modal = await this.modalController.create({
      component: AddInventoryPage,
    });
    return await modal.present();
  }
  removeProduct(productId) {
    this.inventoryService.removeInventoryById(productId);
  }
  editProduct(productId) {
    const product = this.inventoryService.getProductById(productId);
    this.inventoryService.setProductForUpdate(productId,product);
    this.updateInventoryPage();
  }
  async updateInventoryPage() {
    const modal = await this.modalController.create({
      component: UpdateInventoryPage,
    });
    return await modal.present();
  }
}
