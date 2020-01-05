import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InventoryListService } from '../inventory-list.service';
import { Inventory } from '../interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.page.html',
  styleUrls: ['./add-inventory.page.scss'],
})
export class AddInventoryPage implements OnInit {
  currentDate: any;
constructor( private modalCtrl: ModalController,private inventoryService:InventoryListService
  ) {
     }

  ngOnInit() {
    this.currentDate = new Date();
    var res = this.currentDate.toISOString().split('T');
    this.currentDate = res[0];
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }
  register(form) {
    this.inventoryService.setInventory(form.value);
    this.closeModal();
  }
}
