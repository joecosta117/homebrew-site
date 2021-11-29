import SwordmageImage from '../../assets/swordmage2.jpg';
import BoneDevil from '../../assets/bone-devil.jpeg';
import InfernalLinnorm from '../../assets/infernal-linnorm.jpeg';
import DarknessDevil from '../../assets/darkness-devil2.jpeg';
import Tieflings from '../../assets/tieflings.jpeg';
import Warforged from '../../assets/warforged.jpeg';
import Dragonborn from '../../assets/dragonborn.jpeg';
import Warlord from '../../assets/warlord.jpeg';
import Avenger from '../../assets/avenger.jpeg';
import WildMagic from '../../assets/wild-magic.jpeg';
import Tiamat from '../../assets/tiamat.jpeg';
import CelestialDragon from '../../assets/celestial-dragons.jpeg';
import HelmOfHeroes from '../../assets/helm-of-heroes.jpeg';
import Spells from '../../assets/spells.jpeg';

export interface contentInfoType {
  name: string,
  description?: string,
  image: string,
  url: string,
}

export interface contentType {
  classes: Array<contentInfoType>;
  // subclasses?: Array<contentInfoType>;
  monsters?: Array<contentInfoType>;
  races?: Array<contentInfoType>;
  ancestries?: Array<contentInfoType>;
  archetypes?: Array<contentInfoType>;
  spells?: Array<contentInfoType>;
  systems?: Array<contentInfoType>;
  items?: Array<contentInfoType>;
}

export interface contentDataType {
  dnd: contentType,
  pf: contentType,
}

const contentData: contentDataType = {
  dnd: {
    classes: [
      {
        name: 'Swordmage',
        description: 'Play as a spellsword, an arcane warrior that blends magic with their attacks. Including 10 subclasses, 30+ new spells, alternative class features, and a magic item!',
        image: SwordmageImage,
        url: 'https://drive.google.com/file/d/1KWSho7fX15UvoZPq5OGINJeX-fgTdsen/view?usp=sharing'
      }
    ],
    monsters: [
      {
        name: 'Celestial Dragon',
        description: 'The heavenly servants of Bahamut, the noble dragon god, the celestial dragons inspire the righteous in their battle against the forces of the darkness.',
        image: CelestialDragon,
        url: 'https://drive.google.com/file/d/1wSX727Zlv2VdLYT4B0fVnsuEqhCCFCUZ/view?usp=sharing',
      },
      {
        name: 'Darkness Devil',
        description: 'Shadowy and cruel fiends, darkness devils are assassins of the Nine Hells. Archdevils send darkness devils to kill their foes, whether other devils, demons, or mortals.',
        image: DarknessDevil,
        url: 'https://drive.google.com/file/d/1JTNum2hCOCZxzEMclSDX2tkyAkZqGK9W/view?usp=sharing',
      },
      {
        name: 'Infernal Linnorm',
        description: 'Infernal linnorms are lava swimming devils that resemble wingless dragons. These hellish linnorms have three separate statblocks divided by age: young, mature, and elder.',
        image: InfernalLinnorm,
        url: 'https://drive.google.com/file/d/1pzxFy6wt9O_Blmr5lYr1vjA55QU28ajF/view?usp=sharing',
      },
      {
        name: 'Lesser Bone Devil',
        description: 'A lower power level version of the offical Bone Devil, but also more dynamic. A lesser bone devil could be a good boss against a lower level party!',
        image: BoneDevil,
        url: 'https://drive.google.com/file/d/16oaWXSOsCNUnRn3mkryck1MkdxyP07ek/view?usp=sharing',
      }
    ],
    races: [
      {
        name: 'Tiefling Variants',
        description: 'More options for players looking to play fiendish tieflings such as mortals descended from tricky rakshasa or cruel yugoloth. There are also options to play a tiefling tied to the chaotic demons of the Abyss with subraces for 10 demon lords!',
        image: Tieflings,
        url: 'https://drive.google.com/file/d/1JOKOj3WHrF8W9A4nWhbnlh79NxpGxzPq/view?usp=sharing',
      }
    ],
    spells: [
      {
        name: 'Dragon Spells',
        description: 'Transform your hands into elemental claws, blast back foes with dragon wings, call forth the holy magic of celestial dragons, or harness the destructive power of chromatic dragons!',
        image: Spells,
        url: 'https://drive.google.com/file/d/1pgjd5HT1k-M_-1Bg5nvSYVrPrH6IVSAq/view?usp=sharing',
      }
    ],
    systems: [
      {
        name: '10 New Conditions',
        description: 'Surprise your players with these new conditions for 5E. Throw them on monsters, create new magical items, and let your imagination run wild!',
        image: DarknessDevil,
        url: 'https://drive.google.com/file/d/1KgsCKktqnMsD5rFNt8Dh8Q7li7ZIz6rD/view?usp=sharing',
      }
    ],
    items: [
      {
        name: 'Relics of the Dragon Gods Part 1',
        description: 'The mighty dragons god have created powerful artifacts to reward their mortal followers. In part 1, discover the terrible power of the first three Chromatic Relics: Fiery Wrath, Dread Stalker, and White Fang!',
        image: Tiamat,
        url: 'https://drive.google.com/file/d/1wXSyHdpiWlelIs4-x-cZut_ItyvscnlN/view?usp=sharing',
      },
      {
        name: 'Relics of the Dragon Gods Part 2',
        description: 'The mighty dragons god have created powerful artifacts to reward their mortal followers. In part 2, discover the terrible power of the remaining two Chromatic Relics: Storm Maker and Cunning Lair!',
        image: Tiamat,
        url: 'https://drive.google.com/file/d/1DUH910mMisZXoL_Q8t470RLrh4FEdtfw/view?usp=sharing',
      },
      {
        name: 'Relics of the Dragon Gods Part 3',
        description: 'The mighty dragons god have created powerful artifacts to reward their mortal followers. In part 3, discover the majestic power of the Helm of Heroes and the holy Celestial Dragons!',
        image: HelmOfHeroes,
        url: 'https://drive.google.com/file/d/1428xqEjin1LyRAS0_iCZqIDVdwTz2C-c/view?usp=sharing',
      }
    ]
  },
  pf: {
    classes: [
      {
        name: 'Avenger',
        description: 'Play as a nimble warrior that hunts down the enemies of your faith. The champion is the shield of your god, but you are their weapon. Including five different subclasses, nearly 80 class feats, and a multiclass dedication archetype!',
        image: Avenger,
        url: 'https://drive.google.com/file/d/1zp5L3KeHmc6515CG4bz4FbXgxC4K4206/view?usp=sharing',
      },
      {
        name: 'Warlord',
        description: 'Play as a commander, a martial class focusing on supporting your allies through tactics, cunning stratagems, or your inspiring presence. Including five different subclasses, nearly 80 class feats, and a multiclass dedication archetype!',
        image: Warlord,
        url: 'https://drive.google.com/file/d/1GoeY2y8alwX3Apr3joGMkD9uGsl2Rv_k/view?usp=sharing',
      },
    ],
    archetypes: [
      {
        name: 'Bloodcaster',
        description: 'Play as a terrifying blood bender that can manipulates the vitality of others. This spooky archetype can be used by any caster class to give your character access to darker necromantic magic.',
        image: 'https://cdnb.artstation.com/p/assets/images/images/030/002/237/medium/cristi-balanescu-znr-blood-beckoning.jpg?1599291741',
        url: 'https://drive.google.com/file/d/1nXHtElxuGrK9_NQccyBsVJWgzKTSqWKc/view?usp=sharing',
      },
      {
        name: 'Eldritch Scion',
        description: 'Play as a Magus whose power comes from a powerful magical bloodline much like a Sorcerer. This class archetype transforms the Magus into a charismatic, spontaneous spellcaster!',
        image: SwordmageImage,
        url: 'https://drive.google.com/file/d/1I5WM3cSsKsDDGLBMdvTrqtuRkhANefGB/view?usp=sharing',
      },
      {
        name: 'Wild Magic Sorcerer',
        description: 'Your innate magic comes from the forces of chaos, such as magical experimentation or being marked by a creature of chaos. Play as an arcane sorcerer that commands unpredictable magic!',
        image: WildMagic,
        url: 'https://drive.google.com/file/d/1jh9j_VMtgTyqn3c6ru6ZzB5q7VdaV0eF/view?usp=sharing',
      }
    ],
    ancestries: [
      {
        name: 'Dragonborn',
        description: 'As proud as their larger cousins, dragonborn are draconic humanoids. Much like the smaller kobolds, dragonborn can tap into the magic of dragons from breathing elemental energy to eventually transforming into a powerful dragon.',
        image: Dragonborn,
        url: 'https://drive.google.com/file/d/1vaZc4kcjBztg7dPOrUWGNeXIXwn5bNug/view?usp=sharing',
      },
      {
        name: 'Warforged',
        description: 'Play a warforged, a sentient construct built out of a combination of wood and metal. Originally constructed as durable soldiers, warforged are not mindless automatons, but instead sentient creatures capable of feeling pain and complex emotion.',
        image: Warforged,
        url: 'https://drive.google.com/file/d/1PHhgyhQk1tFs06TX7V99X00P5ky-smYc/view?usp=sharing',
      }
    ],
    items: [
      {
        name: 'Relics of the Dragon Gods Part 1',
        description: 'The mighty dragons god have created powerful artifacts to reward their mortal followers. In part 1, discover the terrible power of the first three Chromatic Relics: Fiery Wrath, Dread Stalker, and White Fang!',
        image: Tiamat,
        url: 'https://drive.google.com/file/d/1uIPBCdvD5-EbJ2WxB9S5JS6j4LtYOmlP/view?usp=sharing',
      },
      {
        name: 'Relics of the Dragon Gods Part 2',
        description: 'The mighty dragons god have created powerful artifacts to reward their mortal followers. In part 2, discover the terrible power of the remaining two Chromatic Relics: Storm Maker and Cunning Lair!',
        image: Tiamat,
        url: 'https://drive.google.com/file/d/1uca_Y8geRUtNf4Waovq1iMHCmYI8z2r3/view?usp=sharing',
      },
      {
        name: 'Relics of the Dragon Gods Part 3',
        description: 'The mighty dragons god have created powerful artifacts to reward their mortal followers. In part 3, discover the majestic power of the Helm of Heroes and the holy Celestial Dragons!',
        image: HelmOfHeroes,
        url: 'https://drive.google.com/file/d/1uca_Y8geRUtNf4Waovq1iMHCmYI8z2r3/view?usp=sharing',
      }
    ],
    monsters: [
      {
        name: 'Celestial Dragons',
        description: 'The heavenly servants of Apsu, the noble dragon god, the celestial dragons inspire the righteous in their battle against the forces of the darkness.',
        image: CelestialDragon,
        url: 'https://drive.google.com/file/d/1ZA0e8jmHF07gvtVjBn53ro-XCFSpF4fF/view?usp=sharing'
      }
    ],
    spells: [
      {
        name: '',
        description: '',
        image: '',
        url: '',
      }
    ],
  }
}

export default contentData;
