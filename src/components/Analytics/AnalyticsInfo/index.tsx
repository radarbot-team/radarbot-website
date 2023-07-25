export  function AnalyticsInfo(props: {
  colorFrom:string,
  color: string,
  value: string,
  unit?: string,
  duration?: string,
  description: string
}) {
  return (

    <div className={`relative h-20 w-48 flex flex-col  m-8 p-2 bg-gradient-to-tr ${props.color}  p-[3px] ${props.colorFrom}  via-[#ffffff00] bg-opacity-75 to-[#ffffff00]`}>
      <div className={`z-10 font-bold absolute top-0 left-0 right-0 bottom-1 bg-background flex p-4  flex-col `}>
        <div className={`text-[2.9rem] ]`}>
          <h2>
            <span style={{ color: props.color }}>+</span>
            <span  >{props.value}</span>
            <span style={{ color: props.color }}>{props.unit}</span>
          </h2>
        </div>
        <div className={"mt-5 text-xl font-normal"}>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}