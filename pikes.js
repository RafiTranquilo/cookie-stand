var storeHours = [ '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm', 'Totals'];

var newStoreArray = [];
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

StoreList.prototype.makeStoreRows = function() {
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = this.storeName;
  tr.appendChild(th);
  for (var i = 0; i < this.cookiesArray.length - 1; i++) {
    var td = document.createElement('td');
    td.textContent = this.cookiesArray[i];
    tr.appendChild(td);
  }
  var totalCell = document.createElement('td');
  totalCell.textContent = this.dailyTotals;
  tr.appendChild(totalCell);
  appendRows.appendChild(tr);
};

storeObj.push(new StoreList('Pike Place Market', 17, 88, 5.2));
storeObj.push(new StoreList('SeaTac Airport', 6, 24, 1.2));
storeObj.push(new StoreList('Southcenter', 11, 38, 1.9));
storeObj.push(new StoreList('Bellevue Square', 20, 48, 3.3));
storeObj.push(new StoreList('Alki', 3, 24, 2.6));
doStuff(storeObj);

function doStuff(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
    array[i].cookiesPurchasedEachHour();
    array[i].makeStoreRows();
  }
}

function handleStoreEdition(event) {
  console.log(event);
  event.preventDefault();

  var location = event.target.storeLabel.value;
  var min = event.target.minCust.value;
  var max = event.target.maxCust.value;
  var ave = event.target.aveCookies.value;
  var newLocation = new StoreList(location, min, max, ave);

  event.target.storeLabel.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.aveCookies.value = null;

  newStoreArray.push(newLocation);
  doStuff(newStoreArray);
  newStoreArray = [];
}

newStore.addEventListener('submit', handleStoreEdition);
