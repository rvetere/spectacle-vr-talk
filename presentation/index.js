// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
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
  Text,
  CodePane
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

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
  vrold2: require("../assets/whatisvr/vr-old2.jpg"),
  oculus: require("../assets/whatisvr/oculus.png"),
  gear: require("../assets/whatisvr/gear-vr.png")
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

const advanced = {
  one: require("../assets/advanced/one.gif"),
  two: require("../assets/advanced/two.jpg")
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

    const agendaSlide = (
      <Slide>
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
      <Slide>
        <Heading size={6}>What is Virtual Reality (VR)?</Heading>
        <Text textSize=".8em" lineHeight="1.4em" margin="auto auto 5em auto">
          <strong>Virtual Reality (VR)</strong> is a computer technology that uses Virtual reality headsets,
          to generate realistic images, sounds and other sensations that simulate a {"user's"} physical presence
          in a virtual environment.
        </Text>
        <Layout>
          <Fill>
            <Appear>
              <Image width="70%" src={whatisvr.void} margin="0 auto 0 auto" />
            </Appear>
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
              <strong>VR</strong> has gone a long way. Few companies already tried it in the {"80's"}!
              <br />
              <br />
              <br />
            </Text>

            <Appear>
              <Text textFont="monospace" textSize=".8em" margin="auto auto 5em auto">
                The biggest challenges:
              </Text>
            </Appear>

            <List textAlign="center">
              <Appear><ListItem textSize="1em" margin="0 0 .5em 0">A wide field of view</ListItem></Appear>
              <Appear><ListItem textSize="1em" margin="0 0 .5em 0">Accurate/fast head tracking</ListItem></Appear>
              <Appear><ListItem textSize="1em" margin="0 0 .5em 0">High quality graphics/display</ListItem></Appear>
            </List>
          </Fill>
          <Fill>
            <Image width="90%" src={whatisvr.vrold1} margin="0 auto 0 auto" />
          </Fill>
        </Layout>
      </Slide>
    );

    const whatIsVRSlide3 = (
      <Slide>
        <Heading size={6}>What is Virtual Reality (VR)?</Heading>
        <Layout>
          <Fill>
            <Image width="90%" src={whatisvr.oculus} margin="0 auto 0 auto" />
          </Fill>
          <Fill>
            <Image width="90%" src={whatisvr.gear} margin="0 auto 0 auto" />
          </Fill>
        </Layout>
      </Slide>
    );

    const howVrWorks1 = (
      <Slide>
        <Heading size={6}>How VR works: Image output</Heading>
        <List textAlign="center">
          <ListItem margin="0 0 1em 0">We need two images, one for each eye</ListItem>
          <Appear><ListItem margin="0 0 1em 0">A very wide field of view (>= 90°)</ListItem></Appear>
          <Appear><ListItem margin="0 0 1em 0">Very high pixel density and refresh rate</ListItem></Appear>
        </List>
      </Slide>
    );

    const howVrWorks2 = (
      <Slide>
        <Heading size={6}>How VR works: Two images because...</Heading>
        <List textAlign="center">
          <ListItem margin="0 0 1em 0">We see the world trough two eyes, having a brain combining these two images together</ListItem>
          <Appear><ListItem margin="0 0 1em 0">This is giving us a <strong>stereoscopic 3D view</strong>, we can actually see or feel <strong>depth</strong></ListItem></Appear>
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
          <Appear><ListItem margin="0 0 1em 0">The lense in between our eyes and the actual display is zooming into the image in a spherical effect</ListItem></Appear>
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
          <Appear>
          <Fill>
            <Image width="60%" src={howitworks.barrel} margin="0 auto 0 auto" />
            <Text textSize=".8em" margin="auto auto 5em auto">
              Barrel Distortion (On the image)
            </Text>
          </Fill>
          </Appear>
        </Layout>
      </Slide>
    );

    const howVrWorks6 = (
      <Slide>
        <Heading size={6}>How VR works: High pixel density and refresh rate</Heading>
        <Layout>
          <Fill>
          <List textAlign="center">
            <ListItem textSize="1em" margin="0 0 1em 0">Zooming into the picture with lenses is bad for quality</ListItem>
            <Appear><ListItem textSize="1em" margin="0 0 1em 0">Refresh rate optimum is 120 Hz and at least 90 FPS</ListItem></Appear>
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
          <ListItem textSize="1em" margin="0 0 1em 0">The headset must track the exact position of the {"user's"} head</ListItem>
          <Appear><ListItem textSize="1em" margin="0 0 1em 0">A pixel persistency of <strong>less than 3ms</strong> is needed or people will get motion sick!</ListItem></Appear>
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
          WebVR is an open standard that makes it possible to experience VR in your browser.
        </Text>

        <Appear>
          <Text textFont="monospace" textSize="1.2em" margin="auto auto 5em auto" lineHeight="1.2em">
            How do I experience WebVR?
          </Text>
        </Appear>
        <Appear>
          <Text textSize=".8em" margin="auto auto 5em auto" lineHeight="1.2em">
            A headset and a compatible browser.
          </Text>
        </Appear>
        <br />
        <br />
        <Link href="https://webvr.info/">→ webvr.info</Link><br />
        <Link href="https://webvr.rocks/">→ webvr.rocks</Link>
      </Slide>
    );

    const reactVRSlide1 = (
      <Slide>
        <Heading size={6}>What is React VR?</Heading>
        <Quote textSize=".8em" lineHeight="2em" margin="2em auto 2em auto">
          React VR lets you build VR apps using only JavaScript. It uses the same design as React, letting you compose a rich VR world and UI from declarative components.
        </Quote>
        <List textAlign="center">
          <Appear><ListItem textSize="1em" margin="0 0 1em 0">It comes with a handy command line tool 😍 <strong>npm i -g react-vr-cli</strong></ListItem></Appear>
          <Appear><ListItem textSize="1em" margin="0 0 1em 0">Create a new project by simply running <strong>react-vr init WelcomeToVR</strong></ListItem></Appear>
        </List>
      </Slide>
    );

    const reactVRSlide2 = (
      <CodeSlide
        transition={["fade"]}
        lang="jsx"
        textSize=".6em"
        code={require("raw-loader!../assets/code/welcome-example")}
        ranges={[
          { loc: [0, 36], title: "index.vr.js" },
          { loc: [0, 1], title: "Importing React" },
          { loc: [1, 10], title: "Import custom components of React VR" },
          { loc: [11, 34], title: "The render method" },
          { loc: [15, 16], title: "Panorama Image Background (Skybox)", note: "equirectangular images and videos are supported 💪" },
          { loc: [16, 30], title: "A 3D Text Object" },
          { loc: [35, 36], title: "Finally register the app", note: "React Native is used internally to bundle everything 📦" }
        ]}
      />
    );

    const reactVRSlide3 = (
      <CodeSlide
        transition={["fade"]}
        lang="jsx"
        textSize=".6em"
        code={require("raw-loader!../assets/code/welcome-index-html")}
        ranges={[
          { loc: [0, 21], title: "index.html" },
          { loc: [8, 9], title: "Import client.js" },
          { loc: [11, 18], title: "Call init method of ReactVR" }
        ]}
      />
    );

    const reactVRSlide4 = (
      <CodeSlide
        transition={["fade"]}
        lang="jsx"
        textSize=".6em"
        code={require("raw-loader!../assets/code/welcome-client-js")}
        ranges={[
          { loc: [0, 21], title: "client.js" },
          { loc: [8, 9], title: "Instantiate your vr application" },
          { loc: [16, 17], title: "Startup the application" },
          { loc: [0, 21], title: "What is the output?" }
        ]}
      />
    );

    const advancedVRSlide1 = (
      <CodeSlide
        transition={["fade"]}
        lang="jsx"
        textSize=".6em"
        code={require("raw-loader!../assets/code/advanced-index")}
        ranges={[
          { loc: [0, 21], title: "Advanced example - index.vr.js" },
          { loc: [13, 18], title: "Custom components" },
          { loc: [125, 157] }
        ]}
      />
    );

    const advancedVRSlide2 = (
      <CodeSlide
        transition={["fade"]}
        lang="jsx"
        textSize=".6em"
        code={require("raw-loader!../assets/code/advanced-world")}
        ranges={[
          { loc: [0, 12], title: "components/World.js" },
          { loc: [10, 39] }
        ]}
      />
    );

    const advancedVRSlide3 = (
      <CodeSlide
        transition={["fade"]}
        lang="jsx"
        textSize=".6em"
        code={require("raw-loader!../assets/code/advanced-asteroid")}
        ranges={[
          { loc: [0, 12], title: "components/Asteroid01.js" },
          { loc: [7, 11], title: "Local state to handle animation" },
          { loc: [14, 21], title: "The actual animation implementation" },
          { loc: [24, 26], title: "Start the animation for x and y axis" },
          { loc: [32, 40], title: "Animated.View helper of React VR" },
          { loc: [40, 50], title: "Mesh helper to actually load 3D models", note: "React VR supports .obj (object) and .mtl (material) file formats to handle 3D models ☝️" }
        ]}
      />
    );

    const advancedVRSlide4 = (
      <CodeSlide
        transition={["fade"]}
        lang="jsx"
        textSize=".6em"
        code={require("raw-loader!../assets/code/advanced-index")}
        ranges={[
          { loc: [125, 157] },
          { loc: [130, 142], title: "Placing the cockpit statically" },
          { loc: [143, 155], title: "Moving the whole world around us" },
          { loc: [45, 55], title: "Endless animation loop", note: "We (the camera) and our cockpit are continuously flying trough space 🎉" }
        ]}
      />
    );

    const advancedVRSlide5 = (
      <Slide>
        <Heading size={6}>React VR: Buttons</Heading>
        <Image width="100%" src={advanced.one} margin="0 auto 0 auto" />
      </Slide>
    );

    const advancedVRSlide6 = (
      <Slide>
        <Heading size={6}>React VR: Buttons</Heading>
        <Image width="100%" src={advanced.two} margin="0 auto 0 auto" />
      </Slide>
    );

    const advancedVRSlide7 = (
      <CodeSlide
        transition={["fade"]}
        lang="jsx"
        textSize=".6em"
        code={require("raw-loader!../assets/code/advanced-cockpit")}
        ranges={[
          { loc: [0, 12], title: "components/Cockpit.js" },
          { loc: [21, 40], title: "Placing the move-left, move-right buttons" },
          { loc: [40, 58] },
          { loc: [60, 70], title: "Loading cockpit object + material" }
        ]}
      />
    );

    const advancedVRSlide8 = (
      <CodeSlide
        transition={["fade"]}
        lang="jsx"
        textSize=".6em"
        code={require("raw-loader!../assets/code/advanced-index")}
        ranges={[
          { loc: [86, 95], title: "When we hover a button" },
          { loc: [34, 42] },
          { loc: [57, 80] }
        ]}
      />
    );

    const resources = (
      <Slide>
        <Heading size={6}>Resources</Heading>
        <List textAlign="center">
          <ListItem textSize="1em" margin="0 0 1em 0"><Link href="https://facebook.github.io/react-vr/docs/getting-started.html">→ Official Documentation</Link></ListItem>
          <ListItem textSize="1em" margin="0 0 1em 0"><Link href="https://www.pluralsight.com/guides/front-end-javascript/getting-started-with-react-vr">→ "Earth & Moon" demo app and tutorial</Link></ListItem>
          <ListItem textSize="1em" margin="0 0 1em 0"><Link href="https://www.flickr.com/search/?text=equirectangular">→ Flickr "equirectangular"</Link></ListItem>
          <ListItem textSize="1em" margin="0 0 1em 0"><Link href="https://free3d.com/">→ Free 3D</Link></ListItem>
          <ListItem textSize="1em" margin="0 0 1em 0"><Link href="http://smus.com/vr-lens-distortion/">→ VR Lens Distortion</Link></ListItem>
          <ListItem textSize="1em" margin="0 0 1em 0"><Link href="https://egghead.io/courses/build-virtual-reality-experiences-using-react-vr">→ egghead.io course by Nik Graf</Link></ListItem>
        </List>
      </Slide>
    );

    const theEnd = (
      <Slide style={skylineBg}>
        <Appear><Heading size={1}>Fin</Heading></Appear>
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
        </Slide>
        {agendaSlide}

        {whatIsVRSlide1}
        {whatIsVRSlide2}
        {whatIsVRSlide3}

        {howVrWorks1}
        {howVrWorks2}
        {howVrWorks3}
        {howVrWorks4}
        {howVrWorks5}
        {howVrWorks6}
        {howVrWorks7}
    {/*
      {howVrWorks8}
    */}
        {howVrWorks9}
        {howVrWorks10}

        {reactVRSlide1}
        {reactVRSlide2}
        {reactVRSlide3}
        {reactVRSlide4}

        {advancedVRSlide1}
        {advancedVRSlide2}
        {advancedVRSlide3}
        {advancedVRSlide4}
        {advancedVRSlide5}
        {advancedVRSlide6}
        {advancedVRSlide7}

        {theEnd}
      </Deck>
    );
  }
}
