const Personality = require('../controllers/personality-controller')
const personalityRouter = require('express').Router()

personalityRouter.get('/', Personality.showAll)
personalityRouter.get('/enfj', Personality.enfj)
personalityRouter.get('/enfp', Personality.enfp)
personalityRouter.get('/entj', Personality.entj)
personalityRouter.get('/entp', Personality.entp)
personalityRouter.get('/esfj', Personality.esfj)
personalityRouter.get('/esfp', Personality.esfp)
personalityRouter.get('/estj', Personality.estj)
personalityRouter.get('/estp', Personality.estp)
personalityRouter.get('/infj', Personality.infj)
personalityRouter.get('/infp', Personality.infp)
personalityRouter.get('/intj', Personality.intj)
personalityRouter.get('/intp', Personality.intp)
personalityRouter.get('/isfj', Personality.isfj)
personalityRouter.get('/isfp', Personality.isfp)
personalityRouter.get('/istj', Personality.istj)
personalityRouter.get('/istp', Personality.istp)

module.exports = personalityRouter