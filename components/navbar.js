// import Logo from './logoNext'
import NextLink from 'next/link'
import {
  Box,
  Link,
  Stack,
  Flex,
  Image,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import { Menu as HamburgerIcon } from '@mui/icons-material'

import TrueRoas from './trueRoas.svg'

const LinkItem = ( { href, path, variant, target, children, ...props } ) => {
  const active = path === href
  const inactiveColor = useColorModeValue( 'gray200', 'whiteAlpha.900' )
  const activeColor = useColorModeValue( '#309794', '#fbd38d' )
  return (
    <NextLink href={ href } passHref scroll={ false }>
      <Stack display={ 'flex' } flexDirection={ 'row' } m={ 0 } p={ 0 }>
        <Link
          p={ "10px" }
          variant={ variant }
          color={ active ? activeColor : inactiveColor }
          target={ target }
          { ...props }
        >
          { children }
        </Link>
      </Stack>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (

    <Box w={ 'full' } position={ 'fixed' }>
      <Stack bgColor={ 'blackAlpha.400' } direction={ 'row' }
        // spacing={ { xl: 60, lg: 50, md: 30 } }
        maxW={ { xl: '1900px', lg: '1400px', md: '1200px', sm: '650px', xs: '300px' } }
        spacing={ {} }
        alignItems={ 'space-between' }
        justifyContent={ 'center' }>
        <Box p={ 2 } position={ 'relative' } align={ 'left' } bgColor={ 'telegram.500' }>
          <TrueRoas />
        </Box>
        <Stack display={ { lg: "flex", md: 'none', sm: 'none', base: 'none' } } bgColor={ 'telegram.500' } direction={ { lg: 'row', md: 'row', sm: 'row', xs: 'column' } } justifyContent={ 'center' } spacing={ 10 } alignItems={ 'center' } >
          <LinkItem href="/" path={ path }>
            Why TrueRoas?
          </LinkItem>
          <LinkItem href="/" path={ path }>
            Why TrueRoas?
          </LinkItem>
          <LinkItem href="/" path={ path }>
            Why TrueRoas?
          </LinkItem>
          <LinkItem href="/" path={ path }>
            Why TrueRoas?
          </LinkItem>
        </Stack>
        <Box p={ 2 }>
          <Stack direction={ 'row' } spacing={ 10 } display={ { lg: 'flex', md: 'flex', base: 'none' } } justifyContent={ 'center' } alignItems={ 'center' }>
            <Button variant={ 'signup' } color={ "#70728B" } w={ "auto" } bgColor={ 'transparent' } size={ "lg" } >Login</Button>
            <Button variant={ 'signup' } size={ "lg" } >Signup For Free</Button>
          </Stack>
        </Box>
      </Stack>
    </Box>

    // <Box width={ { lg: 'full', md: "md", base: "xs" } } display={ "flex" } py={ 2 } px={ 2 } justifyContent={ "center" } alignItems={ "center" } position={ "fixed" }>

    //   <Stack justifyContent={ "space-between" } w={ { lg: "1700px", md: "1300px", base: "700px" } } alignItems={ "center" } spacing={ { lg: 40, md: 20, base: 10 } } direction={ "row" } >

    //     <Flex align="center" justifyContent={ "center" } >
    //       <Image src={ "/trueRoas.svg" } alt={ "logo" } />
    //     </Flex>
    //     <Stack direction={ "row" } justifyContent={ "center" } alignItems={ "center" } spacing={ 40 }>

    //       <Stack
    //         direction={ { base: 'column', md: 'row' } }
    //         display={ { base: 'none', md: 'flex' } }
    //         width={ { base: '800px', md: 'auto' } }
    //         alignItems="center"
    //         justifyContent="center"
    //         flexGrow={ 1 }
    //         fontWeight="semibold"
    //         spacing={ 10 }
    //       >
    //         <LinkItem
    //           href="/"
    //           path={ path }

    //           style={ { textDecoration: 'none' } }
    //         >
    //           Why TrueROAS?
    //         </LinkItem>
    //         <LinkItem
    //           href="/features"
    //           path={ path }
    //           style={ { textDecoration: 'none' } }
    //         >
    //           Features
    //         </LinkItem>
    //         <LinkItem
    //           href="/solutions"
    //           path={ path }
    //           style={ { textDecoration: 'none' } }
    //         >
    //           Solutions
    //         </LinkItem>
    //         <LinkItem
    //           href="pricing"
    //           path={ path }
    //           style={ { textDecoration: 'none' } }
    //         >
    //           Pricing
    //         </LinkItem>
    //       </Stack>

    //     </Stack>
    //     <Stack justifyContent={ "center" } alignItems={ "center" } direction={ { lg: 'row', base: "column" } } spacing={ 5.4 }>
    //       <Box ml={ 2 } display={ { base: 'inline-block', md: 'none' } }>
    //         <Menu isLazy id="navbar-menu">
    //           <MenuButton
    //             as={ IconButton }
    //             icon={ <HamburgerIcon /> }
    //             variant="outline"
    //             aria-label="Options"
    //           />
    //           <MenuList>
    //             <NextLink href="/" passHref>
    //               <MenuItem as={ Link } style={ { textDecoration: 'none' } } >About</MenuItem>
    //             </NextLink>
    //             <NextLink href="/works" passHref>
    //               <MenuItem as={ Link } style={ { textDecoration: 'none' } } >Works</MenuItem>
    //             </NextLink>
    //             <NextLink href="/coming-soon" passHref>
    //               <MenuItem as={ Link } style={ { textDecoration: 'none' } } >Posts</MenuItem>
    //             </NextLink>
    //             {/* <MenuItem
    //               as={Link}
    //               href="https://github.com/craftzdog/craftzdog-homepage"
    //             >
    //               View Source
    //             </MenuItem> */}
    //           </MenuList>
    //         </Menu>
    //       </Box>
    //       {/* <NextLink variant={"navButton"} href={""} */ }
    //       <Button variant={ 'signup' } color={ "#70728B" } w={ "auto" } bgColor={ 'transparent' } size={ "lg" } >Login</Button>
    //       <Button variant={ 'signup' } size={ "lg" } >Signup for Free</Button>
    //     </Stack>
    //   </Stack>
    // </Box>
  )
}

export default Navbar
