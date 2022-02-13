import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
	colors: {
		gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#999999",
      "200": "#B3B5C6",
      "100": "#DADADA",
      "50": "#F5F8FA",
    },
		yellow: {
      "400": "#FFBA08"
		}, 
		teal: {
			"200": "#47585B"
		}
		

	},
	fonts: {
		heading: "Poppins",
		body: "Poppins",
	},
	styles: {
		global: {
			body: {
				bg: "gray.900",
				color: "gray.50"
			}
		}
	}
})