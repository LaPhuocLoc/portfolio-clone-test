import React from 'react'
import './resume.scss'

const edu = [
  {
    time: '2018',
    place: 'Ly Thuong Kiet',
    edu: 'High School',
    description: '高校時代に学んでいたプログラミングで課題を解決した際に楽しみを感じたのきっかけで、IT業界に興味を持ちました。プログラミングを学ぶため、日本に来ました。 '
  },
  {
    time: '2019-2021',
    place: 'KOBE SUMIYOSHI INTERNATIONAL JAPANESE SCHOOL',
    edu: 'Japanese Course',
    description: '2019年4月から2021年3月まで神戸住吉国際日本語学校で日本語を勉強しました。'
  },
  {
    time: '2021-2023',
    place: 'Chuo Computer & Communication College',
    edu: 'IT WEB',
    description: '学校で、Java言語やICT基礎などを学ぶ傍ら、授業以外でも独学でIT技術の学習を続けています。	'
  },
]
const exp = [
  {
    time: '2022/2/26',
    place: 'Presentation',
    exp: 'WEB Development',
    description: '学校のプレゼンテーション大会に参加し、４人のチームでウェブサイトを作り、１年の技術部の2位を受賞することができました。'
  },
]

const Resume = () => {
  return (
    <>
      <h3 className="resume__heading mb-3">
        EDUCATION & EXPERIENCE
      </h3>
      <div className="resume">

        <div className="resume__edu" data-aos="fade-right">
          {edu.map((item, i) => (
            <div className="resume__edu__item mb-3" key={i}>
              <div className="icon">
                <i className='bx bxs-briefcase' ></i>
              </div>
              <span className="time">{item.time}</span>
              <h3>{item.place} <span className="place">{item.edu}</span> </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="resume__exp" data-aos="fade-left">
          {exp.map((item, i) => (
            <div className="resume__exp__item mb-3" key={i}>
              <div className="icon">
                <i className='bx bxs-briefcase' ></i>
              </div>
              <span className="time">{item.time}</span>
              <h3>{item.place} <span className="place">{item.exp}</span> </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Resume