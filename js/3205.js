$("#exampleInputBday").datepicker();
//$(".socialSecLabel input").mask("999-99-9999");
$('#submit').click(validate);


function validate(evt){
  evt.preventDefault(); // stop button from submitting a form or link from going to a URL
  console.log("Validated!");
  // console.log(this);
  var errorCount = 0; // always start error count at 0
  
  
//  var $target = $(evt.currentTarget);// the element you clicked on
//  var $form = $target.closest('form');
  
  
//  var $nameLabel = $form.find('.nameLabel'); // set the label element to a variable for convinience and readability
//  var $nameInput = $nameLabel.find('input'); // get the input field inside of that label


  var nameVal = $('#exampleInputName').val(); // get the value inside of that field
  
  //alert(birthVal);
  if(nameVal === ''){ // check to see if the input is blank
    $("#exampleInputName").parent().addClass('has-error'); // add the class that shows the error and changes colors
    errorCount++; // add 1 to this number, because this has an error: we'll use this later
      }
  else {
    $("#exampleInputName").parent().removeClass('has-error');
  }

  var wcVal = $('#exampleInputWechat').val(); // get the value inside of that field
  
  //alert(birthVal);
  if(wcVal === ''){ // check to see if the input is blank
    $("#exampleInputWechat").parent().addClass('has-error'); // add the class that shows the error and changes colors
    errorCount++; // add 1 to this number, because this has an error: we'll use this later
      }
  else {
    $("#exampleInputWechat").parent().removeClass('has-error');
  }

   var bdayVal = $('#exampleInputBday').val(); // get the value inside of that field
  
  //alert(birthVal);
  if(bdayVal === ''){ // check to see if the input is blank
    $("#exampleInputBday").parent().addClass('has-error'); // add the class that shows the error and changes colors
    console.log("has error");
    errorCount++; // add 1 to this number, because this has an error: we'll use this later
      }
  else {
    $("#exampleInputBday").parent().removeClass('has-error');
  }
/*
  var emVal = $('#exampleInputEmail').val(); // get the value inside of that field
  
  //alert(birthVal);
  if(emVal === ''){ // check to see if the input is blank
    $("#exampleInputEmail").parent().addClass('has-error'); // add the class that shows the error and changes colors
    console.log("has error");
    errorCount++; // add 1 to this number, because this has an error: we'll use this later
      }
  else {
    $("#exampleInputEmail").parent().removeClass('has-error');
  }
  */
  // check to see if there are any errors in the form
  if(errorCount > 0){
    $('.bg-danger').removeClass('hide');
  }
  else{
  	$('.bg-danger').addClass('hide');
    $('.bg-success').removeClass('hide');
  }
  
}