import React from 'react'
import {  MDBRow, MDBMask, MDBView,  } from 'mdbreact';


import './Cosmetics.css'

class Cosmetics extends React.Component {

    render() {
        return (
            <div>
                <div className="text-center mb-5 h-100">
                    <h1 className='h-100 h1-responsive py-4 py-sm-5 m-0 font-weight-bold w-100 text-center'>
                        Догляд за волоссям
                    </h1>
                    <div className='w-100 container cosmetics-shop'>
                        <MDBRow className='d-inline h-100'>
                            <p  className='w-50 float-left'>
                                <MDBView hover className="rounded z-depth-0 border-0 mb-lg-0  float-left px-2 px-sm-3">
                                    <img
                                        className="img-fluid"
                                        src={require('./../../../../img/19.JPG')}
                                        alt=""
                                    />
                                    <a href="#!">
                                        <MDBMask overlay="white-slight" />
                                    </a>
                                </MDBView>
                            </p>
                                <p className="dark-grey-text text-left font-weight-normal w-50 float-right slogan p-0 p-sm-3">
                                    <i className="fas fa-quote-left quotes text-right"></i>
                                        <div className='float-right w-75'>
                                        <span className='w-responsive slogan-text'>«СТВОРЮЧИ КРАСУ, МИ ЗАОХОЧУЄМО ЛЮДЕЙ ДБАТИ ПРО САМИХ СЕБЕ, ПРО СЕРЕДОВИЩЕ, В ЯКОМУ ЖИВУТЬ ТА ПРАЦЮЮТЬ ТА РЕЧІ, ЯКІ ВОНИ ЛЮБЛЯТЬ»</span>
                                        <br/>
                                        <span className='name font-weight-bold'>Davide Bollati</span>
                                    </div>
                                </p>
                                <div className='float-right text-left p-2 p-sm-3 font-weight-normal'>
                                    <p>
                                        <span className='font-weight-bold'>DAVINES</span> - бренд італійського походження, який налічує у своїй колекції засоби догляду за волоссям усіх існуючих напрямків. Для салонного застосування. Спеціально розроблений для запобігання та усунення найбільш поширених захворювань шкіри голови та волосся, Naturaltech допомагає вам відновити рівновагу та здоровий природний стан волосся та шкіри голови. Засоби для кучерявого волосся зроблять Ваш вечір бездоганним. Для блондинок допоможуть спеціальні засоби для пофарбованого волосся.
                                    </p> <br/>
                                    <p>
                                        <span className='font-weight-bold'>FARMAVITA</span> - це італійська компанія, розташована в місті Локате-Варезіно, недалеко від Мілана та за 10 хвилин їзди від аеропорту Мальпенса.
                                        Farmavita працює у секторі косметики понад тридцять років, з нестримним пріоритетом: створювати високоякісні професійні засоби для волосся.
                                        FARMAVITA об'єднує виробництво, розробку та дослідження на своїй фабриці, оснащеній сучасною лабораторією R&D та обладнанням з найвищими технологіями та ефективністю.
                                    </p><br/>
                                    <p>
                                        <span className='font-weight-bold'>SCHWARZKOPF</span> – це бренд засобів догляду за волоссям, який здобув довіру споживачів завдяки високій якості, досвіду та інноваційного підходу протягом вже 120 років являэться поширеним брендом у догляді за волоссям. Нова формула надасть волоссю сяючого вигляду та буде у допомозі пошкодженому волоссю. Стайлінг вміст засобів створять Ваш ідеальний образ.
                                    </p>
                                     <br/>
                                     <p>
                                         <span className='font-weight-bold'>JOICO</span> - італійський бренд предствлений для реконструкції та відновлення пошкодженого волосся як після фарбування, так і після довготривалого впливу зовнішніх факторів на волосся. Професійна лінійка порадує як дизайном, так і вмістом. Зачіска буде бездоганною, а волосся дбайливо доглянуте.
                                     </p>
                                    <br/>
                                    <p>
                                        <span className='font-weight-bold'>FELPS</span> - Шикарні шампуні, кондиціонери вже після першого миття голови знищать перхоть, та зроблять кожен волосок красивим та бездоганним.  Шампуні компанії не тільки створять образ та підтримають щойно створену зачіску, а і вилікують шкіру голови від перхоті та створять хороші умови для луковиці волосків.
                                    </p>
                                 </div>
                        </MDBRow>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cosmetics