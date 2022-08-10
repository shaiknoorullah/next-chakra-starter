import Logo from './logoNext'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { Menu as HamburgerIcon } from '@mui/icons-material'
import ToggleColorModeButton from './toggleColorMode'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  const activeColor = useColorModeValue('#309794', '#fbd38d')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Stack display={'flex'} flexDirection={'column'} m={0} p={0}>
        <Link
          pt={1}
          px={2}
          mb={-1}
          className={'hover-underline-animation'}
          borderRadius={'lg'}
          color={active ? activeColor : inactiveColor}
          target={target}
          {...props}
        >
          {children}
        </Link>
      </Stack>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="1200px"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center">
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          align="center"
          justifyContent="center"
          flexGrow={1}
          fontWeight="semibold"
          mt={{ base: 4, md: 0 }}
          ml="6"
        >
          <LinkItem
            ml="-20"
            href="/documentation"
            path={path}
            style={{ textDecoration: 'none' }}
          >
            Documentation
          </LinkItem>
          <LinkItem
            mr="20"
            href="https://github.com/shaiknoorullah"
            path={path}
            style={{ textDecoration: 'none' }}
          >
            Github
          </LinkItem>
        </Stack>

        <Box flex={1} align="right" maxW={{ base: undefined, md: '70px' }}>
          <ToggleColorModeButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link} style={{ textDecoration: 'none' }}>
                    About
                  </MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link} style={{ textDecoration: 'none' }}>
                    Works
                  </MenuItem>
                </NextLink>
                <NextLink href="/coming-soon" passHref>
                  <MenuItem as={Link} style={{ textDecoration: 'none' }}>
                    Posts
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
