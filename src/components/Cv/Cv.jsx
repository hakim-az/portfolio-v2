const Cv = ({Title, children}) => {
  return (
    <div className="mt-20" style={{width:'350px'}}>
        <h4 className="w-ful p-3 rounded bg-white text-green-600 text-xl font-semibold">{Title}</h4>
        <div className="w-full flex flex-wrap mt-5">
            {children}
        </div>
        
    </div>
  )
}

export default Cv