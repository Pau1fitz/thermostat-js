  var thermostat = new Thermostat();
  $( document ).ready(function() {

  function textColour(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').css('color', thermostat.colour());
  };

  textColour();

  $("#temperature").text(function(){
    return thermostat.temperature
  });

  $("#increase").click(function(){
    thermostat.increase();
    $("#temperature").text(thermostat.temperature)
      textColour();
  });

  $("#decrease").click(function(){
    thermostat.decrease();
    $("#temperature").text(thermostat.temperature)
    textColour();
  });

  $("#powerSaveOn").click(function(){
    thermostat.powerSwitchOn();
    $("#temperature").text(thermostat.temperature)
    $("#toggle").text("On");
    textColour();
  });

  $("#powerSaveOff").click(function(){
    thermostat.powerSwitchOff();
    $("#temperature").text(thermostat.temperature)
    $("#toggle").text("Off");
    textColour();
  });

  $("#reset").click(function(){
    thermostat.resetter();
    $("#temperature").text(thermostat.temperature)
    textColour();
  });

});

