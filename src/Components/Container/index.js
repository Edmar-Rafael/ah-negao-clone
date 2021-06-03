import React,{useState, useEffect} from 'react';
import { BigBox } from './styles';
import { 
      Header,
      Separator,
      Memes,
      Date
     } from '../../Components'
import { getPosts } from '../Services/posts';
import dayjs from 'dayjs'


function Container() {
  const [posts, setPosts] = useState()
  const date = new Date()
  useEffect(()=> {
    async function fetchPosts(){
      const {data} = await getPosts()
      setPosts(data)
    }
    fetchPosts()
  },
  [])
  console.log(dayjs(date).format('DD/MM/YYYY'))
  return (
    <BigBox>
        <Header/>
        <Separator height={25}/>
           {posts && posts.map(post => <Memes>
            <h1>{dayjs(post.date).format('DD/MM/YYYY')}</h1>
        </Memes>)}
    </BigBox>
  )
}

export default Container