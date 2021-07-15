const keyState = {};

window.addEventListener('keyup', (e) => keyState[e.key] = false);
window.addEventListener('keydown', (e) => {setTimeout(function() {keyState[e.key] = false}, 1000); keyState[e.key] = true});
const is_key_down = (() => {
  return (key) => keyState.hasOwnProperty(key) && keyState[key] || false;
})();

Hooks.on("preCreateChatMessage", (chatMessage, content) => {

  var is_alt_pressed = is_key_down("Alt");
  console.log(is_alt_pressed);
  console.log(chatMessage);
  if (is_alt_pressed)
  {
    chatMessage.data.update({type: CONST.CHAT_MESSAGE_TYPES.OOC});
    chatMessage.data.speaker.update({scene: null, actor: null, token: null, alias: game.user.name});
    chatMessage.data.type = CONST.CHAT_MESSAGE_TYPES.OOC;
    console.log(chatMessage.data.type);
  }
  console.log(chatMessage);
});

