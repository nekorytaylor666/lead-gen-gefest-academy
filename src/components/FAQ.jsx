
import Accordion from 'react-bootstrap/Accordion';
import './faq.css';

import {useState} from 'react';

export const FAQ = () => {

  const [index, setIndex] = useState(-1);
  const [FAQS, setFAQS] = useState([
    {
      id: '1',
      title:"Нужны ли знания программирования для участия в GEFEST?",
      answer:`Мы научим тебя вне зависимости от твоего опыта!`,
      expanded: false
    },
    {
      id: '2',
      title:"Я живу в другом городе, я могу участвовать?",
      answer:`Вы можете быть частью нашей команды из любой точки Казахстана!`,
      expanded: false
    },
    {
      id: '3',
      title:"Могут ли подавать заявку граждане других стран?",
      answer:`Конечно можете - где бы вы ни были, вы можете быть с нами!`,
      expanded: false
    },
    {
      id: '4',
      title:"Могу ли я совмещать обучение с работой/учебой?",
      answer:`Да, можете! К тому же, если вы не успеваете, есть записи занятий!`,
      expanded: false
    },
    {
      id: '5',
      title:"Я работаю/ учусь full-time, я могу участвовать?",
      answer:`Конечно! Занятия записываются, так что вы ничего не пропустите!`,
      expanded: false
    },
  ])

  return <div id="faq" className="px-64 py-10 bg-[#282828]">
    <h2 className="text-center font-bold text-5xl pb-12">Отвечаем на вопросы</h2>
    <Accordion defaultActiveKey={index}>
      {
        FAQS.map((F, i) => <Accordion.Item eventKey={i} onClick={() => index === i ? setIndex(-1) : setIndex(i)} key={F.title}>
          <Accordion.Header>
            <div className="w-full flex justify-between">
              {F.title}
              <button className="rounded-full w-[40px] h-[40px] bg-white text-4xl text-black flex items-center justify-center">
                <span>{index === i ? '-' : '+'}</span>
              </button>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <p className="text-xl">
              {F.answer}
            </p>
          </Accordion.Body>
        </Accordion.Item>)
      }
    </Accordion>
  </div>
}