function Hero(name) {
    if(typeof Hero.instance === 'object') {
      return Hero.instance;
    }

    this.name = name;
    Hero.instance = this;
    return this;
}

var derekHero = Hero("Derek");
document.write("Our Hero is " + derekHero.name + "<br/>");

var paulHero = Hero("Paul");
document.write("Our Hero is " + paulHero.name + "<br/>");
