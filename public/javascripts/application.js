$(document).ready(function () {
  console.log("added application js");

  $('#input_url').on('submit', function (e) {
    e.preventDefault();
    var url = $('form input').val();
    console.log(url);

    $.ajax({
      url:'/articles',
      type: 'post',
      data: {url: url}
    }, function(data) {
      console.log("im in public/js", "post to articles...");
    });
  });

  $('#destroy_db').on('click', function(e) {
    e.preventDefault();

    $.ajax({
      url: '/keywords',
      type: 'delete',
    }, function(data) {
      console.log("deleted!");
    });
  });

  $('#twitter').on('click', function(e) {
    e.preventDefault();

    $tableBody = $('tbody');
    console.log("im inside add tweet in application.js");
    $.getJSON('/twitter/SenSanders', { CategoryId: 3 }, function(data) {
      data.tweets.forEach(function(tweet) {
        console.log(tweet);
        var urls = tweet.entities.urls;
        if (urls[0]) {
          console.log(urls[0].expanded_url);
        }
        
        $tableBody.append(`<tr><td>${tweet.text}</td></tr>`);
      });
    });
  });

  var $categories_list = $('#categories_list');

  $.getJSON('categories', function(data) {
    data.categories.forEach(function (category) {
      console.log("im in the forEach application.js")
      $categories_list.append(`<button class="category">${category.name}</button>`);
    })
  });


  var $accounts_list = $('#accounts_list');
  
  // $.getJSON('categories/1/accounts', function(data) {
  //   data.accounts.forEach(function (account) {
  //     $accounts_list.append(`<button>${account.screen_name}</button>`);
  //   });
  // });

  // $.getJSON('categories/2/accounts', function(data) {
  //   data.accounts.forEach(function (account) {
  //     $accounts_list.append(`<button>${account.screen_name}</button>`);
  //   });
  // });

  // $.getJSON('categories/3/accounts', function(data) {
  //   data.accounts.forEach(function (account) {
  //     $accounts_list.append(`<button>${account.screen_name}</button>`);
  //   });
  // });



  // $('.category').on('click', function(e) {
  //   var category = $(this).text();

  //   $.get
  // });
});