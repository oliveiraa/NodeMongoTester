function insert(user){
  $.post('/mongo/insert',user,function(data){
    console.log(data);
  });
};

function update(user){
  $.post('/mongo/update',user,function(data){
    console.log(data);
  });
};

function remove(user){
  $.post('/mongo/delete',user,function(data) {
    console.log(data);
  });
};

function select(){
  $.get('/mongo/query',function(data){
    $(data).each(function(index,item){
      console.log(item);
    });
  });
};

$(function() {
  $('#btnSend').click(function(event) {
    event.preventDefault();
    var user = {};
    user._id = $('#txtId').val();
    user.name = $('#txtName').val();
    user.description = $('#txtDescription').val();
    var data = {};
    data.user = user;

    switch($('#sOperation').val()) {
      case 'insert': insert(data);
        break;
      case 'update': update(data);
        break;
      case 'remove': remove(data);
        break;

      case 'select': select();
        break;
    };

//    $.post(url, data, function(data) {
//      console.log(data);
//    });
  });
});
