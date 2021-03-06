import React from 'react';
import './job.css'

class Job extends React.Component {

    render() {
        return (
            <div className='container mb-5'>
                <div className='job p-3'>
                    <h1 className='h1-responsive py-4 py-sm-5 m-0 font-weight-bold w-100 text-center'>Співпраця</h1>
                    <div className='justify-content-center m-auto w-100'>
                        <img alt='' className='justify-content-center m-auto job-img w-100' src={require('./../../../img/slider/Getty-hair.jpg')} />
                    </div>
                    <p className='job-des w-100 text-center justify-content-center m-auto py-5'>
                        З питань співпраці телефонуйте Нам за номерами, вказаними на сторінці Контаків. Ми завжди очікуємо на нові пропозиції стосовно закупівлі якісних та елітних косметичних засобів. Окрім того, в наш коллектив постійно приходять нові цікаві люди, які бажають вкладати свій досвід та старанно працювати.
                        Ми завжди раді отримувати нові пропозиції!
                        Ми завджи раді співпрацювати з Вами!
                    </p>
                </div>
            </div>
        )
    }
};

export default Job;