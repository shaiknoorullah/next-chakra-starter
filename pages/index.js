/** @format */
import {
  Container,
  Box,
  Flex,
  Heading,
  Link,
  Text,
  Code,
  useColorModeValue
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import Card from '../components/cards'
import Layout from '../components/layouts/layout'

export default function Home() {
  return (
    <Layout>
      <Box display="flex" flexDirection="column" alignItems="center">
        <NextSeo
          title="Using More of Config"
          description="This example uses more of the available config options."
          // canonical="https://www.canonical.ie/"
          openGraph={{
            url: 'https://www.websleak.netlify.app',
            title: 'Next.js & Chakra template',
            description:
              'A simple starter template for designers in love with Chakra Ui with next.js. This template is also seo optimized using next-seo, next-sitemap and uses framer-motion for animations',
            images: [
              {
                url: 'https://www.example.ie/og-image-01.jpg',
                width: 800,
                height: 600,
                alt: 'Og Image Alt',
                type: 'image/jpeg'
              },
              {
                url: 'https://www.example.ie/og-image-02.jpg',
                width: 900,
                height: 800,
                alt: 'Og Image Alt Second',
                type: 'image/jpeg'
              },
              {
                url: 'https://www.example.ie/og-image-03.jpg'
              },
              {
                url: 'https://www.example.ie/og-image-04.jpg'
              }
            ],
            site_name: 'Next-chakra-starter'
          }}
          twitter={{
            handle: '@websleak',
            site: '@webleak.netlify.app',
            cardType: 'summary_large_image'
          }}
        />

        <main>
          <Container
            size="container.xl"
            maxW="1200px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Box
              display="flex"
              justifyContent="flex-start"
              align="center"
              flexDirection="column"
              mt="10rem"
              mb="5rem"
            >
              <Heading as="h1" fontFamily="Gilroy.900" fontSize="4.2rem">
                Welcome to{' '}
                <Link
                  href="https://nextjs.org"
                  css={{ textDecoration: 'none' }}
                  color="#49c8c2"
                >
                  Next.js!
                </Link>
              </Heading>
              <Text
                as="description"
                fontFamily="gilroy"
                fontSize="1.2rem"
                mt="2rem"
                maxW="750px"
              >
                A simple starter template for designers in love with Chakra UI
                created using next.js. This template is also seo optimized using
                next-seo, next-sitemap and uses framer-motion for animations
              </Text>
              <Text
                as="description"
                fontFamily="gilroy"
                fontSize="1.3rem"
                mt="2rem"
              >
                Get started by editing{' '}
                <Code
                  fontSize="1.1rem"
                  bgColor={useColorModeValue('teal.200', '#f6ad55')}
                  borderRadius="md"
                  py="0.2rem"
                  px="0.5rem"
                  color={useColorModeValue('blackAlpha.900', 'blackAlpha.800')}
                >
                  {' '}
                  pages.index.js
                </Code>
              </Text>
            </Box>

            <Flex
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              maxW="800px"
            >
              <Card
                props={{
                  title: 'Documentation',
                  desc: 'Find in-depth information about Next.js features and API.',
                  href: 'https://nextjs.org/docs'
                }}
              />
              <Card
                props={{
                  title: 'Learn',
                  desc: 'Learn about Next.js in an interactive course with quizzes!',
                  href: 'https://nextjs.org/learn'
                }}
              />
              <Card
                props={{
                  title: 'Example',
                  desc: 'Discover and deploy boilerplate example Next.js projects.',
                  href: 'https://github.com/vercel/next.js/tree/canary/examples'
                }}
              />
              <Card
                props={{
                  title: 'Deploy',
                  desc: 'Instantly deploy your Next.js site to a public URL with Vercel.',
                  href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                }}
              />
            </Flex>
          </Container>
        </main>
      </Box>
    </Layout>
  )
}
