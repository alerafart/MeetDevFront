// ACTION TYPE SEND_MESSAGE
export const SEND_MESSAGE = 'SEND_MESSAGE';
// ACTION CREATOR sendMessage
export const sendMessage = (value, name) => ({
  type: SEND_MESSAGE,
  value,
  name,
});
