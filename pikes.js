var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var pike = {
  custMin:17,
  custMax:88,
  cookiesPerCustomer:5.2,
  storeName: 'Pike Place',
  cookiesArray:[],
  dailyTotals:0,

  custPerHour: function(){
    return Math.floor(Math.random() * (this.custMax - this.custMin + 1)) + this.custMin;
    console.log(custPerHour());
  },
  cookiesPurchasedPerHour: function(){
    return Math.floor((this.custPerHour()) * this.cookiesPerCustomer);
    console.log('this is ' + cookiesPurchasedPerHour());
  },

  cookiesPurchasedEachHour: function(){
    for (i = 0; i < 14; i++) {
      var cookiesPurchasedPerHourDaily = this.cookiesPurchasedPerHour();
      console.log(cookiesPurchasedPerHourDaily);
      this.cookiesArray.push(cookiesPurchasedPerHourDaily);
      this.dailyTotals += this.cookiesArray[i];
    }
  },

  renderData: function(){
    var storeList = document.createElement('li');
  }
};

for(var i = 0; i < 15; i++) {
  var time = document.createElement('li');
  var pikeText = document.createTextNode(storeHours[i] + ' - ' + pike.cookiesArray[i]);
  // time.textContent = storeHours[i] + ' - ' + pike.cookiesArray[i];
  // document.getElementById('pikeStore');
  // pikeText.appendChild(time);
}

var seaTac = {
  custMin:6,
  custMax:24,
  cookiesPerCustomer:1.2,
  storeName: 'SeaTac Airport',
  cookiesArray:[],
  dailyTotals:0,

  custPerHour: function(){
    return Math.floor(Math.random() * (this.custMax - this.custMin + 1)) + this.custMin;
    console.log(custPerHour());
  },
  cookiesPurchasedPerHour: function(){
    return Math.floor((this.custPerHour()) * this.cookiesPerCustomer);
    console.log('this is ' + cookiesPurchasedPerHour());
  },

  cookiesPurchasedEachHour: function(){
    for (i = 0; i < 14; i++) {
      var cookiesPurchasedPerHourDaily = this.cookiesPurchasedPerHour();
      console.log(cookiesPurchasedPerHourDaily);
      this.cookiesArray.push(cookiesPurchasedPerHourDaily);
      this.dailyTotals += this.cookiesArray[i];
    }
  },

  renderData: function(){
    var storeList = document.createElement('li');
  }
};

for(var i = 0; i < 15; i++) {
  var time = document.createElement('li');
  var seaTacText = document.createTextNode(storeHours[i] + ' - ' + seaTac.cookiesArray[i]);
  // time.textContent = storeHours[i] + ' - ' + pike.cookiesArray[i];
  // document.getElementById('pikeStore');
  // seaTacText.appendChild(time);
}

var southCenter = {
  custMin:11,
  custMax:38,
  cookiesPerCustomer:1.9,
  storeName: 'Southcenter',
  cookiesArray:[],
  dailyTotals:0,

  custPerHour: function(){
    return Math.floor(Math.random() * (this.custMax - this.custMin + 1)) + this.custMin;
    console.log(custPerHour());
  },
  cookiesPurchasedPerHour: function(){
    return Math.floor((this.custPerHour()) * this.cookiesPerCustomer);
    console.log('this is ' + cookiesPurchasedPerHour());
  },

  cookiesPurchasedEachHour: function(){
    for (i = 0; i < 14; i++) {
      var cookiesPurchasedPerHourDaily = this.cookiesPurchasedPerHour();
      console.log(cookiesPurchasedPerHourDaily);
      this.cookiesArray.push(cookiesPurchasedPerHourDaily);
      this.dailyTotals += this.cookiesArray[i];
    }
  },

  renderData: function(){
    var storeList = document.createElement('li');
  }
};

for(var i = 0; i < 15; i++) {
  var time = document.createElement('li');
  var southText = document.createTextNode(storeHours[i] + ' - ' + southCenter.cookiesArray[i]);
  // time.textContent = storeHours[i] + ' - ' + pike.cookiesArray[i];
  // document.getElementById('pikeStore');
  // southText.appendChild(time);
}

var bellevue = {
  custMin:20,
  custMax:48,
  cookiesPerCustomer:3.3,
  storeName: 'Bellevue Square',
  cookiesArray:[],
  dailyTotals:0,

  custPerHour: function(){
    return Math.floor(Math.random() * (this.custMax - this.custMin + 1)) + this.custMin;
    console.log(custPerHour());
  },
  cookiesPurchasedPerHour: function(){
    return Math.floor((this.custPerHour()) * this.cookiesPerCustomer);
    console.log('this is ' + cookiesPurchasedPerHour());
  },

  cookiesPurchasedEachHour: function(){
    for (i = 0; i < 14; i++) {
      var cookiesPurchasedPerHourDaily = this.cookiesPurchasedPerHour();
      console.log(cookiesPurchasedPerHourDaily);
      this.cookiesArray.push(cookiesPurchasedPerHourDaily);
      this.dailyTotals += this.cookiesArray[i];
    }
  },

  renderData: function(){
    var storeList = document.createElement('li');
  }
};

for(var i = 0; i < 15; i++) {
  var time = document.createElement('li');
  var belleText = document.createTextNode(storeHours[i] + ' - ' + bellevue.cookiesArray[i]);
  // time.textContent = storeHours[i] + ' - ' + pike.cookiesArray[i];
  // document.getElementById('pikeStore');
  // belleText.appendChild(time);
}

var alki = {
  custMin:3,
  custMax:24,
  cookiesPerCustomer:2.6,
  storeName: 'Alki',
  cookiesArray:[],
  dailyTotals:0,

  custPerHour: function(){
    return Math.floor(Math.random() * (this.custMax - this.custMin + 1)) + this.custMin;
    console.log(custPerHour());
  },
  cookiesPurchasedPerHour: function(){
    return Math.floor((this.custPerHour()) * this.cookiesPerCustomer);
    console.log('this is ' + cookiesPurchasedPerHour());
  },

  cookiesPurchasedEachHour: function(){
    for (i = 0; i < 14; i++) {
      var cookiesPurchasedPerHourDaily = this.cookiesPurchasedPerHour();
      console.log(cookiesPurchasedPerHourDaily);
      this.cookiesArray.push(cookiesPurchasedPerHourDaily);
      this.dailyTotals += this.cookiesArray[i];
    }
  },

  renderData: function(){
    var storeList = document.createElement('li');
  }
};

for(var i = 0; i < 15; i++) {
  var time = document.createElement('li');
  var alkiText = document.createTextNode(storeHours[i] + ' - ' + alki.cookiesArray[i]);
  // time.textContent = storeHours[i] + ' - ' + pike.cookiesArray[i];
  // document.getElementById('pikeStore');
  // alkiText.appendChild(time);
}
