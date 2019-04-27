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
    flisol: require('./assets/FLISoL-2015.png'),
    thonk: require('./assets/thonk.png'),
    gnuLinux: require('./assets/gnuLinux.jpg'),
    gnuLinus: require('./assets/gnuLinux.png'),
    richardDancing: require('./assets/richardDancing.gif'),
    tuxgun: require('./assets/tuxGun.png'),
    tux: require('./assets/tux.png'),
    avatarRender: require('./assets/avatarRender.jpg'),
    ibmBlueGene: require('./assets/ibmBlueGene.jpg'),
    blackhole: require('./assets/blackhole.jpg'),
    googleServers: require('./assets/googleServers.jpg'),
    android: require('./assets/android.png'),
    linuxnator: require('./assets/linuxnator.jpg'),
    windowsandlinux: require('./assets/windowsandlinux.jpg'),
    linuxsuperior: require('./assets/linuxSuperior.png'),
    linusdrunk: require('./assets/linusdrunk.jpg'),
    linusreal: require('./assets/linusreal.jpg'),
    windowsrefund: require('./assets/windowsrefund.jpg'),
    linuxdistro: require('./assets/linuxDistros.jpg'),
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
    nixos: require('./assets/nixos.png'),
    slackware: require('./assets/slackware.png'),
    void: require('./assets/void.png'),
    hannahmontana: require('./assets/hannahmontana.png'),
    ponyos: require('./assets/ponyos.png'),
    lfs: require('./assets/lfs.png'),
    bsd: require('./assets/bsd.png'),
    windows: require('./assets/windows.png'),
    mac: require('./assets/mac.png'),
    tuxnos: require('./assets/thanos.jpeg'),
    redhat: require('./assets/redhat.png'),
    suse: require('./assets/suse.png'),
    clear: require('./assets/clear.png'),
    oracleLinux: require('./assets/oracleLinux.png'),
    enterprise: require('./assets/enterprise.png'),
    avlinux: require('./assets/avlinux.png'),
    kxstudio: require('./assets/kxstudio.png'),
    parrot: require('./assets/parrot.png'),
    kali: require('./assets/kali.png'),
    blackbox: require('./assets/blackbox.jpg'),
    blackarch: require('./assets/blackarch.png'),
    ubuntustudio: require('./assets/ubuntustudio.png'),
    pepeUniverse: require('./assets/pepeUniverse.png'),
    gaben: require('./assets/gaben.jpg'),
    protonsteam: require('./assets/protonsteam.jpg'),
    pepeSad: require('./assets/pepeSad.png'),
    pepeSuicide: require('./assets/pepeSuicide.png'),
    linuxMasterRace: require('./assets/linuxMasterRace.png'),
    minecraftflisol: require('./assets/mineflisol.png'),
    orange: require('./assets/orange.gif'),
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

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              ¿Cómo se come Linux?
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" fit bold>
              por Jose Esparza
          </Text>
          <Text margin='10px 0 0' textColor='primary'>
              Universidad Privada del Norte<br/>
              Abril, 2019
          </Text>
            <Image src={images.flisol} width={300} />
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
            <Image src={ images.gnuLinux }/>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
            <Image src={ images.gnuLinus }/>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
            <Image src={ images.tuxgun }/>
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
                <Appear fid='6'>
                    <ListItem>Es soportado por miles de usuarios</ListItem>
                </Appear>
                <Appear fid='7'>
                    <ListItem>No es Windows</ListItem>
                </Appear>
            </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
            <Image src={ images.linuxnator }/>
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

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>es solo un pasatiempo, no será grande y profesional como GNU XDddDDDDDd</Quote>
            <Cite margin="10px 0 0 30px">Linus Torvalds <small>(Septiembre 25, 1991)</small></Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Image src={ images.tuxnos } />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
            <div style={{ paddingTop: '50px' }}>
                <img src={ images.avatarRender } width={'50%'} />
                <img src={ images.ibmBlueGene } width={'50%'}/>
                <img src={ images.android } width={'40%'}/>
                <img src={ images.googleServers } width={'55%'}/>
            </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
            <img src={ images.blackhole } height={800}/>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Image src={ images.windowsrefund } width={1000} />
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Heading size={1} textColor='tertiary' caps>
                ¿Entonces cómo comienzo?
            </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Image src={ images.linuxdistro } height={800} />
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Image src={ images.linuxsponge } width={1000} />
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Heading size={1} textColor='tertiary' caps>
                ¿Cuál puedo usar en casa?
            </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <div>
                <img src={ images.mint } width={200}/>
                <img src={ images.zorin } width={200}/>
                <img src={ images.gentoo } width={200}/>
                <img src={ images.void } width={240}/>
                <img src={ images.elementary } width={200}/>
                <img src={ images.opensuse } width={200}/>
                <img src={ images.fedora } width={200}/>
                <img src={ images.nixos } width={240}/>
                <img src={ images.arch } width={200}/>
                <img src={ images.debian } width={160}/>
                <img src={ images.manjaro } width={180}/>
                <img src={ images.ubuntu } width={200}/>
                <img src={ images.slackware } width={200}/>
                <img src={ images.centos } width={200}/>
                <img src={ images.tails } width={200}/>
                <img src={ images.solus } width={200}/>
            </div>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Heading size={6} textColor='tertiary' caps>
                Nivel noob
            </Heading>
            <div style={{ paddingTop: '50px' }}>
                <img src={ images.ubuntu } width={200}/>
                <img src={ images.elementary } width={200}/>
                <img src={ images.zorin } width={200}/>
                <img src={ images.mint } width={200}/>
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
                <img src={ images.opensuse } width={200}/>
            </div>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Heading size={6} textColor='tertiary' caps>
                Nivel avanzado
            </Heading>
            <div style={{ paddingTop: '50px' }}>
                <img src={ images.debian } width={160}/>
                <img src={ images.centos } width={200}/>
                <img src={ images.tails } width={200}/>
                <img src={ images.slackware } width={200}/>
            </div>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Heading size={6} textColor='tertiary' caps>
                Nivel legendario
            </Heading>
            <div style={{ paddingTop: '50px' }}>
                <img src={ images.arch } width={200}/>
                <img src={ images.gentoo } width={200}/>
                <img src={ images.void } width={240}/>
                <img src={ images.nixos } width={240}/>
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
            <Heading size={1} textColor='tertiary' caps>
                Otros usos
            </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Heading size={6} textColor='tertiary' caps>
                Para empresas
            </Heading>
            <div style={{ paddingTop: '50px' }}>
                <img src={ images.redhat } width={200}/>
                <img src={ images.suse } width={350}/>
                <img src={ images.clear } width={200}/>
            </div>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Image src={ images.enterprise }/>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Heading size={6} textColor='tertiary' caps>
                Edición de audio/video
            </Heading>
            <div style={{ paddingTop: '50px' }}>
                <img src={ images.kxstudio } width={200}/>
                <img src={ images.avlinux } width={200}/>
                <img src={ images.ubuntustudio } width={200}/>
            </div>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Heading size={6} textColor='tertiary' caps>
                Hacking/Pen-Testing
            </Heading>
            <div style={{ paddingTop: '50px' }}>
                <img src={ images.parrot } width={200}/>
                <img src={ images.blackbox } width={200}/>
                <img src={ images.kali } width={200}/>
                <img src={ images.blackarch } width={200}/>
            </div>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <img src={ images.pepeUniverse } width={700}/>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <img src={ images.pepeSad } width={700}/>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <img src={ images.pepeSuicide } width={700}/>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <img src={ images.gaben } width={600}/>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <img src={ images.protonsteam } width={600}/>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <img src={ images.linuxMasterRace } width={700}/>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <img src={ images.orange } width={700}/>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <img src={ images.minecraftflisol } width={700}/>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
            <Heading size={6} textColor='tertiary' caps>
                Entonces...
            </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary'>
            <Heading size={6} textColor='primary' caps>
                ¿Es Linux para mi?
            </Heading>
        </Slide>

      </Deck>
    );
  }
}
