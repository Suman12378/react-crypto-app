import React from 'react'
import { Box, Image, Text } from "@chakra-ui/react"
import  btc from "../assets/btcsrc.png"
import { motion } from "framer-motion";


const Home = () => {
  return <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
    Hello

    <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btc}
          filter={"grayscale(1)"}
        />
      </motion.div>

    <Text fontSize={"6xl"} textAlign={"center"} fontWeight={"thin"} color={"whiteAlpha.700"} m={"-20"} >

      XCRYPTO
    </Text>


  </Box>

}

export default Home