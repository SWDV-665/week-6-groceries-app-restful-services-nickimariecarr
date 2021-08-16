import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from './groceries-service.service';

@Injectable()
export class InputDialogServiceService {
constructor(public alertCtrl: AlertController, public dataService: GroceriesServiceService) {
console.log('Hello InputDialogServiceProvider Provider');
}

 async showPrompt(item?, index?) {
     const prompt =await this.alertCtrl.create({
    
     message: item ? "Please edit item..." : "Please enter item...",
      inputs: [
    {
        name: 'name', 
    placeholder: 'Name',
     value: item ? item.name : null
      },
      {
    name: 'quantity',
     placeholder: 'Quantity', 
     value: item ? item.quantity : null
      }],
    buttons: [
    {text: 'Cancel', handler: data => {
    console.log('Cancel clicked');
    }
    }
    ,{
    text: 'Save', 
    handler: data => {
    console.log("Save Handler ", data); 
     if (index !== undefined) {
    item.name = data.name; 
    item.quantity = data.quantity; 
    this.dataService.editItem(item, index);
      } else {
    this.dataService. addItem(data);

              }
                 }
    }
     ]
 
    });
    await prompt.present();
}
}