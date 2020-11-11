import React from "react";
import styles from './Message.module.css';

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.message}>
            <div>
                <img src={props.avatar} alt="Avatar" className={styles.photo}/>
            </div>
            <div className={styles.container}>
                <h3>{props.name}</h3>
                <p>{props.message}</p>
                <span className={styles.time}>{props.time}</span>
            </div>
        </div>
    );
}

export default Message;
