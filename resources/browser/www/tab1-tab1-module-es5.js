(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{title}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <h3 class=\"no-item\" *ngIf=\"loadItems().length === 0\" text-center>\n    No items available on the list.\n  </h3>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let item of loadItems(); let i = index\">\n      <ion-item>\n        <ion-label>\n          <h2>{{item.name}}</h2>\n          <p>{{item.quantity}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item-options>\n        <button (click)=\"editItem(item,i)\" ion-button color=\"primary\" icon-start>\n          <ion-icon name=\"create\"></ion-icon>\n            Edit\n        </button>\n        <button (click)=\"shareItem(item, i)\" ion-button color=\"light\" icon-start>\n          <ion-icon name=\"share\"></ion-icon>\n          Share\n        </button>\n        <button (click)=\"removeItem(item,i)\" ion-button color=\"secondary\" icon-start>\n          <ion-icon name=\"trash\"></ion-icon>\n            Done\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list> \n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"addItem()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/groceries-service.service.ts":
/*!**********************************************!*\
  !*** ./src/app/groceries-service.service.ts ***!
  \**********************************************/
/*! exports provided: GroceriesServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceriesServiceService", function() { return GroceriesServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GroceriesServiceService = /** @class */ (function () {
    function GroceriesServiceService() {
        this.items = [];
    }
    GroceriesServiceService.prototype.getItems = function () {
        return this.items;
    };
    GroceriesServiceService.prototype.removeItem = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.items.splice(index, 1);
                return [2 /*return*/];
            });
        });
    };
    GroceriesServiceService.prototype.addItem = function (item) {
        this.items.push(item);
    };
    GroceriesServiceService.prototype.editItem = function (item, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.items[index] = item;
                return [2 /*return*/];
            });
        });
    };
    GroceriesServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GroceriesServiceService);
    return GroceriesServiceService;
}());



/***/ }),

/***/ "./src/app/input-dialog-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/input-dialog-service.service.ts ***!
  \*************************************************/
/*! exports provided: InputDialogServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDialogServiceService", function() { return InputDialogServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _groceries_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./groceries-service.service */ "./src/app/groceries-service.service.ts");




var InputDialogServiceService = /** @class */ (function () {
    function InputDialogServiceService(dataService, alertCtrl) {
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
    }
    InputDialogServiceService.prototype.showAlert = function (item, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: item ? 'Edit Item' : 'Add Item',
                            message: item ? 'Please edit item...' : "Please enter item...",
                            inputs: [
                                {
                                    name: 'name',
                                    placeholder: 'Name',
                                    value: item ? item.name : null
                                },
                                {
                                    name: 'quantity',
                                    value: item ? item.quantity : null,
                                    placeholder: 'Quantity'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Save',
                                    handler: function (item) {
                                        console.log('Saved clicked', item);
                                        if (index !== undefined) {
                                            _this.dataService.editItem(item, index);
                                        }
                                        else {
                                            _this.dataService.addItem(item);
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InputDialogServiceService.ctorParameters = function () { return [
        { type: _groceries_service_service__WEBPACK_IMPORTED_MODULE_3__["GroceriesServiceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    InputDialogServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_groceries_service_service__WEBPACK_IMPORTED_MODULE_3__["GroceriesServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], InputDialogServiceService);
    return InputDialogServiceService;
}());

/*
    async addAlert() {
   const alert = await this.alertCtrl.create({
     header: 'Add Additional Item',
     message: 'Please enter item...',
     inputs: [
       {
         name: 'name',
         placeholder: 'Name'
       },
       {
         name: 'quantity',
         placeholder: 'Quantity'
       },
     ],
     buttons: [
       {
       text: 'Cancel',
       handler: data => {
         console.log('Cancel clicked');
       }
     },
     {
       text: 'Save',
       handler: item => {
         console.log('Saved clicked', item);
         this.items.push(item);
       }
     }]
   });
 
   await alert.present();
 } */ 


/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teW1hYy9Eb2N1bWVudHMvc3dkdjY2NS9ncm9jZXJpZXMvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _groceries_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../groceries-service.service */ "./src/app/groceries-service.service.ts");
/* harmony import */ var _input_dialog_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input-dialog-service.service */ "./src/app/input-dialog-service.service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");








var Tab1Page = /** @class */ (function () {
    /*
    items = [
      {
        name: 'Milk',
        quantity: 1
      },
      {
        name: 'Bread',
        quantity: 2
      },
      {
        name: 'Apples',
        quantity: 3
      },
      {
        name: 'Pork chops',
        quantity: 2
      },
      {
        name: 'Chips',
        quantity: 5
      },
    ];
    */
    function Tab1Page(navCtrl, toastCtrl, alertCtrl, dataService, inputDialogService, socialSharing) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.inputDialogService = inputDialogService;
        this.socialSharing = socialSharing;
        this.title = "Grocery";
    }
    Tab1Page.prototype.loadItems = function () {
        return this.dataService.getItems();
    };
    // Add Item
    Tab1Page.prototype.addItem = function () {
        console.log('Adding Item...');
        this.inputDialogService.showAlert();
    };
    // Edit Item
    Tab1Page.prototype.editItem = function (item, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Edit Item: ', item, index);
                        toast = this.toastCtrl.create({
                            message: 'Updating Item: ' + item.Name,
                            duration: 3000
                        });
                        return [4 /*yield*/, toast];
                    case 1:
                        (_a.sent()).present();
                        this.inputDialogService.showAlert({ item: item, index: index });
                        return [2 /*return*/];
                }
            });
        });
    };
    // Remove Item
    Tab1Page.prototype.removeItem = function (item, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Removing Item - ", item, index);
                        toast = this.toastCtrl.create({
                            message: 'Removing Item - ' + item.index + " ...",
                            duration: 3000
                        });
                        return [4 /*yield*/, toast];
                    case 1:
                        (_a.sent()).present();
                        this.dataService.removeItem(index);
                        return [2 /*return*/];
                }
            });
        });
    };
    // Share Item
    Tab1Page.prototype.shareItem = function (item, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, message, subject;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Sharing Item -", item, index);
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Sharing Item - ' + index + " ...",
                                duration: 3000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        message = "Grocery Item - Name : " + item.name + " - Quantity: " + item.quantity;
                        subject = "Shared via Groceries app";
                        this.socialSharing.share(message, subject).then(function () {
                            // Sharing via email is possible
                            console.log("Shared successfully!");
                        }).catch(function (error) {
                            // Sharing via email is not possible
                            console.error("Error while sharing ", error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _groceries_service_service__WEBPACK_IMPORTED_MODULE_3__["GroceriesServiceService"] },
        { type: _input_dialog_service_service__WEBPACK_IMPORTED_MODULE_4__["InputDialogServiceService"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"] }
    ]; };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _groceries_service_service__WEBPACK_IMPORTED_MODULE_3__["GroceriesServiceService"], _input_dialog_service_service__WEBPACK_IMPORTED_MODULE_4__["InputDialogServiceService"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map