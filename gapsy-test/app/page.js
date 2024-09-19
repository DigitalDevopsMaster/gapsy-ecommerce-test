"use client";

import styled from "@emotion/styled";
import {Header, Page, ProductList} from "./ui/"
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [keyword, setKeyword] = useState("computer”")
  const [pageNumber, setPageNumber] = useState(1)

  async function fetchData() {
    const url = `https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword?keyword=${keyword}&page=${pageNumber}&sortBy=best_match`;
  
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'fce0e15738msh6a87c0c9db9505cp14b74fjsn54bc768f3bc7',
            'x-rapidapi-host': 'axesso-walmart-data-service.p.rapidapi.com'
        }
    };
  
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const items = data.item.props.pageProps.initialData.searchResult.itemStacks[0].items;
        console.log(items); 
        setData(items); 
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  
    return () => {
      
    }
  }, [])
  
  if (loading)  {
    return (
      <Page>{"LOADING"}</Page>
    );
  } 

  return (
    <Page className="home-page">
      <Header className="header"/>
      <ProductList data={data} className="item-list"/>
    </Page>
  ); 
}
