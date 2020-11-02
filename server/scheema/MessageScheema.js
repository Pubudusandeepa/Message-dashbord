import Joi from 'joi'


const Messageschema = Joi.object().keys({
    username: Joi.string().alphanum().required(),
    subject: Joi.string().required(),
    message: Joi.string().max(500).required(),
    imageURL: Joi.string().regex(/:\/\/[0-9a-z-.]+\.[a-z]+\//i)
    .uri({
     scheme: [
            /https?/,
        ],
    }).invalid('https://github.com')

});

export default Messageschema