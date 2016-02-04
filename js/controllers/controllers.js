function newGame() {

  $(document).ready( function() {

    $( 'button' ).on( 'click', function() {

      var userInput = prompt( 'Initial research by NASA have narrowed down \nto four possibile planets to migrate to: \nMercury \nVenus \nMars \nJupiter \nPick your target planet!' ).toUpperCase();

      $( '#planetChoice' ).append( '<p>' + userInput + '</p>' );

      //variable survivalOutcome is for determining the chance of survival by 10% increments
      var survivalOutcome = Math.floor( Math.random() * 10 + 1 );

      switch ( userInput ) {

        case 'MERCURY':

          $( '#planetChoice' ).append( '<p>You have picked an uninhabitable planet because it\'s too hot and has no atmostphere. Humanity do not survive.</p>' );

          break;

        case 'VENUS':

          $( '#planetChoice' ).append( '<p>Venus is a harsh planet. \nYou have 10% chance to survive on Venus.</p>');

          var venusChoiceAswr = prompt('Would you like to proceed? \nYes \nNo').toUpperCase();

            if( venusChoiceAswr === "YES" ) {

              var venusSettleAswr = prompt( 'Would you like to settle your spaceship on the planet surface or planet outter atmostphere? \n Your Choice:\nSurface \nOutter atmosphere' ).toUpperCase();

                if ( venusSettleAswr === "SURFACE" ) {

                  $( '#planetChoice' ).append( 'The atmostphere on Venus is too dense, humanity do not survive. Sorry!');

                } else if ( venusSettleAswr === "OUTTER ATMOSPHERE" ) {

                    if ( survivalOutcome === 1 ) {

                      $( '#planetChoice' ).append( 'You had only 10% chance of survival yet you made it! Congratulations!');

                    } else {

                    $( '#planetChoice' ).append( 'You had only 10% chance of survival, and humanity did not survive. Sorry.');

                    }

              } else {

                  $( '#planetChoice' ).append( 'Please enter a valid choice!');

                    //}

                }

            } else if ( venusChoiceAswr === "NO" ) {

              $( '#planetChoice' ).append( '<p>Please pick another planet.</p>' );

            } else {

              $( '#planetChoice' ).append( '<p>Please enter a valid choice.</p>' );

            }

        break;

        default:

          $( '#planetChoice' ).append( '<p>Please pick a valid answer.</p>');

      }
    } );
  } );
};

newGame();
