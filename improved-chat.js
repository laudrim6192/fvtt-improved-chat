const keyState = {};

window.addEventListener('keyup', (e) => keyState[e.key] = false);
window.addEventListener('keydown', (e) => {setTimeout(function() {keyState[e.key] = false}, 1000); keyState[e.key] = true});
const is_key_down = (() => {
  return (key) => keyState.hasOwnProperty(key) && keyState[key] || false;
})();

Hooks.on("preCreateChatMessage", (chatMessage, content) => {

  var is_alt_pressed = is_key_down("Alt");
  if (is_alt_pressed)
  {
    chatMessage.type=CHAT_MESSAGE_TYPES.OOC;
    delete chatMessage.speaker;
  }
});

