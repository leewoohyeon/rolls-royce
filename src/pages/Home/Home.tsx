import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Controller } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Home.scss'

const MODELS_SLIDES = [
  [
    { img: '/img/PHANTOM/phantom_3.jpg', name: 'PHANTOM', href: '/phantom' },
    { img: '/img/PHANTOM Extended/phantomextended_2.jpg', name: 'PHANTOM EXTENDED', href: '#none' },
    { img: '/img/Spectre/spectre_3.jpg', name: 'SPECTRE', href: '#none' },
  ],
  [
    { img: '/img/Ghost/ghost_img.jpeg', name: 'GHOST', href: '#none' },
    { img: '/img/Ghost Extended/ghost extended.jpg', name: 'GHOST EXTENDED', href: '#none' },
    { img: '/img/Cullinan/cullinan_2.jpg', name: 'CULLINAM', href: '#none' },
  ],
  [
    { img: '/img/Dawn/dawn_img_1.jpg', name: 'DAWN', href: '#none' },
    { img: '/img/bespoke/img_1.jpg', name: 'BESPOKE', href: '#none' },
    { img: '/img/Black Badge /black badge_img_1.jpg', name: 'BLACK BADGE', href: '#none' },
  ],
]

const S1_IMAGES = [
  '/img/main/img_1.jpg',
  '/img/main/next_1.jpg',
  '/img/main/next_3.jpg',
  '/img/main/next_5.jpg',
  '/img/main/next_4.jpg',
]

const S2_SLIDES = [
  { title: 'THE WORLD OF BESPOKE', text: '롤스로이스는 단순히 자동차가 아닙니다. 고도로 숙련된 장인들과 디자이너들이 당신의 주문에 따라 수작업으로 완성하는 예술 작품입니다.' },
  { title: 'PHANTOM TRANQUILLITY', text: '단 25대만 생산된 Phantom Tranquillity는 1906년 스웨덴에 떨어진 Muonionalusta 운석의 일부를 내장해 우주 탐험을 떠오르게 합니다.' },
  { title: 'WRAITH EAGLE VIII', text: '1919년 6월 15일, 인류는 트윈 롤스로이스 Eagle VIII 항공기 엔진으로 세계 최초의 대서양 횡단 비행을 성공했습니다.' },
  { title: 'GHOST ZENITH', text: '역대 가장 성공적인 롤스로이스를 기념하기 위해, 타의 추종을 불허하는 컬렉션 차량인 Ghost Zenith를 만들었습니다.' },
  { title: 'WRAITH KRYPTOS', text: '비밀스러운 암호화 세계에서 영감을 받아 탄생한 리미티드 Bespoke 컬렉션인 Wraith Kryptos를 선보입니다.' },
]

const S3_IMAGES = [
  '/img/main/next_1.jpg',
  '/img/main/next_3.jpg',
  '/img/main/next_5.jpg',
  '/img/main/next_4.jpg',
  '/img/main/img_1.jpg',
]

const CONTENTS = [
  {
    img: '/img/main/contents_1.jpg',
    title: 'EVENT',
    text: '롤스로이스의 독점 이벤트에서 최고의 고급스러움과 숙련된 장인 정신을 경험하세요.',
  },
  {
    img: '/img/main/contents_2.jpg',
    title: 'SERVICE',
    text: '모든 부분에서 완벽을 추구하는 롤스로이스에게, 소유권 서비스 역시 예외가 아닙니다.',
  },
  {
    img: '/img/main/contents_3.jpeg',
    title: 'MEMBERS',
    text: '오직 롤스로이스 오너만을 위해 엄선된 세계에 들어오세요.',
  },
]

const FILTERS = ['ALL', 'SEDAN', 'SUV']

const Home = () => {
  const navigate = useNavigate()
  const [menuOverlay, setMenuOverlay] = useState(false)
  const [filter, setFilter] = useState('ALL')
  const [filterOpen, setFilterOpen] = useState(false)

  const [s2, setS2] = useState<SwiperType | null>(null)
  const [s3, setS3] = useState<SwiperType | null>(null)
  const s1Ref = useRef<SwiperType | null>(null)

  const handleSetS1 = (swiper: SwiperType) => {
    s1Ref.current = swiper
  }

  return (
    <div className="page-home">
      <Header onMenuOpen={setMenuOverlay} />
      {menuOverlay && <span className="sec_1_bg active" />}

      <main id="main">
        {/* Section 1: Hero Swiper */}
        <section className="sec_1">
          <Swiper
            className="mySwiper sec_1_swiperbox"
            modules={[Autoplay, Pagination]}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide onClick={() => navigate('/phantom')} style={{ cursor: 'pointer' }}>
              <video autoPlay loop muted playsInline>
                <source src="/video/Rolls-Royce Phantom Series II _ Autumnal Drive.mp4" />
              </video>
              <div className="model_info model_text">
                <h1 className="model_title">PHANTOM</h1>
              </div>
              <div className="model_more model_text">
                <span><a href="/phantom">더보기</a></span>
                <span><a href="#none">견적내기</a></span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <video autoPlay loop muted playsInline>
                <source src="/video/Cullinan Scotland.mp4" />
              </video>
              <div className="model_info model_text">
                <h1 className="model_title">CULLINAN</h1>
              </div>
              <div className="model_more model_text">
                <span><a href="#none">더보기</a></span>
                <span><a href="#none">견적내기</a></span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <video autoPlay loop muted playsInline>
                <source src="/video/Rolls-Royce Ghost_ World's first drive.mp4" />
              </video>
              <div className="model_info model_text">
                <h1 className="model_title">GHOST</h1>
              </div>
              <div className="model_more model_text">
                <span><a href="#none">더보기</a></span>
                <span><a href="#none">견적내기</a></span>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        {/* Section 2: Model Grid */}
        <section className="sec_2">
          <div className="sec_2_inner">
            <div className="sec_2_title">
              <h2>MODEL</h2>
              <div className="select_box">
                <div
                  className={`select_title filter_title${filterOpen ? ' active' : ''}`}
                  onClick={() => setFilterOpen((v) => !v)}
                >
                  {filter}
                </div>
                <ul className={`select_list filter_list${filterOpen ? ' open' : ''}`}>
                  {FILTERS.map((f) => (
                    <li key={f}>
                      <a href="#none" onClick={(e) => { e.preventDefault(); setFilter(f); setFilterOpen(false) }}>
                        {f}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Swiper
              className="mySwiper sec_2_swiperbox"
              modules={[Pagination]}
              spaceBetween={30}
              loop
              pagination={{ clickable: true }}
            >
              {MODELS_SLIDES.map((slide, si) => (
                <SwiperSlide key={si} className="sec_2_swiper">
                  {slide.map((model) => (
                    <div className="procut_box" key={model.name}>
                      <img src={model.img} alt={model.name} />
                      <div className="product_info">
                        <h3>{model.name}</h3>
                        <a href={model.href}>자세히보기</a>
                      </div>
                    </div>
                  ))}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Section 3: Quick Menu */}
        <section className="sec_3">
          <div className="sec_3_inner">
            <div><img src="/img/icon/car-check.png" alt="icon" /><p>견적받기</p></div>
            <div><img src="/img/icon/client.png" alt="icon" /><p>상담신청</p></div>
            <div><img src="/img/icon/handle.png" alt="icon" /><p>시승신청</p></div>
            <div><img src="/img/icon/catalog.png" alt="icon" /><p>카달로그</p></div>
          </div>
        </section>

        {/* Section 4: Synchronized Swipers */}
        <section className="sec_4">
          <Swiper
            className="sec_4_swiper s1"
            loop
            modules={[Controller]}
            controller={{ control: [s2, s3].filter(Boolean) as SwiperType[] }}
            onSwiper={handleSetS1}
            onClick={() => s1Ref.current?.slidePrev()}
          >
            {S1_IMAGES.map((src, i) => (
              <SwiperSlide key={i}>
                <img src={src} alt={`slide ${i + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            className="sec_4_swiper s2"
            loop
            allowTouchMove={false}
            modules={[Controller]}
            onSwiper={setS2}
          >
            {S2_SLIDES.map((slide, i) => (
              <SwiperSlide key={i}>
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            className="sec_4_swiper s3"
            loop
            modules={[Controller]}
            onSwiper={setS3}
            onClick={() => s1Ref.current?.slideNext()}
          >
            {S3_IMAGES.map((src, i) => (
              <SwiperSlide key={i}>
                <img src={src} alt={`slide ${i + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Section 5: Contents */}
        <section className="sec_5">
          <div className="sec_5_inner">
            <h2>CONTENTS</h2>
            <div className="sec_5_box">
              {CONTENTS.map((c) => (
                <div className="sec_5_contents" key={c.title}>
                  <div className="sec_5_imgbox">
                    <img src={c.img} alt={c.title} />
                  </div>
                  <div className="contents_line">
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home
