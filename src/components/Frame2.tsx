import './Style.css'
import man from '/src/assets/man.svg'
import heart from '/src/assets/heart.svg'
import baby from '/src/assets/baby.svg'


export default function Frame2() {

    return(
        <>
        <div className="block">
            <div className="text-holder">
                <p id='first-p'>Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение 3 лет у 77% пациентов1.</p>
                <p id='second-p'>В течение 5 лет после первого тяжёлого обострения в живых остаются только 40% пациентов.2 Прогноз после обострений ХОБЛ схож с таковым при сердечной недостаточности, инфаркте миокарда и некоторых злокачественных опухолях.</p>
            </div>
            <h2>Пятилетняя выживаемость пациентов</h2>
           <div className="img-block">
           <img src={heart} alt="diagram" />
           <img src={man} alt="diagram" />
           <img src={baby} alt="diagram" />

           </div>

        </div>

        </>
    )

}