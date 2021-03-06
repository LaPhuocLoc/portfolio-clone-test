import React from 'react'
import './portfolio.scss'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import PageHeader from './../../components/PageHeader/PageHeader';
import {
  portfolio1, portfolio2, portfolio3, portfolio4,
  music1, music2,
  theater1, theater2, theater3,
  foodie1, foodie2, foodie3, foodie4, foodie5,
  ec1, ec2, ec3, ec4,
  game1, game2, game3, game4, game5,
  movie1, movie2, movie3, movie4, movie5,
} from '../../assets/portfolio/portfolio'
import PortfolioDetail from '../../components/PortfolioCard/PortfolioDetail';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
const portfolio = [
  {
    id: 1,
    thumbUrl: [foodie1, foodie2, foodie3, foodie4, foodie5],
    date: '2021年10月15日ー2021年11月23日',
    title: 'MyFoodie',
    description: '中央情報専門学校のプレゼンテーショングランプリ大会で1年生の制作部門(技術)「2位」を取りました作品です。ウェブサイトのテーマは「マイフーディ」です。中国、ベトナム、日本の料理の特徴や具体的なレシピを紹介しました。さらに「国の紹介」ページ、「ミニゲーム」ページ、「お問合せ」ページ、そしてページ内検索機能など、チーム全員がやりたいコンテンツをどんどん追加していきました。仕事量が増えるよりもスケジュール管理が大変だったのですが、全員が満足する良い作品を完成させました。 ',
    role: 'フロントエンド',
    frontend: ['CSS', 'Bootstrap', 'Javascript'],
    backend: 'Java, Spring Boot, MySQL',
    source: 'https://github.com/LaPhuocLoc/MyFoodie2',
    preview: 'https://rokku-food.netlify.app/',
    video: 'https://www.youtube.com/watch?v=rx-fLzNr1eM',
    tags: ['git', 'ui / ux', 'css', 'bootstrap', 'responsive', 'javascript', 'web api', 'web app', 'food', 'travel']
  },
  {
    id: 2,
    thumbUrl: [movie1, movie2, movie3, movie4, movie5],
    date: '2022年3月4日ー2022年3月14日',
    title: 'Movie App',
    description: 'フロントエンドはSCSSとReact,バックエンドはTMDB APIを利用して、動画配信サービスのネットフリックスのようなWEBサイトを作成しました。',
    role: 'フロントエンド',
    frontend: ['SCSS', 'React'],
    backend: 'The Movie Database (TMDB) API',
    source: 'https://github.com/LaPhuocLoc/movie-app',
    preview: 'https://rokku-movie.netlify.app/',
    video: 'https://youtu.be/EwX2gFZFobA',
    tags: ['react', 'scss', 'responsive', 'web api', 'axios', 'movie', 'web app']
  },
  {
    id: 3,
    thumbUrl: [game1, game2, game3, game4, game5],

    date: '2022年2月2日ー2022年2月16日',
    title: 'Game Landing Page',
    description: 'SCSSやReactJSを利用し、レスポンシブのゲームランディングページを作成しました。',
    role: 'フロントエンド',
    frontend: ['SCSS', 'React'],
    backend: 'なし',
    source: 'https://github.com/LaPhuocLoc/landing-page',
    preview: 'https://rokku-game.netlify.app/',
    video: 'https://youtu.be/Agv30p2llrU',
    tags: ['react', 'scss', 'vitejs', 'animation', 'game landing page', 'web design']
  },
  {
    id: 4,
    thumbUrl: [portfolio1, portfolio2, portfolio3, portfolio4],
    date: '2022月3月25日2022月4月1日',
    title: 'My Portfolio',
    description: 'このWebページです。HTMLとCSS(SASS),ReactJSを使用し、シングルページアプリケーションに仕上げました。これまでに手がけた制作物、身につけたスキルをまとめています。',
    role: 'フロントエンド',
    frontend: ['SCSS', 'React'],
    backend: 'なし',
    source: 'https://github.com/LaPhuocLoc/react-portfolio',
    preview: 'https://rokku.netlify.app/',
    video: 'なし',
    tags: ['react', 'scss', 'ui/ux', 'responsive', 'animation', 'portfolio', 'web design']
  },
  {
    id: 5,
    thumbUrl: [ec1, ec2, ec3, ec4],

    date: '2022年4月ー未定',
    title: 'E-Commerce Store(未完成)',
    description: 'SCSSやReactJSを利用し、レスポンシブのWEBデザインのECサイトを作成しています。未完成なので、バックエンドはまだ何もありません。',
    role: 'フロントエンド',
    frontend: ['SCSS', 'Ant Design', 'React'],
    backend: 'なし',
    source: 'https://github.com/LaPhuocLoc/commerce-app',
    preview: 'https://rokku-commerce.netlify.app/',
    video: 'https://youtu.be/fJ6J75EB3dw',
    tags: ['react', 'scss', 'responsive', 'ant design', 'ecommerce', 'web app']
  },
  {
    id: 6,
    thumbUrl: [music1, music2],

    date: '2022年1月11日ー2022年1月17日',
    title: 'Music Player',
    description: 'CSSとJavascriptを用いてミュージックプレイヤーアプリを作成しました。',
    role: 'フロントエンド',
    frontend: ['CSS', 'Javascript'],
    backend: 'なし',
    source: 'https://github.com/LaPhuocLoc/Mp3Player',
    preview: 'https://rokku-music.netlify.app/',
    video: 'https://youtu.be/kvvyQNWTAMQ',
    tags: ['javascript', 'css', 'ui/ux', 'music app']
  },
  {
    id: 7,
    thumbUrl: [theater1,theater2,theater3],

    date: '2022年1月17日ー2022年1月19日',
    title: 'Theater Homepage',
    description: 'CSSやJavascript,Bootstrapを用いて映画館情報のレスポンシブのWEBサイトを作成しました。',
    role: 'フロントエンド',
    frontend: ['CSS', 'Bootstrap', 'Javascript'],
    backend: 'なし',
    source: 'https://github.com/LaPhuocLoc/Movie-Theater',
    preview: 'https://rokku-theater.netlify.app/',
    video: 'https://youtu.be/2MY77Glw-3Q',
    tags: ['css', 'javascript', 'responsive', 'bootstrap', 'movie', 'web design']
  },

]

const Portfolio = () => {
  return (
    <>
      <div className="slide"></div>
      <div className="section portfolio mb-3" data-aos="fade-up">
        <PageHeader white='my' yellow='portfolio' titleBg='works' />
        <div className="container">
          <Tabs className="tab" defaultIndex={3}>
            <TabList className="tab__nav">
              <Tab className="tab__nav-item">CSS/JAVASCRIPT</Tab>
              <Tab className="tab__nav-item">SCSS/REACT</Tab>
              <Tab className="tab__nav-item">Restful API</Tab>
              <Tab className="tab__nav-item">ALL</Tab>
            </TabList>
            <TabPanel className="tab__panel">
              {
                portfolio.filter(item => item.tags.includes('javascript')).map((filteredItem, i) => (
                  <PortfolioCard item={filteredItem} id={filteredItem.id} key={i} />
                ))
              }
            </TabPanel>
            <TabPanel className="tab__panel">
              {
                portfolio.filter(item => item.tags.includes('react')).map((filteredItem, i) => (
                  <PortfolioCard item={filteredItem} id={filteredItem.id} key={i} />
                ))
              }
            </TabPanel>
            <TabPanel className="tab__panel">
              {
                portfolio.filter(item => item.tags.includes('web api')).map((filteredItem, i) => (
                  <PortfolioCard item={filteredItem} id={filteredItem.id} key={i} />
                ))
              }
            </TabPanel>
            <TabPanel className="tab__panel">
              {portfolio.map((item, i) => (
                <PortfolioCard item={item} id={item.id} key={i} />
              ))}
            </TabPanel>
          </Tabs>
        </div>
      </div>
      {portfolio.map((item, i) => (
        <PortfolioDetail item={item} id={item.id} key={i} />
      ))}
    </>
  )
}

export default Portfolio