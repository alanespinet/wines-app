(function(){

  // SEARCH ACTION
  $('#search-btn').on('click', function(){
    var year = $('#search').val();

    if(year === '') {
      alert('please write a year to find...');
      return;
    }

    if(year === '*') {
      location.href = `#!/wines`;
      alert(`Filter was removed. ALL data is now visible.`);
      $('#search').val('');
      return;
    }

    location.href = `#!/wine/${year}`;
    alert(`Filter by Year: (${year}) was correctly applied.`);
  });


  // ADD ACTION
  $('#add-btn').on('click', function(){
    location.href = `#!/add`;
    $('body').css('height', '1300px');
  });


  // ADD REQUEST END
  $('#main-content').on('click', '#add-wine-button', function(){
    alert('The data was INSERTED succesfully');
    location.href = `#!/wines`;
  });


  // DELETE REQUEST END
  $('#main-content').on('click', '#delete-wine', function(e){
    e.preventDefault();
    alert('The data was DELETED succesfully');
    location.href = `#!/wines`;
  });


  // OVERLAY SHOW AND HIDE
  $('#main-content').on('click', '.wine-image', function(e){
    e.preventDefault();
    var img = $(this).attr('ng-href');
    $('#overlay img').attr('src', img);
    $('#overlay').css('display', 'flex');
  });


  // I use .off here to prevent multiple event clicks asigned to #overlay
  $('#overlay').off('click').on('click', function(){
    $('#overlay').css('display', 'none');
  });

})();
