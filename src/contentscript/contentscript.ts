import { IMessage } from '../interfaces';

// listen for message from npm package
window.addEventListener('message', (msg: IMessage) => {
  // filter the incoming msg.data
  if (msg.data.action === 'npmToContent') {
    // send the message to the chrome - backgroundScript
    chrome.runtime.sendMessage({
      action: 'ContentToBackground',
      payload: msg.data,
    });
  }
});
