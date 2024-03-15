import React from 'react';

const Home = () => {
    return (
        <div className={"main"}>
            <section className="main_box">
                <div className="title">
                    <h1>Создаю условия <pre>для вашего успеха</pre>
                    </h1>
                </div>
                <p className="text">
                    Когда ваше время и энергия лучше сфокусированы, стремление к новым
                    возможностям становится реальностью, ваш успех зависит от ваших действий
                </p>
                <div className="btn_box">
                    <button className={'white_btn btn'}><span className={'text_btn'}>Записаться на консультацию</span>
                        <span className={'img_btn'}> <img src="/img/arrow.png" alt="arrow" className={'img_w'}/></span>
                    </button>
                    <button className={'blue_btn btn'}><span className={'text_btn'}>Бесплатная консультация</span>
                        <span className={'img_btn'}><img
                            src="/img/arrow.png" alt="arrow" className={'img_b'}/></span>
                    </button>
                </div>
                <section className="info">
                    <div className="quantity"><span>130 +</span>
                        <p>техник для достижения целей</p></div>
                    <div className="percent"><span>250%</span>
                        <p>увеличение личной продуктивности</p>
                    </div>
                </section>

            </section>

            <section className={'mentor'}>
                <img src="/img/mentor%202.png" alt=""/>
            </section>

        </div>
    );
};

export default Home;