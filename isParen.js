// eval how many '()' strings there are in a string
// better way would be to search for total number of '(' chars and see if the next char is ')'

function numOfParen (string) {
	lengthOfString = string.length
	totalNumOfParen = 0
	parenLocations = []
	for (i = 0; i < lengthOfString; i++) {
		if (string[i] == '(' && string[i + 1] == ')') {
			totalNumOfParen++
			
			parenLocations.push(`Pair Num: ${totalNumOfParen}, Starting ( at index[${i}], Ending ) at index[${ i + 1 }]`)
		} 
	}
	console.log(parenLocations)
	return parenLocations = []
}


string1 = "I can't say I blame them () this is the () first time () we seen this!"
string2 = "I can't say I blame them () this is the () first time () we seen this! ()  ()  09() )(()"
numOfParen(string1)
numOfParen(string2)
