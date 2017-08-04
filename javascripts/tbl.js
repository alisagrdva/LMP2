var myData = {
  "one": "0px",
  "two": "0px",
  "three": "0px",
  "four": "0px",
  "str": ""
}

var borderApp = new Vue({
  el: "#name",
  data: myData,
  methods: {
    validVal: function(myData) {
      //work in progress
    },
    myClickHandler: function(e) {
      var str = "";
      str += myData.one + " " + myData.two  + " " + myData.three + " " + myData.four;
      $(".circle").css("border-radius", str);
      myData.str = "border-radius: " + str;
    },
    clearIt: function(e) {
      $(e.toElement).val('');
    }
  }
});
