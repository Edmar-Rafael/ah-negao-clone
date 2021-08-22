import React,{useState, useEffect} from 'react';
import { BigBox, VaiFilhaoContainer } from './styles';
import { 
      Header,
      Separator,
      Memes,
      Footer
     } from '../../Components'
import { getPosts } from '../../Services/posts'


function Container() {
  const [posts, setPosts] = useState()

  useEffect(()=> {
    async function fetchPosts(){
      const {data} = await getPosts()
      setPosts(data)
    }
    fetchPosts()
  },
  [])
  
  return (
    <BigBox>
        <Header/>
        <Separator height={25}/>
           {posts && posts.map(post =>
           <Memes item={post}/>
           )}
        <Separator height={23}/>
        <VaiFilhaoContainer>
           Vai Filhão!
        </VaiFilhaoContainer>
        <Footer/>
    </BigBox>
  )
}

export default Container