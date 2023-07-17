import ArrowSvgComponent from '@/components/icons/Arrow';
import { IoCompassOutline, IoImageOutline, IoLanguageOutline, } from 'react-icons/io5';
/* import { ArrowRight } from 'lucide-react' */
export default function FeaturesCard(props: {
  color: string;
  icon: string; 
  title: string;
  description: string;
  features: string[];
  footer: string;
}) {

  function getIcon() {
    switch (props.icon) {
      case 'language':
        return <IoLanguageOutline className="w-[3rem] h-[3rem] rounded-lg" style={{ backgroundColor: props.color }}/>
      case 'screenshots':
        return <IoImageOutline className="w-[3rem] h-[3rem] rounded-lg" style={{ backgroundColor: props.color }} />
      case 'flightutilities':
        return <IoCompassOutline className="w-[3rem] h-[3rem] rounded-lg" style={{ backgroundColor: props.color }} />
    }
  }
  return (

    <div className="rounded-xl lg:max-w-[320px] max-h-[563px] md:max-w-[220px] md:mx-auto bg-gradient-to-r p-[3px] mb-6 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
      <div className="flex flex-col justify-between h-full bg-[#1a1c48] text-white rounded-lg p-4">
        <div >
          {getIcon()}
        </div>
        <div className="font-bold text-4xl mb-6">
          <h2> {props.title}</h2>
        </div>
        <div className="mb-4 font-bold text-base">

          <p>{props.description}</p>
        </div>
        <div className="mb-4 text-[0.8125rem] font-[Rajdhani]">
          {props.features.map((feature, index) => (
            <div className="flex items-center gap-1 "key={index}>
              <ArrowSvgComponent/>{feature}
            </div>
          ))}
        </div>
        <div className="font-extralight">
          {props.footer}
        </div>
      </div>
    </div>
  )
}