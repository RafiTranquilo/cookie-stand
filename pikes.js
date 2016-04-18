
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

  // totalCustomersEachHour: function(){
  //   for (i = 0; i < 14; i++) {
  //     var totalCustomersEachHourDaily = this.totalCustomersEachHour();
  //     this.customerArray.push(totalCustomersEachHourDaily);
};
