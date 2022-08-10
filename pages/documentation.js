import { Container, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import DocumentationContent from '../components/DocumentationContent'
import Layout from '../components/layouts/layout'
import SidebarNav from '../components/sidebarNav'

const Documentation = () => {
  const [tit, setTitle] = useState('')
  const [sub, setSubtitle] = useState('')
  const [desc, setDescription] = useState('')

  const pullComponentData = (title, subtitle, description) => {
    setTitle(title)
    setSubtitle(subtitle)
    setDescription(description)
  }

  return (
    <Layout title={'Documentation'}>
      <Heading
        mt="10"
        as="h1"
        fontSize="5xl"
        fontFamily="Gilroy"
        fontWeight="black"
      >
        Documentation
      </Heading>
      <Container
        maxW="1200px"
        m="0"
        mt="3rem"
        p="0"
        display="flex"
        justifyContent="left"
        alignItems="top"
        flexDirection="row"
      >
        <SidebarNav func={pullComponentData} />

        <DocumentationContent title={tit} subtitle={sub} description={desc} />
      </Container>
    </Layout>
  )
}

export default Documentation
