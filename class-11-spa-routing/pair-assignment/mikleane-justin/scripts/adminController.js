(function(module) {
  var adminController = {};
  Article.fetchAll(articleView.initAdminPage);
  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:
  adminController.index = function() {
    console.log("hello");
    $('main > section').hide();
    $('#admin').show();
  };

  module.adminController = adminController;
})(window);
