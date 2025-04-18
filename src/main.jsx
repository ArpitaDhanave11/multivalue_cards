


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

let employeeDetails=[
  {
    URL:"https://static.vecteezy.com/system/resources/previews/036/151/780/non_2x/illustration-cartoon-of-a-cute-girl-standing-and-smiling-while-dressed-in-colorful-and-casual-clothes-vector.jpg",
    Name:"Arpita",
    Age:20,
    Position:"Web Devloper"
    

  },
  {
    URL:"https://img.freepik.com/free-vector/adorable-girl-with-big-eyes-orange-hair_1308-133612.jpg?w=360",
    Name:"Sapna",
    Age:20,
    Position:"React Devloper"

  },
  {
    URL:"https://i.pinimg.com/474x/56/d8/d3/56d8d3b46b5d6d415b52b010be3f4dc2.jpg",
    Name:"Vinay",
    Age:20,
    Position:"Java Devloper"

  },
  {
    URL:"https://png.pngtree.com/png-clipart/20250219/original/pngtree-cute-animated-boy-wearing-blue-jacket-png-image_20475699.png",
    Name:"Aman",
    Age:20,
    Position:"Python Devloper"

  },
  {
    URL:"https://icon2.cleanpng.com/20240307/qux/transparent-baby-girl-smiling-girl-yellow-floral-dress-big-bro-happy-girl-in-floral-1710845858965.webp",
    Name:"Apurva",
    Age:20,
    Position:"Python Devloper"

  },
  {
    URL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ21poEINP2AaBBYtNDN_qN_FrwZ34iWCxSg&s",
    Name:"Ritika",
    Age:20,
    Position:"Python Devloper"

  },
  {
    URL:"https://cdn.pixabay.com/photo/2024/03/19/15/23/boy-8643450_1280.png",
    Name:"Shubham",
    Age:20,
    Position:"Python Devloper"

  },
  {
    URL:"https://img.freepik.com/premium-vector/cartoon-happy-little-boy-raising-hands_353337-803.jpg?w=360",
    Name:"Prem",
    Age:20,
    Position:"Python Devloper"

  },
  {
    URL:"https://pngfile.net/public/uploads/preview/boy-cartoon-png-free-download-215668541626nwszlgpag.png",
    Name:"Aniruddha",
    Age:20,
    Position:"Python Devloper"

  },
  {
    URL:"https://img.freepik.com/free-vector/cute-student-cartoon-character_1308-133976.jpg?semt=ais_hybrid&w=740",
    Name:"Pranali",
    Age:20,
    Position:"Python Devloper"

  },
  {
    URL:"https://img.freepik.com/premium-photo/simple-vector-cartoon-smiling-little-boy_1329608-4673.jpg",
    Name:"Ajay",
    Age:20,
    Position:"Python Devloper"

  },
]
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App emprecords={employeeDetails} />
  </StrictMode>
)

