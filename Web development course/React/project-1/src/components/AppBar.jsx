function AppBar(data){

  console.log(data.listItems);
  
  return (
    <div className='appbar'>
                  <h2 className="logo">Finta</h2>
                  <ul>
                   {
                    data.listItems.map((element, index)=>{
                      return <li key={index}>{element}</li>
                    })
                   }
                    <button className='btn'>{data.btnText}</button>
                  </ul>
            </div>
  )
}


export default AppBar