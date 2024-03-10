import { useState } from 'react'
import tapLogo1 from './assets/tap1.svg'
import tapLogo2 from './assets/tap2.svg'
import tapLogo3 from './assets/tap3.svg'
import pointerLogo from './assets/pointer.svg'
import header2 from './assets/header2.svg'
import header1 from './assets/header1.svg'
import boyLogo from './assets/boy.svg'
import boyText from './assets/boytext.svg'
import upLogo from './assets/up.svg'
import upText from './assets/uptext.svg'
import './App.css'
import Part1 from './components/Frame1'
import Part2 from './components/Frame2'

function App() {
  const [activeSection, setActiveSection] = useState<{ active: 'part1' | 'part2' | null }>({ active: null });

  const handlePart1Click = () => {
    if (activeSection.active === 'part1') {
      setActiveSection({ ...activeSection, active: null });
    } else {
      setActiveSection({ ...activeSection, active: 'part1' });
    }
  };

  const handlePart2Click = () => {
    if (activeSection.active === 'part2') {
      setActiveSection({ ...activeSection, active: null });
    } else {
      setActiveSection({ ...activeSection, active: 'part2' });
    }
  };

  return (
    <>
        <div className="home-container">
          <div className="home-content">
            <div className="header-section">
              <img src={header1} alt="" />
            </div>
            <div className="block">
              <div className="first-section rounded" onClick={handlePart1Click}>
                <img src={boyLogo} alt="logo" />
                <img className="boytext" src={boyText} alt="text" />
                <p>
                  В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ»
                  (COPDGene) среди пациентов с ХОБЛ, <span>
                     диагностированной до 55 лет, было выявлено преобладание...
                  </span>
                </p>
              </div>
              {activeSection.active === "part1" && <Part1 />}

              <div className="second-section rounded" onClick={handlePart2Click}>
                <img src={upLogo} alt="logo" />
                <img className="boytext" src={upText} alt="text" />
                <p>
                  Большинство пациентов с ХОБЛ столкнется с обострениями: как
                  минимум одно среднетяжелое или тяжелое обострение{" "}
                  <span>случится в течение...</span>
                </p>
              </div>
              {activeSection.active === "part2" && <Part2 />}
            </div>
          </div>
          <div className="header-container">
            <div className="header-section">
              <img src={header2} alt="text" />
            </div>
            <div className="header-block">
              <h2 className="green-text">
                Даже 1 среднетяжелое обострение — сигнал к увеличению объема
                терапии
              </h2>
            </div>
            <div className="frame1">
              <h3>
                Приоритетные направления фармакотерапевтической стратегии при
                ХОБЛ<sup>1</sup>:
              </h3>
              <div className="parent">
                <div className="flexed holder1">
                  <img src={tapLogo1} alt="logo" />
                  <h2>
                    <span>Ингаляционный</span> антихолинергик
                  </h2>
                  <p>
                    Ингибирует бронхоконстрикторные эффекты ацетилхолина,
                    вступая с ним в конкурентный антагонизм за взаимодействие с
                    эффекторными мускариновыми рецепторами, дополняет и
                    потенцирует эффект β2-агонистов<sup>1</sup>
                  </p>
                </div>
                <div className="flexed holder1">
                  <img src={tapLogo2} alt="logo" />
                  <h2>
                    <span>Ингаляционный</span> β2-агонист
                  </h2>
                  <p>
                    Вызывает бронходилатацию посредством релаксации
                    гладкомышечных клеток бронхов независимо от характера
                    констриктивных стимулов, т. е. выступают в качестве
                    функциональных антагонистов бронхоконстрикции
                  </p>
                </div>
                <div className="flexed holder1">
                  <img src={tapLogo3} alt="logo" />
                  <h2>
                    <span>Ингаляционный </span>глюкокортикостероид{" "}
                    <span>(ИГКС)</span>
                  </h2>
                  <p>
                    Снижает частоту обострений, особенно в сочетании с ДДБА,
                    подавляют хроническое воспаление при астме и снижают
                    гиперреактивность дыхательных путей
                  </p>
                </div>
              </div>
              <div className="pointer-container">
                <img src={pointerLogo} alt="logo" />
                <img src={pointerLogo} alt="logo" />
              </div>
              <div className="parent">
                <div className=" holder2">
                  <p>
                    Пациентам с ХОБЛ рекомендуется комбинирование
                    бронходилататоров с разными механизмами действия; Назначение
                    2-х бронходилататоров из группы длительнодействующих
                    β2-агонистов (ДДБА) и длительнодействующих антихолинергиков
                    (ДДАХ), действие которых дополняет и усиливает друг друга
                    <sup>1</sup>.
                  </p>
                </div>
                <div className="holder2">
                  <p>
                    Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых
                    обострений в течение 1 года/1 тяжелое обострение,
                    потребовавшее госпитализации) рекомендуется назначение ИГКС
                    в дополнение к ДДБА; Последние исследования показали, что
                    амбулаторное применение ИГКС/ДДБА у пациентов с ХОБЛ снижает
                    госпитальную летальность по сравнению с пациентами,
                    принимавшими только ДДБА (8,1% vs 13,2%)<sup>1</sup>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default App
