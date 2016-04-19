var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var storeObj = [];
var appendRows = document.getElementById('store-data');

function StoreList (storeName, custMin, custMax, cookiesPerCustomer) {
  this.storeName = storeName;
  this.custMin = custMin;
  this.custMax = custMax;
  this.cookiesPerCustomer = cookiesPerCustomer;
  this.cookiesArray = [];
  this.dailyTotals = 0;
  this.custPerHour = function(){
    return Math.floor(Math.random() * (this.custMax - this.custMin + 1)) + this.custMin;
    console.log(custPerHour());
  };
  this.cookiesPurchasedPerHour = function(){
    return Math.floor((this.custPerHour()) * this.cookiesPerCustomer);
    console.log('this is ' + cookiesPurchasedPerHour());
  };
  this.cookiesPurchasedEachHour = function(){
    for (i = 0; i < storeHours.length; i++) {
      var cookiesPurchasedPerHourDaily = this.cookiesPurchasedPerHour();
      console.log(cookiesPurchasedPerHourDaily);
      this.cookiesArray.push([storeHours[i], cookiesPurchasedPerHourDaily]);
      console.log(this.cookiesArray);
      this.dailyTotals += this.cookiesArray[i][1];
    }
    this.cookiesArray.push(['totals', this.dailyTotals]);

    for(var f = 0; f < this.cookiesArray.length; f++){
      this.cookiesArray[f] = this.cookiesArray[f][0] + ': ' + this.cookiesArray[f][1] + ' cookies!';
    }
  };
  this.renderData = function() {
    this.cookiesPurchasedEachHour();
    for (var i = 0; i < this.cookiesArray.length; i++) {
      var HourlyLiEl = document.createElement('li');
      var UlEl = document.getElementById('store-data');
      HourlyLiEl.textContent = this.cookiesArray[i];
      UlEl.appendChild(HourlyLiEl);
    }
  };
}

function makeStoreRows(array) {
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = array.storeName;
  tr.appendChild(th);
  for (var i = 0; i < array.renderData.length; i++) {
    var td = document.createElement('td');
    td.textContent = array.renderData[i];
    tr.appendChild(td);
  }
  appendRows.appendChild(tr);
}

storeObj.push(new StoreList('Pike Place Market', 17, 88, 5.2));
storeObj.push(new StoreList('SeaTac Airport', 6, 24, 1.2));
storeObj.push(new StoreList('Southcenter', 11, 38, 1.9));
storeObj.push(new StoreList('Bellevue Square', 20, 48, 3.3));
storeObj.push(new StoreList('Alki', 3, 24, 2.6));

for (var i = 0; i < storeObj.length; i++) {
  makeStoreRows(storeObj[i]);
}

// makeStoreRows(storeObj);
// var pike = {
//   custMin:17,
//   custMax:88,
//   cookiesPerCustomer:5.2,
//   storeName: 'Pike Place',
//   cookiesArray:[],
//   dailyTotals:0,
//
//   custPerHour: function(){
//     return Math.floor(Math.random() * (this.custMax - this.custMin + 1)) + this.custMin;
//     console.log(custPerHour());
//   },
//   cookiesPurchasedPerHour: function(){
//     return Math.floor((this.custPerHour()) * this.cookiesPerCustomer);
//     console.log('this is ' + cookiesPurchasedPerHour());
//   },
//
//   cookiesPurchasedEachHour: function(){
//     for (i = 0; i < storeHours.length; i++) {
//       var cookiesPurchasedPerHourDaily = this.cookiesPurchasedPerHour();
//       console.log(cookiesPurchasedPerHourDaily);
//       this.cookiesArray.push([storeHours[i], cookiesPurchasedPerHourDaily]);
//       console.log(this.cookiesArray);
//       this.dailyTotals += this.cookiesArray[i][1];
//     }
//     this.cookiesArray.push(['totals', this.dailyTotals]);
//
//     for(var f = 0; f < this.cookiesArray.length; f++){
//       this.cookiesArray[f] = this.cookiesArray[f][0] + ': ' + this.cookiesArray[f][1] + ' cookies!';
//     }
//   },
//
//   renderData: function(){
//     this.cookiesPurchasedEachHour();
//     for (var i = 0; i < this.cookiesArray.length; i++) {
//       var HourlyLiEl = document.createElement('li');
//       var UlEl = document.getElementById('pike-store');
//       HourlyLiEl.textContent = this.cookiesArray[i];
//       UlEl.appendChild(HourlyLiEl);
//     }
//   }
// };
//
// var seaTac = {
//   custMin:6,
//   custMax:24,
//   cookiesPerCustomer:1.2,
//   storeName: 'SeaTac',
//   cookiesArray:[],
//   dailyTotals:0,
//
//   custPerHour: function(){
//     return Math.floor(Math.random() * (this.custMax - this.custMin + 1)) + this.custMin;
//     console.log(custPerHour());
//   },
//   cookiesPurchasedPerHour: function(){
//     return Math.floor((this.custPerHour()) * this.cookiesPerCustomer);
//     console.log('this is ' + cookiesPurchasedPerHour());
//   },
//
//   cookiesPurchasedEachHour: function(){
//     for (i = 0; i < storeHours.length; i++) {
//       var cookiesPurchasedPerHourDaily = this.cookiesPurchasedPerHour();
//       console.log(cookiesPurchasedPerHourDaily);
//       this.cookiesArray.push([storeHours[i], cookiesPurchasedPerHourDaily]);
//       console.log(this.cookiesArray);
//       this.dailyTotals += this.cookiesArray[i][1];
//     }
//     this.cookiesArray.push(['totals', this.dailyTotals]);
//
//     for(var f = 0; f < this.cookiesArray.length; f++){
//       this.cookiesArray[f] = this.cookiesArray[f][0] + ': ' + this.cookiesArray[f][1] + ' cookies!';
//     }
//   },
//
//   renderData: function(){
//     this.cookiesPurchasedEachHour();
//     for (var i = 0; i < this.cookiesArray.length; i++) {
//       var HourlyLiEl = document.createElement('li');
//       var UlEl = document.getElementById('seatac-store');
//       HourlyLiEl.textContent = this.cookiesArray[i];
//       UlEl.appendChild(HourlyLiEl);
//     }
//   }
// };
// var southCenter = {
//   custMin:11,
//   custMax:38,
//   cookiesPerCustomer:1.9,
//   storeName: 'South Center',
//   cookiesArray:[],
//   dailyTotals:0,
//
//   custPerHour: function(){
//     return Math.floor(Math.random() * (this.custMax - this.custMin + 1)) + this.custMin;
//     console.log(custPerHour());
//   },
//   cookiesPurchasedPerHour: function(){
//     return Math.floor((this.custPerHour()) * this.cookiesPerCustomer);
//     console.log('this is ' + cookiesPurchasedPerHour());
//   },
//
//   cookiesPurchasedEachHour: function(){
//     for (i = 0; i < storeHours.length; i++) {
//       var cookiesPurchasedPerHourDaily = this.cookiesPurchasedPerHour();
//       console.log(cookiesPurchasedPerHourDaily);
//       this.cookiesArray.push([storeHours[i], cookiesPurchasedPerHourDaily]);
//       console.log(this.cookiesArray);
//       this.dailyTotals += this.cookiesArray[i][1];
//     }
//     this.cookiesArray.push(['totals', this.dailyTotals]);
//
//     for(var f = 0; f < this.cookiesArray.length; f++){
//       this.cookiesArray[f] = this.cookiesArray[f][0] + ': ' + this.cookiesArray[f][1] + ' cookies!';
//     }
//   },
//
//   renderData: function(){
//     this.cookiesPurchasedEachHour();
//     for (var i = 0; i < this.cookiesArray.length; i++) {
//       var HourlyLiEl = document.createElement('li');
//       var UlEl = document.getElementById('south-center-store');
//       HourlyLiEl.textContent = this.cookiesArray[i];
//       UlEl.appendChild(HourlyLiEl);
//     }
//   }
// };
//
// var bellevueSquare = {
//   custMin:20,
//   custMax:48,
//   cookiesPerCustomer:3.3,
//   storeName: 'Bellevue Square',
//   cookiesArray:[],
//   dailyTotals:0,
//
//   custPerHour: function(){
//     return Math.floor(Math.random() * (this.custMax - this.custMin + 1)) + this.custMin;
//     console.log(custPerHour());
//   },
//   cookiesPurchasedPerHour: function(){
//     return Math.floor((this.custPerHour()) * this.cookiesPerCustomer);
//     console.log('this is ' + cookiesPurchasedPerHour());
//   },
//
//   cookiesPurchasedEachHour: function(){
//     for (i = 0; i < storeHours.length; i++) {
//       var cookiesPurchasedPerHourDaily = this.cookiesPurchasedPerHour();
//       console.log(cookiesPurchasedPerHourDaily);
//       this.cookiesArray.push([storeHours[i], cookiesPurchasedPerHourDaily]);
//       console.log(this.cookiesArray);
//       this.dailyTotals += this.cookiesArray[i][1];
//     }
//     this.cookiesArray.push(['totals', this.dailyTotals]);
//
//     for(var f = 0; f < this.cookiesArray.length; f++){
//       this.cookiesArray[f] = this.cookiesArray[f][0] + ': ' + this.cookiesArray[f][1] + ' cookies!';
//     }
//   },
//
//   renderData: function(){
//     this.cookiesPurchasedEachHour();
//     for (var i = 0; i < this.cookiesArray.length; i++) {
//       var HourlyLiEl = document.createElement('li');
//       var UlEl = document.getElementById('bellevue-store');
//       HourlyLiEl.textContent = this.cookiesArray[i];
//       UlEl.appendChild(HourlyLiEl);
//     }
//   }
// };
// var alki = {
//   custMin:3,
//   custMax:24,
//   cookiesPerCustomer:2.6,
//   storeName: 'Alki',
//   cookiesArray:[],
//   dailyTotals:0,
//
//   custPerHour: function(){
//     return Math.floor(Math.random() * (this.custMax - this.custMin + 1)) + this.custMin;
//     console.log(custPerHour());
//   },
//   cookiesPurchasedPerHour: function(){
//     return Math.floor((this.custPerHour()) * this.cookiesPerCustomer);
//     console.log('this is ' + cookiesPurchasedPerHour());
//   },
//
//   cookiesPurchasedEachHour: function(){
//     for (i = 0; i < storeHours.length; i++) {
//       var cookiesPurchasedPerHourDaily = this.cookiesPurchasedPerHour();
//       console.log(cookiesPurchasedPerHourDaily);
//       this.cookiesArray.push([storeHours[i], cookiesPurchasedPerHourDaily]);
//       console.log(this.cookiesArray);
//       this.dailyTotals += this.cookiesArray[i][1];
//     }
//     this.cookiesArray.push(['totals', this.dailyTotals]);
//
//     for(var f = 0; f < this.cookiesArray.length; f++){
//       this.cookiesArray[f] = this.cookiesArray[f][0] + ': ' + this.cookiesArray[f][1] + ' cookies!';
//     }
//   },
//
//   renderData: function(){
//     this.cookiesPurchasedEachHour();
//     for (var i = 0; i < this.cookiesArray.length; i++) {
//       var HourlyLiEl = document.createElement('li');
//       var UlEl = document.getElementById('alki-store');
//       HourlyLiEl.textContent = this.cookiesArray[i];
//       UlEl.appendChild(HourlyLiEl);
//     }
//   }
// };
//
// pike.renderData();
// seaTac.renderData();
// southCenter.renderData();
// bellevueSquare.renderData();
// alki.renderData();
