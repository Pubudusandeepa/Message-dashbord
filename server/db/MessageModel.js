import db from './connectionDb.js'
import Joi from 'joi'
import  Messageschema  from '../scheema/MessageScheema.js'
const messages = db.get('messages')

export function getAll() {
    return messages.find()
}

export function create(message) {
    const result = new Joi.ValidationError(message, Messageschema)
    if(result.error == null ){
        message.created = new Date()
        return messages.insert(message)
    } else {
        return Promise.reject(result.error)
    }
  
}

