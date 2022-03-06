import Head from 'next/head'
import Papa from 'papaparse'
import Map from '../components/map'
import { useState, useEffect } from 'react'
import anime from 'animejs';

const faqs = [
  {
    id: 1,
    question: "When will Japan lift its travel ban and reopen for tourists?",
    answer: "Business people and students will likely be allowed into Japan in March (in limited numbers). Tourists will hopefully be allowed in soon after.",
  },
  {
    id: 2,
    question: "Can I go to Japan?",
    answer: "Not just yet. Travel for tourism is still not permitted, and there is no indication that this will change in the short term. On November 29, Japan announced that, due to the Omicron variant, all foreign visitors are banned from entering Japan. This includes business people and students.",
  },
  { 
    id: 3,
    question: "Who can go to Japan now?",
    answer: "Japanese citizens and foreign residents with a reentry permit are generally allowed to reenter Japan but must comply with strict pre- and post- travel testing requirements and quarantine upon arrival."
  },
  {
    id: 4,
    question: "When is the next update from the Japanese government?",
    answer: "We expect to hear the next update around March when they open the border to a limited number of overseas students, workers and business travelers.",
  },
  {
    id: 5,
    question: "I thought Japan eased restrictions?",
    answer: "That lasted for only a few weeks, and Japan never reopened for tourists.",
  },
]

const articles = [
  {
    id: 1,
    url: "https://www3.nhk.or.jp/nhkworld/en/news/20220110_20/",
    site_name: "NHK WORLD",
    title: "6,438 new cases of coronavirus reported in Japan | NHK WORLD-JAPAN News",
    description: "Japanese health officials say they confirmed 6,438 new cases of the coronavirus nationwide as of 6:30 p.m. on Monday.",
    image: "https://www3.nhk.or.jp/nhkworld/upld/thumbnails/en/news/20220110_20_1066197_L.jpg"
  },
  {
    id: 2,
    url: "https://mainichi.jp/english/articles/20220110/p2a/00m/0na/014000c",
    site_name: "The Mainichi",
    title: "Japan's COVID border restrictions keeping families apart, affecting relationships: group - The Mainichi",
    description: "TOKYO -- Amid severe restrictions on new entries by foreign nationals to Japan introduced in November 2021 following confirmation of the coronavirus's",
    image: "https://cdn.mainichi.jp/vol1/2022/01/10/20220110p2a00m0na011000p/0c10.jpg?1"
  },
  {
    id: 3,
    url: "https://www.japantimes.co.jp/news/2022/01/08/national/politics-diplomacy/omicron-fumio-kishida-covid-policy/",
    site_name: "The Mainichi",
    title: "Omicron spread puts Kishida's COVID policy to the test",
    description: "Kishida put three prefectures — Okinawa, Hiroshima and Yamaguchi — under quasi-emergency measures, but not all in his administration were on board with the decision.",
    image: "https://cdn-japantimes.com/wp-content/uploads/2022/01/np_file_134143-870x489.jpeg"
  },
  {
    id: 4,
    url: "https://english.kyodonews.net/news/2022/01/19d6f4cd1c20-covid-border-steps-force-300-foreigners-to-decline-japan-teacher-jobs.html",
    site_name: "The Mainichi",
    title: "COVID border steps force 300 foreigners to decline Japan teacher jobs",
    description: "Japan's COVID-19 border restrictions appear to have prompted more than 300 people to decline offers for foreign language teacher and assistant positions in Japan, leading to a fall in the number of such instructors in the country, according to a Kyodo News survey.",
    image: "https://img.kyodonews.net/english/public/images/posts/a1576910b54f79779619a1e609c8f047/cropped_image_l.jpg"
  },
  {
    id: 5,
    url: "https://english.kyodonews.net/news/2022/01/19d6f4cd1c20-covid-border-steps-force-300-foreigners-to-decline-japan-teacher-jobs.html",
    site_name: "Kyodo News+",
    title: "Japan's daily coronavirus cases top 13,000 for 1st time in 4 months",
    description: "Tokyo confirmed on Jan. 12 2,198 new daily coronavirus cases, the largest number of new infections in over four months, as the sixth wave of the pandemic spurred by the Omicron variant continues to spread.",
    image: "https://img.kyodonews.net/english/public/images/posts/397aca5738644738b978e8129bfde55d/cropped_image_l.jpg"
  },
  {
    id: 6,
    url: "https://english.kyodonews.net/news/2022/01/974eab354bf9-japan-set-to-maintain-entry-ban-at-least-until-end-of-feb.html",
    site_name: "Kyodo News+",
    title: "Japan further extends entry ban until end of Feb.",
    description: "The Japanese government will further extend an entry ban on non-resident foreigners until the end of February, Prime Minister Fumio Kishida says.",
    image: "https://img.kyodonews.net/english/public/images/posts/cae1d4ddbf125c4f1f1db692a2df876b/cropped_image_l.jpg"
  },
  {
    id: 7,
    url: "https://www.asahi.com/ajw/articles/14522102",
    site_name: "The Asahi Shimbun",
    title: "COVID-19 cases top 20,000 nationwide; dire cases surge",
    description: "Fresh cases of COVID-19 across the nation topped 20,000 on Jan. 14 for the first time since Sept. 1, according to preliminary figures as of 6 p.m.",
    image: "https://p.potaufeu.asahi.com/27c5-p/picture/26592497/4924848838c8a154b034432d2cb7cac1.jpg"
  },
  {
    id: 8,
    url: "https://www.japantimes.co.jp/news/2022/01/15/national/first-omicron-deaths-japan/",
    site_name: "The Japan Times",
    title: "Japan confirms first deaths among COVID-19 patients with the omicron variant",
    description: "Both patients, a woman in Chiba and a man in Shizuoka, were elderly and had pre-existing conditions.",
    image: "https://cdn-japantimes.com/wp-content/uploads/2022/01/np_file_135355-870x489.jpeg"
  },
  {
    id: 9,
    url: "https://www3.nhk.or.jp/nhkworld/en/news/20220116_350/",
    site_name: "NHK WORLD",
    title: "Japan's new coronavirus cases continue to surge",
    description: "Japan continues to face a surge in new coronavirus cases across the country. Officials are speeding up booster shots to stem the outbreak.",
    image: "https://www3.nhk.or.jp/nhkworld/upld/thumbnails/en/news/20220116_350_1068695_L.jpg"
  },
  {
    id: 10,
    url: "https://mainichi.jp/english/articles/20220117/p2g/00m/0na/031000c",
    site_name: "The Mainichi",
    title: "Japan looks to expand COVID quasi-emergency to Tokyo, 10 other prefs.",
    description: "Japan is considering placing 11 prefectures, including Tokyo and its vicinity, under a COVID-19 quasi-state of emergency to curb rapidly spreading coronavirus cases",
    image: "https://cdn.mainichi.jp/vol1/2022/01/17/20220117p2g00m0na030000p/0c10.jpg?1"
  },
  {
    id: 11,
    url: "https://english.kyodonews.net/news/2022/01/e566a5d02e19-urgent-japans-osaka-to-see-daily-record-of-about-6000-covid-19-cases.html",
    site_name: "Kyodo News+",
    title: "Japan's daily COVID-19 cases top 30,000, setting new record",
    description: "Japan's confirmed daily coronavirus cases top 30,000 for the first time, surpassing the previous record of 25,992 registered in August last year, according to a Kyodo News tally.",
    image: "https://img.kyodonews.net/english/public/images/posts/3812d36c0b91f26ffe58215341cfcac0/cropped_image_l.jpg"
  },
  {
    id: 12,
    url: "https://www.business-standard.com/article/international/japan-ready-to-expand-coronavirus-restrictions-as-infections-surge-122011800907_1.html",
    site_name: "Business Standard",
    title: "Japan ready to expand coronavirus restrictions as infections surge",
    description: "Japan's government is preparing social restrictions in Tokyo and other regions as the omicron variant of the coronavirus infects more people.",
    image: "https://bsmedia.business-standard.com/_media/bs/img/article/2021-11/05/full/1636111670-4079.jpg"
  },
  {
    id: 13,
    url: "https://english.kyodonews.net/news/2022/01/c1ced975d81e-urgent-tokyos-daily-covid-19-cases-top-10000-for-1st-time-hit-record-high.html",
    site_name: "Kyodo News+",
    title: "Japan's daily COVID cases top 50,000, new record for 5th straight day",
    description: "Japan's confirmed daily coronavirus cases top 50,000, setting a new record for the fifth day in a row, as the highly transmissible Omicron variant continues to spread across Japan quickly.",
    image: "https://img.kyodonews.net/english/public/images/posts/57cd7120f5e57c7487d19a2544c5606a/photo_l.jpg"
  },
  {
    id: 14,
    url: "https://www.japantimes.co.jp/news/2022/01/24/business/keidanren-travel-ban-japan-unrealistic/",
    site_name: "The Japan Times",
    title: "Japan's COVID-19 border closure 'unrealistic,' business lobby chief says",
    description: "The strict entry ban has been in place since Nov. 30 and was further extended until the end of February earlier this month.",
    image: "https://cdn-japantimes.com/wp-content/uploads/2022/01/np_file_136986-870x489.jpeg"
  },
  {
    id: 15,
    url: "https://www.business-standard.com/article/international/tokyo-reports-record-coronavirus-cases-as-japan-tightens-measures-122012501591_1.html",
    site_name: "Business Standard",
    title: "Tokyo reports record coronavirus cases as Japan tightens measures",
    description: "Tokyo on Tuesday reported a record high of Covid-19 cases, as Japan prepared to implement new anti-virus measures amid surging infections led by Omicron",
    image: "https://bsmedia.business-standard.com/_media/bs/img/article/2021-12/29/full/1640780048-4214.jpg"
  },
  {
    id: 16,
    url: "https://english.kyodonews.net/news/2022/01/b793de9dc38e-update1-japans-daily-covid-cases-near-80000-record-high-for-3rd-day.html",
    site_name: "KYODO NEWS",
    title: "Japan's daily COVID cases near 80,000, record high for 3rd day",
    description: "Japan's daily count of new COVID-19 cases neared 80,000 Thursday to hit a record high for the third consecutive day, as the highly transmissible Omicron variant continues its rapid spread in Tokyo and elsewhere.",
    image: "https://img.kyodonews.net/english/public/images/posts/6e4d9337f1d2692e3dd6a2ee9a1ac295/cropped_image_l.jpg"
  },
  {
    id: 17,
    url: "https://www.japantimes.co.jp/news/2022/02/04/national/kono-border-controls/",
    site_name: "The Japan Times",
    title: "Japan will take flexible approach on entry ban, COVID-19 minister says",
    description: "The government will present a policy covering whether to ease the entry rules as early as next week, a report said.",
    image: "https://cdn-japantimes.com/wp-content/uploads/2022/02/np_file_139121-870x489.jpeg"
  },
  {
    id: 18,
    url: "https://www.nippon.com/en/news/reu20220208KBN2KD152/",
    site_name: "nippon.com",
    title: "Japan reports daily record of 159 COVID deaths",
    description: "Japan reported 159 coronavirus deaths on Tuesday, a daily record, Kyodo news agency said.",
    image: "https://www.nippon.com/en/ncommon/contents/news/1546707/1546707.jpg"
  },
  {
    id: 19,
    url: "https://www3.nhk.or.jp/nhkworld/en/news/20220209_47/",
    site_name: "nhk",
    title: "Japan to extend coronavirus quasi-emergency measures",
    description: "Japanese authorities are struggling to curb a spike in coronavirus infections. The government is set to extend quasi-emergency measures covering Tokyo and 12 other prefectures and implement a more focused approach for children and the elderly.",
    image: "https://www3.nhk.or.jp/nhkworld/upld/thumbnails/en/news/20220209_47_1078364_L.jpg"
  },
  {
    id: 20,
    url: "https://asia.nikkei.com/Spotlight/Coronavirus/Japan-to-let-in-foreign-workers-and-students-starting-this-month",
    site_name: "Nikkei Asia",
    title: "Japan to let in foreign workers and students starting this month",
    description: "Loosening of COVID border controls follows pressure at home and abroad",
    image: "https://www.ft.com/__origami/service/image/v2/images/raw/https%253A%252F%252Fs3-ap-northeast-1.amazonaws.com%252Fpsh-ex-ftnikkei-3937bb4%252Fimages%252F8%252F0%252F7%252F8%252F38878708-1-eng-GB%252Fphoto_SXM2021113000001017.jpg?width=1024&height=512&fit=cover&gravity=faces&source=nar-cms"
  },
  {
    id: 21,
    url: "https://english.kyodonews.net/news/2022/02/cdbe92345865-150000-students-unable-to-enter-japan-due-to-covid-border-controls.html",
    site_name: "The Japan News",
    title: "Japan to ease COVID border controls, lift entry quarantine from March",
    description: "Some 150,000 foreign students who hold Japan visas were unable to enter the country by the end of last year due to its strict COVID-19 border controls, the top government spokesman say",
    image: "https://img.kyodonews.net/english/public/images/posts/055339d82da3da5b113a155e8d0415fa/cropped_image_l.jpg"
  },
  {
    id: 22,
    url: "https://www.theguardian.com/world/2022/feb/17/japan-to-ease-covid-border-controls-after-two-years",
    site_name: "The Guardian",
    title: "Japan to ease Covid border controls after two years of 'seclusion policy'",
    description: "Reports say PM will raise caps on arrivals and shorten quarantine times amid complaints that tough measures were worsening chronic labour shortage",
    image: "https://i.guim.co.uk/img/media/2ad2622d8b1f1c2872981079725e5943a2a9ad94/0_214_4420_2652/master/4420.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=51fd33dba3db8c73315dc5ec48f6fad8"
  },
  {
    id: 23,
    url: "https://www.japantimes.co.jp/news/2022/02/17/national/japan-eases-covid-border-restrictions/",
    site_name: "japantimes",
    title: "It's official: Japan eases entry restrictions for foreign students, business travelers and other nontourists",
    description: "The move comes amid growing concerns over economic and reputational costs, and as Kishida indicates exiting the sixth wave.",
    image: "https://cdn-japantimes.com/wp-content/uploads/2022/02/np_file_141683-870x489.jpeg"
  },
  {
    id: 24,
    url: "https://english.kyodonews.net/news/2022/02/e0388a04d12d-japan-seeks-to-further-ease-border-controls-as-covid-6th-wave-wanes.html",
    site_name: "KYODO NEWS",
    title: "Japan seeks to further ease border controls as COVID 6th wave wanes",
    description: "Prime Minister Fumio Kishida says that the Japanese government is considering further easing border restrictions as the country prepares to 'exit the sixth wave' of the COVID-19 pandemic.",
    image: "https://img.kyodonews.net/english/public/images/posts/cae1d4ddbf125c4f1f1db692a2df876b/cropped_image_l.jpg"
  }
]

const pref_code = [
  { name: "Hokkaido", code: 1 },
  { name: "Aomori", code: 2 },
  { name: "Iwate", code: 3 },
  { name: "Miyagi", code: 4 },
  { name: "Akita", code: 5 },
  { name: "Yamagata", code: 6 },
  { name: "Fukushima", code: 7 },
  { name: "Ibaraki", code: 8 },
  { name: "Tochigi", code: 9 },
  { name: "Gunma", code: 10 },
  { name: "Saitama", code: 11 },
  { name: "Chiba", code: 12 },
  { name: "Tokyo", code: 13 },
  { name: "Kanagawa", code: 14 },
  { name: "Niigata", code: 15 },
  { name: "Toyama", code: 16 },
  { name: "Ishikawa", code: 17 },
  { name: "Fukui", code: 18 },
  { name: "Yamanashi", code: 19 },
  { name: "Nagano", code: 20 },
  { name: "Gifu", code: 21 },
  { name: "Shizuoka", code: 22 },
  { name: "Aichi", code: 23 },
  { name: "Mie", code: 24 },
  { name: "Shiga", code: 25 },
  { name: "Kyoto", code: 26 },
  { name: "Osaka", code: 27 },
  { name: "Hyogo", code: 28 },
  { name: "Nara", code: 29 },
  { name: "Wakayama", code: 30 },
  { name: "Tottori", code: 31 },
  { name: "Shimane", code: 32 },
  { name: "Okayama", code: 33 },
  { name: "Hiroshima", code: 34 },
  { name: "Yamaguchi", code: 35 },
  { name: "Tokushima", code: 36 },
  { name: "Kagawa", code: 37 },
  { name: "Ehime", code: 38 },
  { name: "Kochi", code: 39 },
  { name: "Fukuoka", code: 40 },
  { name: "Saga", code: 41 },
  { name: "Nagasaki", code: 42 },
  { name: "Kumamoto", code: 43 },
  { name: "Oita", code: 44 },
  { name: "Miyazaki", code: 45 },
  { name: "Kagoshima", code: 46 },
  { name: "Okinawa", code: 47 }
]

// Manual case totals since data can be slow/delayed
const man_total = [
  18673,
  21891,
  25630,
  25658,
  20991,
  32197,
  41485,
  46199,
  49854,
  54576,
  50030,
  44810,
  62613,
  71633,
  78931,
  81810,
  84933,
  60838,
  81654,
  94930,
  96845,
  95453,
  100949,
  89145,
  68039,
  92078,
  97833,
  98370,
  68470,
  60142,
  84220,
  95208,
  87723,
  81621,
  51987,
  80364,
  61259,
  63703,
  70348,
  53969
]

const last_update = <span>Last updated on <b>2022/03/07</b> at 8:58 (GMT+9)</span>
// Sometimes data isn't updated on time
const data_date = '2022-03-06'

export default function Home() {
  const [ map, setMap ] = useState();
  const [ coronaData, setCoronaData ] = useState();
  const [ total, setTotal ] = useState()

  useEffect(() => {

    anime({ targets: '#person', translateX: 0, translateY: -245, rotate: 170, duration: 2000, delay: 300, easing: 'easeOutElastic(1.2, 0.6)' });
    const t1 = anime.timeline()
    t1
    .add({ targets: '#person', translateX: 0, translateY: -245, rotate: 170, duration: 2000, delay: 8000, easing: 'easeOutElastic(1.2, 0.6)' })
    .add({ targets: '#person', translateX: 50, translateY: -300, rotate: 0, duration: 2000, delay: 15000, easing: 'easeOutElastic(1.2, 0.6)' })

    if(map || coronaData) return;
    
    async function getMapData() {
      const raw_map = await fetch('/japan.json');
      const geomap = await raw_map.json();
      
      // This is a large data set 1.4MB
      Papa.parse('https://www3.nhk.or.jp/n-data/opendata/coronavirus/nhk_news_covid19_prefectures_daily_data.csv', {
        download: true,
        complete: (corona) => {

          // Get today's date and convert it to yyyy/mm/dd with no leading 0's
          const today = new Date(data_date).toISOString().split('T')[0].replace(/-0+/g, '/').replaceAll('-','/')

          // Filter data for just today's date
          const today_data = corona.data.filter((row) => row[0] === today )

          geomap.date = today;

          // Combine are data
          updateFeatures(geomap, today_data)

          setMap(geomap);
          setCoronaData(corona)
      
          const temp = {
            today_cases: 0,
            cases: 0,
            today_deaths: 0,
            deaths: 0
          }

          geomap.features.map((feature) => {
            temp.today_cases += Number(feature.properties.today_cases);
            temp.cases += Number(feature.properties.total_cases);
            temp.today_deaths +=  Number(feature.properties.today_deaths);
            temp.deaths +=  Number(feature.properties.total_deaths);
          })
      
          setTotal(temp)
          console.log(temp)
        }
      })
    }
    getMapData();
  }, []);
  
  const updateFeatures = (map, data) => {
    data.map((region) => {
      // get prefecture code
      const code = region[1];
      
      // convert it to our map prefecture name
      const pref = pref_code.find((p) => p.code == code ).name;            
      const feature = map.features.find((f) => f.properties.name == pref )

      feature.properties.total_cases = region[4];
      feature.properties.today_deaths = region[5]
      feature.properties.total_deaths = region[6]
      // feature.properties.recovered = region[5]
      feature.properties.today_cases = region[3]
      feature.properties.incident_rate = region[7]
      // feature.properties.case_fatality_ratio = region[13]
    
    }) 
  }

  const [width, setWidth] = useState(650);

  function handleWindowSizeChange() {
    if(window.innerWidth > 650) setWidth(650);
    else setWidth(window.innerWidth - 30);
  }

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  })

  return (
    <div className="">
      <Head>
        <title>Can I go to Japan? | Not yet</title>

        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <link rel="canonical" herf="" />

        <meta name="description" content="Latest info about Japan's entry ban and coronavirus" />
        <meta name="keywords" content="Japan, Open, Border, Visa, Tokyo, Osaka, Can I go to Japan"></meta>
        <meta name="robots" content="index, follow" />

        <meta property="og:url" content="https://www.canigotojapan.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Can I go to Japan? - Not yet" />
        <meta property="og:description" content="Latest info about Japan's entry ban and coronavirus" />
        <meta property="og:image" content="https://www.canigotojapan.com/og-canigotojapan.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="canigotojapan.com" />
        <meta property="twitter:url" content="https://www.canigotojapan.com/" />
        <meta name="twitter:title" content="Can I go to Japan? - Not yet" />
        <meta name="twitter:description" content="Latest info about Japan's entry ban and coronavirus" />
        <meta name="twitter:image" content="https://www.canigotojapan.com/og-canigotojapan.png" />

        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>

        <script defer data-domain="canigotojapan.com" src="https://plausible.io/js/plausible.js"></script>
      </Head>
      <main>
        <Person />
        <Hero />
        <Cases total={total} />
        <News />
        <FAQ />
        {!map && (
          <div className="text-center py-12 sm:py-24 w-24 mx-auto">
            <svg className="text-center animate-spin -ml-1 mr-3 h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Loading map data..</span>
          </div>
        )}
        {map && <Map data={map} width={width} />}
        <CTA />
      </main> 
      <footer>
        <div className="text-center text-red-300 text-sm bg-red-600 p-12"><h5>Made by</h5> <a className="text-red-100 hover:text-white" href="https://www.twitter.com/fergusleen">@fergusleen</a></div>
      </footer>
    </div>
  )
}
const Person = () => {
  return (
    <div className='hidden lg:block absolute'>
      <div id="person" className='fixed w-44 h-auto md:w-56'
        style={{transformOrigin: '50% 100%',transform: 'translateX(50px) translateY(-300px)'}}>
        <img className="drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)]" src='/french.svg' />
        <div className='absolute border border-gray-700 p-4 bg-white drop-shadow text-center'
          style={{transformOrigin: '50% 100%',transform: 'translateX(-220px) translateY(-300px) rotate(180deg)'}}>
          Japan to let in foreign workers and students starting in March!!
        </div>
        <div className='absolute h-8 w-8 border-t border-l border-gray-700 bg-white' style={{transformOrigin: '50% 100%',transform: 'translateX(-24px) translateY(-170px) rotate(135deg)'}}> </div>
      </div>
    </div>
  )
}
const Hero = () => {
  return (
    <div className="bg-white">
      <div className="text-center text-xs text-gray-500 mt-2">{last_update}</div>
      <div className="max-w-7xl mx-auto mt-24 py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
            Is Japan open yet?
          </h1>
          <h2 className="max-w-xl mt-5 mx-auto text-4xl text-gray-700">
            No. Japan is still closed :(
          </h2>
        </div>
      </div>
    </div>
  )
}

const Cases = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="text-center text-gray-500">
           <div><b>{numberWithSpaces(man_total[man_total.length-1])}</b> new cases today</div>
           <div className="text-xs text-gray-300 mt-1"><b>{numberWithSpaces(man_total[man_total.length-2])}</b> new cases yesterday</div>
        </div> 
      </div>
    </div>
  )
}

const News = () => {
  const [ articleCount, setArticleCount ] = useState(4)

  function handleMoreArticles() {
    setArticleCount(articleCount+4);
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:max-w-2xl lg:mx-auto text-center">
          <h3 className="text-3xl font-extrabold tracking-tight text-gra-900 sm:text-4xl">Latest Headlines</h3>
        </div>
        <div className="mt-10">
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            {articles.slice(-articleCount).reverse().map((article, i) => (
              <div key={article.id} className="sm:border hover:border-red-500">
              <a href={article.url}>
                <img alt={article.site_name} src={article.image}></img>
                <div className="py-2 sm:p-4">
                  <h2 className="mt-1 font-semibold text-gray-800">{article.title}</h2>
                  <p className="mt-1 sm:mt-3 text-gray-400">{article.description}</p>
                </div>
              </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
          { articleCount < articles.length && (<button onClick={handleMoreArticles} className="text-sm text-gray-600 hover:text-black">More articles</button>)}
          </div>
        </div>
      </div>
    </div>
  )
}

const FAQ = () => {
  return (
    <div className="bg-red-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:pt-24 sm:pb-12 sm:px-6 lg:px-8">
        <div className="lg:max-w-2xl lg:mx-auto text-center">
          <h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Frequently asked questions</h3>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="font-semibold text-white">{faq.question}</dt>
                <dd className="mt-3 text-stone-50">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="text-right text-xs pt-16 text-red-100 hover:text-white"><a href="https://www.twitter.com/fergusleen">Have a question?</a></div>
      </div>
    </div>
  )
}

const CTA = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)
  const [subbed, setSubbed] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!email) return setError('No email');

    setLoading(true);

    const d = await fetch('https://emaildb.vercel.app/api/email', {
      method: 'POST',
      SameSite: 'Strict',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
      })
    })
    .then(res => res.json())
    .then((res) => {
      if(res.err) {
        setLoading(false);
        setError(res.err)
        return
      }

      setSubbed(true);
      return;
    })
    .catch((err) => {
      setLoading(false);
      console.error(err);
    })

    setLoading(false);
  }

  function handleChange(e) {
    setEmail(e.target.value);

    setError('');
  }

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative">
            <div className="sm:text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Get notified when Japan opens
              </h2>
            </div>
            { !subbed && (
            <form onSubmit={handleSubmit} className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
              <div className="min-w-0 flex-1">
                <label htmlFor="cta-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="cta-email"
                  type="email"
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs rounded-md"
                  placeholder="Enter your email"
                />
                <p className="block h-4 text-red-500 text-xs italic">{error}</p>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-3">
                { !loading && (
                <button
                  type="submit"
                  className="block w-full rounded-md border border-transparent px-5 py-3 bg-red-600 text-base font-medium text-white shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-600 sm:px-10"
                >
                  Notify me
                </button>
                )}
                { loading && (
                  <div className="block w-full rounded-md border border-transparent px-5 py-3 bg-red-700 text-base font-medium text-white shadow sm:px-10">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-full text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </form>
            )}
            { subbed && (
              <div className="text-center mt-12 text-gray-800">Done.</div>
            )}
          </div>
        </div>
      </div>
  )
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function numberWithSpaces(x) {
  return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
