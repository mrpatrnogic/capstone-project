import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        color: 'whiteAlpha.900', // Color por defecto para todos los Links
        _hover: {
          textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
          textDecoration: 'none', // Opcional: quitar subrayado
        },
      },
    },
  },
});

export default theme;