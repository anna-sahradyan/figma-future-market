import React, { useState, useEffect } from 'react';
import { Box, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Message from "./Message";
import { useStateProvider } from "../provider/StateProvider";
import toast from "react-hot-toast";

const PhoneForm = () => {
    const [isChecked, setIsChecked] = useState(false);
    const { setIsDrawerOpen } = useStateProvider();
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const storedFormData = JSON.parse(localStorage.getItem('formData'));
        if (storedFormData) {
            setFormData(storedFormData);
        }
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isChecked) {
            toast("Looks like the checkbox wasn't clicked, and the number may be incorrect 🙄");
            return;
        } else if (!formData.name || !formData.phone) {
            toast("Please fill out the form before submitting. 🙄")
            return;
        }
        localStorage.setItem('formData', JSON.stringify(formData));
        setIsDrawerOpen(true);
        setSubmitted(true);
        setFormData({ name: '', phone: '' });
    };

    const handleKeyPress = (e) => {
        const regex = /^[0-9\b]+$/;
        if (!regex.test(e.key)) {
            e.preventDefault();
        }
    };

    if (submitted) {
        return <Message />;
    }

    return (
      <div className="phone-form-wrapper" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}>
          <div className='phone_inner'>
                <span className="close" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setIsDrawerOpen(false)}>
                    <CloseIcon sx={{ color: 'white', width: 40 }} onClick={() => setIsDrawerOpen(false)} />
                </span>
              <div className='title_phone'>
                  <h1>Закажите обратный звонок</h1>
              </div>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                  <div>
                      <TextField
                        id="name"
                        label="ИМЯ"
                        variant="standard"
                        placeholder={"ИМЯ"}
                        InputLabelProps={{ style: { color: 'rgba(255, 255, 255, 0.8)' } }}
                        inputProps={{
                            style: {
                                padding: 0,
                                marginTop: 66,
                                color: 'rgba(255, 255, 255, 0.8)',
                                fontSize: 20,
                                width: 480,
                                height: 36
                            }
                        }}
                        value={formData.name}
                        onChange={handleChange}
                      />
                  </div>
                  <div>
                      <TextField
                        id="phone"
                        type="tel"
                        label="ТЕЛЕФОН"
                        placeholder={'ТЕЛЕФОН'}
                        variant="standard"
                        InputLabelProps={{ style: { color: 'rgba(255, 255, 255, 0.8)' } }}
                        inputProps={{
                            style: {
                                padding: 0,
                                marginTop: 66,
                                color: 'rgba(255, 255, 255, 0.8)',
                                fontSize: 20,
                                width: 480,
                                height: 37
                            },
                            onKeyPress: handleKeyPress
                        }}
                        value={formData.phone}
                        onChange={handleChange}
                      />
                  </div>
                  <div className='check'>
                      <label htmlFor="cb"></label>
                      <input
                        type="checkbox"
                        onChange={() => setIsChecked(!isChecked)}
                        id={'cb'}
                        style={{ width: 28, marginTop: -6 }}
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && setIsChecked(!isChecked)}
                      />
                      <span>Согласен на сохранение и обработку персональных данных</span>
                  </div>
                  <div className="btn_box_phone">
                      <button className='blue_btn_phone btn' type="submit">
                          <span className='text_btn'>Бесплатная консультация</span>
                          <span className='img_btn'>
                                <img src="/img/arrow.png" alt="arrow" className='img_b_phone' />
                            </span>
                      </button>
                  </div>
              </Box>
          </div>
      </div>
    );
};

export default PhoneForm;
