const MyMessage = ({ message }) => {
    if(message?.attachments?.length > 0){
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ flat: 'right' }}
            />
        )
    }
    return (
        <div class="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor:'33b2a50' }}>
            {message.text}
        </div>
    );
}

export default MyMessage;