import React, { useEffect, useState } from "react";
import { Container, Memes } from '../../components'
import { getPosts } from "../../services/posts";
import { HomeHeader } from "./styles";

function Home() {
  const  [posts, setPosts] = useState()

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await getPosts()
      setPosts(data)
    }
    fetchPosts()
  }, [])

  return (
    <Container>
      <HomeHeader>
        header
      </HomeHeader>
      {posts && posts.map(post =>
        <Memes item={post}/>
      )}
    </Container>
  )
}

export default Home