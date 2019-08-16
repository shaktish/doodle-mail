import React from 'react';

const NoMessages = (message) => {
    return <div className="message-row">{message}</div>
}

const noMessagesLabel = {
    inbox: 'You are yet to receieve any emails',
    sent: 'You are yet to send a email'
}


const filterMessages = ( list, property, value ) => {
    return list.filter(item=>{
        return item[property].includes(value);
    })
}

const MessageList = ({messages, view, noMessagesLabel}) => {    
    if (messages.length === 0) {
        return NoMessages(noMessagesLabel[view])
    }
    return (
        <>
            {
                messages.map((message)=>{
                    return (
                        <div key={message.id} className="message-row">
                            {view === 'inbox' ? <p className="from">From: {message.from}</p> : <p className="from">To: {message.to.join(', ')}</p> }
                            <p className="subject">Subject: {message.subject}</p>
                            <p className="content">Message: {message.content}</p>
                        </div>
                        )
                })
            }
        </>
        
    )
}

const MessageListContainer = (props) => {
    const  {messageList, view, receipient, activeUserEmail} = props;
    return (        
        <MessageList 
            messages = {filterMessages(messageList, receipient, activeUserEmail)} 
            view={view}
            noMessagesLabel= {noMessagesLabel}             
        />

    );
}

export default MessageListContainer;