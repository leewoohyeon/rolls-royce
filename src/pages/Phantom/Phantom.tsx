import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Phantom.scss'

const STATS = [
  { value: '2,294', unit: 'mi', label: 'Range(EPA est.)' },
  { value: '1.99', unit: 's', label: '0-60 mph' },
  { value: '200', unit: 'mph', label: 'Top Speed' },
  { value: '1,020', unit: 'hp', label: 'Peak Power' },
]

const GALLERY_IMAGES = [
  { src: '/img/PHANTOM/img_1.jpeg', alt: 'img_1' },
  { src: '/img/PHANTOM/phantom_2.jpg', alt: 'img_2' },
  { src: '/img/PHANTOM/phantom_1.jpeg', alt: 'img_3' },
]

const OUT_DESIGNS = [
  {
    title: '다이내믹 휠',
    text: '3D밀링으로 제조된 다이내믹 휠의 표면은 추상적인 깊이감을 만들어줍니다. 이동 시, 롤스로이스의 모노그램은 중앙에 똑바로 제모습을 유지하고 있습니다.',
    img: '/img/PHANTOM/out_img_1.jpg',
  },
  {
    title: '일루미네이티드 그릴',
    text: '다크 크롬 가장자리로 강화된 전설적인 롤스로이스 판테온 그릴은 이제 아름다운 빛을 발합니다.',
    img: '/img/PHANTOM/out_img_2.jpeg',
  },
  {
    title: '넋을 잃게 만드는 별빛',
    text: '스타라이트 헤드라이트는 맑은 밤하늘을 수 놓는 아름다운 별빛을 연상시킵니다. 580개의 레이저 컷 별들의 정교한 쇼로 어두움 속에서 빛납니다.',
    img: '/img/PHANTOM/out_img_3.jpg',
  },
  {
    title: '영원한 뮤즈',
    text: '유명한 환희의 여신상은 팬텀 시리즈 II에 어울리는 아이콘으로 보닛을 장식하고 있으며, 우아한 날개 짓으로 길을 밝혀줍니다.',
    img: '/img/PHANTOM/out_img_1.jpg',
  },
]

const IN_DESIGNS = [
  {
    title: '완벽한 통제',
    text: '옵션인 두꺼운 핸들(Thick Steering Wheel)은 운전자와 자동차간의 궁극의 연결점입니다.',
    img: '/img/PHANTOM/in_img_1.jpg',
  },
  {
    title: '현대적인 디스플레이',
    text: '오픈 포어 옵시디안 아이오스 베니어는 미네랄 용암석에서 찾아볼 수 있는 패턴과 색상에서 디자인 힌트를 얻었습니다.',
    img: '/img/PHANTOM/in_img_2.jpg',
  },
  {
    title: '넋을 잃게 만드는 별빛',
    text: '스타라이트 헤드라이트는 580개의 레이저 컷 별들의 정교한 쇼로 어두움 속에서 빛납니다.',
    img: '/img/PHANTOM/in_img_3.jpg',
  },
  {
    title: '밤 하늘',
    text: '슈팅 스타 헤드라이너는 가죽의 루프 라이닝에 섬세하게 수놓아진 수 백 개의 광섬유 라이트로 만들어졌습니다.',
    img: '/img/PHANTOM/in_img_4.jpg',
  },
]

const SHOWROOMS = ['서울', '판교라운지', '부산']
const SHOWROOM_MAPS = [
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101346.38858720812!2d126.99347525998384!3d37.458959494083025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca47bc2d4b881%3A0xef98e71a17ebf273!2z66Gk7Iqk66Gc7J207IqkIOuqqO2EsOy5tCDshJzsmrg!5e0!3m2!1sko!2skr!4v1684429744474!5m2!1sko!2skr',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.8222504386345!2d127.10754937618685!3d37.394035672083824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b595f9bee45e1%3A0x15682884620390bf!2z66Gk7Iqk66Gc7J207IqkIOuqqO2EsOy5tCDtjJDqtZDrnbzsmrTsp4A!5e0!3m2!1sko!2skr!4v1684490547392!5m2!1sko!2skr',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52177.8966790236!2d129.04436888750476!3d35.178597874676356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568dac17d3a7605%3A0x42e3adb68d2779c3!2z66Gk7Iqk66Gc7J207IqkIOuqqO2EsOy5tCDrtoDsgrA!5e0!3m2!1sko!2skr!4v1684490623042!5m2!1sko!2skr',
]

const MODELS = ['PHANTOM', 'PHANTOM EXTENDED', 'SPECTRE', 'GHOST EXTENDED', 'CULLINAN', 'DAWN', 'BLACK BADGE']

interface FormState {
  consulting: string
  model: string
  showroom: string
  name: string
  phone: string
  email: string
  privacyCheck: string
  thirdCheck: string
  marketingCheck: string
  adCheck: string
}

const Phantom = () => {
  const [menuOverlay, setMenuOverlay] = useState(false)
  const [showroomIdx, setShowroomIdx] = useState(0)
  const [showroomOpen, setShowroomOpen] = useState(false)
  const [modelOpen, setModelOpen] = useState(false)
  const navigate = useNavigate()

  const [form, setForm] = useState<FormState>({
    consulting: '', model: '', showroom: '서울',
    name: '', phone: '', email: '',
    privacyCheck: '', thirdCheck: '', marketingCheck: '', adCheck: '',
  })

  const setField = (field: keyof FormState, value: string) =>
    setForm((f) => ({ ...f, [field]: value }))

  const autoHyphen = (value: string) =>
    value.replace(/[^0-9]/g, '')
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/, '$1-$2-$3')
      .replace(/-{1,2}$/, '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.consulting) { alert('상담 신청 유형을 선택해주세요'); return }
    if (!form.model) { alert('차량 모델을 선택해주세요.'); return }
    if (!form.name.trim()) { alert('이름을 입력해주세요.'); return }
    if (!form.phone.trim()) { alert('연락처를 입력해주세요.'); return }
    if (!form.email.trim()) { alert('Email을 입력해주세요.'); return }
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
      alert('유효한 형식이 아닙니다.'); return
    }
    if (!form.privacyCheck) { alert('필수 값에 동의해주세요'); return }
    if (!form.thirdCheck) { alert('필수 값에 동의해주세요'); return }
    if (!form.marketingCheck) { alert('마케팅 목적의 수집 및 이용 여부에 체크해주세요'); return }
    if (!form.adCheck) { alert('광고성 정보 수신 동의 여부에 체크해주세요'); return }
    navigate('/')
  }

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setForm((f) => ({
        ...f,
        privacyCheck: '동의함', thirdCheck: '동의함',
        marketingCheck: '동의함', adCheck: '동의함',
      }))
    }
  }

  return (
    <div className="page-phantom">
      <Header onMenuOpen={setMenuOverlay} />
      {menuOverlay && <span className="sec_1_bg active" />}

      <main id="main">
        {/* Section 1: Hero Video */}
        <section className="sec_1">
          <Swiper
            className="mySwiper"
            modules={[Autoplay, Pagination]}
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <video autoPlay loop muted playsInline>
                <source src="/img/PHANTOM/video/Phantom Series II on the French Riviera _ Rolls-Royce.mp4" />
              </video>
              <div className="model_info model_text">
                <h1 className="model_title">PHANTOM</h1>
                <p className="model_sub_text">SERIES II</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <span className="sec_1_bg_static" />

        {/* Section 2: Stats */}
        <section className="sec_2 sec_2_phantom">
          <div className="sec_2_inner sec_2_phantom_inner">
            {STATS.map((s) => (
              <div key={s.label}>
                <h3>{s.value}<span>{s.unit}</span></h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Intro Text */}
        <section className="sec_3 sec_3_phantom">
          <div className="sec_3_inner sec_3_inner_phantom">
            <h3>롤스로이스의 정점</h3>
            <p>길들일 수 없는 전설. 아이콘들의 아이콘. 팬텀 시리즈 II는 홀로 럭셔리의 정점에 존재합니다.<br />
              개성이 강한 이들의 가슴을 뛰게하는 전례 없는 디자인은 명작의 진화입니다.</p>
          </div>
        </section>

        {/* Section 4: Gallery Swiper */}
        <section className="sec_4 sec_4_phantom">
          <Swiper
            className="mySwiper sec_4_inner"
            modules={[Pagination]}
            loop
            pagination={{ el: '.phantom_sec4_pagination', clickable: true }}
          >
            {GALLERY_IMAGES.map((img) => (
              <SwiperSlide key={img.src}>
                <img src={img.src} alt={img.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="phantom_sec4_pagination" />
        </section>

        {/* Section 5: Detail Images */}
        <section className="sec_5 sec_5_phantom">
          <div className="sec_5_inner sec_5_inner_phantom">
            <div className="sec_5_phantom_imgbox">
              <img src="/img/PHANTOM/detail_img_1.jpg" alt="detail_img_1" />
              <img src="/img/PHANTOM/detail_img_2.jpg" alt="detail_img_2" />
            </div>
            <div className="sec_5_phantom_textbox">
              <h3>아이콘의 표현</h3>
              <p>팬텀 시리즈 II는 과감하고 오리지널한 모습으로 그 도착을 알립니다.<br />
                절묘한 특징들은 세심한 기술과 엔지니어링으로 뒷받침되어, 경외감과 집중을 부르는 당당한 존재감을 만들어 냅니다.</p>
            </div>
          </div>
        </section>

        {/* Section 6: Design Details */}
        <section className="sec_6 sec_6_phantom">
          <div className="sec_6_inner sec_6_inner_phantom">
            {/* 외장 디자인 */}
            <div className="sec_6_out_design_box">
              <div className="sec_6_phantom_text">
                <p className="sec_6_phantom_sub_title">디자인</p>
                <h3 className="sec_6_phantom_title">외장 디자인</h3>
                <p>자신감의 전형, 그 누구도 흉내 낼 수 없는 스타일을 갖춘<br />
                  팬텀 시리즈 II는 과감하고 탁월한의 새로운 기준을 정의합니다</p>
              </div>
              <div className="sec_6_out_contents">
                <div className="sec_6_out_design">
                  {OUT_DESIGNS.map((d, i) => (
                    <div className="sec_6_contents_inner" key={i}>
                      <div className="sec_6_design_text">
                        <h3>{d.title}</h3>
                        <p>{d.text}</p>
                      </div>
                      <div className="sec_6_design_img">
                        <img src={d.img} alt={d.title} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 실내 디자인 */}
            <div className="sec_6_in_design_box">
              <div className="sec_6_phantom_text">
                <p className="sec_6_phantom_sub_title">디자인</p>
                <h3 className="sec_6_phantom_title interior">실내 디자인</h3>
                <p>그 안의 장엄함 팬텀 시리즈 II의 실내는 그 실외의 절묘한 연장선입니다.<br />
                  디테일에 대한 집중은 분명하게 눈에 띄며 장인정신은 비교 불과입니다.</p>
              </div>
              <div className="sec_6_in_contents">
                <div className="sec_6_in_design">
                  {IN_DESIGNS.map((d, i) => (
                    <div className="sec_6_contents_inner" key={i}>
                      <div className="sec_6_design_text">
                        <h3>{d.title}</h3>
                        <p>{d.text}</p>
                      </div>
                      <div className="sec_6_design_img">
                        <img src={d.img} alt={d.title} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Reservation Form */}
        <section className="sec_7 sec_7_phantom">
          <div className="sec7_inner sec_7_inner_phantom">
            <div className="sec_7_text">
              <h3>시승 및 상담 신청</h3>
              <p>당신만을 위한 특별한 시승이 기다립니다</p>
            </div>

            <form className="sec_7_form_box" onSubmit={handleSubmit}>
              <div className="sec_7_form">
                {/* Left */}
                <div className="sec_7_form_left">
                  <div>
                    <h3 className="sec_7_form_title">신청유형</h3>
                    {['시승 신청', '차량 상담', '영상 상담'].map((type) => (
                      <label key={type}>
                        <input
                          type="radio"
                          name="consulting"
                          checked={form.consulting === type}
                          onChange={() => setField('consulting', type)}
                        />
                        <span className="sec_7_contents_text">{type}</span>
                      </label>
                    ))}
                  </div>

                  <div>
                    <h3 className="sec_7_form_title">차량 모델 선택</h3>
                    <div className="select_box sec_7_select_box">
                      <div
                        className={`select_title product_title${modelOpen ? ' active' : ''}`}
                        onClick={() => setModelOpen((v) => !v)}
                      >
                        {form.model || 'MODEL'}
                      </div>
                      <ul className={`select_list product_list${modelOpen ? ' open' : ''}`}>
                        {MODELS.map((m) => (
                          <li key={m}>
                            <a href="#none" onClick={(e) => { e.preventDefault(); setField('model', m); setModelOpen(false) }}>
                              {m}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="sec_7_form_title">전시장</h3>
                    <div className="select_box sec_7_select_box showroom_box">
                      <div
                        className={`select_title showroom_title${showroomOpen ? ' active' : ''}`}
                        onClick={() => setShowroomOpen((v) => !v)}
                      >
                        {SHOWROOMS[showroomIdx]}
                      </div>
                      <ul className={`select_list showroom_list${showroomOpen ? ' open' : ''}`}>
                        {SHOWROOMS.map((s, i) => (
                          <li key={s}>
                            <a href="#none" onClick={(e) => { e.preventDefault(); setShowroomIdx(i); setShowroomOpen(false) }}>
                              {s}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="sec_7_form_right">
                  <div>
                    <h3 className="sec_7_form_title">개인정보 입력</h3>
                    <div className="input_text">
                      <input
                        type="text"
                        placeholder="이름"
                        value={form.name}
                        onChange={(e) => setField('name', e.target.value)}
                      />
                    </div>
                    <div className="input_text">
                      <input
                        type="text"
                        placeholder="연락처"
                        maxLength={13}
                        value={form.phone}
                        onChange={(e) => setField('phone', autoHyphen(e.target.value))}
                      />
                    </div>
                    <div className="input_text">
                      <input
                        type="text"
                        placeholder="이메일"
                        value={form.email}
                        onChange={(e) => setField('email', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="sec_7_map">
                <iframe
                  src={SHOWROOM_MAPS[showroomIdx]}
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="showroom-map"
                />
              </div>

              {/* Agreement */}
              <div className="sec_7_agree">
                <div>
                  <h3 className="sec_7_title">개인정보 제공 동의</h3>
                  <p>롤스로이스 모터카는 예약서비스 제공을 위해 &lt;개인정보 보호법&gt;등 관련 법률에 따라 아래와 같이 개인정보를 수집, 이용, 제공하고자 합니다.</p>
                </div>
                <div className="all_check">
                  <p>* 귀하는 아래 동의 내용을 확인한 후 개별 동의를 하실 수도 있습니다.</p>
                  <div>
                    <input
                      type="checkbox"
                      id="selectAllCheckbox"
                      onChange={(e) => handleSelectAll(e.target.checked)}
                    />
                    <label htmlFor="selectAllCheckbox">전체동의</label>
                  </div>
                </div>

                {[
                  { label: '개인정보 수집 및 이용 동의(필수)', name: 'privacyCheck', required: true },
                  { label: '개인정보 제3자 제공에 동의(필수)', name: 'thirdCheck', required: true },
                ].map((item) => (
                  <div key={item.name}>
                    <div className="sec_7_agre_contents">
                      <h3 className="sec_7_title sec_7_essential">{item.label}</h3>
                      <p className="sec_7_more">자세히보기</p>
                    </div>
                    {['동의함', '동의안함'].map((v) => (
                      <label className="sec_7_agree_inputbox" key={v}>
                        <input
                          type="radio"
                          name={item.name}
                          checked={form[item.name as keyof FormState] === v}
                          onChange={() => setField(item.name as keyof FormState, v)}
                        />
                        <span>{v}</span>
                      </label>
                    ))}
                  </div>
                ))}

                <div>
                  <div className="sec_7_agre_contents">
                    <h3 className="sec_7_title">마케팅 목적의 개인정보 수집 이용 및 광고성 정보 수신 동의(선택)</h3>
                    <p className="sec_7_more">자세히보기</p>
                  </div>
                  <div className="choice_agree">
                    <span>마케팅 목적의 수집 및 이용 여부</span>
                    {['동의함', '동의안함'].map((v) => (
                      <label className="sec_7_agree_inputbox" key={v}>
                        <input
                          type="radio"
                          name="marketingCheck"
                          checked={form.marketingCheck === v}
                          onChange={() => setField('marketingCheck', v)}
                        />
                        <span>{v}</span>
                      </label>
                    ))}
                  </div>
                  <div className="choice_agree">
                    <span>광고성 정보 수신 동의 여부</span>
                    {['동의함', '동의안함'].map((v) => (
                      <label className="sec_7_agree_inputbox" key={v}>
                        <input
                          type="radio"
                          name="adCheck"
                          checked={form.adCheck === v}
                          onChange={() => setField('adCheck', v)}
                        />
                        <span>{v}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="submit_button">
                <input type="submit" value="예약하기" />
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Phantom
