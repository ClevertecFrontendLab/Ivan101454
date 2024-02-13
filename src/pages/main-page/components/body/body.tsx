import React from 'react';
import './body.css'
import { CalendarTwoTone, HeartFilled, HeartTwoTone, ProfileTwoTone } from '@ant-design/icons';

const Body = () => {
    return (
        <div className='body-container'>
            
            <div className='text'>
            <p>С CleverFit ты сможешь: — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки; — отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами; — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках; — выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.</p>
            </div>
            
            <div className='text2'>CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!</div>    
            <div className='cards'>
                <div className='card'>
                    <div className='card-text'>Расписать тренировки</div>
                    <div className='what'>
                        <HeartTwoTone />
                        Тренировки
                    </div>
                </div>
                <div className='card'>
                    <div className='card-text'>Назначить календар</div>
                    <div className='what'>
                        <CalendarTwoTone />
                        Календарь
                    </div>
                </div>
                <div className='card'>
                    <div className='card-text'>Заполнить профиль</div>
                    <div className='what'>
                        <ProfileTwoTone />
                        Профиль
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;