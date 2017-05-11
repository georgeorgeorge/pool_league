var getNewRating;


var George	= 400,
	Mardo	= 400,
	Baker	= 400,
	Claire	= 400,
	Tom		= 400,
	Dan		= 400,
	Steve	= 400,
	Emilio	= 400,
	Elise	= 400,
	Tanya	= 400,
	Sophia	= 400,
	Emma	= 400;

var results = Array(
	{ winner: 'George', loser: 'Emilio' },
	{ winner: 'Mardo', loser: 'Sophia' },
	{ winner: 'Baker', loser: 'Elise' },
	{ winner: 'George', loser: 'Emma' },
	{ winner: 'Baker', loser: 'Sophia' },
	{ winner: 'George', loser: 'Elise' },
	{ winner: 'Emilio', loser: 'Baker' },
	{ winner: 'Mardo', loser: 'Emma' }
);

var gamesPlayed = results.length;

for (var i = 0; i < gamesPlayed; i++) {
	
	// Player Names
	var winnersName = results[i]['winner'];
	var losersName = results[i]['loser'];
	
    // Winning score result
    var winnersScoreBefore = eval(results[i]['winner']);
    var losersScoreBefore = eval(results[i]['loser']);
    
    // Score Generator
    var chanceToWin = 1 / ( 1 + Math.pow(10, (losersScoreBefore - winnersScoreBefore) / 400));
    var gameScore = Math.round(32 * (1 - chanceToWin));
    
    // New Scores
    var winnersScoreAfter = winnersScoreBefore + gameScore;
    var losersScoreAfter = losersScoreBefore - gameScore;
    
    // Update Winner
    if(winnersName === 'George') {
	    George = winnersScoreAfter;
    } else if(winnersName == 'Mardo') {
	    Mardo = winnersScoreAfter;
    } else if(winnersName == 'Baker') {
	    Baker = winnersScoreAfter;
    } else if(winnersName == 'Claire') {
	    Claire = winnersScoreAfter;
    } else if(winnersName == 'Tom') {
	    Tom = winnersScoreAfter;
    } else if(winnersName == 'Steve') {
	    Steve = winnersScoreAfter;
    } else if(winnersName == 'Emilio') {
	    Emilio = winnersScoreAfter;
    } else if(winnersName == 'Elise') {
	    Elise = winnersScoreAfter;
    } else if(winnersName == 'Tanya') {
	    Tanya = winnersScoreAfter;
    } else if(winnersName == 'Sophia') {
	    Sophia = winnersScoreAfter;
    } else if(winnersName == 'Emma') {
	    Emma = winnersScoreAfter;
    } else if(winnersName == 'Dan') {
	    Dan = winnersScoreAfter;
    }
    
    // Update Loser
     if(losersName === 'George') {
	    George = losersScoreAfter;
    } else if(losersName == 'Mardo') {
	    Mardo = losersScoreAfter;
    } else if(losersName == 'Baker') {
	    Baker = losersScoreAfter;
    } else if(losersName == 'Claire') {
	    Claire = losersScoreAfter;
    } else if(losersName == 'Tom') {
	    Tom = losersScoreAfter;
    } else if(losersName == 'Steve') {
	    Steve = losersScoreAfter;
    } else if(losersName == 'Emilio') {
	    Emilio = losersScoreAfter;
    } else if(losersName == 'Elise') {
	    Elise = losersScoreAfter;
    } else if(losersName == 'Tanya') {
	    Tanya = losersScoreAfter;
    } else if(losersName == 'Sophia') {
	    Sophia = losersScoreAfter;
    } else if(losersName == 'Emma') {
	    Emma = losersScoreAfter;
    } else if(losersName == 'Dan') {
	    Dan = losersScoreAfter;
    }
    
}

var playersLeague = [];

playersLeague.push(
	{ label: 'George', value: George },
	{ label: 'Mardo', value: Mardo },
	{ label: 'Baker', value: Baker },
	{ label: 'Claire', value: Claire },
	{ label: 'Tom', value: Tom },
	{ label: 'Steve', value: Steve },
	{ label: 'Emilio', value: Emilio },
	{ label: 'Elise', value: Elise },
	{ label: 'Tanya', value: Tanya },
	{ label: 'Sophia', value: Sophia },
	{ label: 'Emma', value: Emma },
	{ label: 'Dan', value: Dan }
);

playersLeague.sort(function (a, b) {
  return b.value - a.value;
});

var leagueStanding = playersLeague.length;

for (var i = 0; i < leagueStanding; i++) {
	console.log(i+1 + ': ' + playersLeague[i]['value'] + ' = ' + playersLeague[i]['label']);
}


