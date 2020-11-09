import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/confirm/dist/PNotifyConfirm.css";
import { error, Stack } from '@pnotify/core';
import { defaults } from '@pnotify/core';

defaults.maxTextHeight = null;
defaults.delay = 2500;

function clientError() {
  const myNotice = error({
      text: "Incorrect query! Please enter your request in the correct form.",
      stack: new Stack({
        dir1: 'up',
  })
}); 
}

function apiError() {
  const myNotice = error({
      text: "Sorry, the service cannot process your request😨. Try again, please.",
      stack: new Stack({
        dir1: 'up',
  })
}); 
}

export { clientError, apiError };