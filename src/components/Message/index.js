import { useSelector } from 'react-redux';
// == Import styles
import './message.scss';

function Message() {
  const {
    validateMessage,
    contentMessage,
    displayMessage,
  } = useSelector((state) => state.settings.navigation);
  let messageClasseName = '';
  if (validateMessage) {
    messageClasseName = 'message';
  }
  else {
    messageClasseName = 'messageEchec';
  }

  return (
    <div className="messageWrapper">

      <div className={displayMessage ? `${messageClasseName} show` : messageClasseName}>
        {contentMessage}
      </div>
    </div>
  );
}

export default Message;
