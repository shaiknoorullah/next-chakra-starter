/** @format */

import {
	Box,
	Center,
	LinkBox,
	LinkOverlay,
} from "@chakra-ui/react"
import React from "react"

const SocialButton = ({ ...props }) => (
	<LinkBox>
		<LinkOverlay href={props.href} target="_blank">
			<Box>
				<Center
					ml="4"
					w="2.2rem"
					h="2.2rem"
					borderRadius="md"
					bgColor="purple.700"
				>
					{props.Children}
				</Center>
			</Box>
		</LinkOverlay>
	</LinkBox>
)

export default SocialButton
