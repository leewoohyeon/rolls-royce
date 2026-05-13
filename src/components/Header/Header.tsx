import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

interface HeaderProps {
  onMenuOpen?: (open: boolean) => void
}

const Header = ({ onMenuOpen }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 250)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openMenu = () => {
    setMenuOpen(true)
    onMenuOpen?.(true)
  }
  const closeMenu = () => {
    setMenuOpen(false)
    onMenuOpen?.(false)
  }

  return (
    <header id="header" style={{ background: scrolled ? '#000' : 'transparent' }}>
      <nav className="navi">
        <ul
          className={`m_menu${scrolled ? ' active' : ''}`}
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
        >
          <div className="m_left_menu m_menu_inner">
            <li><a href="#none">BRAND</a></li>
            <li><a href="#none">MODEL</a></li>
            <li><a href="#none">SERVICE</a></li>
          </div>
          <div>
            <h1>
              <Link to="/">
                <img src="/img/logo/logo_1.svg" alt="logo" />
              </Link>
            </h1>
          </div>
          <div className="m_right_menu m_menu_inner">
            <li><a href="#none">CUSTOMER</a></li>
            <li><a href="#none">CENTER</a></li>
          </div>
        </ul>

        <ul
          className={`s_menu${menuOpen ? ' open' : ''}`}
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
        >
          <div className="s_left_menu">
            <div>
              <li><Link to="/brand">브랜드 소개</Link></li>
              <li><a href="#none">브랜드 히스토리</a></li>
            </div>
            <div>
              <li><Link to="/phantom">PHANTOM</Link></li>
              <li><a href="#none">PHANTOM EXTENDED</a></li>
              <li><a href="#none">SPECTRE</a></li>
              <li><a href="#none">GHOST</a></li>
              <li><a href="#none">GHOST EXTENDED</a></li>
              <li><a href="#none">CULLINAM</a></li>
              <li><a href="#none">DAWN</a></li>
              <li><a href="#none">BLACK BADGE</a></li>
            </div>
            <div>
              <li><a href="#none">견적내기</a></li>
              <li><a href="#none">시승 신청</a></li>
              <li><a href="#none">비교하기</a></li>
              <li><a href="#none">구매 상담 신청</a></li>
            </div>
          </div>
          <div className="s_right_menu">
            <div>
              <li><a href="#none">공지사항</a></li>
              <li><a href="#none">이벤트</a></li>
              <li><a href="#none">고객센터</a></li>
            </div>
            <div>
              <li><a href="#none">전시장</a></li>
              <li><a href="#none">A/S센터</a></li>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header
