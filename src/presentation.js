// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
    Text,
    Appear
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
    tux: require('./assets/tux.png'),
    thonk: require('./assets/thonk.png'),
    linuxnator: require('./assets/linuxnator.jpg'),
    windowsandlinux: require('./assets/windowsandlinux.jpg'),
    linuxsuperior: require('./assets/linuxSuperior.png'),
    linusdrunk: require('./assets/linusdrunk.jpg'),
    linusreal: require('./assets/linusreal.jpg'),
    windowsrefund: require('./assets/windowsrefund.jpg'),
    linuxdistro: require('./assets/linuxdistro.jpg'),
    linuxsponge: require('./assets/linuxsponge.png'),
    linuxtyping: require('./assets/linuxtyping.gif'),
    ubuntu: require('./assets/ubuntulogo.png'),
    elementary: require('./assets/elementary.svg'),
    zorin: require('./assets/zorin.png'),
    mint: require('./assets/mint.svg'),
    chakra: require('./assets/chakra.png'),
    fedora: require('./assets/fedora.png'),
    solus: require('./assets/solus.png'),
    manjaro: require('./assets/manjaro.png'),
    endless: require('./assets/endless.png'),
    debian: require('./assets/debian.png'),
    opensuse: require('./assets/opensuse.png'),
    centos: require('./assets/centos.png'),
    tails: require('./assets/tails.png'),
    arch: require('./assets/arch.png'),
    gentoo: require('./assets/gentoo.png'),
    slackware: require('./assets/slackware.png'),
    void: require('./assets/void.png'),
    hannahmontana: require('./assets/hannahmontana.png'),
    ponyos: require('./assets/ponyos.png'),
    lfs: require('./assets/lfs.png'),
    bsd: require('./assets/bsd.png'),
    windows: require('./assets/windows.png'),
    mac: require('./assets/mac.png'),
    distrolist: require('./assets/distrolist.png')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#FF8E2A',
    quaternary: '#CECECE'
  },
  {
    primary: 'Fira Sans',
    secondary: 'Overpass'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
          progress='pacman'
      >

        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
              ¿Cómo se come Linux?
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" fit bold>
              por Jose Esparza
          </Text>
          <Text margin='10px 0 0' textColor='primary'>
              Universidad Privada del Norte<br/>
              Abril, 2019
          </Text>
            <Image src={images.tux} width={300} />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
            <Heading size={6} textColor='tertiary' caps>
                Preguntas Frecuentes
            </Heading>
            <List>
                <Appear fid='1'>
                    <ListItem>¿Necesito tener conocimiento previo para entender lo que mostrarás?</ListItem>
                </Appear>
                <Appear fid='2'>
                    <ListItem>¿Es Linux solo para hackers?</ListItem>
                </Appear>
                <Appear fid='3'>
                    <ListItem>¿Sabiendo Linux puedo ser hacker?</ListItem>
                </Appear>
                <Appear fid='4'>
                    <ListItem>¿Esta es una charla para rajar sobre Windows?</ListItem>
                </Appear>
                <Appear fid='5'>
                    <ListItem>¿Se puede jugar Fortnite?</ListItem>
                </Appear>
            </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
            <Image src={ images.thonk }/>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
            <Image src={ images.linuxnator }/>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
            <Image src={ images.windowsandlinux }/>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
            <Image src={ images.linuxsuperior }/>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Heading size={1} textColor='tertiary' caps>
                ¿Por qué Linux es tan importante?
            </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Image src={ images.linusdrunk } width={1000}/>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Image src={ images.linusreal } />
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Image src={ images.windowsrefund } width={1000} />
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Image src={ images.linuxdistro } width={1000} />
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Heading size={6} textColor='tertiary' caps>
                ¿Por qué utilizar Linux?
            </Heading>
            <List>
                <Appear fid='1'>
                    <ListItem>Es rápido</ListItem>
                </Appear>
                <Appear fid='2'>
                    <ListItem>Es seguro</ListItem>
                </Appear>
                <Appear fid='3'>
                    <ListItem>Es gratis</ListItem>
                </Appear>
                <Appear fid='4'>
                    <ListItem>Es modificable</ListItem>
                </Appear>
                <Appear fid='5'>
                    <ListItem>Es redistributable</ListItem>
                </Appear>
                <Appear fid='5'>
                    <ListItem>Es soportado por millones de usuarios</ListItem>
                </Appear>
                <Appear fid='5'>
                    <ListItem>Es modular</ListItem>
                </Appear>
                <Appear fid='5'>
                    <ListItem>No es Windows</ListItem>
                </Appear>
            </List>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Image src={ images.linuxsponge } width={1000} />
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Heading size={1} textColor='tertiary' caps>
                ¿Qué distro de Linux es para mí?
            </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Heading size={6} textColor='tertiary' caps>
                Nivel noob
            </Heading>
            <div style={{ paddingTop: '50px' }}>
                <img src={ images.ubuntu } width={200}/>
                <img src={ images.elementary } width={200}/>
                <img src={ images.zorin } width={200}/>
                <img src={ images.endless } width={200}/>
            </div>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Heading size={6} textColor='tertiary' caps>
                Nivel intermedio
            </Heading>
            <div style={{ paddingTop: '50px' }}>
                <img src={ images.fedora } width={200}/>
                <img src={ images.solus } width={200}/>
                <img src={ images.manjaro } width={180}/>
                <img src={ images.mint } width={200}/>
            </div>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Heading size={6} textColor='tertiary' caps>
                Nivel avanzado
            </Heading>
            <div style={{ paddingTop: '50px' }}>
                <img src={ images.debian } width={160}/>
                <img src={ images.opensuse } width={200}/>
                <img src={ images.centos } width={200}/>
                <img src={ images.tails } width={200}/>
            </div>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Heading size={6} textColor='tertiary' caps>
                Nivel legendario
            </Heading>
            <div style={{ paddingTop: '50px' }}>
                <img src={ images.arch } width={200}/>
                <img src={ images.gentoo } width={200}/>
                <img src={ images.slackware } width={200}/>
                <img src={ images.void } width={240}/>
            </div>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Heading size={6} textColor='tertiary' caps>
                Nivel dios
            </Heading>
            <div style={{ paddingTop: '50px' }}>
                <img src={ images.hannahmontana } width={200}/>
                <img src={ images.ponyos } width={200}/>
                <img src={ images.lfs } width={200}/>
            </div>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Heading size={6} textColor='tertiary' caps>
                Menciones Honorables
            </Heading>
            <div style={{ paddingTop: '50px' }}>
                <img src={ images.bsd } width={200}/>
                <img style={{ paddingLeft: '10px', paddingRight: '10px' }} src={ images.windows } width={150}/>
                <img src={ images.mac } width={200}/>
            </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin="10px 0 0 30px">Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={images.goodWork} width={500} />
          <Notes>gifs work too</Notes>
        </Slide>
      </Deck>
    );
  }
}
