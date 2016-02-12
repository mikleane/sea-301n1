(function(module) {
  var repoView = {};

  // DONE: Private methods declared here live only within the scope of the wrapping IIFE.
  var ui = function() {
    var $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  // TODO: How do you want to render a single repo as html? Return your filled in HTML template.
  var render = function(repo) {
    console.log(repo);
    var created = repo.created_at.substring(0,10);
    return $('<li>').html('Project: <a href="' + repo.html_url + '">' + repo.name + '</a>' + '<p>Created: ' + created + '</p>')
  };

  // DONE: If all the data is loaded, we can prep the UI and render the repos.
  repoView.index = function() {
    ui();

    // The jQuery `append` method lets us append an entire array of HTML elements at once,
    // So we can use a little FP to transform our data-set into DOM nodes:
    $('#about ul').append(
      repos.with('has_downloads').map(render)
      // repos.with('has_wiki').map(render)
    );
  };

  module.repoView = repoView;
})(window);
