import React, { useState } from 'react';
import './header.css';
import { SettingOutlined } from '@ant-design/icons';

const Header = function() {
    const [count, setCount] = useState(0);

    return (
        <div className='container'>
            <div className='main'>Главная</div>
            <div className='helloContainer'>
                <h1 className='hello'>Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!</h1>
                <div className='setup'>
                    <div className='setupImg'>
                    <SettingOutlined />   
                    </div>
                    Настройки
                </div>
            </div>
        </div>
    )
}

export default Header;