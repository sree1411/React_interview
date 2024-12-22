import { useEffect, useState } from 'react'

const useFetch = () => {

  const [data, setData] = useState([])

  useEffect(()=>{
    let fetchData = async ()=>{
      let response = await fetch("https://fakestoreapi.com/products")
      let result = await response.json()
      setData(result)
    }
    fetchData()
  },[])


  return {data}
}

export default useFetch