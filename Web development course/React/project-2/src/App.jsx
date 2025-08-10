import axios from "axios"
import { useState } from "react"

function App() {

  const BASE_URL = "https://api.github.com/users/"

    const [input, setInput] = useState("")
    const [data, setData ] = useState()

    const [loading, setLoading] = useState(false)
    
    const apiCall = async () =>{
       
         // const response = await fetch(`${BASE_URL}${input}`)
         // const data = await response.json()
 
         setLoading(true)
         const user = await axios.get(`${BASE_URL}${input}`)
         // console.log(user.data);
 
         setData(user.data)
 
         setLoading(false)      
    }

    document.addEventListener("keypress", (e)=>{
        if(e.key === "Enter"){
          apiCall()
        }
    })

  return <div className="w-full h-screen bg-slate-900 flex items-center justify-center flex-col gap-20">

    {/* topbar */}
    <div className="flex items-center gap-10 text-white">
      <input type="text" placeholder="@saif72437"
        className="px-3 py-2 w-[400px] border-1 border-white outline-none"

        onChange={(e) => setInput(e.target.value)}
      />
      <button className="px-3 py-2 hover:text-black hover:border-none rounded-md hover:bg-white cursor-pointer border-1 border-white outline-none"
          onClick={apiCall} 
      >Search</button>
    </div>

    {/* card */}

    {loading && 
      <div className="text-white">loading....</div>
    }

    {data && <div className="w-[600px] text-white border-white border-1 p-10 flex flex-col items-center justify-center gap-5">
      <img src={data.avatar_url} alt="" 
          className="border-1 rounded-full h-[100px] w-[100px] border-white"
       />
       <p>@{data.login}</p>
       <h2 className="text-4xl">{data.name}</h2>
    </div>}



  </div>
}
export default App