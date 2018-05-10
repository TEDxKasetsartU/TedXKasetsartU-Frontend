const data = [
  {
    year: 2018,
    cover: 'cover.png',
    mobile_cover: 'mcover.png',
    location: {
      googleMap: '!1m18!1m12!1m3!1d3875.537280325659!2d100.53281331441427!3d13.746441240350887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ecdff27bf31%3A0xaac7a9b518db34df!2z4Liq4Lii4Liy4Lih4Lig4Liy4Lin4Lil4Lix4LiiIOC4o-C4reC4ouC4seC4pSDguYHguIHguKPguJnguJTguYzguYDguJjguLXguKLguYDguJXguK3guKPguYw!5e0!3m2!1sen!2sth!4v1525936189900',
      name: 'Siam Pavalai Royal Grand Theatre',
      start: new Date('2018-05-27 16:00'),
      end: new Date('2018-05-27 21:30'),
      ticketEnd: new Date('2018-05-22 23:59')
    },
    concept: {
      title: 'TAKE A CHANCE, MAKE A CHANGE',
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt scelerisque nibh, facilisis varius dolor ullamcorper in. Pellentesque diam leo, aliquam non magna et, molestie cursus ipsum. Pellentesque aliquet nec neque et pharetra. Aliquam quis consectetur sem, at interdum ex. Suspendisse ultrices mi ornare interdum lobortis.'
    },
    speakers: [
      {
        imageSrc: '1.jpg',
        name: 'อ.ดร. กาญจนพันธุ์ สุขวิชชัย',
        description: 'อาจารย์ประจำภาควิชาวิศวกรรมไฟฟ้า คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ และ ผู้ก่อตั้งชมรมScuba แชมป์การแข่งขันรายการ World RoboCup Organization (Small Size Robot Soccer League) ปี 2009 – 2014',
        topic: 'สมองกลสอนคน',
        youtubeId: 'J66ua-ELj8I'
      },
      {
        imageSrc: '1.jpg',
        name: 'รวิศ หาญอุตสาหะ',
        description: 'กรรมการผู้จัดการบริษัท ศรีจันทร์สหโอสถ จำกัด',
        topic: 'เกลียดวันจันทร์?',
        youtubeId: '23BA9X6Pphk'
      },
      {
        imageSrc: '1.jpg',
        name: 'อ.ดร. กาญจนพัน',
        description: 'อาจารย์ประจำภาควิชาวิศวกรรมไฟฟ้า คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ และ ผู้ก่อตั้งชมรมScuba แชมป์การแข่งขันรายการ World RoboCup Organization (Small Size Robot Soccer League) ปี 2009 – 2014',
        topic: 'สมองกลสอนคน',
        youtubeId: 'J66ua-ELj8I'
      },
      {
        imageSrc: '1.jpg',
        name: 'อ.. กาญจนพันธุ์ สุขวิชชัย',
        description: 'อาจารย์ประจำภาควิชาวิศวกรรมไฟฟ้า คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ และ ผู้ก่อตั้งชมรมScuba แชมป์การแข่งขันรายการ World RoboCup Organization (Small Size Robot Soccer League) ปี 2009 – 2014',
        topic: 'สมองกลสอนคน',
        youtubeId: 'J66ua-ELj8I'
      },
      {
        imageSrc: '1.jpg',
        name: 'อ.ดร. กาญจนพันธ สุขวิชชัย',
        description: 'อาจารย์ประจำภาควิชาวิศวกรรมไฟฟ้า คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ และ ผู้ก่อตั้งชมรมScuba แชมป์การแข่งขันรายการ World RoboCup Organization (Small Size Robot Soccer League) ปี 2009 – 2014',
        topic: 'สมองกลสอนคน',
        youtubeId: 'J66ua-ELj8I'
      },
      {
        imageSrc: '1.jpg',
        name: 'อ.ดร. ญจนพันธุ์ สุขวิชชัย',
        description: 'อาจารย์ประจำภาควิชาวิศวกรรมไฟฟ้า คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ และ ผู้ก่อตั้งชมรมScuba แชมป์การแข่งขันรายการ World RoboCup Organization (Small Size Robot Soccer League) ปี 2009 – 2014',
        topic: 'สมองกลสอนคน',
        youtubeId: 'J66ua-ELj8I'
      },
      {
        imageSrc: '1.jpg',
        name: 'อ.ดร. กาญจนพัน สุขวิชชัย',
        description: 'อาจารย์ประจำภาควิชาวิศวกรรมไฟฟ้า คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ และ ผู้ก่อตั้งชมรมScuba แชมป์การแข่งขันรายการ World RoboCup Organization (Small Size Robot Soccer League) ปี 2009 – 2014',
        topic: 'สมองกลสอนคน',
        youtubeId: 'J66ua-ELj8I'
      },
      {
        imageSrc: '1.jpg',
        name: 'อ. กาญจนพันธุ์ ',
        description: 'อาจารย์ประจำภาควิชาวิศวกรรมไฟฟ้า คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ และ ผู้ก่อตั้งชมรมScuba แชมป์การแข่งขันรายการ World RoboCup Organization (Small Size Robot Soccer League) ปี 2009 – 2014',
        topic: 'สมองกลสอนคน',
        youtubeId: 'J66ua-ELj8I'
      },
      {
        imageSrc: '1.jpg',
        name: 'อ.ดร. กาญจนพันธุ์ ',
        description: 'อาจารย์ประจำภาควิชาวิศวกรรมไฟฟ้า คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ และ ผู้ก่อตั้งชมรมScuba แชมป์การแข่งขันรายการ World RoboCup Organization (Small Size Robot Soccer League) ปี 2009 – 2014',
        topic: 'สมองกลสอนคน',
        youtubeId: 'J66ua-ELj8I'
      },
      {
        imageSrc: '1.jpg',
        name: 'อ.ดร. กาญพันธุ์ สุขวิชชัย',
        description: 'อาจารย์ประจำภาควิชาวิศวกรรมไฟฟ้า คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ และ ผู้ก่อตั้งชมรมScuba แชมป์การแข่งขันรายการ World RoboCup Organization (Small Size Robot Soccer League) ปี 2009 – 2014',
        topic: 'สมองกลสอนคน',
        youtubeId: 'J66ua-ELj8I'
      },
      {
        imageSrc: '1.jpg',
        name: 'อ.ดร. กาญจนพันธุ์ สุขชชัย',
        description: 'อาจารย์ประจำภาควิชาวิศวกรรมไฟฟ้า คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ และ ผู้ก่อตั้งชมรมScuba แชมป์การแข่งขันรายการ World RoboCup Organization (Small Size Robot Soccer League) ปี 2009 – 2014',
        topic: 'สมองกลสอนคน',
        youtubeId: 'J66ua-ELj8I'
      }
    ],
    partners: {
      patron: [
        {
          imageSrc: 'eng-ku.png',
          url: 'http://eng.ku.ac.th/',
          name: 'Engineer KU'
        },
        {
          imageSrc: 'eng-ku.png',
          url: 'http://eng.ku.ac.th/',
          name: 'Engineer KU'
        },
        {
          imageSrc: 'eng-ku.png',
          url: 'http://eng.ku.ac.th/',
          name: 'Engineer KU'
        }
      ],
      platinum: [
        {
          imageSrc: 'eng-ku.png',
          url: 'http://eng.ku.ac.th/',
          name: 'Engineer KU'
        },
        {
          imageSrc: 'AIS.png',
          url: 'http://eng.ku.ac.th/',
          name: 'Engineer KU'
        },
        {
          imageSrc: 'eng-ku.png',
          url: 'http://eng.ku.ac.th/',
          name: 'Engineer KU'
        }
      ],
      gold: [
        {
          imageSrc: 'eng-ku.png',
          url: 'http://eng.ku.ac.th/',
          name: 'Engineer KU'
        },
        {
          imageSrc: 'eng-ku.png',
          url: 'http://eng.ku.ac.th/',
          name: 'Engineer KU'
        },
        {
          imageSrc: 'eng-ku.png',
          url: 'http://eng.ku.ac.th/',
          name: 'Engineer KU'
        }
      ],
      friends: [
        {
          imageSrc: 'eng-ku.png',
          url: 'http://eng.ku.ac.th/',
          name: 'Engineer KU'
        },
        {
          imageSrc: 'eng-ku.png',
          url: 'http://eng.ku.ac.th/',
          name: 'Engineer KU'
        },
        {
          imageSrc: 'eng-ku.png',
          url: 'http://eng.ku.ac.th/',
          name: 'Engineer KU'
        }
      ]
    },
    volunteers: [
      {
        imageSrc: 'jirayut',
        name: 'จิรายุทธ ลีอุปถัมภ์วงศ์',
        position: 'Graphic Designer'
      },
      {
        imageSrc: 'jirayut',
        name: 'จิรายุทธ ลีอุปถัมภ์วงศ์',
        position: 'Graphic Designer'
      },
      {
        imageSrc: 'jirayut',
        name: 'จิรายุทธ ลีอุปถัมภ์วงศ์',
        position: 'Graphic Designer'
      },
      {
        imageSrc: 'jirayut',
        name: 'จิรายุทธ ลีอุปถัมภ์วงศ์',
        position: 'Graphic Designer'
      },
      {
        imageSrc: 'jirayut',
        name: 'จิรายุทธ ลีอุปถัมภ์วงศ์',
        position: 'Graphic Designer'
      },
      {
        imageSrc: 'jirayut',
        name: 'จิรายุทธ ลีอุปถัมภ์วงศ์',
        position: 'Graphic Designer'
      },
      {
        imageSrc: 'jirayut',
        name: 'จิรายุทธ ลีอุปถัมภ์วงศ์',
        position: 'Graphic Designer'
      },
      {
        imageSrc: 'jirayut',
        name: 'จิรายุทธ ลีอุปถัมภ์วงศ์',
        position: 'Graphic Designer'
      },
      {
        imageSrc: 'jirayut',
        name: 'จิรายุทธ ลีอุปถัมภ์วงศ์',
        position: 'Graphic Designer'
      },
      {
        imageSrc: 'jirayut',
        name: 'จิรายุทธ ลีอุปถัมภ์วงศ์',
        position: 'Graphic Designer'
      },
      {
        imageSrc: 'jirayut',
        name: 'จิรายุทธ ลีอุปถัมภ์วงศ์',
        position: 'Graphic Designer'
      },
      {
        imageSrc: 'jirayut',
        name: 'จิรายุทธ ลีอุปถัมภ์วงศ์',
        position: 'Graphic Designer'
      },
      {
        imageSrc: 'jirayut',
        name: 'จิรายุทธ ลีอุปถัมภ์วงศ์',
        position: 'Graphic Designer'
      },
      {
        imageSrc: 'jirayut',
        name: 'จิรายุทธ ลีอุปถัมภ์วงศ์',
        position: 'Graphic Designer'
      },
      {
        imageSrc: 'jirayut',
        name: 'จิรายุทธ ลีอุปถัมภ์วงศ์',
        position: 'Graphic Designer'
      },
      {
        imageSrc: 'jirayut',
        name: 'จิรายุทธ ลีอุปถัมภ์วงศ์',
        position: 'Graphic Designer'
      },
      {
        imageSrc: 'jirayut',
        name: 'จิรายุทธ ลีอุปถัมภ์วงศ์',
        position: 'Graphic Designer'
      },
      {
        imageSrc: 'jirayut',
        name: 'จิรายุทธ ลีอุปถัมภ์วงศ์',
        position: 'Graphic Designer'
      }
    ]
  }
]

export default data
