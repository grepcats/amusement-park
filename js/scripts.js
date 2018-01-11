$(document).ready(function() {
  var height = parseInt(prompt("Please tell us your height in inches"));
  //if you are below 48 inches you should be abel to ride rides with no lower limit (no-low-limit)
  //if you are between 48-53 inches you should be able to ride rides that are "you must be 48 iches to ride" (short)
  //if you are between 54-77 inches you shoud be able to ride "you must be 54 i nches to ride" AND "48 inches" (all rides)
  //if you are above 78 inches you should be able to ride "54", "48", but there may be some rides you can't ride" (all rides, hide too tall)

  if (height < 48 ) {
    $(".no-low-rest").show();
  } else if (height >=48 && height < 54) {
    $(".short").show();
  } else if (height >=54 && height < 77) {
    $(".ride").show();
  } else if (height >= 78) {
    $(".ride").show();
    $(".too-tall").hide();
  } else {
    $(".no-low-rest").show();
  }
});
