var storeHours = [ '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm', 'Totals'];

var storeObj = [];
var appendHead = document.getElementById('store-hours');
var appendRows = document.getElementById('store-data');

function StoreList (storeName, custMin, custMax, cookiesPerCustomer) {
  this.storeName = storeName;
  this.custMin = custMin;
  this.custMax = custMax;
  this.cookiesPerCustomer = cookiesPerCustomer;
  this.cookiesArray = [];
  this.dailyTotals = 0;
  // storeObj.push(this);
  this.custPerHour = function(){
    return Math.floor(Math.random() * (this.custMax - this.custMin + 1)) + this.custMin;
    console.log(custPerHour());
  };
  this.cookiesPurchasedPerHour = function(){
    return Math.floor((this.custPerHour()) * this.cookiesPerCustomer);
    console.log('this is ' + cookiesPurchasedPerHour());
  };
  this.cookiesPurchasedEachHour = function(){
    for (i = 0; i < storeHours.length - 1; i++) {
      var cookiesPurchasedPerHourDaily = this.cookiesPurchasedPerHour();
      // console.log(cookiesPurchasedPerHourDaily);
      this.cookiesArray.push(cookiesPurchasedPerHourDaily);
      // console.log(this.cookiesArray);
      this.dailyTotals += this.cookiesArray[i];
    }
    this.cookiesArray.push(this.dailyTotals);

    // for(var f = 0; f < this.cookiesArray.length; f++){
    //   this.cookiesArray[f] = this.cookiesArray[f][0] + ': ' + this.cookiesArray[f][1] + ' cookies!';
    // }
  };
}

function makeHeader(arry) {
  var tr = document.createElement('tr');
  var blankCell = document.createElement('th');
  tr.appendChild(blankCell);
  for (var i = 0; i < arry.length; i++) {
    var th = document.createElement('th');
    th.textContent = arry[i];
    tr.appendChild(th);
  }
  appendHead.appendChild(tr);
}

makeHeader(storeHours);

function makeStoreRows(store) {
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = store.storeName;
  tr.appendChild(th);
  for (var i = 0; i < store.cookiesArray.length - 1; i++) {
    var td = document.createElement('td');
    td.textContent = store.cookiesArray[i];
    tr.appendChild(td);
  }
  var totalCell = document.createElement('td');
  totalCell.textContent = store.dailyTotals;
  tr.appendChild(totalCell);
  appendRows.appendChild(tr);
}

storeObj.push(new StoreList('Pike Place Market', 17, 88, 5.2));
storeObj.push(new StoreList('SeaTac Airport', 6, 24, 1.2));
storeObj.push(new StoreList('Southcenter', 11, 38, 1.9));
storeObj.push(new StoreList('Bellevue Square', 20, 48, 3.3));
storeObj.push(new StoreList('Alki', 3, 24, 2.6));
doStuff();

function doStuff() {
  for (var i = 0; i < storeObj.length; i++) {
    console.log(storeObj[i]);
    storeObj[i].cookiesPurchasedEachHour();
    makeStoreRows(storeObj[i]);
  }
}
