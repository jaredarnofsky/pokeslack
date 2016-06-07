module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'http://i.imgur.com/WzKQNoi.gif'
  };

  // avoid infinite loop
  if (userName !== 'outgoing-webhook') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}