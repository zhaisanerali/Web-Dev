import { Product, Category } from './models/product.model';

export const categories: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'Watches' }
];

export const products: Product[] = [
  // ПРИМЕР: Добавь по 5 штук на каждый categoryId (всего 20)
  {
    id: 1,
    categoryId: 1,
    name: 'Смартфон Redmi 15C 8 ГБ/256 ГБ черный + подарок',
    description: 'Смартфон Redmi 15C 8 ГБ/256 ГБ черный',
    price: 99800,
    rating: 5.0,
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p15/pe5/61090494.png?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/redmi-15c-8-gb-256-gb-chernyi-podarok-144712928/?c=750000000'
  },
  {
    id: 2,
    categoryId: 1,
    name: 'Смартфон OPPO A15S 4/64 Gb черный',
    description: 'Благодаря эргономичному дизайну корпуса, OPPO A15s удобен в обращении одной рукой. Выберите один из насыщенных цветов, который будет идеально сочетаться с вашим уникальным стилем',
    price: 53899,
    rating: 5.0,
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h47/h79/64228862885918.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/oppo-a15s-4-64-gb-chernyi-101100950/?c=750000000'
  },
  {
    id: 3,
    categoryId: 1,
    name: 'Смартфон Samsung Galaxy A16 8 ГБ/256 ГБ серый + подарок',
    description: 'Смартфон Samsung Galaxy A16 8 ГБ/256 ГБ серый + подарок',
    price: 184995,
    rating: 5.0,
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p15/pc4/17789450.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a16-8-gb-256-gb-seryi-podarok-132761424/?c=750000000'
  },
  {
    id: 4,
    categoryId: 1,
    name: 'Смартфон Apple iPhone 17 Pro 256Gb NanoSIM+eSIM оранжевый',
    description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
    price: 839301,
    rating: 5.0,
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-oranzhevyi-145467625/?c=750000000'
  },
  {
    id: 5,
    categoryId: 1,
    name: 'Смартфон Apple iPhone 13 128Gb NanoSIM+eSIM белый',
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения. Apple разработали совершенно новую схему расположения камер и развернули объективы на 45 градусов. Благодаря этому внутри корпуса поместилась лучшая система двух камер с увеличенной матрицей широкоугольной камеры. Кроме того, освободилось место для системы оптической стабилизации изображения со сдвигом матрицы, и увеличилась скорость работы матрицы на сверхширокоугольной камере.',
    price: 477900,
    rating: 5.0,
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-nanosim-esim-belyi-102298420/?c=750000000'
  },
  {
    id: 6,
    categoryId: 2,
    name: 'Ноутбук HP Laptop 15-fc0072ci 15.6" / 8 Гб / SSD 512 Гб / Без ОС / A19WCEA',
    description: ' С этим ноутбуком вы сможете легко справляться с любыми задачами, будь то офисные приложения или мультимедийные развлечения.✨ Особенности:- ✅',
    price: 222306,
    rating: 5.0,
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p2b/pfa/12037040.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/hp-laptop-15-fc0072ci-15-6-8-gb-ssd-512-gb-bez-os-a19wcea-131090992/?c=750000000'
  },
  {
    id: 7,
    categoryId: 2,
    name: 'Ноутбук HP OMEN Gaming Laptop 16-am0052ci 16" / 16 Гб / SSD 512 Гб / Без ОС / C0BN6EA',
    description: 'Ноутбук HP OMEN Gaming Laptop 16-am0052ci 16" / 16 Гб / SSD 512 Гб / Без ОС / C0BN6EA',
    price: 699990,
    rating: 5.0,
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/pd0/p6c/107948128.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/hp-omen-gaming-laptop-16-am0052ci-16-16-gb-ssd-512-gb-bez-os-c0bn6ea-157714208/?c=750000000'
  },
  {
    id: 8,
    categoryId: 2,
    name: 'Ноутбук HP OmniBook XFlip 2-in-1 Laptop 14" / 16 Гб / SSD 1000 Гб / Win 11 Home / BZ2X0EA',
    description: 'Ноутбук HP OmniBook XFlip 2-in-1 Laptop 14" / 16 Гб / SSD 1000 Гб / Win 11 Home / BZ2X0EA',
    price: 609990,
    rating: 5.0,
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/pd1/p5a/97884626.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/hp-omnibook-xflip-2-in-1-laptop-14-16-gb-ssd-1000-gb-win-11-home-bz2x0ea-155189888/?c=750000000'
  },
  {
    id: 9,
    categoryId: 2,
    name: 'Ноутбук Lenovo Legion 5 16IRX9 16" / 16 Гб / SSD 1024 Гб / Без ОС / 83DG00L0AX',
    description: 'Lenovo Legion 16IRX9 - мощный игровой ноутбук, идеально подходящий как для игр, так и для тяжёлых задач, например, рендеринга, дизайна и работы с мультимедиа. ',
    price: 969890,
    rating: 5.0,
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/pfb/pa2/81302777.png?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/lenovo-legion-5-16irx9-16-16-gb-ssd-1024-gb-bez-os-83dg00l0ax-150516322/?c=750000000'
  },
  {
    id: 10,
    categoryId: 2,
    name: 'Ноутбук Microsoft Surface Laptop 7 X Elite 13.8" / 16 Гб / SSD 1024 Гб / Win 11 / ZXX-00026',
    description: 'Ноутбук Microsoft Surface Laptop 7 X Elite 13.8" / 16 Гб / SSD 1024 Гб / Win 11 / ZXX-00026',
    price: 889900,
    rating: 5.0,
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p81/pfa/75963215.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/microsoft-surface-laptop-7-x-elite-13-8-16-gb-ssd-1024-gb-win-11-zxx-00026-149013447/?c=750000000'
  },
  {
    id: 11,
    categoryId: 3,
    name: 'Наушники Xiaomi In-Ear Headphones Basic черный',
    description: 'Прекрасная песня – это сочетание красивых слов и звуков, которые вызывают сильные эмоции и воспоминания. Наши наушники являются проводником в мир чарующей музыки.',
    price: 2990,
    rating: 5.0,
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p6c/pa2/7469533.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/naushniki-xiaomi-in-ear-headphones-basic-chernyi-4803686/?c=750000000'
  },
  {
    id: 12,
    categoryId: 3,
    name: 'Наушники Xiaomi Mi Headphones белый',
    description: 'Наушники Xiaomi Mi Headphones белый',
    price: 62990 ,
    rating: 5.0,
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h24/h0e/63775931760670.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/naushniki-xiaomi-mi-headphones-belyi-4800410/?c=750000000'
  },
  {
    id: 13,
    categoryId: 3,
    name: 'Наушники Apple AirPods 3 with Lightning Charging Case белый',
    description: 'Динамический драйвер, разработанный Apple, использует специальный усилитель, обеспечивая невероятную детальность звучания. Вы будете чётко слышать весь спектр — от глубоких, насыщенных басов до кристально чистых высоких нот.',
    price: 61990,
    rating: 5.0,
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000'
  },
  {
    id: 14,
    categoryId: 3,
    name: 'Наушники Logitech G Pro X черный',
    description: 'Проводная гарнитура Logitech G PRO X – мощная игровая модель со стильным черным корпусом и стальным настраиваемым оголовьем.',
    price: 65900,
    rating: 5.0,
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hda/h35/63881966288926.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/naushniki-logitech-g-pro-x-chernyi-100383545/?c=750000000'
  },
  {
    id: 15,
    categoryId: 3,
    name: 'Наушники Huawei FreeBuds 5i голубой',
    description: 'Беспроводные наушники Huawei FreeBuds 5i — стильный и функциональный аксессуар для тех, кто ценит качественный звук и комфорт. 🎧 Наслаждайтесь чистым звучанием и удобной посадкой в течение всего дня!',
    price: 68990,
    rating: 5.0,
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h7e/h06/69489695916062.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/naushniki-huawei-freebuds-5i-goluboi-109101765/?c=750000000&m=GulserComputers'
  },
  {
    id: 16,
    categoryId: 4,
    name: 'Кварцевые Tissot T137.410.11.041.00 сталь',
    description: 'Перед вами первые смарт-часы в линейке G-Shock из серии GSW-H1000 на базе полноценной Wear OS от Google.',
    price: 379900,
    rating: 5.0,
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p65/pb8/53078293.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/kvartsevye-casio-gsw-h1000-1-nerzhavejuschaja-stal--136198390/?c=750000000'
  },
  {
    id: 17,
    categoryId: 4,
    name: 'Кварцевые CASIO EDIFACE & G-CHOCK ECB-2000DC-1BDF нержавеющая сталь',
    description: 'Многофункциональные часы, дизайн которых пропитан гонками и скоростью, без сомнения оценит любой мужчина.',
    price: 221700,
    rating: 5.0,
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p62/p80/2747786.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/kvartsevye-casio-ediface-g-chock-ecb-2000dc-1bdf-nerzhavejuschaja-stal--128421333/?c=750000000'
  },
  {
    id: 18,
    categoryId: 4,
    name: 'Кварцевые Edox 10255 3BM NADN нержавеющая сталь',
    description: 'Кварцевые Edox 10255 3BM NADN нержавеющая сталь',
    price: 855000,
    rating: 5.0,
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p64/p1d/44360284.png?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/kvartsevye-edox-10255-3bm-nadn-nerzhavejuschaja-stal--140240432/?c=750000000'
  },
  {
    id: 19,
    categoryId: 1,
    name: 'Смартфон Apple iPhone 17 Pro 256Gb NanoSIM+eSIM темно-синий',
    description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе передовые технологии, непревзойденную производительность и элегантный дизайн.',
    price: 826493 ,
    rating: 5.0,
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-temno-sinii-145438959/?c=750000000'
  },
  {
    id: 20,
    categoryId: 1,
    name: 'Смартфон Samsung Galaxy A56 5G 8 ГБ/128 ГБ серый',
    description: 'Представляем Samsung Galaxy A56 5G — смартфон, который сочетает в себе высокую производительность, современные технологии и стильный дизайн. С ним вы сможете наслаждаться быстрым интернетом и яркими изображениями на экране с частотой обновления 120 Гц',
    price: 175999,
    rating: 5.0,
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/pde/p5c/30501454.png?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a56-5g-8-gb-128-gb-seryi-136422081/?c=750000000'
  }
  
  
];