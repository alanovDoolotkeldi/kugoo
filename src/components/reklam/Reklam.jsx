import React from 'react'

function Reklam() {
  return (
    <div className='wrapper'>
        <div className="wrapper-content">
            <div className="container">
                <div className="wrapper-text">

               <span>Новинка</span>
               <div className="wrapper-catalog">
                <h1>ЭЛЕКТРОСОМОКАТЫ KUGOO KIRIN ОТ ОФИЦИАЛЬНОГО ДИЛЕРА</h1>
                <p>с бесплатной доставкой по РФ от 1 дня</p>
                <button>Перейти в католог</button>

               </div>
                </div>
                <div className="wrapper-center">
                    <div className="reklam-test-info">

                    <div className="reklam-test">
                        <img src="/public/assets/svg/lightning.svg" alt="" />
                        Тест-драйв и обучение

                    </div>
                    <button>Бесплатно</button>
                    <img className='round-1' src="/public/assets/svg/round.svg" alt="" />
                    <img className='round-2' src="/public/assets/svg/round.svg" alt="" />
                    <img src="/public/assets/svg/line.svg" alt="" className="line" />
                    </div>


                </div>

            </div>
        </div>
        <div className="wrapper-navigation">
            <div className="left">
                <img src="/public/assets/svg/lest.svg" alt="" />
            </div>
            <div className="wrapper-main">
                <p>1</p>
                <div className="change">
                    <div className="change-item">

                    </div>
                </div>
                <p>5</p>

            </div>
            <div className="right">
                <img src="/public/assets/svg/right.svg" alt="" />
            </div>

        </div>
        
      
    </div>
  )
}

export default Reklam
