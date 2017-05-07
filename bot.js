/* global require, module, console */
const dotenv = require('dotenv');
const watson = require('watson-developer-cloud');
const sentences = require('./data/song-data.js').sentences;
const getToneMatchScore = require('./lib/tone-match-analyser.js');

const testTones = [
	'anger',
	'disgust',
	'fear',
	'joy',
	'sadness',
	'openness_big5',
	// 'conscientiousness_big5',
	// 'extraversion_big5',
	// 'agreeableness_big5',
	'emotional_range_big5',
	'analytical',
	'confident',
	'tentative'
];

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

const getEmotionTones = (masterTone) => {

	let emotionTone = masterTone.tone_categories.filter((tone) => {
		return tone.category_id === 'emotion_tone';
	});

	let toneObject = {};
	
	if(emotionTone.length){
		emotionTone[0].tones.map(tone => {
			toneObject[tone.tone_id] = { score: tone.score };
		});
	}
	return toneObject;
};

const getTones = (masterTone) => {
	let toneObject = {};

	let emotionTone = masterTone.tone_categories.filter((tone) => {
		return tone.category_id === 'emotion_tone';
	});
	
	if(emotionTone.length){
		emotionTone[0].tones.map(tone => {
			toneObject[tone.tone_id] = {score: tone.score};
		});
	}

	let socialTone = masterTone.tone_categories.filter((tone) => {
		return tone.category_id === 'social_tone';
	});
	
	if(socialTone.length){
		socialTone[0].tones.map(tone => {
			toneObject[tone.tone_id] = {score: tone.score};
		});
	}

	let languageTone = masterTone.tone_categories.filter((tone) => {
		return tone.category_id === 'language_tone';
	});
	
	if(languageTone.length){
		languageTone[0].tones.map(tone => {
			toneObject[tone.tone_id] = {score: tone.score};
		});
	}

	return toneObject;
};

const processPhrase = (phrase, cb) => {
	toneAnalyzer.tone({ text: phrase },
		(err, tone) => {
			if (err){
				console.log(err);
			} else {

				// let phraseTone = getEmotionTones(tone.document_tone);
				let phraseTone = getTones(tone.document_tone);
				let sortedSentences = sortSentences(phraseTone);

				if(cb) {
					let index = getRandom(3);
					cb(sortedSentences[index].text);
				}
			}
	});
};

const getRandom = (max, min = 0) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const sortSentences = (phraseTone) => {
	let sortedSentences = sentences.sort((a, b) => {
		let scoreA = getToneMatchScore(phraseTone, a.tones, testTones);
		let scoreB = getToneMatchScore(phraseTone, b.tones, testTones);
		return scoreA - scoreB;
	});
	return sortedSentences;
};


// const responses = {
// 	Alexa ask the orbweavers how 
// 	response. Please let me know how you are feeling or what you are thinking and I will see iff The Orbweavers have anything to say,
// 	requestMood: `${name} please tell me a bit about how you are feeling and I will try and match a song to your mood.`
// }

const botBuilder = require('claudia-bot-builder');
const getIntentName = (alexaPayload) => {
	'use strict';
	return alexaPayload &&
		alexaPayload.request &&
		alexaPayload.request.type === 'IntentRequest' &&
		alexaPayload.request.intent &&
		alexaPayload.request.intent.name;
};

const api = botBuilder(
	function (message, originalRequest) {
		'use strict';

		// message.text has all intent placeholders joined together, for quick access
		if (message.text) {
			let phraseResponse = new Promise((resolve, reject) => {
				processPhrase(message.text, (sentence) => {
					resolve(`The Orbweavers Oracle says: ${sentence}`);
				});
			});
			return phraseResponse;
		// you can use all the Alexa request properties from originalRequest.body
		} else if (getIntentName(originalRequest.body) === 'ExitApp'){
			// return a JavaScript object to set advanced response params
			// this prevents any packaging from bot builder and is just
			// returned to Alexa as you specify
			return {
				response: {
					outputSpeech: {
						type: 'PlainText',
						text: 'The Orbweavers say bye!'
					},
					shouldEndSession: true
				}
			};
		} else {
			return {};
		}
	},
	{ platforms: ['alexa'] }
);

module.exports = api;
