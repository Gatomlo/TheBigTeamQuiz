const appendButtonToAddTeam = document.getElementById("addTeam");
let actualValue
let actualTeam
let actualBadge

var numberOfTeam = 1;

$( "#addTeam" ).on( "click", function(){
  if (numberOfTeam < 9){
    $('#addTeamModal').modal('show')
  }
});

$( "#addTeamButton" ).on( "click", function(){
  $('#addTeamModal').modal('hide')
  var teamName = $("#teamNameInput").val();
  var div = document.getElementById('listOfTeam');
  switch (numberOfTeam) {
  case 1:
    var color = "#EE5622";
    break;
  case 2:
    var color = "#549BA0";
    break;
  case 3:
    var color = "#F5AF00";
    break;
  case 4:
    var color = "#8F2D56";
    break;
  case 5:
    var color = "#537D3B";
    break;
  case 6:
    var color = "#927790";
    break;
  case 7:
    var color = "#493B2A";
    break;
  case 8:
    var color = "#083D77";
}
  div.innerHTML +=     '<div data-value=0 class="row team" style="background-color:'+color+'" ><div class="col-10">'+numberOfTeam+'° '+teamName+'</div><div value="0" class="col-2 pointBadge"><span class="badge text-bg-success">0</span></div></div>';
  numberOfTeam += 1;
  $("#teamNameInput").val('');
});

$(document).on('click','.team',  function(e){
  actualTeam = $(this)
  actualValue = $(this).data('value')
  e.preventDefault();
  $('#addPointModal').modal('show')
});

$(".addPointButton").on("click",function(){
  var pointToAdd =$(this).data('point')
  actualValue += pointToAdd
  actualTeam.data("value",actualValue)
  $('#addPointModal').modal('hide')
  actualTeam.find(".badge").html(actualValue)
})

$(".manualPointButton").on("click",function(){
  $(".manualPointModal").append('<div class="modal-footer"><input type="text" class="form-control" id="manualPointInput"><button type="button" id="addManualPointButton" class="addManualPointButton btn btn-success">Ajouter</button></div>')
})
