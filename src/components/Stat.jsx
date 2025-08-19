import { FaTrophy, FaCheckCircle, FaSearch, FaSmile } from "react-icons/fa";

const Stat = () => {
  return (
    <div className="bg-white relative bottom-4 md:absolute md:-bottom-12 md:left-[10%] w-4/5 mx-auto md:mx-0 py-6 px-6 lg:px-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-sm rounded-md">
    {[
        { icon: <FaTrophy className="text-[#003366] text-3xl mb-3" />, title: '4x Award Winning', subtitle: 'Always ready to support' },
        { icon: <FaCheckCircle className="text-[#003366] text-3xl mb-3" />, title: '2.5k Cases Solved', subtitle: 'IT solutions delivered' },
        { icon: <FaSearch className="text-[#003366] text-3xl mb-3" />, title: '150k+ Optimized', subtitle: 'Maximizing search reach' },
        { icon: <FaSmile className="text-[#003366] text-3xl mb-3" />, title: '100% Client Satisfaction', subtitle: 'Proven success record' },
    ].map((item, idx) => (
        <div key={idx} className="flex flex-col md:flex-row items-center md:gap-4 mb-5 md:mb-0">
            {item.icon}
            <div className="flex flex-col items-start">
                <p className="text-[1.05rem] font-bold text-black">{item.title}</p>
                <p className="text-gray-500 font-bold text-[0.8rem] mt-2">{item.subtitle}</p>
            </div>
        </div>
    ))}
    </div>
  )
}

export default Stat