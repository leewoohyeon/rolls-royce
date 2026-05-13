import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Brand.scss'

const BRAND_IMAGES = [
  '/img/brand/brand_img_1.jpg',
  '/img/brand/brand_img_2.jpg',
  '/img/brand/brand_img_3.jpg',
  '/img/brand/brand_img_4.jpg',
  '/img/brand/brand_img_5.jpg',
  '/img/brand/brand_img_6.jpg',
]

const Brand = () => {
  const [menuOverlay, setMenuOverlay] = useState(false)

  return (
    <div className="page-brand">
      <Header onMenuOpen={setMenuOverlay} />
      {menuOverlay && <span className="sec_1_bg active" />}

      <main id="main">
        {/* Section 1: Hero Video */}
        <section className="sec_1">
          <Swiper
            className="mySwiper sec_1_brand_swiperbox"
            modules={[Pagination]}
            loop
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <video autoPlay loop muted playsInline>
                <source src="/video/brand.mp4" />
              </video>
              <div className="sec_1_brand">
                <h3>INSPIRING<br />GREATNESS</h3>
                <p>
                  Inspiring Greatness는 롤스로이스 모터카의 핵심입니다.<br />
                  우리의 혁신과 열망 그리고 지속되는 유산을 이끄는 힘입니다.<br />
                  끊임없이 가능성의 한계에 도전하는 우리에게 Inspiring Greatness는<br />
                  우리의 궁극적인 목표로 영원히 남을 것입니다.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <span className="sec_1_bg_static" />

        {/* Section 2: OUR STORY */}
        <section className="sec_2_brand">
          <h2>OUR STORY</h2>
          <Swiper
            className="mySwiper sec_2_brand_swiperbox"
            modules={[Autoplay, Pagination]}
            slidesPerView={3}
            spaceBetween={30}
            loop
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {BRAND_IMAGES.map((src, i) => (
              <SwiperSlide key={i} className="sec_2_brand_slide">
                <img src={src} alt={`brand_img_${i + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
          <h3>AN ICON IS BORN</h3>
          <p>
            오늘날까지 오직 롤스로이스 차량에만 장식되는 이 작은 조각상은
            개인의 자유 추구와 순응을 거부할 자유를 표현합니다.
            그 시대의 사회적 관습에 도전하는 Eleanor Thornton의 모습은
            곧 하나의 상징이 되었습니다.
          </p>
        </section>

        {/* Section 3: ONWARDS — parallax via CSS */}
        <section className="sec_3_brand">
          <div
            className="sec_3_brand_parallax"
            style={{ backgroundImage: 'url(/img/brand/brand_sec3_img.jpg)' }}
          />
          <div className="brand_textbox sec_3_brand_textbox">
            <h3 className="brand_title">ONWARDS</h3>
            <p className="brand_text">
              순간을 소유하면서도 순간을 초월하여 존재하는 것이 바로 아이콘을 만드는 것입니다.
              우리는 새로운 기술과 혁신을 통해 앞으로 나아가 여행 경험을 더 향상시키고,
              새로운 에너지원을 활용하고, 인공 지능의 가능성을 수용합니다.
            </p>
          </div>
        </section>

        {/* Section 4: Video — YOU ARE THE ARCHITECT */}
        <section className="sec_4_brand">
          <video src="/video/90 Pairs of Hands _ Rolls-Royce Inspiring Greatness.mp4" loop muted autoPlay playsInline />
          <div className="brand_textbox">
            <h3 className="brand_title">YOU ARE THE ARCHITECT</h3>
            <p className="brand_text">
              롤스로이스 모터카는 지난 100년 동안 럭셔리 자동차의 한계에 도전해 왔습니다.
              불가능에 도전하고 시간을 초월한 예술 작품을 설계해왔습니다.
              크기, 형태, 공간, 소재까지, 가능성 무한하며 이를 설계하는 것은 바로 귀하입니다.
            </p>
          </div>
        </section>

        {/* Section 5: Showroom / Members */}
        <section className="sec_5_brand">
          <div className="sec_6_inner_phantom">
            <div className="sec_6_out_design_box">
              <div className="sec_6_out_design">
                <div className="sec_6_contents_inner">
                  <div className="sec_6_design_text">
                    <h3>전시장</h3>
                    <p>
                      롤스로이스 모터카 서울은 언제나 고객님을 최우선으로 생각하며,
                      신차 구매부터 사후관리까지 책임감 있는 서비스를 제공할 것을 약속 드립니다.
                    </p>
                    <a href="#none" className="brand_more">더보기</a>
                  </div>
                  <div className="sec_6_design_img">
                    <div
                      className="sec_5_brand_parallax"
                      style={{ backgroundImage: 'url(/img/brand/place_img.jpeg)' }}
                    />
                  </div>
                </div>
                <div className="sec_6_contents_inner">
                  <div className="sec_6_design_text">
                    <h3>멤버스</h3>
                    <p>
                      롤스로이스 오너만을 위한 또다른 세계입니다. 365일 24시간 컨시어지 서비스가 제공되며,
                      물론 무료입니다.
                    </p>
                    <a href="#none" className="brand_more">더보기</a>
                  </div>
                  <div className="sec_6_design_img">
                    <div
                      className="sec_5_brand_parallax"
                      style={{ backgroundImage: 'url(/img/brand/members_img.jpeg)' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Final CTA */}
        <section className="sec_6_brand">
          <div className="brand_textbox">
            <h3 className="brand_title">YOU ARE THE ARCHITECT</h3>
            <p className="brand_text">
              롤스로이스 모터카는 지난 100년 동안 럭셔리 자동차의 한계에 도전해 왔습니다.
              각 롤스로이스가 사람의 지문만큼이나 독특한 미래를 상상해 보세요.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Brand
