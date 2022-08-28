import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'


const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}



const components = {
  Link: {
    baseStyle: () => ({
      textDecoration: 'none',
      
      
    }),

    variants: {
      "navButton": {
        fontSize: "16px",
        lineHeight: "18.83",
        color: "#70728B",
        height: "46px",
        width:"100px",
      }
    }
  },
  Button: {
    baseStyle: () => {
      fontFamily: "Gilroy"
    },

    sizes: {
      lg: {
        width: "160px",
        height: "46px"
      }
    },

    variants: {
      "signup":{
        fontSize: "16px",
        fontWeight: "medium",
        color: "white",
        bgColor: "primary",
        borderRadius: "80px",
        padding: ["13px", "26px", "14px", "26px"]
      }
    }
  }
}


const colors = {
  black: '#04061F',
  primary: '#303FE1',
  grey: '#70728B',
  blueBorder: '#C9D4F0',
  lightBlueBorder: '#DCE6FF',
  lightGrey: '#878787',
  dangerOnError: '#FF1F00',
  dangerOnError200: '#FFF7F7',
  tableBg: '#F9FAFF'
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

    
const theme = extendTheme({ config, styles, components, colors })
export default theme
