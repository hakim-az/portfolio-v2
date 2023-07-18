const CvBlock = ({Title, Position, Date}) => {
  return (
    <div className="w-full pb-7">
        <h5 className="text-white text-xl mb-2">{Title} </h5>
        <span className="text-white text-lg block">{Position}</span>
        <span className="text-green-600 text-sm block"> {Date} </span>
    </div>
  )
}

export default CvBlock