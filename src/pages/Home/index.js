import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import arrow from '../../assets/images/arrow.svg'
import ahnegao from '../../assets/images/ahnegao.png'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Footer, Memes, NaviBar, Separator } from '../../components'
import { getPosts } from "../../services/posts";
import { 
  ArrowImage, 
  LinkContainer, 
  HomeHeader, 
  Image, 
  LogoContainer, 
  NaviBarContainer, 
  Link } from "./styles";


function Home() {
  const  [posts, setPosts] = useState()
  const { page=1 } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await getPosts(page)
      setPosts(data)
    }
    fetchPosts()
  }, [page])

  const pageChange = (num) => {
    navigate(`/${Number(page) + num}`)
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
  }


  return (
    <Container>
      <HomeHeader>
        <LogoContainer>
          <Image src={ahnegao}/>
        </LogoContainer>
        <NaviBarContainer>
          <LinkContainer>
            <Link href='https://www.ahnegao.com.br/enviar-dica'>
              Envie seu meme
            </Link>
          </LinkContainer>
          <LinkContainer>
            <Link href='https://www.ahnegao.com.br/anunciar'>
              Anunciar
            </Link>
          </LinkContainer>
          <LinkContainer>
            <Link href='https://www.ahnegao.com.br/sobre'>
              Sobre
            </Link>
          </LinkContainer>
          <LinkContainer>
            <Link>
              Destaques <ArrowImage src={arrow}/>
            </Link>
          </LinkContainer>
          <LinkContainer>
            <Link>
              <FontAwesomeIcon icon={faSearch}/>
            </Link>
          </LinkContainer>
        </NaviBarContainer>
      </HomeHeader>
      <Separator y={21}/>
      {posts && posts.map(post => <Memes item={post}/>)}
      <NaviBar pages={page} handlePage={pageChange}/>
      <Separator y={18}/>
      <Footer />
    </Container>
  )
}

export default Home