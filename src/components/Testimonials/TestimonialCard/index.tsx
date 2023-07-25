import { Quotes } from '@/components/Icons/Quotes';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';



export function TestimonialsCard(props: {

  color2:string
  color: string
  colorQuotes:string
  title: string
  description: string
  image: StaticImageData
  name: string
  link: string
  position: string
}) {
  return (
    <div className={`rounded-xl md:w-[320px]  md:h-[563px] md:max-h-[363px] md:mx-auto mb-4 bg-gradient-to-b ${props.color}  p-[3px] ${props.color2}  via-[#ffffff00] bg-opacity-25 to-[#ffffff00]`}>
    <div className="flex flex-col justify-between w-fullh h-full bg-[#1a1c48] text-white rounded-lg p-4">
      <div>

        <div className="w-12 h-12 rounded"> <Quotes className={props.colorQuotes}></Quotes> </div>
        <div className="font-light text-base">
          <ReactMarkdown className="" >
            {props.title}
          </ReactMarkdown>
        </div>
      </div>
        <div className="pb-4">
          {props.description}
        </div>
        <div className='flex items-center gap-2 flex-row'>
          <div>
            <Link href={props.link}>
              <Image className="h-12 w-12  rounded-lg mr-2 " src={props.image} alt="pernadoventologo" />
            </Link>
          </div>
          <div className='flex flex-col'>
            <div className='text-base font-semibold'>
              <span>{props.name}</span>
            </div>
            <div>
              <span>{props.position}</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}