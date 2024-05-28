import r_img from '../assets/roadmap.svg';
import r_launch from '../assets/launch.svg';

const roadData = [
  {title : "Q1-2024",lable:"Lable" , Discr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, repellat!"},
  {title : "Q1-2024",lable:"Lable" , Discr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, repellat!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, repellat!"},
  {title : "Q1-2024",lable:"Lable" , Discr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, repellat!"},
  {title : "Q1-2024",lable:"Lable" , Discr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, repellat!"},
  {title : "Q1-2024",lable:"Lable" , Discr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, repellat!"},
  {title : "Q1-2024",lable:"Lable" , Discr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, repellat!"},
];

const Roadmap = () => {
    return (
        <section>
        <div className="bg-[url('/src/assets/roadmap-bg.jpg')] bg-fixed text-white py-8">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 px-8">
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Roadmap</p>
              <p className="text-sm md:text-base text-gray-50 mb-4">
              The use of cryptocurrencies has become more widespread, The origin platform idea. Development of the concept and business plan.
              </p>
              <a href="#" className="bg-transparent mr-auto hover:bg-purple-300 text-purple-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-purple-300 hover:border-transparent">
                Buy Now
              </a>

              <img className="mx-auto mt-20 md:mt-20" src={r_img} />
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div className="border-2-2 border-purple-555 absolute h-full border" style={{ right: '50%', border: '2px solid #e10ee1', borderRadius: '1%' }}></div>
                  <div className="border-2-2 border-purple-555 absolute h-full border" style={{ left: '50%', border: '2px solid #3571f3', borderRadius: '1%' }}></div>

                  {
                    roadData.map((value , i)=>(
                      <div key={i} className={(i+1)%2===0 ?"mb-8 flex justify-between items-center w-full right-timeline" : "mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"}>
                      <div className="order-1 w-5/12"></div>
                      <div className={(i+1)%2===0 ? "order-1  w-5/12 px-1 py-4 text-left" : "order-1 w-5/12 px-1 py-4 text-right"}>
                        <p className="mb-3 text-base text-purple-300">{value.title}</p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">{value.lable}</h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">{value.Discr}</p>
                      </div>
                    </div>
                    ))
                  }

                </div>
                <img className="w-[300px] mx-auto mt-1 md:mt-1" src={r_launch} />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Roadmap
