// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  traefik: require("../assets/figures/traefik.logo.svg"),
  huh: require("../assets/figures/huh.gif"),
  microservices: require("../assets/figures/microservices.gif"),
  docker: require("../assets/figures/docker-logo.png"),
  rkt: require("../assets/figures/rkt.png"),
  mesos: require("../assets/figures/mesos-logo.png"),
  swarm: require("../assets/figures/swarm.png"),
  k8s: require("../assets/figures/kubernetes-logo.png"),
  rancher: require("../assets/figures/rancher-logo.png"),
  consul: require("../assets/figures/consul-logo.png"),
  etcd: require("../assets/figures/etcd-logo.png"),
  reverse: require("../assets/figures/traditionnalArchitecture.png"),
  reverseConfig: require("../assets/figures/traditionnalArchitecture.config.png"),
  stop: require("../assets/figures/stop.gif"),
  traefikArchitecture: require("../assets/figures/traefikArchitecture.png"),
  priere: require("../assets/figures/priere.jpg"),
  greatBut: require("../assets/figures/greatBut.gif"),
  letsEncrypt: require("../assets/figures/letsencrypt-logo.svg"),
  dockerImage: require("../assets/figures/docker.image.png"),
  reblochon: require("../assets/figures/reblochon.png"),
  mantl: require("../assets/figures/mantl-logo.png"),
  mantlBack: require("../assets/figures/mantl.back.svg"),
  cisco: require("../assets/figures/cisco-logo.png"),
  zenika: require("../assets/figures/zenika.logo.png"),
  containous: require("../assets/figures/containous.logo.png"),
  arrow: require("../assets/figures/arrow.png"),
  traefikSticker: require("../assets/figures/traefik.sticker.png"),
  camembert: require("../assets/figures/camembert.png"),
  morbier: require("../assets/figures/morbier.png"),
  raclette: require("../assets/figures/raclette.png"),
  money: require("../assets/figures/money.gif"),
  developer: require("../assets/figures/developer.gif"),
  opsdocker: require("../assets/figures/ops.docker.gif"),
  starsfirstweek: require("../assets/figures/stars.first.week.png"),
  barbecue: require("../assets/figures/barbecue.gif"),
  traefikold: require("../assets/figures/traefik.logo.old.png"),
  omg: require("../assets/figures/omg.gif"),
  lawyer: require("../assets/figures/better.call.saul.gif"),
  ba: require("../assets/figures/business.angel.gif"),
  ineedmoney: require("../assets/figures/i.need.money.gif"),
  alone: require("../assets/figures/alone.gif"),
  moremoney: require("../assets/figures/more.money.gif"),
  team: require("../assets/figures/team.gif"),
  series: require("../assets/figures/series.svg"),
  vc: require("../assets/figures/vc.gif"),
  go: require("../assets/figures/go.gif"),
  shutup: require("../assets/figures/shutup.gif"),
  pitchdeck: require("../assets/figures/pitch.deck.png"),
  pacte: require("../assets/figures/pacte.jpg"),
  teamtraefik: require("../assets/figures/team.traefik.svg"),
  lawyerfull: require("../assets/figures/better.call.saul.full.gif"),

  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#37ABC8",
  white: "#e2e2e2",
  secondary: "#1F2022",
  tertiary: "#e2e2e2",
  quartenary: "#CECECE",
  rose: "#FA58F4",
}, {
    primary: "Montserrat",
    secondary: "Lobster Two"
  });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={300} theme={theme}>
        <Slide bgColor="white">
          <Heading textColor="primary">
            git init
          </Heading>
          <Image src={images.containous.replace("/", "")} margin="30px auto 20px" fit width="380" />
          <Text margin="40" textFont="Open Sans Condensed">Emile Vauge — Technozaure 2017</Text>
        </Slide>

        <Slide bgColor="black">
          <Heading size={2} caps textColor="white">
            2 years ago...
            </Heading>
          <Image src={images.developer.replace("/", "")} margin="20px auto 20px" height="300" />
          <Heading size={2} caps textColor="white">
            I was a developer
            </Heading>
        </Slide>

        <Slide >
          <Heading size={2} caps textColor="white">
            I was fighting
            </Heading>
          <Image src={images.microservices.replace("/", "")} margin="20px auto 20px" height="300" />
          <Heading size={2} caps textColor="white">
            with microservices
            </Heading>
        </Slide>

        <Slide bgColor="black">
          <Heading size={2} caps textColor="white">
            the ops team
            </Heading>
          <Image src={images.opsdocker.replace("/", "")} margin="20px auto 20px" height="300" />
          <Heading size={2} caps textColor="white">
            meeting docker
            </Heading>
        </Slide>

        <Slide >
          <Heading size={2} caps textColor="white">
            I decided to
            </Heading>
          <Image src={images.barbecue.replace("/", "")} margin="20px auto 20px" height="300" />
          <Heading size={2} caps textColor="white">
            Do It Myself
            </Heading>
        </Slide>

        <Slide bgColor="white">
          <Heading size={2} textColor="primary" >
            Here comes
            </Heading>
          <Image src={images.traefikold.replace("/", "")} height="200" padding="10" />
          <Appear>
            <Heading size={2} textColor="rose" textFont="Comic Sans MS" >
              (Best logo ever)
            </Heading>
          </Appear>
        </Slide>

        <Slide bgColor="white">
          <Image src={images.traefikArchitecture.replace("/", "")} height="550" />
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            And one
            </Heading>
          <Heading size={1} caps>
            week
            </Heading>
          <Heading size={1} fit caps textColor="black">
            later
            </Heading>
        </Slide>

        <Slide bgColor="black">
          <Image src={images.starsfirstweek.replace("/", "")} height="600" />
        </Slide>

        <Slide bgColor="white">
          <Image src={images.omg.replace("/", "")} height="600" />
        </Slide>

        <Slide bgColor="white">
          <Image src={images.zenika.replace("/", "")} width="800" />
          <Image src={images.arrow.replace("/", "")} height="120" />
          <Image src={images.containous.replace("/", "")} width="800" />
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Articles
            </Heading>
          <Heading size={1} caps>
            of
            </Heading>
          <Heading size={1} fit caps textColor="black">
            association
            </Heading>
        </Slide>

        <Slide bgColor="black">
          <Image src={images.lawyer.replace("/", "")} height="600" />
        </Slide>

        <Slide bgImage={images.ineedmoney.replace("/", "")}>
        </Slide>

        <Slide bgColor="white">
          <Heading size={2} caps textColor="black">
            Business
            </Heading>
          <Image src={images.ba.replace("/", "")} margin="20px auto 20px" height="300" />
          <Heading size={2} caps textColor="black">
            Angels
            </Heading>
        </Slide>

        <Slide bgColor="black">
          <Image src={images.lawyer.replace("/", "")} height="600" />
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} caps>
            But
            </Heading>
          <Heading size={1} caps textColor="black">
            Few
            </Heading>
          <Heading size={1} caps>
            months
            </Heading>
          <Heading size={1} caps textColor="black">
            later...
            </Heading>
        </Slide>

        <Slide bgColor="black">
          <Image src={images.alone.replace("/", "")} height="600" />
        </Slide>

        <Slide bgImage={images.team.replace("/", "")}>
          <Appear>
            <Heading size={2} caps textColor="white" >
              I
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} caps textColor="white" >
              need
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} caps textColor="white" >
              a Team
            </Heading>
          </Appear>
        </Slide>

        <Slide bgColor="white" >
          <Image src={images.moremoney.replace("/", "")} height="550" />
        </Slide>

        <Slide bgImage={images.series.replace("/", "")}>
        </Slide>

        <Slide bgImage={images.vc.replace("/", "")}>
          <Appear>
            <Heading size={2} caps textColor="white" >
              Let's
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} caps textColor="white" >
              Find
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} caps textColor="white" >
              a VC
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.go.replace("/", "")}>
          <Heading size={2} caps fit textColor="white" >
            Goooooooo
            </Heading>
          <Heading size={2} caps fit textColor="white" >
            ooooooooo
            </Heading>
          <Heading size={2} caps fit textColor="white" >
            oooooooo !
            </Heading>
        </Slide>

        <Slide bgColor="white">
          <Heading size={2} caps textColor="black" >
            Wait...
        </Heading>
        </Slide>

        <Slide bgImage={images.pitchdeck.replace("/", "")}>
        </Slide>

        <Slide bgImage={images.lawyerfull.replace("/", "")} bgDarken="0.7">
          <Heading textColor="white" >
            Almost here...
            </Heading>
          <List fit textColor="white">
            <Appear><ListItem>Term sheets</ListItem></Appear>
            <Appear><ListItem>Due diligences</ListItem></Appear>
            <Appear><ListItem>Shareholders' agreement</ListItem></Appear>
            <Appear><ListItem>Closing</ListItem></Appear>
          </List>
        </Slide>

        <Slide bgImage={images.pacte.replace("/", "")}>
        </Slide>

        <Slide bgImage={images.money.replace("/", "")}>
          <Heading size={1} fit caps textColor="rose">
            We just
            </Heading>
          <Heading size={1} fit caps textColor="rose">
            raised € 1M !
            </Heading>
        </Slide>

        <Slide bgImage={images.teamtraefik.replace("/", "")} bgColor="white">
        </Slide>

        <Slide >
          <Heading size={1} caps  >
            Thank you!
            </Heading>
            
          <Text >
            <Link href="https://github.com/emilevauge">@emilevauge</Link>
          </Text>
          <Text >
            <Link href="https://emilevauge.github.io/tz092017">emilevauge.github.io/tz092017</Link>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
