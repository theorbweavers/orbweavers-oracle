
const dotenv = require('dotenv');
const watson = require('watson-developer-cloud');
const getToneMatchScore = require('./test-tone');
const sentences = require('./data/song-data.json').sentences;

const ENV = process.env.NODE_ENV || 'development';
if(ENV === 'development'){
	dotenv.config();
}


const toneAnalyzer = watson.tone_analyzer({
	username: process.env.WATSON_USERNAME,
	password: process.env.WATSON_PASSWORD,
	version: 'v3',
	version_date: '2016-05-19 '
});

const processTone = (phraseTone) => {

};

const processDocument = (song) => {

	// let documentTone = song.watsonToneStatistics.document_tone;
	// let documentJson = {}
	// documentJson.title = song.title;
	// documentJson.recordingId = song.id;
	// documentJson.tones = getEmotionTones(documentTone);
	// songs.push(documentJson);

	// song.watsonToneStatistics.sentences_tone.map((sentence) => {
	// 	if(sentence.text){
	// 		let sentenceJson = {}
	// 		sentenceJson.title = song.title;
	// 		sentenceJson.recordingId = song.id;
	// 		sentenceJson.text = sentence.text;
	// 		sentenceJson.tones = getEmotionTones(sentence);;
	// 		sentences.push(sentenceJson);
	// 	}
	// });

};

const getEmotionTones = (masterTone) => {
	let emotionTone = masterTone.tone_categories.filter((tone) => {
		return tone.category_id === 'emotion_tone';
	});

	let toneObject = {};
	
	if(emotionTone.length){
		
		emotionTone[0].tones.map(tone => {
			toneObject[tone.tone_id] = {score: tone.score};
		});
	}
	return toneObject;
};
const processPhrase = (phrase) => {
	toneAnalyzer.tone({ text: phrase },
		function(err, tone) {
			if (err){
				console.log(err);
			} else {
				// console.log('tone --- ', getEmotionTones(tone.document_tone));
				let phraseTone = getEmotionTones(tone.document_tone);
				let sortedSentences = sortSentences(phraseTone);
				console.log('doc tone', sortedSentences[0].text);
			
			}
	});
};

const sortSentences = (phraseTone) => {
	let sortedSentences = sentences.sort((a, b) => {
		let scoreA = getToneMatchScore(phraseTone, a.tones);
		let scoreB = getToneMatchScore(phraseTone, b.tones);
		return scoreA - scoreB;
	});
	return sortedSentences;
};
processPhrase('it was a dark night and the hail flew fiercly');
// 'into the darkness'

processPhrase('tell me about a time I flew home');
// processPhrase('am i alone in this world');
// processPhrase('help I am dying');
processPhrase('it is fern\'s birthday');

processPhrase('when will i die?');