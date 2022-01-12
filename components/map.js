import { useD3 } from './useD3'
import * as d3 from 'd3';
import { useState, useEffect } from 'react'

const categories = [
  {
    name: 'Active',
    color: (d) => { return d3.scaleSequential(d3.interpolateReds).domain([0, 350000])(d.active) }
  },
  {
    name: 'Total',
    color: (d) => { return d3.scaleSequential(d3.interpolateTurbo).domain([0, 30000])(d.confirmed) }
  },
  {
    name: 'Recovered',
    color: (d) => { return d3.scaleSequential(d3.interpolateGreens).domain([0, 30000])(d.recovered) }
  },
  {
    name: 'Deaths',
    color: (d) => { return d3.scaleSequential(d3.interpolateBlues).domain([0, 3000])(d.deaths) }
  }
]

export default function Map({ data }) {

  const [category, setCategory] = useState(0);
  const [region, setRegion] = useState({});

  const updateRegion = (d) => {
    console.log(d.properties);
    setRegion(d.properties);
  }

  const handleClick = (d) => {
    setCategory(d);
  }

  useEffect(()=> {
    d3.selectAll("path").style("fill", (d) => { return categories[category].color(d.properties) })
  }, [category])

  const ref = useD3(
    (svg) => {
      const width = 900, height = 900;
      const xym = d3.geoAlbers().parallels([24.6, 43.6]).rotate([-138.2529, 0, 0]).scale(1800).fitSize([width, height], data)
      xym.translate([380,300])
      // xym.center([36.2048, 138.2529])
      // xym.parallels([24.6, 43.6])
      // xym.
      const path = d3.geoPath().projection(xym);

      const tooltip = d3.select("#tooltip")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .text("a simple tooltip");

      svg.selectAll("path").data(data.features)
        .enter().append("path")
        .attr("d", path)
        .style("fill", (d) => { return categories[category].color(d.properties) })
        .style("transition-property", "all")
        .style("transition-timing-function", "cubic-bezier(0, 0, 0.2, 1);")
        .style("transition-duration", () => { return (Math.random() * (1000 - 150) + 150).toString() + "ms" })
        .attr("stroke","#404040")
        .attr("stroke-width",0.1)
        .on("mouseover", function(e, d) {
          updateRegion(d);

          d3.select(this).attr("stroke-width",2)

          tooltip.text(d.properties.name); 
          tooltip.style("visibility", "visible");
        })
        .on("mousemove", function(e, d) {
          return tooltip.style("top", (e.pageY+5)+"px").style("left",(e.pageX+20)+"px");
        })
        .on("mouseout", function(e){
          tooltip.style("visibility", "hidden");
          
          d3.select(this).attr("stroke-width",0.1)
        })
    }, [category, data.features]
  );

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="lg:max-w-2xl lg:mx-auto lg:text-center mt-16">
        <h3 className="text-3xl font-extrabold tracking-tight text-gra-900 sm:text-4xl">Coronavirus in Japan</h3>
      </div>
      <nav className="mx-5 my-2 flex flex-wrap justify-center" aria-label="Footer">
        {categories.map((item, c) => (
          <div key={item.name} className="px-5 py-2">
            <button href={item.href} onClick={() => handleClick(c)} className={classNames(category===c ? "underline" : "","text-base text-gray-500 hover:text-gray-900 selected:text-red-700")}>
              {item.name}
            </button>
          </div>
        ))}
      </nav>
      <div className="mx-auto my-24 flex flex-row">
        <svg ref={ref} className="transition-all duration-700" style={{
          height: 700,
          width: 800,
        }}>
        </svg>
        <div className="flex flex-col justify-center w-60">
          <div className="text-xl font-semibold">{region.name ? region.name : "Select a prefecture"}</div>
          <div className="text-sm border-b border-dashed">Active <span className="float-right">{region.active}</span></div>
          <div className="text-sm border-b border-dashed">Total <span className="float-right">{region.confirmed}</span></div>
          <div className="text-sm border-b border-dashed">Recovered <span className="float-right">{region.recovered}</span></div>
          <div className="text-sm border-b border-dashed">Deaths <span className="float-right">{region.deaths}</span></div>
          {/* <div className="text-md">Incidient Rate {region.incident_rate}</div>
          <div className="text-md">Case fatality ratio {region.case_fatality_ratio}</div> */}
        </div>
        <div id="tooltip" className="absolute shadow-xl p-2 text-xs bg-white rounded"></div>
      </div>
      <h5 className="text-xs text-stone-400 text-center">Data from 01-01-2021 by <a className="underline hover:text-stone-900" href="https://www3.nhk.or.jp/news/special/coronavirus/data/">NHK</a></h5>
    </div>
  )
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
