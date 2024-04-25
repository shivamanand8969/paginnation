import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData]=useState([]);
  const [page,setPage]=useState(4);
   const fetchData=async ()=>{
         let res=await fetch('https://dummyjson.com/products?limit=100');
             res=await res.json();
              setData(res.products);
   }
   useEffect(()=>{
    fetchData();
   },[]);

  return (
 <>
   <div className='mainbox'>
     <div className='innerBox'>
     {
        data.slice((page*10)-10,page*10).map((value)=>(
          <>
          <div className='product'>
              <img src={value.thumbnail} className='productimage'/>
              <div className='titlebox'>
                <h2>{value.title}</h2>
              </div>
          </div>
          </>
        ))
       }
     </div>
     <div className='pagelist'>
      <div className='num' onClick={()=>setPage(page-1)} style={{display:(page==1)?"none":""}}>◀</div>
     {
       [... Array(data.length/10)].map((_,index)=>{
         return <div className='num' style={{backgroundColor:(index+1)==page ?"rgb(1, 31, 1)":""}} onClick={()=>setPage(index+1)}>{index+1}</div>
        })
      }
      <div className='num' onClick={()=>setPage(page+1)} style={{display:(data.length/10==page ? "none":"")}}>▶</div>
      
     </div>
   </div>
 </>
  );
}

export default App;
