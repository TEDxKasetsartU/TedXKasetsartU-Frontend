const data = [
  {
    year: 2018,
    cover: 'cover.png',
    mobile_cover: 'mcover.png',
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
