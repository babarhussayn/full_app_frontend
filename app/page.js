'use client'
import Cards from "@/components/Cards";
import Navbar from "@/components/Navbar";
import { useSelector } from "react-redux";



export default function Home() {
  const user = useSelector((state) => state.app.user);
  return (<>
      
    <main className="">
  <Navbar/>
<div>
  <h3 className="">welcome {user.name}</h3>

</div>
      
    </main>
    </>);
}
