import Head from 'next/head'
import Image from 'next/image'

const faqs = [
  {
    id: 1,
    question: "When will Japan lift its travel ban and reopen for tourists?",
    answer:
      "No one knows yet.",
  },
  {
    id: 2,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 4,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
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
  }
]

export default function Home() {
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

        <meta property="og:url" content="https://www.byeindonesia.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bye Indonesia - Renunciation of Indonesian Citizenship Guide 2021" />
        <meta property="og:description" content="Renunciation of Indonesian citizenship process changed in 2020. This site aims to answer all your questions on the new process." />
        <meta property="og:image" content="https://www.byeindonesia.com/og-bye-indonesia.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="byeindonesia.com" />
        <meta property="twitter:url" content="https://www.byeindonesia.com/" />
        <meta name="twitter:title" content="Bye Indonesia - Renunciation of Indonesian Citizenship Guide 2021" />
        <meta name="twitter:description" content="Renunciation of Indonesian citizenship process changed in 2020. This site aims to answer all your questions on the new process." />
        <meta name="twitter:image" content="https://www.byeindonesia.com/og-bye-indonesia.png" />

        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
      </Head>
      <main>
        <Hero></Hero>
        <Cases></Cases>
        <News></News>
        <FAQ></FAQ>
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
            No. Japan borders are still closed for us :(
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
          <b>6 438</b> new cases in Japan today.
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
          <p className="mt-4 text-stone-50">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
            Urna, sed a lectus elementum blandit et.
          </p>
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