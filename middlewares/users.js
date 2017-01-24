
// const nodemailer = require('@nodemailer/pro');
// const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const platformConfigs = require("../config/config");
const users = {

    generateToken : (data) => {
        let token = jwt.sign({
            username : data.username
        }, platformConfigs.jwtSecret);
        return token;
    },

    // encodeUserId : (data) => {
    //     let hash = crypto.createHmac("sha256", platformConfigs.hashSecret)
    //         .update(JSON.stringify(data))
    //         .digest("base64");
    //     return hash;
    // }

    // sendActivation : (data) => {
    //     let link = `https://wordsrepeat.herokuapp.com/${data.username}`;
    //     let transporter = nodemailer.createTransport(platformConfigs.mailConf);
    //     let mailOptions = {
    //         from : 'Words Repeat',
    //         to: data.username,
    //         subject: 'Activation Link',
    //         html: `<a href="${link}">Link</a>`
    //     };
    //     transporter.sendMail(mailOptions, (error) => {
    //         if (error) {
    //             return console.log(error);
    //         }
    //     });
    // }
};

module.exports = users;



