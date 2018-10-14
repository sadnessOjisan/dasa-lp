import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import {
  Center,
  Font,
  Blink,
  Marquee,
  Tile,
  GradationText,
  Rotator,
  Zoom,
  Title,
  Area,
  Color,
} from 'dasa'
import RIMG from '../images/react-logo-mini.png'
import '../globalStyles/global.css'
import '../globalStyles/reset.css'

const IndexPage = () => (
  <Wrapper image={RIMG}>
    <br />
    <br />
    <br />
    <Center horizontal={true}>
      <div>
        <GradationText
          fontSize={96}
          colorArray={['red', 'blue', 'green']}
          isAnimate={true}
        >
          DASA
        </GradationText>
      </div>
    </Center>
    <Marquee>
      <Font color="red" size={36}>
        ⚠️Internet Explorerでは動作しません
      </Font>
    </Marquee>
    <br />
    <br />
    <Title.H2 backgroundColor={Color.Vivid.blue}>DASAとは何か</Title.H2>
    <Area backgroundColor={Color.Pastel.white}>
      <br />
      <Font size={24}>
        これは、ReactでWeb廃墟を作るための便利ツール集です。
      </Font>
      <br />
      <Font size={24}>
        HTML5で廃止になったタグの復刻版、Web廃墟っぽさを出すためのコンポーネントのセットから、なりたっています。
      </Font>
      <br />
      <br />
      <Font color={Color.Vivid.black} size={16}>
        <a href="https://github.com/sadnessOjisan/dasa">
          <Font size={24}>ギットハブ</Font>
        </a>
      </Font>
      <br />
      <br />
      <Font size={24} color={Color.Vivid.red}>
        プルリク　＆ イシュー大歓迎！
      </Font>
      <br />
    </Area>
    <br />
    <br />
    <br />
    <Title.H2 backgroundColor={Color.Vivid.blue}>DASAが提供するもの</Title.H2>
    <Row>
      <Title.H3 backgroundColor={Color.Vivid.red}>HTML4</Title.H3>
      <Area backgroundColor={Color.Pastel.black} width="40vw">
        <ul>
          <li>
            <Font color={Color.Vivid.green}>Center</Font>
          </li>
          <li>
            <Font color={Color.Vivid.green}>Font</Font>
          </li>
          <li>
            <Font color={Color.Vivid.green}>Blink</Font>
          </li>
          <li>
            <Font color={Color.Vivid.green}>Marquee</Font>
          </li>
          <li>
            <Font color={Color.Vivid.green}>Nobr</Font>
          </li>
        </ul>
      </Area>
      <Title.H3 backgroundColor={Color.Vivid.red}>便利ツール</Title.H3>
      <Area backgroundColor={Color.Pastel.black} width="40vw">
        <br />
        <ul>
          <li>
            <Font color={Color.Vivid.green}>Tile</Font>
          </li>
          <li>
            <Font color={Color.Vivid.green}>OutlineText</Font>
          </li>
          <li>
            <Font color={Color.Vivid.green}>GradationText</Font>
          </li>
          <li>
            <Font color={Color.Vivid.green}>Rotator</Font>
          </li>
          <li>
            <Font color={Color.Vivid.green}>Zoom</Font>
          </li>
          <li>
            <Font color={Color.Vivid.green}>Title</Font>
          </li>
          <li>
            <Font color={Color.Vivid.green}>Color</Font>
          </li>
          <li>
            <Font color={Color.Vivid.green}>Area</Font>
          </li>
        </ul>
      </Area>
    </Row>
    <br />
    <Title.H2 backgroundColor={Color.Vivid.blue}>使い方</Title.H2>
    <br />
    <Area backgroundColor={Color.Pastel.black} width="40vw">
      <Font color={Color.Vivid.green}># to install npm pkg</Font>
      <br />
      <Font color={Color.Vivid.green}>$ npm i --save dasa</Font>
      <br />
    </Area>
    <br />
    <br />
    <Row>
      <Area backgroundColor={Color.Pastel.black} width="40vw">
        <Font color={Color.Vivid.green}>import React from 'react'</Font>
        <br />
        <Font color={Color.Vivid.green}>
          {'import {Center, Rotator, Zoom} from "dasa"'}
        </Font>
        <br />
        <Font color={Color.Vivid.green}>{'const Page = () => {'}</Font>
        <br />
        <Font color={Color.Vivid.green}>{'return (<React.Fragment>'}</Font>
        <br />
        <Font color={Color.Vivid.green}>{'<Zoom>😤😤😤</Zoom><br />'}</Font>
        <br />
        <Font color={Color.Vivid.green}>
          {'<Rotator>😤😤😤</Rotator><br />'}
        </Font>
        <br />
        <Font color={Color.Vivid.green}>{'<Blink>😤😤😤</Blink><br />'}</Font>
        <br />
        <Font color={Color.Vivid.green}>{'</React.Fragment>)'}</Font>
        <br />
      </Area>
      <Area backgroundColor={Color.Pastel.black} width="40vw">
        <Zoom>
          <Font size={36}> 😤😤😤 </Font>
        </Zoom>
        <br />
        <Rotator>
          <Font size={36}> 😤😤😤 </Font>
        </Rotator>
        <br />
        <Blink>
          <Font size={36}> 😤😤😤 </Font>
        </Blink>
        <br />
      </Area>
    </Row>
    <br />
    <Title.H2 backgroundColor={Color.Vivid.blue}>
      詳しい使い方はストーリーブック！
    </Title.H2>
    <br />
    <Area backgroundColor={Color.Pastel.black}>
      <Font color={Color.Vivid.green}>
        $ git clone https://github.com/sadnessOjisan/dasa.git
      </Font>
      <br />
      <Font color={Color.Vivid.green}>$ cd dasa</Font>
      <br />
      <Font color={Color.Vivid.green}>$ npm install</Font>
      <br />
      <Font color={Color.Vivid.green}>$ npm run storybook</Font>
      <br />
    </Area>
    <br />
    <Title.H2 backgroundColor={Color.Vivid.blue}>モチベーション</Title.H2>
    <Area backgroundColor={Color.Vivid.white}>
      <br />
      <Font color={Color.Vivid.black} size={16}>
        いまの UI / UX
        がどうのこうの、SPAでリッチにモダンに〜　みたいなフロントが嫌いで、昔に戻るべきだと思って要るから。でも技術はwebページからwebアプリケーション化が進んで要るので、それならせめてwebアプリケーションを作る技術で昔のUI/UXを実現する方法みたいなのを知見としてつくっておきたかった。あと、Gatsbyで爆速Web廃墟を作りたかったから、Reactコンポーネントをつくった
      </Font>
      <br />
    </Area>
    <br />
    <Title.H2 backgroundColor={Color.Vivid.blue}>ロードマップ</Title.H2>
    <Area backgroundColor={Color.Vivid.white}>
      <br />
      <Font color={Color.Vivid.black} size={16}>
        ⚠️工事中⚠️
      </Font>
      <br />
      <Font color={Color.Vivid.black} size={16}>
        2018-10-10現在、近いうちにbreaking changeをしてv3にする予定。
      </Font>
      <br />
      <Font color={Color.Vivid.black} size={16}>
        APIの互換性は保つ予定だが、スタイルは壊れると思います。
      </Font>
      <br />
      <Font color={Color.Vivid.black} size={16}>
        {'<br />'}
        で改行しなくても済むようにしようかなと考えています。
      </Font>
      <br />
    </Area>
    <br />
    <Title.H2 backgroundColor={Color.Vivid.blue}>how 2 contribute</Title.H2>
    <Area backgroundColor={Color.Vivid.white}>
      <br />
      <Font color={Color.Vivid.black} size={16}>
        <a href="https://github.com/sadnessOjisan/dasa">こちらから</a>
      </Font>
      <br />
      <Font color={Color.Vivid.black} size={16}>
        欲しい機能や改善してほしいところがございましたら、Issueを立ててくださると嬉しいです！
      </Font>
      <br />
      <br />
      <Font color={Color.Vivid.red} size={48}>
        プルリク大歓迎！！！！
      </Font>
      <br />
      <br />
    </Area>
  </Wrapper>
)

const Wrapper = styled(Tile)`
  padding: 8px;
`

const Row = styled.div`
  width: 100%;
  display: flex;
  > * {
    margin-right: 16px;
  }
`
export default IndexPage
