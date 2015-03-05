var Thermostat = function(){
   this.temperature = 20;
   this.powerSaver = true;
   this.MINTEMP = 10;
   this.maxTemp = 26;
};

Thermostat.prototype.increase = function(){
  if(this.temperature < this.maxTemp){
  return this.temperature += 1}
  else{
    return this.temperature
  };
};

Thermostat.prototype.decrease = function(){
  if(this.temperature > this.MINTEMP){
    return this.temperature -= 1 }
    else{
      return this.temperature
    };
};

Thermostat.prototype.resetter = function(){
  return this.temperature = 20;
};

Thermostat.prototype.powerSwitchOn = function(){
  this.powerSaver = true
  if(this.powerSaver === true){
    this.maxTemp = 26
  };
  this.resetter();
};

Thermostat.prototype.powerSwitchOff = function(){
  this.powerSaver = false
  if(this.powerSaver === false){
    this.maxTemp = 32
  };
};

Thermostat.prototype.colour = function() {
  if (this.temperature < 18) {
    return "green";
  }
  else if (this.temperature > 24)  {
    return "red";
  }
  else{
    return "orange";
  };
};


Thermostat.prototype.colour = function() {
  if (this.temperature < 18) {
    return "green";
  }
  else if (this.temperature > 24)  {
    return "red";
  }
  else{
    return "orange"
  };
};





