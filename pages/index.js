import Head from 'next/head'
import Script from 'next/script'
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
    id: 0,
    url: "https://www3.nhk.or.jp/nhkworld/en/news/20220110_20/",
    site_name: "NHK WORLD",
    title: "6,438 new cases of coronavirus reported in Japan | NHK WORLD-JAPAN News",
    description: "Japanese health officials say they confirmed 6,438 new cases of the coronavirus nationwide as of 6:30 p.m. on Monday.",
    image: {
      url: "https://www3.nhk.or.jp/nhkworld/upld/thumbnails/en/news/20220110_20_1066197_L.jpg",
      width: "",
      height: "",
      type: ""
    }
  },
  {
    id: 1,
    url: "https://mainichi.jp/english/articles/20220110/p2a/00m/0na/014000c",
    site_name: "The Mainichi",
    title: "Japan's COVID border restrictions keeping families apart, affecting relationships: group - The Mainichi",
    description: "TOKYO -- Amid severe restrictions on new entries by foreign nationals to Japan introduced in November 2021 following confirmation of the coronavirus's",
    image: {
      url: "https://cdn.mainichi.jp/vol1/2022/01/10/20220110p2a00m0na011000p/0c10.jpg?1",
      width: "",
      height: "",
      type: ""
    }
  },
  {
    id: 2,
    url: "https://www.japantimes.co.jp/news/2022/01/08/national/politics-diplomacy/omicron-fumio-kishida-covid-policy/",
    site_name: "The Mainichi",
    title: "Omicron spread puts Kishida's COVID policy to the test",
    description: "Kishida put three prefectures — Okinawa, Hiroshima and Yamaguchi — under quasi-emergency measures, but not all in his administration were on board with the decision.",
    image: {
      url: "https://cdn-japantimes.com/wp-content/uploads/2022/01/np_file_134143-870x489.jpeg",
      width: "",
      height: "",
      type: ""
    }
  },
  {
    id: 3,
    url: "https://english.kyodonews.net/news/2022/01/19d6f4cd1c20-covid-border-steps-force-300-foreigners-to-decline-japan-teacher-jobs.html",
    site_name: "The Mainichi",
    title: "COVID border steps force 300 foreigners to decline Japan teacher jobs",
    description: "Japan's COVID-19 border restrictions appear to have prompted more than 300 people to decline offers for foreign language teacher and assistant positions in Japan, leading to a fall in the number of such instructors in the country, according to a Kyodo News survey.",
    image: {
      url: "https://img.kyodonews.net/english/public/images/posts/a1576910b54f79779619a1e609c8f047/cropped_image_l.jpg",
      width: "",
      height: "",
      type: ""
    }
  }
]

export default function Home() {
  const [map, setMap] = useState();

  useEffect(() => {
    async function getMapData() {
      const raw_map = await fetch('/japan.json');
      const nodata_map = await raw_map.json();
      Papa.parse('./japan_data.csv', {
        download: true,
        complete: (corona) => {
          // TODO: this could be done cleaner
          // combine the map data with the corona data for each region
          let data_features = nodata_map.features.map((feature) => {
            for(const region of corona.data) {
              if(feature.properties.name === region[2]) {
                feature.properties.confirmed = region[7];
                feature.properties.deaths = region[8]
                feature.properties.recovered = region[9]
                feature.properties.active = region[10]
                feature.properties.incident_rate = region[12]
                feature.properties.case_fatality_ratio = region[13]
              }
            }
            return feature;
          })
          nodata_map.features = data_features;

          setMap(nodata_map);
        }
      })
    }
    getMapData();
  }, []);

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
        <Cases></Cases>
        <News></News>
        <FAQ></FAQ>
        {map && <Map data={map}></Map>}
      </main> 
      <footer>
        <div className="text-center text-red-300 bg-red-600 p-12"><h5>Made by</h5> <a className="text-red-100 hover:text-white" href="https://www.twitter.com/fergusleen">@fergusleen</a></div>
      </footer>
    </div>
  )
}
const Hero = () => {
  return (
    <div className="bg-white">
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

const Cases = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="text-center text-gray-500">
          <b>6 378</b> new cases in Japan today.
        </div>
      </div>
    </div>
  )
}

const News = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:max-w-2xl lg:mx-auto lg:text-center">
          <h3 className="text-3xl font-extrabold tracking-tight text-gra-900 sm:text-4xl">Latest Headlines</h3>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            {articles.map((article) => (
              <a key={article.id} href={article.url} className="border hover:border-red-500">
                <img src={article.image.url}></img>
                <div className="p-4">
                  <dt className="mt-1 font-semibold text-gray-800">{article.title}</dt>
                  <dd className="mt-3 text-gray-400">{article.description}</dd>
                </div>
              </a>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

const FAQ = () => {
  return (
    <div className="bg-red-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:max-w-2xl lg:mx-auto lg:text-center">
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
      </div>
    </div>
  )
}