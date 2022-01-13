import Head from 'next/head'
import Papa from 'papaparse'
import Map from '../components/map'
import { useState, useEffect } from 'react'

const faqs = [
  {
    id: 1,
    question: "When will Japan lift its travel ban and reopen for tourists?",
    answer:
      "No one knows yet. But it will be at least a couple of months.",
  },
  {
    id: 2,
    question: "Can I go to Japan?",
    answer:
      "You cannot visit Japan unless you are a Japanese citizen.",
  },
  {
    id: 3,
    question: "I thought Japan eased restrictions?",
    answer:
      "That lasted for only a few weeks, and Japan never actaully reopened for tourists.",
  },
  {
    id: 4,
    question: "When is the next update from the Japanese government?",
    answer:
      "A decision on whether to maintain the closure is expected sometime within the next week, in mid-January 2022.",
  },
  // More questions...
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
]

const pref_code= [
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

export default function Home() {
  const [ map, setMap ] = useState();
  const [ coronaData, setCoronaData ] = useState();
  const [ total, setTotal ] = useState()

  useEffect(() => {
    if(map || coronaData) return;
    
    async function getMapData() {
      const raw_map = await fetch('/japan.json');
      const geomap = await raw_map.json();
      
      // This is a large data set 1.4MB
      Papa.parse('https://www3.nhk.or.jp/n-data/opendata/coronavirus/nhk_news_covid19_prefectures_daily_data.csv', {
        download: true,
        complete: (corona) => {

          // Get today's date and convert it to yyyy/mm/dd with no leading 0's
          const today = new Date('2022-01-13').toISOString().split('T')[0].replace(/-0+/g, '/').replaceAll('-','/')

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
            temp.cases += Number(feature.properties.temp_cases);
            temp.today_deaths +=  Number(feature.properties.today_deaths);
            temp.deaths +=  Number(feature.properties.total_deaths);
          })
      
          setTotal(temp)
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
        <title>Japan Borders are Closed</title>

        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <link rel="canonical" herf="" />

        <meta name="description" content="Can I go to Japan? Japan is NOT open for tourist visas" />
        <meta name="keywords" content="Japan, Open, Border, Visa, Tokyo, Osaka"></meta>
        <meta name="robots" content="index, follow" />

        <meta property="og:url" content="https://www.canigotojapan.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Can I go to Japan? - Probably not yet but.." />
        <meta property="og:description" content="Want to find out about the Coronavirus situation in Japan? We have all the info about when you can go!" />
        <meta property="og:image" content="https://www.canigotojapan.com/og-canigotojapan.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="canigotojapan.com" />
        <meta property="twitter:url" content="https://www.canigotojapan.com/" />
        <meta name="twitter:title" content="Can I go to Japan? - Probably not yet but.." />
        <meta name="twitter:description" content="Want to find out about the Coronavirus situation in Japan? We have all the info about when you can go!" />
        <meta name="twitter:image" content="https://www.canigotojapan.com/og-canigotojapan.png" />

        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>

        <script defer data-domain="canigotojapan.com" src="https://plausible.io/js/plausible.js"></script>
      </Head>
      <main>
        <Hero></Hero>
        <Cases total={total}></Cases>
        <News></News>
        <FAQ></FAQ>
        {!map && (
          <div className="text-center py-12 sm:py-24 w-24 mx-auto">
            <svg className="text-center animate-spin -ml-1 mr-3 h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Loading map data..</span>
          </div>
        )}
        {map && <Map data={map} width={width}></Map>}
      </main> 
      <footer>
        <div className="text-center text-red-300 text-sm bg-red-600 p-12"><h5>Made by</h5> <a className="text-red-100 hover:text-white" href="https://www.twitter.com/fergusleen">@fergusleen</a></div>
      </footer>
    </div>
  )
}
const Hero = () => {
  return (
    <div className="bg-white">
      <div className="text-center text-xs text-gray-500 mt-2">Last updated on <b>2022/01/14</b> at 01:46 (GMT+9)</div>
      <div className="max-w-7xl mx-auto mt-24 py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Is Japan open yet?
          </h1>
          <h2 className="max-w-xl mt-5 mx-auto text-3xl text-gray-700">
            No. Japan borders are still closed :(
          </h2>
        </div>
      </div>
    </div>
  )
}

const Cases = ({ total }) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        { total && 
        <div className="text-center text-gray-500">
           <div><b>{numberWithSpaces(total.today_cases)}</b> new cases today</div>
           <div className="text-xs text-gray-300 mt-1"><b>13 057</b> new cases yesterday</div>
        </div> 
        }
      </div>
    </div>
  )
}

const News = () => {
  const [ articleCount, setArticleCount ] = useState(4)

  function handleMoreArticles() {
    setArticleCount(articleCount+2);
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
