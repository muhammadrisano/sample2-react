import React, { useState, useEffect } from 'react'

function About() {
  const [data, setData] = useState({book:{
    item: []
  }})
  
  
  useEffect(() => {
    const books = [
      {
      id: 12,
      name: 'agama',
      category: 'pelajaran'
    },
      {
        id: 13,
        name: 'agama2',
        category: 'pelajaran'
      },
      {
        id: 14,
        name: 'agama3',
        category: 'pelajaran'
      }
      , {
        id: 15,
        name: 'agama4',
        category: 'pelajaran'
      }
  ]
    setData({ book: {item:books}})
    
  }, [])
  const editData = ()=>{
    const booksbaru = [
      {
        id: 12,
        name: 'agama',
        category: 'pelajaran'
      },
      {
        id: 13,
        name: 'agama2',
        category: 'pelajaran'
      },
      {
        id: 14,
        name: 'agama3',
        category: 'pelajaran'
      }
    ]
    setData({ book: { item:booksbaru }})
  }
  
  return (
    <div>
      <ul>
        {data.book.item.map((item)=>
          <li>{item.name}</li>
        )}
        <button onClick={editData}>ubah adata</button>
      </ul>      
    </div>
  )
}

export default About
