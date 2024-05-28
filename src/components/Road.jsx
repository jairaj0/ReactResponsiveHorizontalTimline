import { useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const _roadMap = ["Q1-2024","Q2-2024","Q3-2024","Q4-2024","Q5-2024","Q6-2024","Q7-2024","Q8-2024"];



const Roadmap = () => {
    const [move, setMove] = useState(0);
    const [initialMove, setInitialMove] = useState(0);
    const [dist, setDist] = useState(500);
    const [boxSize, setboxSize] = useState(0);
    const [activeLineWidth, setActiveLineWidth] = useState(0);
    const [activeCardNo, setActiveCardNo] = useState(0);
    const [eachView, seteachView] = useState(4);
    const [fulWidthSize, setfulWidthSize] = useState(2000)

    const wrapperRef = useRef(null);
    const boxRef = useRef(null);

    const moveHandler = (_type) => {
        if(_type === "right"){
            const count = ((move - initialMove) / initialMove);
            const left = _roadMap.length + count*eachView;
            const neetToMove = left < eachView ? initialMove/eachView*left : initialMove;
            setMove(prev => prev - neetToMove);
        }
        if(_type === "left"){
            const needToMove = move+initialMove >=0 ? 0 : initialMove;
            setMove(prev => needToMove===0 ? 0 : prev + needToMove);
        }
    };

    


    useEffect(() => {
        const handleResize = () => {
            if (wrapperRef.current) {
              setInitialMove(wrapperRef.current.offsetWidth);
            }


            seteachView(()=>3)
            setActiveCardNo(()=>0)
            setMove(()=>0)
          };

          window.addEventListener('resize', handleResize);
          handleResize()
    
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    }, []);

    console.log({activeCardNo , move})

    useEffect(() => {
        const _boxSize = boxRef.current?.offsetWidth
        setDist(()=>(initialMove - _boxSize*eachView)/eachView)
        setboxSize(_boxSize)
    }, [initialMove , dist ,eachView])

    useEffect(() => {
        const first = (dist/2 + boxSize/2)+5;
        setActiveLineWidth(()=>{
            if(activeCardNo===0){
                return first
            }else{
                return first+((dist + boxSize/2)+5)*activeCardNo+activeCardNo*28
            }
           })

    }, [activeCardNo , activeLineWidth , boxSize , dist , initialMove])

    useMemo(() => dist && setfulWidthSize(()=>_roadMap.length * 500), [dist])

    return (
        <section className="w-full h-[90vh] bg-gradient-to-r from-blue-900 to-purple-900">
            <h1 className="text-2xl text-center pt-10 pb-3 text-white">Roadmap</h1>

            <div className="w-10/12 h-[150px] m-auto flex items-center justify-between px-3 py-3">
                <button 
                    onClick={() => moveHandler("left")} 
                    className="text-white w-[30px] h-[30px] border rounded-full flex justify-center items-center text-sm"
                >
                    <FaChevronLeft />
                </button>
                <div ref={wrapperRef} className="w-[93%] h-full overflow-hidden translate-y-[-16px]">
                    <div 
                        className="flex relative h-full transition-all duration-1000" 
                        style={{ transform: `translateX(${move}px)`, width: `${fulWidthSize}px` }}
                    >
                        {_roadMap.map((value, i) => (
                            <div ref={boxRef} key={i} style={{marginLeft : `${i==0 ?dist/2 : dist}px`}} className="flex flex-col items-center justify-center relative z-20">
                                <h1 className="text-white">{value}</h1>
                                <div onClick={()=>setActiveCardNo(i)} className={`rounded-full w-5 h-5 ${activeCardNo === i ? "bg-blue-500":"bg-purple-500"} mt-2 flex justify-center items-center cursor-pointer`}>
                                    <div className={`${activeCardNo === i ? "bg-blue-500":"bg-white"} rounded-full w-3 h-3`}></div>
                                </div>
                            </div>
                        ))}

                        <div className={`w-full h-1 bg-gray-400 absolute top-[50%] translate-y-[14px]`}>
                            <div className="h-full bg-purple-500 transition-all duration-1000" style={{ width: `${activeLineWidth}px` }}></div>
                        </div>
                    </div>
                </div>
                <button 
                    onClick={() => moveHandler("right")} 
                    className="text-white w-[30px] h-[30px] border rounded-full flex justify-center items-center text-sm"
                >
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
};

export default Roadmap;
