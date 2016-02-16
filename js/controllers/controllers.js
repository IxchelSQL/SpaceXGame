function newGame() {

    $(document).ready(function () {

        $('button').on('click', function () {

                var userInput = prompt('Initial research by NASA have narrowed down \nto four possibile planets to migrate to: \nMercury \nVenus \nMars \nJupiter \nPick your target planet!').toUpperCase();

                $('#planetChoice').append('<p>' + userInput + '</p>');

                //variable survivalOutcome is for determining the chance of survival by 10% increments
                var survivalOutcome = Math.floor(Math.random() * 10 + 1);

                switch (userInput) {

                    case 'MERCURY':

                        $('#planetChoice').append('<p>You have picked an uninhabitable planet because it\'s too hot and has no atmostphere. Humanity do not survive.</p>');

                        break;

                    case 'VENUS':

                        $('#planetChoice').append('<p>Venus is a harsh planet. \nYou have 10% chance to survive on Venus.</p>');

                        var venusChoiceAswr = prompt('Would you like to proceed? \nYes \nNo').toUpperCase();

                        if (venusChoiceAswr === "YES") {

                            var venusSettleAswr = prompt('Would you like to settle your spaceship on the planet surface or planet outter atmostphere? \n Your Choice:\nSurface \nOutter atmosphere').toUpperCase();

                            if (venusSettleAswr === "SURFACE") {

                                $('#planetChoice').append('The atmostphere on Venus is too dense, humanity do not survive. Sorry!');

                            } else if (venusSettleAswr === "OUTTER ATMOSPHERE") {

                                if (survivalOutcome === 1) {

                                    $('#planetChoice').append('You had only 10% chance of survival yet you made it! Congratulations!');

                                } else {

                                    $('#planetChoice').append('You had only 10% chance of survival, and humanity did not survive. Sorry.');

                                }

                            } else {

                                $('#planetChoice').append('Please enter a valid choice or check your spelling.');

                            }

                        } else if (venusChoiceAswr === "NO") {

                            $('#planetChoice').append('<p>Please pick another planet.</p>');

                        } else {

                            $('#planetChoice').append('<p>Please enter a valid choice.</p>');

                        }

                        break;

                    case 'MARS':

                        $('#planetChoice').append('<p>Mars is our best bet. \nYou have 90% chance to survive on Mars.</p>');

                        var marsChoiceAswr = prompt('Would you like to proceed? \nYes \nNo').toUpperCase();

                        if (marsChoiceAswr === "YES") {

                            var marsSettleAswr = prompt('How would you like to proceed for your Mars colonisation? \n Your Choice:\nHab \nGlass Tank City \nRover Park').toUpperCase();

                            if (marsSettleAswr === "HAB") {

                                if (survivalOutcome < 9) {

                                    $('#planetChoice').append('You had 80% chance survival with Hab option and you made it! Congratulations!');

                                } else {

                                    $('#planetChoice').append('You had 80% chance for survival Hab option but and unlikely glitch caused the Hab to blow up. Humanity did not survive.');

                                }

                            } else if (marsSettleAswr === "GLASS TANK CITY") {

                                if (survivalOutcome < 6) {

                                    $('#planetChoice').append('You had 50% chance of survival with Glass Tank City and you made it! Humanity survives!');

                                } else {

                                    $('#planetChoice').append('You had only 50% chance of survival with Glass Tank City, but there was a breach that eterminated humanity. Sorry!');

                                }

                            } else if (marsSettleAswr === "ROVER PARK") {

                                if (survivalOutcome < 4) {

                                    $('#planetChoice').append('You had 30% chance of survival with Rover Parks, and humanity made it through hard work and good luck! Congratulations!');

                                } else {

                                    $('#planetChoice').append('You had 30% chance of survival with Rover Parks, humanity tried their best, but did not survive.');

                                }

                            }
                        } else if (marsChoiceAswr === "NO") {

                            $('#planetChoice').append('<p>So you like risk! Please pick another planet.</p>');

                        } else {

                            $('#planetChoice').append('Please enter a valid choice or check your spelling.');

                        }

                        break;

                    case "JUPITER":

                        $('#planetChoice').append('<p>Dude. Seriously? This planet is entirely made of gas. Humanity is dead.</p>');

                        break;

                    default:

                        $('#planetChoice').append('<p>Please pick a valid answer.</p>');

                }
            }
        );
    });
};

newGame();
