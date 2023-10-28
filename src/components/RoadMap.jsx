import {useState} from 'react';

export default function RoadMap (){

  const [block, setBlock] = useState(1);
  const blocks = [
    {
      id: '1',
      text: 'Знакомство с кураторами.\n Верстка макетов. HTML/CSS.\n Структура HTML: теги, атрибуты, вложенность.\n Анимация в CSS'
    },
    {
      id: '2',
      text: 'Программирование на языке Javascript'
    },
    {
      id: '3',
      text: 'Разработка серверных приложении на\n платформе Node.js'
    },
    {
      id: '4',
      text: 'Разработка интерфейсов с фреймворком\n React'
    },
    {
      id: '5',
      text: 'Разработка мобильных приложении с\n фреймворком React Native'
    },
    {
      id: '6',
      text: 'Дипломная работа – большой проект, который охватывает все\n пройденные материалы, и является полноценным клиент-\nсерверным приложением.'
    }
  ]
  return (
  <>
    {blocks.map((bl) => (bl.id == block && <div key={bl.id} className="max-w-lg min-h-[190px] rounded-xl shadow-2xl m-auto py-8 px-8 text-center flex items-center justify-center flex-col animate-scale">
      <span className="uppercase text-[#82DE0F]">{blocks[block - 1].id} блок</span>
      <p className="text-black">
        {blocks[block - 1].text}
      </p>
    </div>))}
    <div className="flex justify-around mt-16 relative">
      <div className="w-full h-5 bg-black absolute rounded-[100px] top-4 z-0"></div>
      <div 
        className="w-12 h-12 rounded-full bg-[#82DE0F]"
        onClick={() => setBlock(1)}
      ></div>
      <div 
        className="w-12 h-12 rounded-full bg-[#82DE0F]"
        onClick={() => setBlock(2)}
      ></div>
      <div 
        className="w-12 h-12 rounded-full bg-[#82DE0F]"
        onClick={() => setBlock(3)}
      ></div>
      <div 
        className="w-12 h-12 rounded-full bg-[#82DE0F]"
        onClick={() => setBlock(4)}
      ></div>
      <div 
        className="w-12 h-12 rounded-full bg-[#82DE0F]"
        onClick={() => setBlock(5)}
      ></div>
      <div 
        className="w-12 h-12 rounded-full bg-[#82DE0F]"
        onClick={() => setBlock(6)}
      ></div>
    </div>
    <div className="flex justify-center mt-32">
      <a href="" className="w-64 h-14 flex justify-center rounded-3xl font-bold items-center bg-[#82DE0F] text-xl text-black font-medium text-center rounded-lg	">
        Хочу обучаться
      </a>
    </div>
  </>
)}