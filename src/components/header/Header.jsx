// import React, {useState} from 'react';
// import {Drawer} from '@mui/material';
// import PhoneForm from "./PhoneForm";
// import Message from "./Message";
//
// const Header = () => {
//     const name = localStorage.getItem('formData') ? JSON.parse(localStorage.getItem('formData')).name : null;
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//
//     return (
//         <header className={'header'}>
//             <div className="header-inner">
//                 <div className="logo">
//                     <div></div>
//                     <img src="/img/logo.svg" alt="logo" className={'logo_img'}/>
//
//                 </div>
//                 <nav className={'nav_menu'}>
//                     <ul>
//                         <li><a href="">Обо мне</a></li>
//                         <li><a href="">Наставничество</a></li>
//                         <li><a href="">Мероприятия</a></li>
//                         <li><a href="">Кейсы</a></li>
//                         <li><a href="">Отзывы</a></li>
//                         <li><a href="">Контакты</a></li>
//                     </ul>
//                 </nav>
//                 <div className="phone">
//                     <Drawer
//                         anchor={'left'}
//                         open={isDrawerOpen}
//                         onClose={() => setIsDrawerOpen(false)}
//                         PaperProps={{
//                             sx: {
//                                 "&.MuiDrawer-paper": {
//                                     position: 'absolute',
//                                     backgroundColor: "#0F1D45",
//                                     width: '612px',
//                                     minHeight: "100%",
//                                     backgroundRepeat: "no-repeat",
//                                     boxShadow: '0 15px 15px rgba(15, 0, 0, 0.5)',
//                                 }
//                             }
//                         }}
//                         BackdropProps={{
//                             sx: {
//                                 backdropFilter: "blur(5px)",
//                                 backgroundColor: "rgba(0, 0, 0, 0.5)",
//
//                             }
//                         }}
//                     >
//                         {!name ? <PhoneForm/> : <Message/>}
//
//                     </Drawer>
//
//                     <img src="/img/phone1.png" alt="phone" onClick={() => setIsDrawerOpen(true)}/>
//                 </div>
//             </div>
//         </header>
//     );
// };
//
// export default Header;
import React  from 'react';
import {Drawer} from '@mui/material';
import PhoneForm from "./PhoneForm";
import Message from "./Message";
import {useStateProvider} from "../provider/StateProvider";


const Header = () => {
    const name = localStorage.getItem('formData') ? JSON.parse(localStorage.getItem('formData')).name : null;
    const {isDrawerOpen, setIsDrawerOpen} = useStateProvider();

    return (
        <header className={'header'}>
            <div className="header-inner">
                <div className="logo">
                    <div></div>
                    <img src="/img/logo.svg" alt="logo" className={'logo_img'}/>

                </div>
                <nav className={'nav_menu'}>
                    <ul>
                        <li><a href="">Обо мне</a></li>
                        <li><a href="">Наставничество</a></li>
                        <li><a href="">Мероприятия</a></li>
                        <li><a href="">Кейсы</a></li>
                        <li><a href="">Отзывы</a></li>
                        <li><a href="">Контакты</a></li>
                    </ul>
                </nav>
                <div className="phone">
                    <Drawer
                        anchor={'left'}
                        open={isDrawerOpen}
                        onClose={() => setIsDrawerOpen(false)}
                        PaperProps={{
                            sx: {
                                "&.MuiDrawer-paper": {
                                    position: 'absolute',
                                    backgroundColor: "#0F1D45",
                                    width: '612px',
                                    minHeight: "100%",
                                    backgroundRepeat: "no-repeat",
                                    boxShadow: '0 15px 15px rgba(15, 0, 0, 0.5)',
                                }
                            }
                        }}
                        BackdropProps={{
                            sx: {
                                backdropFilter: "blur(5px)",
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                            }
                        }}
                    >
                        {!name ? <PhoneForm/> : <Message/>}

                    </Drawer>

                    <img src="/img/phone1.png" alt="phone" onClick={() => setIsDrawerOpen(true)}/>
                </div>
            </div>
        </header>
    );
};

export default Header;
