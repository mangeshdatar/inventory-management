import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventoryPageRoutingModule } from './inventory-routing.module';

import { InventoryPage } from './inventory.page';
import { AddInventoryPageModule } from '../add-inventory/add-inventory.module';
import { UpdateInventoryPageModule } from '../update-inventory/update-inventory.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventoryPageRoutingModule,
    AddInventoryPageModule,
    UpdateInventoryPageModule
  ],
  declarations: [InventoryPage]
})
export class InventoryPageModule {}
