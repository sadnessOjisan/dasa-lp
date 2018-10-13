import React from 'react'
import { Link } from 'gatsby'
import {Center, Font, Blink, Marquee, Tile, GradationText, Rotator} from 'dasa'
import GIMG from '../images/gatsby-icon.png'
import '../globalStyles/global.css'
import '../globalStyles/reset.css'

const IndexPage = () => (
  <Tile image={GIMG} isGlobal={true}>
  <Blink><Rotator><Font size={48}>WELCOME</Font></Rotator></Blink>
    <Center horizontal={true}>
    <GradationText
      fontSize={96}
      colorArray={["red", "blue", "green"]}
      isAnimate={true}
    >
      DASA
    </GradationText>
    </Center>
      
      
      <Marquee>
        <Font color='red'>Internet Explorerでは動作しません</Font>
      </Marquee>
  </Tile>
)

export default IndexPage
