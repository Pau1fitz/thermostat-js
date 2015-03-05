
 describe('Thermostat', function(){

  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has an initial temperature of 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20)
  });

  it('can increase temperature', function(){
    expect(thermostat.temperature).toEqual(20);
    thermostat.increase();
    expect(thermostat.temperature).toEqual(21);
  });

  it('can decrease temperature', function(){
    expect(thermostat.temperature).toEqual(20);
    thermostat.decrease();
    expect(thermostat.temperature).toEqual(19);
  });

  it('has a minimum temperature of 10', function(){
    while(thermostat.temperature > 10) {
      thermostat.decrease();
    };
    expect(thermostat.temperature).toEqual(10);
    thermostat.decrease();
    expect(thermostat.temperature).toEqual(10);
  });

  it('has a maximum temperature of 32 degrees', function(){
    thermostat.powerSwitchOff();
    while(thermostat.temperature < 32) {
      thermostat.increase();
    };
    expect(thermostat.temperature).toEqual(32);
    thermostat.increase();
    expect(thermostat.temperature).toEqual(32);
  });

  it('has a resetter button that resets temperature to twenty', function(){
    thermostat.resetter();
    expect(thermostat.temperature).toEqual(20)
  });

  it('turns green if temp less than 18', function(){
    while(thermostat.temperature > 12){
      thermostat.decrease();
    }
    expect(thermostat.colour()).toEqual("green");
  });

  it('turns red if temp more than 24', function(){
    while(thermostat.temperature < 25){
      thermostat.increase();
    }
    expect(thermostat.colour()).toEqual("red");
  });

  it('turns orange if temp more is 20', function(){
    expect(thermostat.colour()).toEqual("orange");
  });

});


describe('Powersaver', function(){

  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('is switched on by default', function(){
    expect(thermostat.powerSaver).toEqual(true);
  });

  it('can be switched off', function(){
    expect(thermostat.powerSaver).toEqual(true);
    thermostat.powerSwitchOff();
    expect(thermostat.powerSaver).toEqual(false);
  });

  it('can be switched back on', function(){
    thermostat.powerSwitchOff();
    thermostat.powerSwitchOn();
    expect(thermostat.powerSaver).toEqual(true);
  });

  it('if on has max temp of 25 degrees', function(){
    while(thermostat.temperature < 24) {
      thermostat.increase();
    };
    thermostat.increase();
    thermostat.increase();
    thermostat.increase();
    expect(thermostat.temperature).toEqual(26)
  });

  it('switched on when temperature greater than 25 reset', function(){
    thermostat.powerSwitchOff();
    while(thermostat.temperature < 25) {
      thermostat.increase();
    };
    thermostat.powerSwitchOn();
    expect(thermostat.temperature).toEqual(20);
  });

});





