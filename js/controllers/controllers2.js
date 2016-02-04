function newGame() {
  $(document).ready(function() {
      $('button').click(function() {
      var userInput = prompt("We have done our research, and have narrowed down \n to four possibile planets to migrate to: \nMercury \nVenus \nMars \nJupiter \nPick your target planet!");
      $('#planetChoice').append("<p>"+userInput+"</p>")
      });
//variable survivalOutcome is for determining the chance of survival by 10% increments
      var survivalOutcome =  Math.floor(Math.random() * 10 + 1);
      switch (userInput) {
        case 'Mercury':
        //below '.append' does not work
          $('#planetChoice').append("<p>"+"You have picked an uninhabitable planet because it's too hot and has no atmostphere. Please try again."+"</p>");
        //this prompt does not show up
          var mercuryAnswer1 = prompt("Would you like to settle your spaceship on the planet surface or planet outter atmostphere? \n Your Choice:\nSurface \nOutter atmostphere").toUpperCase();
            if(mercuryAnswer1 === "SURFACE"){
              console.log("Human race has no chance of survival because of dense atmostphere and extremely high temperature");
            else if(mercuryAnswer1 === "OUTTER ATMOSPHERE"){
              if(survivalOutcome === 1){
                console.log("Human race have survived");
              } else {
                console.log("Human race are now extinct");
              };
            } else {
              console.log("Please pick a valid answer!");
            };
          break;
        case 'Venus':
         console.log("Difficult choice. Human race has a small chance of survival.")
         break;
       case 'Mars':
         console.log("Human race has a good chance of survival.")
         break;
       case 'Jupiter':
         console.log("There is no floor on this planet cos it's entirely made of gas. Human race cannot survive on it. Please try again.")
        default:
         console.log("Please pick a valid answer!")
      };



  });
};

newGame();
