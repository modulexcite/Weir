var Weir = require("./Module")

Weir.directive("preventDefault", function() {
  return {
    restrict: "A",
    link: function(scope, element) {
      element.bind("click", function(e) {
        if (e.which == 1) e.preventDefault();
      });
    }
  }
});