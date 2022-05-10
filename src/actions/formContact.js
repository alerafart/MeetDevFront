export const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessage = (value, name) => ({
  type: SEND_MESSAGE,
  value,
  name,
});
