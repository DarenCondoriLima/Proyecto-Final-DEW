import React,{useState} from 'react'

export const RequisitosGame = ({numberPage}) => {

    const [requisitosData] = useState ([
        {minTitle1: "SO", minDes1: "TBD", minTitle2: "Procesador", minDes2: "TBD", minTitle3: "Gráficos", minDes3: "TBD", minTitle4: "Tarjeta de sonido", minDes4: "TBD", maxTitle1: "SO", maxDes1: "TBD", maxTitle2: "Procesador", maxDes2: "TBD", maxTitle3: "Gráficos", maxDes3: "TBD", maxTitle4: "Tarjeta de sonido", maxDes4: "TBD"},
        {minTitle1: "SO", minDes1: "TBD", minTitle2: "Procesador", minDes2: "TBD", minTitle3: "Gráficos", minDes3: "TBD", minTitle4: "Tarjeta de sonido", minDes4: "TBD", maxTitle1: "SO", maxDes1: "TBD", maxTitle2: "Procesador", maxDes2: "TBD", maxTitle3: "Gráficos", maxDes3: "TBD", maxTitle4: "Tarjeta de sonido", maxDes4: "TBD"},
        {minTitle1: "SO", minDes1: "Windows XP / Vista / 7 / 8 - 64 bits *", minTitle2: "Procesador", minDes2: "2.2 GHz Dual Core CPU", minTitle3: "Gráficos", minDes3: "512 MB NVIDIA GeForce 9800GTX / ATI Radeon HD 3xxx series", minTitle4: "Memoria", minDes4: "2 GB de RAM", maxTitle1: "SO", maxDes1: "Windows Vista / 7 / 8 - 64 bits", maxTitle2: "Procesador", maxDes2: "2.8 GHz Quad Core CPU", maxTitle3: "Gráficos", maxDes3: "1GB NVIDIA GTX 460 / ATI Radeon HD 6850 or better", maxTitle4: "Memoria", maxDes4: "3 GB de RAM"},
        {minTitle1: "SO", minDes1: "Windows 10", minTitle2: "Procesador", minDes2: "Intel Core i5-9400F", minTitle3: "Gráficos", minDes3: "Nvidia GTX 1650 (4 GB) or AMD Radeon RX 580 (4GB)", minTitle4: "Memoria", minDes4: "16 GB de RAM", maxTitle1: "SO", maxDes1: "Windows 10", maxTitle2: "Procesador", maxDes2: "Intel Core i7-9700K", maxTitle3: "Gráficos", maxDes3: "Nvidia GTX 1080 (8GB) or AMD RX VEGA 56", maxTitle4: "Memoria", maxDes4: "16 GB de RAM"},
    ]);

  return (
    <section id="contentRequisitos">
        <div id="textRequisitos">
            <span id="textRequisitosTitle">Requisitos del juego</span>
            <div id="requisitos">
                <div class="requisitos">
                    <span>MÍNIMO:</span>
                    <span>Requiere un procesador y un sistema operativo de 64 bits</span>
                    <span><strong>{requisitosData[numberPage].minTitle1}:</strong> {requisitosData[numberPage].minDes1}</span>
                    <span><strong>{requisitosData[numberPage].minTitle2}:</strong> {requisitosData[numberPage].minDes2}</span>
                    <span><strong>{requisitosData[numberPage].minTitle3}:</strong> {requisitosData[numberPage].minDes3}</span>
                    <span><strong>{requisitosData[numberPage].minTitle4}:</strong> {requisitosData[numberPage].minDes4}</span>
                </div>
                <div class="requisitos">
                    <span>RECOMENDADO:</span>
                    <span>Requiere un procesador y un sistema operativo de 64 bits</span>
                    <span><strong>{requisitosData[numberPage].maxTitle1}:</strong> {requisitosData[numberPage].maxDes1}</span>
                    <span><strong>{requisitosData[numberPage].maxTitle2}:</strong> {requisitosData[numberPage].maxDes2}</span>
                    <span><strong>{requisitosData[numberPage].maxTitle3}:</strong> {requisitosData[numberPage].maxDes3}</span>
                    <span><strong>{requisitosData[numberPage].maxTitle4}:</strong> {requisitosData[numberPage].maxDes4}</span>
                </div>
            </div>
        </div>
    </section>
  )
}
