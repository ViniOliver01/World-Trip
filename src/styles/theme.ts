import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
   colors: {
         yellow: {
            "500": "#FFBA08",
         },
         gray: {
            "700": "#47585B",
            "600": "#999999",
            "100": "#DADADA",
            "50": "#F5F8FA",
         }
      },
      fonts: {
         heading: 'Poppins',
         body: 'Poppins',
      },
      styles: {
         global: {
            body: {
               bg: 'gray.50'
            }
         }
      }
   })
