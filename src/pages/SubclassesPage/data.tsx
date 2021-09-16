import barbarian from '../../assets/barbarian.jpeg';
import cleric from '../../assets/cleric.jpeg';
import fighter from '../../assets/fighter.jpeg';
import paladin from '../../assets/paladin.jpeg';
import rogue from '../../assets/rogue.jpeg';
import sorcerer from '../../assets/sorcerer.jpeg';
import warlock from '../../assets/warlock.jpeg';

export interface subclassesArrayType {
  class: string,
  subclasses: Array<subclassObjectType>,
  image: string
}

export interface subclassObjectType {
  title: string,
  description: string,
  link: string
}

const subclassData: Array<subclassesArrayType> = [
  {
    class: 'Barbarian',
    subclasses: [
      {
        title: 'Path of the Dragon',
        description: 'Channel the mighty power of dragons to crush your foes.',
        link: 'https://drive.google.com/file/d/1yc-DbY0DB2NGU-fbpGbEJriAL7OoLO9v/view?usp=sharing'
      },
      {
        title: 'Path of the Monster',
        description: 'Unleash your inner monster to terrify your enemies.',
        link: 'https://drive.google.com/file/d/1VIoDHg669TEA0RKUV8Lxb2HX9SLsXA3m/view?usp=sharing'
      }
    ],
    image: barbarian
  },
  {
    class: 'Cleric',
    subclasses: [
      {
        title: 'Darkness Domain',
        description: 'The divine power of cunning and secretive deities empowers you in the darkness of nights.',
        link: 'https://drive.google.com/file/d/1Yot8XXzSbGaUStzTSfYqs6NhrPKKkE5t/view?usp=sharing'
      },
      {
        title: 'Dragon Domain',
        description: 'Worship the mighty dragon gods in all their majesty and glory.',
        link: 'https://drive.google.com/file/d/1nGeldxMGZ3VSYJEwHu3GVeGQKoNGbCw8/view?usp=sharing'
      }
    ],
    image: cleric
  },
  {
    class: 'Fighter',
    subclasses: [
      {
        title: 'Slayer',
        description: 'Use your knowledge and tracking skills to become the ultimate monster hunter.',
        link: 'https://drive.google.com/file/d/1zXL1Qcl-qQF0-BpZ1nuBp7TidykLf_WH/view?usp=sharing'
      },
    ],
    image: fighter
  },
  {
    class: 'Paladin',
    subclasses: [
      {
        title: 'Oath of Intrigue',
        description: 'A believer of rebellion and subterfgue, you have sworn to serve your cause through cunning and guile.',
        link: 'https://drive.google.com/file/d/1vRM6VPGGQ91LV04nKnESiu907tHJtAyq/view?usp=sharing'
      },
    ],
    image: paladin
  },
  {
    class: 'Rogue',
    subclasses: [
      {
        title: 'Divine Operative',
        description: 'You are the secretive agent of your deity that reclaims lost holy relics and slays enemies of your faith.',
        link: 'https://drive.google.com/file/d/1UuGvkug6aq60CqlE9AvTen9KWVFGrUWA/view?usp=sharing'
      },
      {
        title: 'Shadowmancer',
        description: 'Summon the umbral shades of the Shadowfell to aid in your dark deeds.',
        link: 'https://drive.google.com/file/d/1FxqUEJO_7KXR-8ohYwQZx6IUhTBR_wM3/view?usp=sharing'
      }
    ],
    image: rogue
  },
  {
    class: 'Sorcerer',
    subclasses: [
      {
        title: 'Arcane Conduit',
        description: 'Unleash and control the raw magic that courses through your body.',
        link: 'https://drive.google.com/file/d/1Fj6lRJmdn40ZwNcAie_43JR7FVpajM5W/view?usp=sharing'
      },
      {
        title: 'Fey Blood',
        description: 'Through your attunement to the Feywild, the mind and nature altering magic of the fey is at your fingertips.',
        link: 'https://drive.google.com/file/d/1o-8JYUbXPdiUwNGO9usGur51CxQBCR3h/view?usp=sharing'
      },
      {
        title: 'Fiend Blood',
        description: 'The evil of the underworld taints you with powerful but destructive power.',
        link: 'https://drive.google.com/file/d/1Wl3F68HJMJrc3NqcRf_moYTWw17RX-Xa/view?usp=sharing'
      },
      {
        title: 'Royal Blood',
        description: 'Your lineage traces back to legendary magical monarchies of past ages, and like them, you are destined to rule.',
        link: 'https://drive.google.com/file/d/10idzu1FQQaFMt7oFe4TsHO4G5bCQZN_R/view?usp=sharing'
      }
    ],
    image: sorcerer
  },
  {
    class: 'Warlock',
    subclasses: [
      {
        title: 'Pact of the Armor',
        description: 'Your patron gifts you with a magical armor that protects you from harm and enhances your physicality.',
        link: 'https://drive.google.com/file/d/17goEeIWsaAdtgAdQLiXKz4ln77R-Ynn2/view?usp=sharing'
      },
      {
        title: 'The Cosmos',
        description: 'You have made a pact with an entity from beyond the stars, granting you the powers of gravity bending stars.',
        link: 'https://drive.google.com/file/d/1p54UvwNXEdMUhg0yZNRZMv7z9sxsOPlw/view?usp=sharing'
      },
      {
        title: 'The Elder Wyrm',
        description: 'Your patron is one of the most powerful creatures in the world, an elder dragon, and gifts you with might draconic magic.',
        link: 'https://drive.google.com/file/d/132KKSH3l25BFywFYxYqToVhTfSgZOJMX/view?usp=sharing'
      },
    ],
    image: warlock
  },
]

export default subclassData;
