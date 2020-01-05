import { Component, OnInit } from '@angular/core';
import { Inventory } from '../interface';
import { InventoryListService } from '../inventory-list.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-inventory',
  templateUrl: './update-inventory.page.html',
  styleUrls: ['./update-inventory.page.scss'],
})
export class UpdateInventoryPage implements OnInit {
  product: Inventory;

  constructor(private inventoryService:InventoryListService,private modalCtrl: ModalController) { }

  ngOnInit() {
    this.product = this.inventoryService.getProductForUpdate();

  }
  closeModal() {
    this.modalCtrl.dismiss();
  }
  register(form) {
    this.inventoryService.updateProduct(form.value);
    this.closeModal();
  }
}
