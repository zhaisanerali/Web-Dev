import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html', // Обрати внимание: у тебя в проекте файл называется просто .html
  styleUrl: './product-list.css'      // И здесь просто .css
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Напольные весы MIVAN электронные',
      description: 'Напольные весы MIVAN — это сочетание точности, надежности и современного дизайна. Они подходят для ежедневного контроля веса дома и для всей семьи. Благодаря четырём высокочувствительным датчикам весы обеспечивают стабильные и точные измерения при каждом взвешивании.',
      price: 3599 ,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8f/p94/91606943.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h62/83559338311710.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h71/h1a/83559338377246.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/hc9/83559338442782.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/napol-nye-vesy-mivan-elektronnye-mi-265-do-180-kg-153606041/?ref=shared_link'
    },
    {
      id: 2,
      name: 'Luni для локонов автоматическая плойка 28 мм',
      description: 'Автоматическая плойка Luni для локонов — ваш идеальный помощник для создания стильных кудрей и волн с минимальными усилиями. С диаметром 28 мм и максимальной температурой нагрева 210°C, она обеспечивает быстрый и качественный результат.',
      price: 2499 ,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7f/h20/85050809253918.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1a/h02/84998135021598.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h20/h41/84998135119902.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hc6/h14/84998135218206.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/luni-dlja-lokonov-avtomaticheskaja-ploika-28-mm-116319446/?ref=shared_link'
    },
    {
      id: 3,
      name: 'Cosmex бальзам бессульфатный для волос с коллагеном 1000 мл',
      description: 'Профессиональный бессульфатный бальзам для волос с коллагеном представляет собой идеальное решение для ухода за волосами. Этот увлажняющий бальзам создан для обеспечения максимального блеска и гладкости, придавая вашим волосам жизненную силу и здоровье. Он подходит как для окрашенных, так и для кудрявых или вьющихся волос, позволяя сохранить яркость цвета и форму прически.',
      price: 3999,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p7f/p43/56325765.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h02/h59/84803310157854.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h1a/h7d/84803310223390.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/ha6/h56/84803310288926.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/cosmex-bal-zam-bessul-fatnyi-dlja-volos-s-kollagenom-1000-ml-138695419/?ref=shared_link'
    },
    {
      id: 4,
      name: 'Dyson HS05 Airwrap Complete Long Volumise с чехлом и расческой стайлер розовый, серебряный',
      description: 'Мультистайлер для разных типов волос с эффектом Коанда для идеальной укладки.',
      price: 160358 ,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hf9/84395425529886.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h94/h35/65039207006238.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/hd8/65039209594910.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h62/hbe/65039212216350.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-hs05-airwrap-complete-long-volumise-s-chehlom-i-rascheskoi-stailer-rozovyi-serebrjanyi-114187319/?c=750000000'
    },
    {
      id: 5,
      name: 'Ноутбук Apple MacBook Air 13 2022 13.6" / 16 Гб / SSD 256 Гб / macOS / MC7X4',
      description: 'Невероятно тонкий ноутбук в алюминиевом корпусе с потрясающей автономностью.',
      price: 441086,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p37/p87/22158172.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/h3c/64373573353502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h52/h3b/64373575974942.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/h52/64373578596382.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4-133963854/?c=750000000'
    },
    {
      id: 6,
      name: 'TOPSTONE ультразвуковая щетка X3 щетина средняя черный',
      description: 'НЗубная щетка электрическая с ультразвуковыми волнами представляет собой незаменимый инструмент, обладающий высоким качеством и функцией глубокого очищения полости рта.',
      price: 1490,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p00/pb3/13305680.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/83819401936926.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/83819401969694.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h04/83819402035230.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/topstone-ul-trazvukovaja-schetka-x3-schetina-srednjaja-chernyi-131457490/?c=&ref=shared_link'
    },
    {
      id: 7,
      name: 'Бутылка Spirit Fitness spirit-650 650 мл черный',
      description: 'Спортивная бутылка для воды объемом 650 мл идеально подойдет для всех, кто ведет активный образ жизни. Это стильный аксессуар с интересным дизайном, который не только позволит вам утолить жажду, но и станет незаменимым атрибутом для занятий спортом, туризма и пеших прогулок.',
      price: 1123,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h57/he3/85720367267870.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h6d/80517804458014.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf5/ha4/80517804589086.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h8a/h1a/80517804720158.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/butylka-spirit-fitness-spirit-650-650-ml-chernyi-115705684/?ref=shared_link'
    },
    {
      id: 8,
      name: 'Умная колонка Яндекс Станция Миди черный',
      description: 'Умная колонка с голосовым помощником Алиса и Zigbee-хабом для умного дома.',
      price: 81768,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/h09/84530104467486.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h27/hc9/84460060901406.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf0/h6d/84460060934174.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/h10/84460060966942.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-midi-chernyi-114709674/?c=750000000'
    },
    {
      id: 9,
      name: 'CH6 Scalp Ssag от выпадения волос сыворотка 140 мл',
      description: 'Функциональная сыворотка CH6 SCALP SSAG SERUM - это интенсивное средство, разработанное для укрепления корней, стимуляции роста и защиты волос от повреждений. Ее мощная формула на основе активных компонентов, таких как астаксантин, форзитиазид-А и экстракты целебных растений, глубоко питает волосяные фолликулы, улучшает кровообращение кожи головы и способствует пробуждению спящих луковиц.',
      price: 12800,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p65/pa1/86582526.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h97/h3e/63768406982686.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h94/h73/63768407441438.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/he6/63768407703582.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/ch6-scalp-ssag-ot-vypadenija-volos-syvorotka-140-ml-135518763/?ref=shared_link'
    },
    {
      id: 10,
      name: 'Робот-пылесос Xiaomi Robot Vacuum S10+ BHR6368EU белый',
      description: 'Робот-пылесос с лазерной навигацией и мощностью всасывания 4000 Па.',
      price: 136970,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8d/pf5/6541167.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h61/80581451513886.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h68/h33/80581451579422.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hc6/h4d/80581451644958.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-s10-bhr6368eu-belyi-108100032/?c=750000000'
    }
  ];
}