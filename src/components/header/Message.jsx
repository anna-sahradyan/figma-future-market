import React from 'react';
import CloseIcon from "@mui/icons-material/Close";
import {useStateProvider} from "../provider/StateProvider";


const Message = () => {
    const {setIsDrawerOpen} = useStateProvider();
    const handleClose = () => {
        localStorage.removeItem('formData');
        setIsDrawerOpen(false)

    };

    return (
        <div className={"message_box"}>
            <div className="message_inner">
                <span className="close">
                    <CloseIcon sx={{color: 'white', width: 40}} onClick={handleClose}/>
                </span>
                <div className="message_title">
                    <h1>Спасибо за заявку</h1>
                </div>
                <div className="message_sub_title">
                    <h1>Я обязательно свяжусь с вами в ближайшее время.</h1>
                </div>
                <div className="message_logo">
                    <img src="/img/logo.svg" alt="logo"/>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Message;
