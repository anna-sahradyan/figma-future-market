import React, {useEffect} from 'react';
import {sum} from './DateSum';
import {useDispatch, useSelector} from "react-redux";
import {fetchGbpRate} from "../../redux/currencySlice";
import {useStateProvider} from "../provider/StateProvider";


const Home = () => {
    const {setIsDrawerOpen} = useStateProvider();
    const gbpRate = useSelector((state) => state.gbpRate.gbpRate);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGbpRate())
    }, [dispatch]);

    return (<div className={"main"}>
        <section className="main_box">
            <div className="title">
                <h1>Создаю условия <pre>для вашего успеха</pre>
                </h1>
            </div>
            <p className="text">
                   <span className={'hidden_span'}> Когда ваше время и энергия лучше сфокусированы, стремление к новым
                    возможностям становится реальностью,</span> ваш успех зависит от ваших действий
            </p>
            <div className="btn_box">
                <button className={'white_btn btn'} onClick={() => setIsDrawerOpen(true)}><span
                    className={'text_btn'}>Записаться на консультацию</span>
                    <span className={'img_btn'}> <img src="/img/arrow.png" alt="arrow" className={'img_w'}/></span>
                </button>
                <button className={'blue_btn btn'} onClick={() => setIsDrawerOpen(true)}><span
                    className={'text_btn'}>Бесплатная консультация</span>
                    <span className={'img_btn'}><img
                        src="/img/arrow.png" alt="arrow" className={'img_b'}/></span>
                </button>
            </div>
            <section className="info">
                <div className="quantity"><span className={"quantity_num"}>{sum}+</span>
                    <p className={'quantity_text'}>техники для достижения целей</p></div>
                <div className="percent"><span className={'percent_num'}>{gbpRate}%</span>
                    <p className={'percent_text'}> увеличение личной продуктивности</p>
                </div>
            </section>

        </section>

        <section className={'mentor'}>
            <img src="/img/mentor%202.png" alt=""/>
        </section>

    </div>);
};

export default Home;