import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const LANGUAGES = ['KOREA', 'ENGLISH', 'FRENCH', 'CHINESE', 'JAPANESE']

const Footer = () => {
  const [lang, setLang] = useState('KOREA')
  const [langOpen, setLangOpen] = useState(false)

  return (
    <footer id="footer">
      <div className="footer_top_outter">
        <div className="footer_top">
          <ul className="footer_menu">
            <h3>brand</h3>
            <li><Link to="/brand">브랜드 소개</Link></li>
            <li><a href="#none">브랜드 히스토리</a></li>
          </ul>
          <ul className="footer_menu">
            <h3>models</h3>
            <li><Link to="/phantom">phantom</Link></li>
            <li><a href="#none">phantom Extended</a></li>
            <li><a href="#none">spectre</a></li>
            <li><a href="#none">ghost</a></li>
            <li><a href="#none">ghost extended</a></li>
            <li><a href="#none">cullinan</a></li>
            <li><a href="#none">dawn</a></li>
            <li><a href="#none">black badge</a></li>
          </ul>
          <ul className="footer_menu">
            <h3>service</h3>
            <li><a href="#none">견적내기</a></li>
            <li><a href="#none">시승 신청하기</a></li>
            <li><a href="#none">비교하기</a></li>
            <li><a href="#none">구매 상담 신청</a></li>
          </ul>
          <ul className="footer_menu">
            <h3>customer</h3>
            <li><a href="#none">공지사항</a></li>
            <li><a href="#none">이벤트</a></li>
            <li><a href="#none">고객센터 안내</a></li>
          </ul>
          <ul className="footer_menu">
            <h3>center</h3>
            <li><a href="#none">전시장 찾기</a></li>
            <li><a href="#none">a/s센터 찾기</a></li>
          </ul>
        </div>
      </div>

      <div className="footer_middle">
        <ul className="policy">
          {['사이트맵', '이용약관', '사이트맵', '개인정보 처리방침', '채용정보', '보증안내', '자주묻는 질문'].map((item) => (
            <li key={item}><a href="#none">{item}</a></li>
          ))}
        </ul>
        <div className="footer_sns">
          <span className="xi-youtube-play" />
          <span className="xi-facebook" />
          <span className="xi-instagram" />
          <span className="xi-twitter" />
        </div>
      </div>

      <div className="footer_bottom">
        <p className="copy">© 2023 rolls-royce Korea. All rights reserved</p>
        <div className="select_box language">
          <div
            className={`select_title language_title${langOpen ? ' active' : ''}`}
            onClick={() => setLangOpen((v) => !v)}
          >
            {lang}
          </div>
          <ul className={`select_list language_list${langOpen ? ' open' : ''}`}>
            {LANGUAGES.map((l) => (
              <li key={l}>
                <a href="#none" onClick={(e) => { e.preventDefault(); setLang(l); setLangOpen(false) }}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer_logo">
        <Link to="/">
          <img src="/img/logo/footer_logo.svg" alt="footer_logo" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
