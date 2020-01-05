import { Injectable } from '@angular/core';
import { Inventory } from './interface';

@Injectable({
  providedIn: 'root'
})
export class InventoryListService {
  inventoryList: Inventory[] = [{
    productId: "11jjjew3",
    productName: "Single Metal Bed",
    vendor: "SPPU Carpenter Center",
    mrp: 2000,
    batchNumber: "EP :102",
    date: "2020-01-06",
    quantity: 1
  }];
  index: number;
  product: Inventory;
  constructor() {
  }

  getInventory() {
    return this.inventoryList;
  }

  setInventory(inventory) {
    this.inventoryList.push(inventory);
  }

  removeInventoryById(productId) {
    var removeIndex = this.inventoryList.map(function (item) { return item.productId; }).indexOf(productId);
    this.inventoryList.splice(removeIndex, 1);
  }

  getProductById(productId) {
    var product;
    this.inventoryList.forEach((ele, i) => {
      if (i == productId) {
        product = ele;
      }
    });
    return product;
  }

  setProductForUpdate(index,product) {
    this.product = product;
    this.index = index;
  }

  getProductForUpdate() {
    return this.product;
  }
  updateProduct(formData) {
    this.inventoryList.forEach((item, index) => {
      if (index == this.index) {
        item = formData;
      }
    })
  }
}
