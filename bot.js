module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    //text : 'Hey, ' + userName + '!'
      text : '/gif i am the captain now'
  };

  // avoid infinite loop
  if (userName !== 'outgoing-webhook') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}