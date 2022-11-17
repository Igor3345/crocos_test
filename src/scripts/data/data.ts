import header_logo from "../../assets/logo.png";
import logo2 from "../../assets/logo_2.png";
import top_section_bg from "../../assets/top_section_bg.jpg";
import top_section_img1 from "../../assets/top_section_img1.jpg";
import top_section_img2 from "../../assets/top_section_img2.jpg";
import top_section_img3 from "../../assets/top_section_img3.jpg";
import top_section_img4 from "../../assets/top_section_img4.jpg";
import top_subsection_bg from "../../assets/top_subsection_bg.jpg";
import top_subsection_count1 from "../../assets/image500.png";
import top_subsection_count2 from "../../assets/image2435.png";
import top_subsection_count3 from "../../assets/image2000.png";
import top_subsection_bg2 from "../../assets/top_subsection_bg2.png";
import form_section_bg from "../../assets/airBus.png";
import info_img1 from "../../assets/info_img1.jpg";
import info_img2 from "../../assets/info_img2.jpg";
import info_img3 from "../../assets/info_img3.jpg";
import info_img4 from "../../assets/info_img4.jpg";
import info_img5 from "../../assets/info_img5.jpg";
import info_img6 from "../../assets/info_img6.jpg";
import info_card1 from "../../assets/info_card1.jpg"
import info_card2 from "../../assets/info_card2.jpg"
import info_card3 from "../../assets/info_card3.jpg"
import info_card4 from "../../assets/info_card4.jpg"
import thumbSliderImg from "../../assets/slider_image.jpg";
import card_section_image1 from "../../assets/card_section1.jpg";
import card_section_image2 from "../../assets/card_section2.jpg";
import card_section_image3 from "../../assets/card_section3.jpg";
import card_section_image4 from "../../assets/card_section4.jpg";
import card_section_image5 from "../../assets/card_section5.jpg";
import card_section_image6 from "../../assets/card_section6.jpg";
import description_slider2 from "../../assets/description_slider2.jpg";
import description_slider1 from "../../assets/description_slider1.jpg";
import description_slider3 from "../../assets/description_slider3.jpg";
import description_slider4 from "../../assets/description_slider2.jpg";
import telegramm_icon from "../../assets/telegramm_icon.jpg";
import instagramm_icon from "../../assets/instagramm_icon.jpg";
import facebook_icon from "../../assets/facebook_icon.jpg";
import twitter_icon from "../../assets/twitter_icon.jpg";
import vk_icon from "../../assets/vk_icon.jpg";
import watsapp_icon from "../../assets/watsapp_icon.jpg"
import partner1 from "../../assets/partner1.png"
import partner2 from "../../assets/partner2.png"
import partner3 from "../../assets/partner3.png"
import partner4 from "../../assets/partner4.png"
import partner5 from "../../assets/partner5.png"
import partner6 from "../../assets/partner6.png"
import pay_card from "../../assets/pay_card.png"
import sevice_background from "../../assets/background2.jpg"
import footer_pict1 from "../../assets/whatsUp.png"
import footer_pict2 from "../../assets/footer_pic.png"
import develop from "../../assets/crocos.png"


export const data = {
    header:{
        logo:{img:header_logo , link_href:"#"},
        tabs:[{href:"#" ,text:'Tourism'} , {href:"#", text:'Invest'} , {href:"#" , text:'Convention bureau'}],
        social_links:[{id_icon:'instagramm' , link_href:"https://www.instagram.com/"} , {id_icon:'youtube', link_href:"https://www.youtube.com/"} , {id_icon:'facebook', link_href:"https://ru-ru.facebook.com/"}],
        search:{link_href:"#", icon_id:"search"},
        burger_menu:{link_href:"#", id_icon:"burger1"},
        languges:[{text:"Ru", value:"Ru"}, {text:"Kz" , value:"Kz"}, {text:"Eng" , value:"Eng"}],
        basket:"basket"
    },
    top_section:{
        logotype: logo2,
        background: top_section_bg,
        items: [{ link_href:"#", title:"Где остановиться?",subtitle:"отели, хостелы..." , image:top_section_img1},
        {link_href:"#", title:"Где поесть?",subtitle:"рестораны, кафе..." , image:top_section_img2},
        {link_href:"#",  title:"Куда сходить?",subtitle:"Театры, кино..." , image:top_section_img3},
        {link_href:"#", title:"Что посмотреть?",subtitle:"Музеи, байтерек..." , image:top_section_img4}],
        top_subsection:{
            background:top_subsection_bg,
            background2:top_subsection_bg2,
            title:"Добро пожаловать в Нур-Султан",
            city:"Нур-Султан -",
            description: "столица независимого Казахстана. Это молодой, современный, комфортный и динамичный город в котором каждый человек почувствует гостеприимность и радушие столицы.",
            counter_items:[
                {quantity: top_subsection_count1, text:"достопримечательностей"},
                {quantity:top_subsection_count2, text:"объектов питания"},
                {quantity:top_subsection_count3, text:"доступных мероприятий"}
            ]
        }
    },
    form_section:{
        cities: {
            from:[{value:0, label:"Откуда"},
            {value:'Нур-Султан',  label:'Нур-Султан'},
            {value:"Алматы",  label:"Алматы"},
            {value:"Караганда",  label:"Караганда"},
            {value:"Талдыкорган",  label:"Талдыкорган"},
            {value:"Костанай",  label:"Костанай"},
            {value:"Семей",  label:"Семей"}],
            to:[{value:0, label:"Куда"},
            {value:'Нур-Султан',  label:'Нур-Султан'},
            {value:"Алматы",  label:"Алматы"},
            {value:"Караганда",  label:"Караганда"},
            {value:"Талдыкорган",  label:"Талдыкорган"},
            {value:"Костанай",  label:"Костанай"},
            {value:"Семей",  label:"Семей"}]
        },
        background: form_section_bg,
        title:"Запланируй поездку в ",
        city:"Нур-Султан",
        subtitle:"Купить или забронировать авиабилеты онлайн"
    },
    info_section:{
        layout:{title:"#Nur-Sultan", 
            subtitle:"6 причин посетить город",
            link:{
                text:"Подробнее",
                link_href:'#'
            },
            items:[
                {title:"Достопримечательности", 
                description:"Футуристический город посреди степи — левый берег, олицетворяющий техногенное будущее.",
                image:info_img1,
                },
                {title:"Самый большой шатёр в мире", 
                description:"ТРЦ Хан Шатыр является первым и единственным лайфстайл-центром, который объединяет шопинг и развлечения мирового уровня под одной крышей.",
                image:info_img2,
                },
                {title:"Уникальная архитектура", 
                description:"Самая молодая и динамично развивающаяся столица стран СНГ. Возможно, именно поэтому архитектура города столь необычна и поразительна.",
                image:info_img3,
                },
                {title:"Гостеприимство", 
                description:"Если вы заблудились, местные никогда не откажут в помощи. Дружелюбие казахов не знает границ.",
                image:info_img4,
                },
                {title:"Самая большая опера", 
                description:"Своим величием он поразил немало туристов,а внутри здание украшено еще лучше, чем снаружи.",
                image:info_img5,
                },
                {title:"Люди", 
                description:"Несмотря на климат столицы, люди в городе очень добрые и всегда готовы прийти на помощь.",
                image:info_img6,
                },
            ]
        },
        card:{
            title:"Отдых в городе",
            items:[
                {title:"События",
                description:"Все актуальные события города, которые подарят незабываемые впечатления",
                image:info_card1,
                link:{text:"Подробнее", link_href:"#"}
                },
                {title: "Проживание",
                description:"Варианты размещения от бюджетных хостелов до люксовых отелей",
                image:info_card2,
                link:{text:"Подробнее", link_href:"#"}
                },
                {title:"Достопримечательности",
                description:"Знаковые места обязательные к посещению и знакомством с городом",
                image:info_card3,
                link:{text:"Подробнее", link_href:"#"}
                },
                {title:"Еда столицы",
                description:"Городские кафе, рестораны, бары на любой вкус",
                image:info_card4,
                link:{text:"Подробнее", link_href:"#"}
                }
            ]
        }
    },
    thumb_slider:[
        {img: thumbSliderImg,
            title:'Коргалжынский заповедник1',
            subtitle:"Отдых рядом с городом",
            description:"Коргалжынский государственный природный заповедник называют «жемчужиной края».",
            link:{
                href:"#",
                text:"Подробнее"
            },
            icon:"swiper_thumb1"
        },
        {img: top_section_bg,
            title:'Коргалжынский заповедник2',
            subtitle:"Отдых рядом с городом",
            description:"Коргалжынский государственный природный заповедник называют «жемчужиной края».",
            link:{
                href:"#",
                text:"Подробнее"
            },
            icon:"swiper_thumb2"
        },
        {img: thumbSliderImg,
            title:'Коргалжынский заповедник3',
            subtitle:"Отдых рядом с городом",
            description:"Коргалжынский государственный природный заповедник называют «жемчужиной края».",
            link:{
                href:"#",
                text:"Подробнее"
            },
            icon:"swiper_thumb3"
        },
        {img: top_section_bg,
            title:'Коргалжынский заповедник4',
            subtitle:"Отдых рядом с городом",
            description:"Коргалжынский государственный природный заповедник называют «жемчужиной края».",
            link:{
                href:"#",
                text:"Подробнее"
            },
            icon:"swiper_thumb4"
        },
        {img: thumbSliderImg,
            title:'Коргалжынский заповедник5',
            subtitle:"Отдых рядом с городом",
            description:"Коргалжынский государственный природный заповедник называют «жемчужиной края».",
            link:{
                href:"#",
                text:"Подробнее"
            },
            icon:"swiper_thumb5"
        },
        {img: top_section_bg,
            title:'Коргалжынский заповедник6',
            subtitle:"Отдых рядом с городом",
            description:"Коргалжынский государственный природный заповедник называют «жемчужиной края».",
            link:{
                href:"#",
                text:"Подробнее"
            },
            icon:"swiper_thumb6"
        },
        {img: thumbSliderImg,
            title:'Коргалжынский заповедник7',
            subtitle:"Отдых рядом с городом",
            description:"Коргалжынский государственный природный заповедник называют «жемчужиной края».",
            link:{
                href:"#",
                text:"Подробнее"
            },
            icon:"swiper_thumb7"
        }
    ],
    card_section:{
        title:"Популярные места отдыха",
        subtitle:"Здесь мы собрали для вас топ самых актуальных зон отдыха",
        items:[
            {title:"Топ 5 парков",
            image:card_section_image1, 
            links:[{text:"Ботанический сад" , href:"#"},
            {text:"Президентский парк" , href:"#"},
            {text:"Парк «Жеруйык»" , href:"#"},
            {text:"Центральный городской парк" , href:"#"},
            {text:"Парк Жетысу" , href:"#"},
            ]},
            {title:"Топ 5 фотолокаций",
            image:card_section_image2, 
            links:[{text:"Ботанический сад" , href:"#"},
            {text:"Президентский парк" , href:"#"},
            {text:"Парк «Жеруйык»" , href:"#"},
            {text:"Центральный городской парк" , href:"#"},
            {text:"Парк Жетысу" , href:"#"},
            ]},
            {title:"6 Зон отдыха около Нур-Султана",
            image:card_section_image3, 
            links:[{text:"Ботанический сад" , href:"#"},
            {text:"Президентский парк" , href:"#"},
            {text:"Парк «Жеруйык»" , href:"#"},
            {text:"Центральный городской парк" , href:"#"},
            {text:"Парк Жетысу" , href:"#"},
            {text:"Парк Жетысу" , href:"#"}
            ]},
            {title:"Топ 5 новых заведений",
            image:card_section_image4, 
            links:[{text:"Ботанический сад" , href:"#"},
            {text:"Президентский парк" , href:"#"},
            {text:"Парк «Жеруйык»" , href:"#"},
            {text:"Центральный городской парк" , href:"#"},
            {text:"Парк Жетысу" , href:"#"},
            ]},
            {title:"Топ-5 ИСТОРИЧЕСКИХ МЕСТ СТОЛИЦЫ",
            image:card_section_image5, 
            links:[{text:"Ботанический сад" , href:"#"},
            {text:"Президентский парк" , href:"#"},
            {text:"Парк «Жеруйык»" , href:"#"},
            {text:"Центральный городской парк" , href:"#"},
            {text:"Парк Жетысу" , href:"#"},
            ]},
            {title:"Топ-5 экстремальных развлечений в столице",
            image:card_section_image6, 
            links:[{text:"Ботанический сад" , href:"#"},
            {text:"Президентский парк" , href:"#"},
            {text:"Парк «Жеруйык»" , href:"#"},
            {text:"Центральный городской парк" , href:"#"},
            {text:"Парк Жетысу" , href:"#"},
            ]}
        ]
    },
    description_slider_section:{
        title:"Лента города",
        items:[
            {image: description_slider2,
                link:{text:"Посмотреть все публикации" , href:"#"},
                description:["После дождливой недели наконец-то наступают тёплые выходные. Какие у вас планы на эти выходные?",
                "Жаңбырлы аптадан кейін жылы демалыс күтіледі. Осы демалыс күндері қандай жоспарларыңыз бар?",
                "We expect a warm weekend after a rainy week. What are your plans for this weekend? 2 нед."],
                publish_date:"2 нед",
                social_links:[
                    {icon:telegramm_icon , soc_href:"#"},
                    {icon:instagramm_icon , soc_href:"#"},
                    {icon:facebook_icon , soc_href:"#"},
                    {icon:twitter_icon , soc_href:"#"},
                    {icon:vk_icon , soc_href:"#"},
                    {icon:watsapp_icon , soc_href:"#"},
                ]
            },
            {image: description_slider1,
                link:{text:"Посмотреть все публикации" , href:"#"},
                description:["После дождливой недели наконец-то наступают тёплые выходные. Какие у вас планы на эти выходные?",
                "Жаңбырлы аптадан кейін жылы демалыс күтіледі. Осы демалыс күндері қандай жоспарларыңыз бар?",
                "We expect a warm weekend after a rainy week. What are your plans for this weekend? 2 нед."],
                publish_date:"2 нед",
                social_links:[
                    {icon:telegramm_icon , soc_href:"#"},
                    {icon:instagramm_icon , soc_href:"#"},
                    {icon:facebook_icon , soc_href:"#"},
                    {icon:twitter_icon , soc_href:"#"},
                    {icon:vk_icon , soc_href:"#"},
                    {icon:watsapp_icon , soc_href:"#"},
                ]
            },
            {image: description_slider3,
                link:{text:"Посмотреть все публикации" , href:"#"},
                description:["После дождливой недели наконец-то наступают тёплые выходные. Какие у вас планы на эти выходные?",
                "Жаңбырлы аптадан кейін жылы демалыс күтіледі. Осы демалыс күндері қандай жоспарларыңыз бар?",
                "We expect a warm weekend after a rainy week. What are your plans for this weekend? 2 нед."],
                publish_date:"2 нед",
                social_links:[
                    {icon:telegramm_icon , soc_href:"#"},
                    {icon:instagramm_icon , soc_href:"#"},
                    {icon:facebook_icon , soc_href:"#"},
                    {icon:twitter_icon , soc_href:"#"},
                    {icon:vk_icon , soc_href:"#"},
                    {icon:watsapp_icon , soc_href:"#"},
                ]
            },
            {image: description_slider4,
                link:{text:"Посмотреть все публикации" , href:"#"},
                description:["После дождливой недели наконец-то наступают тёплые выходные. Какие у вас планы на эти выходные?",
                "Жаңбырлы аптадан кейін жылы демалыс күтіледі. Осы демалыс күндері қандай жоспарларыңыз бар?",
                "We expect a warm weekend after a rainy week. What are your plans for this weekend? 2 нед."],
                publish_date:"2 нед",
                social_links:[
                    {icon:telegramm_icon , soc_href:"#"},
                    {icon:instagramm_icon , soc_href:"#"},
                    {icon:facebook_icon , soc_href:"#"},
                    {icon:twitter_icon , soc_href:"#"},
                    {icon:vk_icon , soc_href:"#"},
                    {icon:watsapp_icon , soc_href:"#"},
                ]
            }
        ]
    },
    partners_section:[
        {href:'#' , image: partner1},
        {href:'#' , image: partner2},
        {href:'#' , image: partner3},
        {href:'#' , image: partner4},
        {href:'#' , image: partner5},
        {href:'#' , image: partner6}
    ],
    service_section:{
        background:sevice_background,
        image:pay_card,
        title:"Nur-Sultan Pass Box 24 и 72 часа",
        subtitle:"Единая карта туриста, которая включает в себя",
        link:{text:"Купить карту туриста" , href:"#"},
        service_items:[
            {icon_id:"iconU1" , text:"Свободный вход в 11 объектов"},
            {icon_id:"iconU2" , text:"Путеводитель и карта города"},
            {icon_id:"iconU3" , text:"Бесплатные поездки на городском автобусе"},
            {icon_id:"iconU4" , text:"Экскурсии по городу и реке"},
            {icon_id:"iconU5" , text:"Привелегии и скидки в лучшие заведения города"},
            {icon_id:"iconU6" , text:"Sim карта Beeline"},
        ]
    },
    footer:{
        about_us:[
            {
                title:"В городе",
                items:[
                {href:"#", text:"Что посмотреть"},
                {href:"#", text:"Куда сходить"},
                {href:"#", text:"Календарь событий"},
                {href:"#", text:"Где поесть"},
                {href:"#", text:"Где остановиться"},
                {href:"#", text:"24 и 48 часов в столице"},
                {href:"#", text:"Медицинский туризм"},         
                ]
            },
            {
                title:"Рядом с городом",
                items:[
                {href:"#", text:"Боровое"},
                {href:"#", text:"Зеренда"},
                {href:"#", text:"Зоны отдыха"}
            ]
            },
            {
                title: "Информация",
                items:[
                    {href:"#", text:"City pass"},
                    {href:"#", text:"Памятка туриста"},
                    {href:"#", text:"Контакты"}
                ]
            },
        ],
        
        footer_pickture:[
            footer_pict1,
            footer_pict2
        ],

        contact_info:{
            phones:[
                {title:"Туристский Call-center", num: "8-800-080-3838", tel:"tel:88000803838"},
                {title:"Единая служба такси", num: "15800", tel:"15800"}
            ],

            soc_info:{
                title:"Соц. сети",
                social:[{id_icon:"instagramm", href:"#"},
                    {id_icon:"youtube", href:"#"},
                    {id_icon:"facebook", href:"#"}]
            }
        },
        develop:develop
    }  
}