// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
// import createTheme from "spectacle/lib/themes/default";
import theme from "../themes/seattlejs/index.js";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../themes/seattlejs/index.css");
// Best way to include fonts rite
require("../fonts/worksans.css");
require("../fonts/biorhyme.css");
require("../fonts/silkscreen.css");

const images = {
  bg: require("../assets/bg_cubes.svg"),
  logo: require("../assets/react-vr-logo.svg"),
  logoAlexa: require("../assets/logo-alexa.svg"),
  logoImdb: require("../assets/logo-IMDb.svg"),
  logoFormidable: require("../assets/logo-formidable.svg"),
  logoMicrosoft: require("../assets/logo-microsoft.svg"),
  logoZillow: require("../assets/logo-zillow.svg"),
  logoGalvanize: require("../assets/logo-galvanize.svg"),
  logoAppSheet: require("../assets/logo-appsheet.svg"),
  logoGoDaddy: require("../assets/logo-godaddy.svg"),
  logoNpm: require("../assets/logo-npm.svg"),
  logoSitepen: require("../assets/logo-sitepen.svg"),
  logoIndeed: require("../assets/logo-indeed.png"),
  logoOpenDoor: require("../assets/logo-opendoor.svg"),
  logoSheCodesNow: require("../assets/logo-shecodesnow.png"),
  logoSendGrid: require("../assets/logo-sendgrid.svg"),
  logoTwitter: require("../assets/logo-twitter.svg"),
  logoUnbounce: require("../assets/logo-unbounce.png")
};

const whatisvr = {
  game: require("../assets/whatisvr/vr-gameplay.jpg"),
  void: require("../assets/whatisvr/the-void.png"),
  vrold1: require("../assets/whatisvr/vr-old1.jpg"),
  vrold2: require("../assets/whatisvr/vr-old2.jpg")
};

const howitworks = {
  stereo: require("../assets/howitworks/stereo.jpg"),
  barrel: require("../assets/howitworks/barrel-distortion.png"),
  pincushion: require("../assets/howitworks/pincushion-distortion.png"),
  density: require("../assets/howitworks/pixel-density.jpg"),
  oculus: require("../assets/howitworks/oculus.jpg"),
  leap: require("../assets/howitworks/motion-leap.jpg"),
  oculusVr: require("../assets/howitworks/oculus-vr.jpg"),
  steamVr: require("../assets/howitworks/steam-vr.jpg"),
  osVr: require("../assets/howitworks/osvr.jpg"),
  webVr: require("../assets/howitworks/web-vr.jpg")
};

preloader(images);

export default class Presentation extends React.Component {
  renderSponsorHeading(text) {
    return (
      <Heading
        caps
        size={6}
        style={{ letterSpacing: "0.05em" }}
      >
        {text}
      </Heading>
    );
  }

  render() {
    const skylineBg = {
      backgroundImage: `url(${images.bg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
      backgroundSize: "105% auto"
    };

    const sponsor = {
      display: "block",
      marginBottom: "1.5em"
    };

    const agendaSlide = (
      <Slide style={skylineBg}>
        <Heading size={3}>Agenda</Heading>
        <List textAlign="center" margin="2em 0 0 0">
          <ListItem margin="0 0 1em 0">What is Virtual Reality (VR)?</ListItem>
          <ListItem margin="0 0 1em 0">How does it actually work?</ListItem>
          <ListItem margin="0 0 1em 0">What is React VR?</ListItem>
          <ListItem margin="0 0 1em 0">Dive into code/examples!</ListItem>
        </List>
      </Slide>
    );

    const whatIsVRSlide1 = (
      <Slide style={skylineBg}>
        <Heading size={6}>What is Virtual Reality (VR)?</Heading>
        <Text textSize=".8em" margin="auto auto 5em auto">
          <bold>Virtual Reality (VR)</bold> is a computer technology that uses Virtual reality headsets,
          to generate realistic images, sounds and other sensations that simulate a {"user's"} physical presence
          in a virtual environment.
        </Text>
        <Layout>
          <Fill>
            <Image width="70%" src={whatisvr.void} margin="0 auto 0 auto" />
          </Fill>
        </Layout>
      </Slide>
    );

    const whatIsVRSlide2 = (
      <Slide>
        <Heading size={6}>What is Virtual Reality (VR)?</Heading>
        <Layout>
          <Fill>
            <Text textSize=".8em" margin="auto auto 5em auto">
              <bold>VR</bold> has gone a long way. Brave companies already tried it in the {"80's"}!
              <br/>
              <br/>
              <br/>
              Crucial points are:
              <List textAlign="center">
                <ListItem textSize="1em" margin="0 0 .5em 0">Big field of view</ListItem>
                <ListItem textSize="1em" margin="0 0 .5em 0">Accurate/fast head tracking</ListItem>
                <ListItem textSize="1em" margin="0 0 .5em 0">High quality graphics/display</ListItem>
              </List>
            </Text>
          </Fill>
          <Fill>
            <Image width="90%" src={whatisvr.vrold2} margin="0 auto 0 auto" />
          </Fill>
        </Layout>
      </Slide>
    );

    const howVrWorks1 = (
      <Slide style={skylineBg}>
        <Heading size={6}>How VR works: Image output</Heading>
        <List textAlign="center">
          <ListItem margin="0 0 1em 0">We need two images, one for each eye</ListItem>
          <ListItem margin="0 0 1em 0">A very wide field of view (>= 90°)</ListItem>
          <ListItem margin="0 0 1em 0">Very high pixel density and refresh rate</ListItem>
        </List>
      </Slide>
    );

    const howVrWorks2 = (
      <Slide>
        <Heading size={6}>How VR works: Two images because...</Heading>
        <List textAlign="center">
          <ListItem margin="0 0 1em 0">We see the world from two slightly different angles - because we have two eyes with some space in-between</ListItem>
          <ListItem margin="0 0 1em 0">By taking care of this and generating these two separate images - we achieve a true stereoscopic 3D view of our virtual world!</ListItem>
        </List>
      </Slide>
    );

    const howVrWorks3 = (
      <Slide>
        <Heading size={6}>How VR works: Steoreoscopic 3D</Heading>
        <Image width="90%" src={howitworks.stereo} margin="0 auto 0 auto" />
      </Slide>
    );

    const howVrWorks4 = (
      <Slide>
        <Heading size={6}>How VR works: A wide field of view</Heading>
        <List textAlign="center">
          <ListItem margin="0 0 1em 0">To fill the entire field of view of a human being, a trick with lenses is used</ListItem>
          <ListItem margin="0 0 1em 0">The lense in between our eyes and the actual display is zooming into the image in a spherical effect</ListItem>
        </List>
      </Slide>
    );

    const howVrWorks5 = (
      <Slide>
        <Heading size={6}>How VR works: A wide field of view</Heading>
        <Layout>
          <Fill>
            <Image width="60%" src={howitworks.pincushion} margin="0 auto 0 auto" />
            <Text textSize=".8em" margin="auto auto 5em auto">
              Pincushion Effect (On the Lense)
            </Text>
          </Fill>
          <Fill>
            <Image width="60%" src={howitworks.barrel} margin="0 auto 0 auto" />
            <Text textSize=".8em" margin="auto auto 5em auto">
              Barrel Distortion (On the image)
            </Text>
          </Fill>
        </Layout>
        <Text textFont="monospace" margin="auto auto 5em auto">
          By having a barrel distortion on the image, the pincushion effect of the lense is normalized - we see a clear, un-distorted image again but it appears much closer now trough the lenses.
        </Text>
      </Slide>
    );

    const howVrWorks6 = (
      <Slide>
        <Heading size={6}>How VR works: High pixel density and refresh rate</Heading>
        <Layout>
          <Fill>
          <List textAlign="center">
            <ListItem textSize="1em" margin="0 0 1em 0">By using this zooming trick with lenses, a very high pixel density is needed</ListItem>
            <ListItem textSize="1em" margin="0 0 1em 0">Refresh rate is crucial too - optimum would be 120 Hz and an FPS of at least 90</ListItem>
            <ListItem textSize="1em" margin="0 0 1em 0">Even top-notch headsets like the Oculus Rift or HTC Vive are still having a visible grid between pixels</ListItem>
          </List>
          </Fill>
          <Fill>
            <Image width="80%" src={howitworks.density} margin="0 auto 0 auto" />
            <Text textSize=".8em" margin="auto auto 5em auto">
              Pixel density
            </Text>
          </Fill>
        </Layout>
      </Slide>
    );

    const howVrWorks7 = (
      <Slide>
        <Heading size={6}>How VR works: Accurate and fast head-tracking</Heading>
        <List textAlign="center">
          <ListItem textSize="1em" margin="0 0 1em 0">The headset must track the exact position of the {"user's"} head - to actively match the perspective of the generated images</ListItem>
          <ListItem textSize="1em" margin="0 0 1em 0">Modern headsets/smartphones achieve this with sensors like gyros, accelerometers and magnetometers</ListItem>
          <ListItem textSize="1em" margin="0 0 1em 0">From the input of the sensors to the output of the image, a latency of <bold>less than 3ms</bold> is needed or people will get motion sick!</ListItem>
        </List>
      </Slide>
    );

    const howVrWorks8 = (
      <Slide>
        <Heading size={6}>How VR works: Outlook</Heading>
        <Layout>
          <Fill>
            <List textAlign="center">
              <ListItem textSize="1em" margin="0 0 1em 0">The next level will be to improve the used displays in pixel density, and making headsets much more lightweight</ListItem>
              <ListItem textSize="1em" margin="0 0 1em 0">Also regarding body tracking there is much left to do for a perfect immersion.</ListItem>
              <ListItem textSize="1em" margin="0 0 1em 0">Tracking technologies like "kinect" are becoming very interesting</ListItem>
            </List>
          </Fill>
          <Fill>
            <Image width="80%" src={howitworks.oculus} margin="0 auto 0 auto" />
            <Text textSize=".8em" margin="auto auto 5em auto">
              Oculus Rift with Touch controllers
            </Text>

            <Image width="60%" src={howitworks.leap} margin="0 auto 0 auto" />
            <Text textSize=".8em" margin="auto auto 5em auto">
              Motion leap hand-tracking
            </Text>
          </Fill>
        </Layout>
      </Slide>
    );

    const howVrWorks9 = (
      <Slide>
        <Heading size={6}>How VR works: Platforms</Heading>
        <Layout>
          <Fill>
            <Image width="30%" src={howitworks.oculusVr} margin="0 auto 0 auto" />
            <Text textSize=".8em" margin="auto auto 5em auto" lineHeight="1.2em">
              Oculus VR; Oculus Rift only
            </Text>
          </Fill>
          <Fill>
            <Image width="30%" src={howitworks.steamVr} margin="0 auto 0 auto" />
            <Text textSize=".8em" margin="auto auto 5em auto" lineHeight="1.2em">
              Steam VR; HTC Vive only
            </Text>
          </Fill>
        </Layout>
        <Layout>
          <Fill>
            <Image width="30%" src={howitworks.osVr} margin="0 auto 0 auto" />
            <Text textSize=".8em" margin="auto auto 5em auto" lineHeight="1.2em">
              Open Source VR; Oculus & Vive and many others
            </Text>
          </Fill>
          <Fill>
            <Image width="30%" src={howitworks.webVr} margin="0 auto 0 auto" />
            <Text textSize=".8em" margin="auto auto 5em auto" lineHeight="1.2em">
              VR in the Browser! Works everywhere depending on OS and headset.
            </Text>
          </Fill>
        </Layout>
      </Slide>
    );

    const howVrWorks10 = (
      <Slide>
        <Heading size={6}>How VR works: WebVR</Heading>
        <Text textFont="monospace" textSize="1.2em" margin="auto auto 5em auto" lineHeight="1.2em">
          What is WebVR?
        </Text>
        <Text textSize=".8em" margin="auto auto 5em auto" lineHeight="1.2em">
          WebVR is an open standard that makes it possible to experience VR in your browser. The goal is to make it easier for everyone to get into VR experiences, no matter what device you have
        </Text>
        <Text textFont="monospace" textSize="1.2em" margin="auto auto 5em auto" lineHeight="1.2em">
          How do I experience WebVR?
        </Text>
        <Text textSize=".8em" margin="auto auto 5em auto" lineHeight="1.2em">
          You need two things to experience WebVR: a headset and a compatible browser.
        </Text>
        <br />
        <br />
        <Link href="https://webvr.info/">→ webvr.info</Link><br />
        <Link href="https://webvr.rocks/">→ webvr.rocks</Link>
      </Slide>
    );

    return (
      <Deck
        progress="none"
        theme={theme}
        transition={["fade"]}
        transitionDuration={500}
      >
        <Slide style={skylineBg}>
          <Image width="60%" src={images.logo} margin="0 auto 0 auto" />
          <Text textFont="monospace" textSize=".8em" margin="auto auto 5em auto">
            a talk by remo vetere
          </Text>
        </Slide>
        {agendaSlide}

        {whatIsVRSlide1}
        {whatIsVRSlide2}

        {howVrWorks1}
        {howVrWorks2}
        {howVrWorks3}
        {howVrWorks4}
        {howVrWorks5}
        {howVrWorks6}
        {howVrWorks7}
        {howVrWorks8}
        {howVrWorks9}
        {howVrWorks10}

        <Slide bgColor="white">
          {this.renderSponsorHeading("Presenting Sponsor")}
          <Image width="90%" src={images.logoFormidable} />
        </Slide>
        <Slide bgColor="white">
          {this.renderSponsorHeading("Diamond Sponsor")}
          <Image width="90%" src={images.logoMicrosoft} />
        </Slide>
        <Slide bgColor="white">
          {this.renderSponsorHeading("Platinum Sponsor")}
          <Image width="90%" src={images.logoAlexa} />
        </Slide>
        <Slide bgColor="white">
          {this.renderSponsorHeading("Gold Sponsor")}
          <Image width="50%" src={images.logoImdb} />
        </Slide>
        <Slide bgColor="white">
          {this.renderSponsorHeading("Silver Sponsors")}
          <Layout>
            <Fill>
              <Image style={sponsor} width="90%" src={images.logoZillow} />
              <Image style={sponsor} width="90%" src={images.logoGalvanize} />
            </Fill>
            <Fill>
              <Image style={sponsor} width="90%" src={images.logoAppSheet} />
              <Image style={sponsor} width="90%" src={images.logoGoDaddy} />
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="white">
          {this.renderSponsorHeading("Community Sponsors")}
          <Layout style={{ alignItems: "center" }}>
            <Fill>
              <Image style={sponsor} width="60%" src={images.logoNpm} />
            </Fill>
            <Fill>
              <Image style={sponsor} width="95%" src={images.logoSendGrid} />
            </Fill>
            <Fill>
              <Image style={sponsor} width="75%" src={images.logoIndeed} />
            </Fill>
          </Layout>
          <Layout style={{ alignItems: "center" }}>
            <Fill>
              <Image style={sponsor} width="80%" src={images.logoSitepen} />
            </Fill>
            <Fill>
              <Image style={sponsor} width="90%" src={images.logoOpenDoor} />
            </Fill>
            <Fill>
              <Image style={sponsor} width="60%" src={images.logoSheCodesNow} />
            </Fill>
          </Layout>
          <Layout>
            <Fill />
            <Fill>
              <Image style={sponsor} width="80%" src={images.logoUnbounce} />
            </Fill>
            <Fill />
          </Layout>
        </Slide>
      </Deck>
    );
  }
}
