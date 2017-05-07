const getToneMatchScore = (response, doc, tones = []) => {
	let score = 0;
	tones.map((tone) => {
		if(response[tone]){score = score + Math.sqrt(Math.pow(doc[tone].score - response[tone].score, 2));};
	});
	// score = score * Math.pow(score, -1);
	return score;
}

module.exports = getToneMatchScore;