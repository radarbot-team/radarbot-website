import { Quotes } from '@/components/Icons/Quotes';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';



export default function TestimonialsCard(props: {

  color: string
  title: string
  description: string
  image: StaticImageData
  name: string
  link: string
  position: string
}) {
  return (
    <div className={`rounded-xl lg:max-w-[320px] max-h-[563px] md:max-w-[220px] md:mx-auto bg-gradient-to-r p-[3px]  bg-${props.color} p-[3px] mb-6`}>
      <div className="flex flex-col justify-between h-full bg-[#1a1c48] text-white rounded-lg p-4">
        <div className="w-12 h-12 rounded"> <Quotes></Quotes> </div>
        <div className="font-light text-base">
          <ReactMarkdown className="" >
            {props.title}
          </ReactMarkdown>
        </div>
        <div>
          {props.description}
        </div>
        <div className='flex flex-row'>
          <div>
            <Link href={props.link}>
              <Image className="h-12 w-12  rounded-xl mr-2 " src={props.image} alt="pernadoventologo" />
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