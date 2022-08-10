import { Container, Divider, Stack } from '@chakra-ui/react'
import { Menu, GridView, Web, Pageview, Map } from '@mui/icons-material'
import React, { useState } from 'react'
import SideMenuItem from './sideMenuItem'
// import DocumentationContent from './DocumentationContent'

const SidebarNav = props => {
  const [clicked, setClicked] = useState(false)

  const handleMenu = e => {
    e.preventDefault()
    setClicked(!clicked)
  }

  return (
    <Container
      display="flex"
      m="2"
      w={{ base: '3.5rem', md: '2xs' } && clicked ? '2xs' : '3.5rem'}
      bgColor="teal.300"
      color="blackAlpha.800"
      borderRadius="lg"
      py="4"
      justifyContent="center"
      alignItems="center"
    >
      <Stack direction="column" justifyContent="center" alignItems="center">
        <SideMenuItem
          children={<Menu onClick={handleMenu} cursor="pointer" />}
          content={'Table of Contents'}
          clicked={clicked}
          onClick={handleMenu}
        />
        {clicked && (
          <Divider
            maxWidth="20rem"
            borderColor="black"
            h="1px"
            bgColor="blackAlpha.800"
          />
        )}
        <SideMenuItem
          children={<GridView cursor="pointer" />}
          content={'Components'}
          clicked={clicked}
          onClick={() => {
            props.func(
              'Component',
              'Subtitle',
              'this is the Component description'
            )
          }}
        />
        {clicked && (
          <Divider
            maxWidth="20rem"
            borderColor="black"
            h="1px"
            bgColor="blackAlpha.800"
          />
        )}
        <SideMenuItem
          children={<Web cursor="pointer" />}
          content={'Pages'}
          clicked={clicked}
          onClick={() => {
            props.func('Pages', undefined, 'this is the Pages description')
          }}
        />
        {clicked && (
          <Divider
            maxWidth="20rem"
            borderColor="black"
            h="1px"
            bgColor="blackAlpha.800"
          />
        )}
        <SideMenuItem
          children={<Pageview cursor="pointer" />}
          content={'Search Engine Optimization'}
          clicked={clicked}
          onClick={() => {
            props.func(
              'Search Engine Optimization',
              undefined,
              'this is the SEO description'
            )
          }}
        />
        {clicked && (
          <Divider
            maxWidth="20rem"
            borderColor="black"
            h="1px"
            bgColor="blackAlpha.800"
          />
        )}
        <SideMenuItem
          children={<Map cursor="pointer" />}
          content={'SiteMap'}
          clicked={clicked}
          onClick={() => {
            props.func('SiteMap', undefined, 'this is the sitemap description')
          }}
        />
      </Stack>
    </Container>
  )
}

export default SidebarNav
