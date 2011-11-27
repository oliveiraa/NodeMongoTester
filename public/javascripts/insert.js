function insert(user){
  console.log('Inserting : ' + user.name);
};

function update(user){
 console.log('Updating : ' + user);
};

function remove(user){
  console.log('Deleting : ' + user);
};

function select(){
  console.log('Selecting')
};

$(function() {
  $('#btnSend').click(function(event) {
    event.preventDefault();
    var user = {};
    user.id = $('#txtId').val();
    user.name = $('#txtName').val();
    user.description = $('#txtDescription').val();

    switch($('#sOperation').val()) {
      case 'insert': insert(user);
        break;
      case 'update': update(user);
        break;
      case 'remove': remove(user);
        break;

      case 'select': select();
        break;
    };

//    $.post(url, data, function(data) {
//      console.log(data);
//    });
  });
});
