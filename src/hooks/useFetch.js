import axios from "axios";
import { useState } from "react"

const useFetch = () => {
   const [apiData, setData] =  useState();
   const getApi = (url) => {
        axios.get(url)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
   }
   const getType = (url) => {
      axios.get(url)
          .then(res => setData({
            results: res.data.pokemon.map(
               (poke) => poke.pokemon
            )
          }))
          .catch(err => console.log(err));
 }
   return [apiData, getApi, getType];
}

export default useFetch
