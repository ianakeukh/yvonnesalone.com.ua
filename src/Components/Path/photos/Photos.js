import React from 'react';
import {
    MDBRow,
    MDBCol,
} from 'mdbreact';
import './Photos.css'

class Photos extends React.Component {

    render() {
        return (
            <div className='container mb-5'>
                <h1 className='h1-responsive py-4 py-sm-5 m-0 font-weight-bold w-100 text-center'>Галерея</h1>
                <h4 className="grey-text text-center w-responsive mx-auto mb-5 h4-responsive text-media">
                    Послуги краси виконані за допомогою найкращих та найновітніших технологій майстерності, найсучасніша
                    техніка та обладнання салону краси стали основою для досягнення здійснення усії бажань
                    клієнтів. Індивідуальний підхів та якість - ось, що ми пропонємо.
                </h4>
                <hr className='light ml-5 mr-5'/>
                <MDBRow className='justify-content-end m-auto p-0 overflow-hidden align-items-stretch shadow-none'>
                    <p className='text-center w-responsive mx-auto my-sm-5 my-3 h2-responsive galery-p font-weight-bold'>
                        Інтер'ер
                    </p>
                    <MDBCol md='12' className='mb-3 int-hide w-responsive'>
                        <img src={require('../../../img/salon/11.JPG')} className='img-fluid z-depth-2' alt=''/>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='w-responsive m-0 justify-content-center w-100'>
                    <MDBCol lg='4' md='12' className='mb-3'>
                        <img src={require('../../../img/salon/2.JPG')} className='img-fluid z-depth-5 ' alt=''/>
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/salon/9.JPG')} className='img-fluid z-depth-5 ' alt=''/>
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/salon/18.JPG')} className='img-fluid z-depth-5 ' alt=''/>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/IMG_5746.JPG')} className='img-fluid z-depth-5' alt=''/>
                    </MDBCol>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/IMG_5704.JPG')} className='img-fluid z-depth-5' alt=''/>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol md='4' className='mb-3'>
                        <img src={require('../../../img/salon/12.JPG')} className='img-fluid z-depth-5' alt=''/>
                    </MDBCol>
                    <MDBCol md='4' className='mb-3'>
                        <img src={require('../../../img/salon/17.JPG')} className='img-fluid z-depth-5' alt=''/>
                    </MDBCol>
                    <MDBCol md='4' className='mb-3'>
                        <img src={require('../../../img/salon/IMG_5789.JPG')} className='img-fluid z-depth-5' alt=''/>
                    </MDBCol>
                </MDBRow>
                <hr className='my-5 light'/>
                <MDBRow className='justify-content-center p-0  m-auto'>
                    <p className='text-center w-responsive mx-auto my-5 h2-responsive galery-p font-weight-bold'>
                        Манікюр та педикюр
                    </p>
                </MDBRow>
                <MDBRow className='p-0 m-0 justify-content-center'>
                    <MDBCol lg='4' md='12' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/223.jpg')} className='img-fluid z-depth-5'
                             alt=''/>
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/229.jpg')} className='img-fluid z-depth-5'
                             alt=''/>
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/_190920_000217_592.png')}
                             className='img-fluid z-depth-5' alt=''/>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/Френч.jpg')} className='img-fluid z-depth-5'
                             alt=''/>
                    </MDBCol>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/5.jpg')} className='img-fluid z-depth-5' alt=''/>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol md='4' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/228.jpg')} className='img-fluid z-depth-5'
                             alt=''/>
                    </MDBCol>
                    <MDBCol md='4' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/_190920_000750_346.png')}
                             className='img-fluid z-depth-5' alt=''/>
                    </MDBCol>
                    <MDBCol md='4' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/IMG-20190912-WA0000.jpg')}
                             className='img-fluid z-depth-5' alt=''/>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/1.jpg')} className='img-fluid z-depth-5' alt=''/>
                    </MDBCol>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/2.jpg')} className='img-fluid z-depth-5' alt=''/>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/6.jpg')} className='img-fluid z-depth-5' alt=''/>
                    </MDBCol>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/manicure/4.jpg')} className='img-fluid z-depth-5' alt=''/>
                    </MDBCol>
                </MDBRow>
                <hr className='my-5 light'/>
                <MDBRow className='justify-content-center p-0 m-auto'>
                    <p className='text-center w-responsive mx-auto mb-5 h2-responsive galery-p font-weight-bold'>
                        Стрижки
                    </p>
                </MDBRow>
                <MDBRow className='p-0 m-0 justify-content-center'>
                    <MDBCol lg='4' md='12' className='mb-3'>
                        <img
                            src={require('../../../img/works/2.jpg')}
                            className='img-fluid z-depth-1' alt=''/>
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img
                            src={require('../../../img/works/12.jpg')}
                            className='img-fluid z-depth-1' alt=''/>
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img
                            src={require('../../../img/works/8.jpg')}
                            className='img-fluid z-depth-1' alt=''/>
                    </MDBCol>
                </MDBRow>
                <hr className='my-5 light'/>
                <MDBRow className='justify-content-center p-0 m-auto'>
                    <p className='text-center w-responsive mx-auto mb-5 h2-responsive font-weight-bold'>
                        Зачіски
                    </p>
                </MDBRow>
                <MDBRow className='p-0 m-0 justify-content-center'>
                    <MDBCol lg='4' md='12' className='mb-3'>
                        <img src={require('../../../img/works/p4.jpg')} className='img-fluid z-depth-1' alt=''/>
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/works/p5.jpg')} className='img-fluid z-depth-1' alt=''/>
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/works/p1.jpg')} className='img-fluid z-depth-1' alt=''/>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/zachiski/12.jpg')} className='img-fluid z-depth-1'
                             alt=''/>
                    </MDBCol>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/zachiski/11.jpg')} className='img-fluid z-depth-1'
                             alt=''/>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/zachiski/4.jpg')} className='img-fluid z-depth-1' alt=''/>
                    </MDBCol>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/zachiski/5.jpg')} className='img-fluid z-depth-1' alt=''/>
                    </MDBCol>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/zachiski/6.jpg')} className='img-fluid z-depth-1' alt=''/>
                    </MDBCol>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/works/p3.jpg')} className='img-fluid z-depth-1'
                             alt=''/>
                    </MDBCol>
                </MDBRow>
                <hr className='my-5 light'/>
                <MDBRow className='justify-content-center p-0 m-auto'>
                    <p className='text-center w-responsive mx-auto mb-5 h2-responsive galery-p font-weight-bold'>
                        Фарбування волосся
                    </p>
                </MDBRow>
                <MDBRow className='p-0 m-0 justify-content-center'>
                    <MDBCol lg='4' md='12' className='mb-3'>
                        <img src={require('../../../img/works/1.jpg')} className='img-fluid z-depth-1' alt=''/>
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/slider/3.jpg')} className='img-fluid z-depth-1' alt=''/>
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/slider/4.jpg')} className='img-fluid z-depth-1' alt=''/>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/farb/4.jpg')} className='img-fluid z-depth-1' alt=''/>
                    </MDBCol>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/farb/5.jpg')} className='img-fluid z-depth-1' alt=''/>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol lg='4' md='12' className='mb-3'>
                        <img src={require('../../../img/salon/farb/6.jpg')} className='img-fluid z-depth-1' alt=''/>
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/salon/farb/7.jpg')} className='img-fluid z-depth-1' alt=''/>
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/salon/farb/8.jpg')} className='img-fluid z-depth-1' alt=''/>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/farb/14.jpg')} className='img-fluid z-depth-1 w-100'
                             alt=''/>
                    </MDBCol>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/farb/15.webp')} className='img-fluid z-depth-1 w-100'
                             alt=''/>
                    </MDBCol>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/farb/17.jpg')} className='img-fluid z-depth-1 w-100'
                             alt=''/>
                    </MDBCol>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/farb/16 (2).jpg')} className='img-fluid z-depth-1 w-100'
                             alt=''/>
                    </MDBCol>
                </MDBRow>
                <hr className='my-5 light'/>
                <MDBRow className='justify-content-center p-0 m-auto'>
                    <p className='text-center w-responsive mx-auto mb-5  h2-responsive galery-p font-weight-bold'>
                        Для чоловіків
                    </p>
                </MDBRow>
                <MDBRow className='p-0 m-0 justify-content-center'>
                    <MDBCol lg='4' md='12' className='mb-3'>
                        <img src={require('../../../img/salon/man/1.jpg')} className='img-fluid z-depth-5' alt=''/>
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/salon/man/2.jpg')} className='img-fluid z-depth-5' alt=''/>
                    </MDBCol>
                    <MDBCol lg='4' md='6' className='mb-3'>
                        <img src={require('../../../img/salon/man/3.jpg')} className='img-fluid z-depth-5' alt=''/>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/man/6.jpg')} className='img-fluid z-depth-5 w-100'
                             alt=''/>
                    </MDBCol>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/man/7.jpg')} className='img-fluid z-depth-5 w-100'
                             alt=''/>
                    </MDBCol>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/man/8.jpg')} className='img-fluid z-depth-5 w-100'
                             alt=''/>
                    </MDBCol>
                    <MDBCol md='3' className='mb-3'>
                        <img src={require('../../../img/salon/man/9.jpg')} className='img-fluid z-depth-5 w-100'
                             alt=''/>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-0 justify-content-center'>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/man/4 (2).jpg')} className='img-fluid z-depth-5' alt=''/>
                    </MDBCol>
                    <MDBCol md='6' className='mb-3'>
                        <img src={require('../../../img/salon/man/5.jpg')} className='img-fluid z-depth-5' alt=''/>
                    </MDBCol>
                </MDBRow>
            </div>
        )
    }
};

export default Photos;