import React, { useMemo, useState } from "react";

function UserList() {
  const [inputValue, setInputValue] = useState("");
  const namesList = [
    "Ali",
    "Ahmad",
    "Awais",
    "Usman",
    "Umar",
    "Bilal",
    "Danish",
    "Hassan",
    "Imran",
    "Zeeshan",
  ];

  let filterList = useMemo(()=>{

        return namesList.filter(name => name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()))

  }, [inputValue])

  console.log(filterList);
  
  return (
    <div className="flex flex-col gap-10">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a name"
        className="p-2 w-xl border-1 border-white outline-none rounded-md text-xl ring-sky-600 ring-3"
      />
      
       <div>
        {
         filterList.map((element, index)=>(
            <li key={index}
                className="p-2 ring-1 ring-sky-500 mt-4 bg-sky-900 rounded-md transition-all  ease-in-out "
            >{element}</li>
        ))
         }
       </div> 
    </div>
  );
}

export default UserList;
