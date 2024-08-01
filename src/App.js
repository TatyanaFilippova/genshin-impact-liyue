import fon from './public/fon.jpg'
import './App.css';
import zhongli from './imgPerson/zhongli.webp'
import syanYun from './imgPerson/Syan-YUn.webp'
import gif from './public/gif.webp'
import star5 from './public/star5.webp'
import React, { useState } from 'react';
import Modal from 'react-modal';
import zhongli2 from './imgPerson/Zhongli2.webp'
import liuyun from './imgPerson/liuyun.webp'
import bay from './imgPerson/Bay-CHzhu.webp'
import baizhuer from './imgPerson/baizhuer.webp'
import yao from './imgPerson/YAo_YAo.webp'
import star4 from './public/star4.webp'
import yaoyao from './imgPerson/yaoyao_gacha.webp'
import noLike from './public/noLike.png'
import like from './public/like.png'
import iconGeo from './iconElement/geo.png'
import iconAnemo from './iconElement/anemo.png'
import iconDendro from './iconElement/dendro.png'
import eLan from './imgPerson/yelan.webp'
import elan from './imgPerson/E-lan.webp'
import hydro from './iconElement/hydro.png'
import feiyan from './imgPerson/feiyan.png'
import feiYan from './imgPerson/feiyan.webp'
import iconPyro from './iconElement/pyro.png'
import yunjin from './imgPerson/yunjin.png'
import yunGin from './imgPerson/YUn-TSzin.png'
import xiao from './imgPerson/xiao (1).webp'
import Xiao from './imgPerson/xiao.webp'
import kamin from './imgPerson/Ka-Min.webp'
import Kamin from './imgPerson/gaming.webp'
import xingqiu from './imgPerson/xingqiu.webp'
import Xingqiu from './imgPerson/xingqiu (1).webp'
import xiangling from './imgPerson/xiangling.webp'
import Xiangling from './imgPerson/xiangling (1).webp'
import attack from './public/Ataka.webp'
import attackXian from './public/atakaXian.gif'
import ganyu from './imgPerson/ganyu.webp'
import Ganyu from './imgPerson/ganyu (1).webp'
import iconCryo from './iconElement/cryo.png'
import hutao from './imgPerson/hutao.webp'
import Hutao from './imgPerson/hutao (1).webp'
import sheKhe from './imgPerson/SHen-KHe.png'
import SheKhe from './imgPerson/SHen-KHe (1).png'
import baidou from './imgPerson/baidou.webp'
import Baidou from './imgPerson/beidou.webp'
import iconElectro from './iconElement/electro.png'
import ningguang from './imgPerson/ningguang.webp'
import Ningguang from './imgPerson/ningguang (1).webp'
import keqing from './imgPerson/keqing.webp'
import Keqing from './imgPerson/keqing (1).webp'
import chongyon from './imgPerson/chongyun.webp'
import Chongyon from './imgPerson/chongyun (1).webp'
import qiqi from './imgPerson/qiqi.webp'
import Qiqi from './imgPerson/qiqi (1).webp'
import xinyan from './imgPerson/xinyan.webp'
import Xinyan from './imgPerson/Xinyan (1).webp'
import Video from './VideoAttack/Video';
import Person from './CardPerson/Person';
import ModalContent from './ModalWindow/ModalContent';
import ChangeText from './СhangeText/СhangeText';

function App() {
  const [count, setCount] = useState(0)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <ModalContent title={modalIsOpen.title} content={modalIsOpen.content} closeModal={closeModal} imgBanner={modalIsOpen.imgBanner} star={modalIsOpen.star} stixia={modalIsOpen.stixia} weapon={modalIsOpen.weapon} cont={modalIsOpen.cont} specifications={modalIsOpen.specifications} video={modalIsOpen.video} attack={modalIsOpen.attack} />
      </Modal>
      <div className='container' style={{ backgroundImage: `url(${fon})`, backgroundSize: 'cover', height: '100vh' }}>
        <div className='heading'>Персонажи из Ли Юэ (полный список)
          <div className='containetext'>
            <div>Genshin Impact</div>
            <img className='gifHeading' src={gif} />
          </div>
        </div>
        <div className='containerPerson'>
          <div className='containerText'>
            <p>Список всех персонажей из Ли Юэ выглядит следующим образом:</p>
            Вам нравится {count} <ChangeText count={count} />
          </div>
          <div className='person'>
            <Person bg="  #ed7819" img={zhongli} name={'Чжун Ли'} star={star5} noLike={noLike} like={like} icon={iconGeo} onClick={(isLike) => setCount(isLike ? count + 1 : count - 1)} openModal={() => setModalIsOpen({
              title: 'Чжун Ли - описание персонажа, рейтинг', imgBanner: zhongli2, content: 'Чжун Ли — взрослый и спокойный молодой человек работающий консультантом в Ритуальном Бюро Ваншэн. Он многое знает об Архонтах и Старой войне. Размах его Гео Взрыва стихий поражает воображение и просто стирает с лица земли врагов, а элементарный навык может быть крайне полезен при исследовании. Но если соберетесь по магазинам вместе с Чжун Ли проверьте не забыл ли он Мору, ну так на всякий случай.',
              star: star5, stixia: 'Гео', weapon: 'Копье', cont: 'Атаки персонажа Чжун Ли', video: <Video src="https://genshin.ru/wp-content/uploads/2023/08/obychnaya-ataka-chzhun-li.mp4?_=1" />
            })}></Person>
            <Person bg="  #ed7819" img={syanYun} name={'Сянь Юнь'} star={star5} noLike={noLike} like={like} icon={iconAnemo} onClick={(isLike) => setCount(isLike ? count + 1 : count - 1)} openModal={() => setModalIsOpen({
              title: 'Сянь Юнь - описание персонажа, рейтинг', imgBanner: liuyun, content: 'Сянь Юнь — Вестница небес, Новая жительница Ли Юэ. Пятизвездочная анемо девушка анонсированная 18 декабря 2023 года. Дата выхода 31 января 2024 года – обновление 4.4.',
              star: star5, stixia: 'Анемо', weapon: 'Катализатор', cont: 'Атаки персонажа Сянь Юнь', video: <Video src="https://wotpack.ru/wp-content/uploads/2024/01/Obychnye-ataki-Sjan-Jun.mp4?_=1" />
            })} />
            <Person bg=" #6f42c1" img={yao} name={'Яо Яо'} star={star4} noLike={noLike} like={like} icon={iconDendro} onClick={(isLike) => setCount(isLike ? count + 1 : count - 1)} openModal={() => setModalIsOpen({
              title: 'Яо Яо - описание персонажа, рейтинг', imgBanner: yaoyao, content: 'Яо Яо — Бутон изящества, Ученица Владыки Песен и Скитаний, четырехзвездочный дендро персонаж использующий копье, анонсированный 9 декабря 2022 года. Дата выхода 18 января 2023 года - обновление 3.4.',
              star: star4, stixia: 'Дендро', weapon: 'Копье', cont: 'Атаки персонажа Яо Яо', video: <Video src="https://wotpack.ru/wp-content/uploads/2022/12/2022-12-25-01-15-48_Trim.mp4?_=1" />
            })} />
            <Person bg="  #ed7819" img={bay} name={'Бай Чжу'} star={star5} noLike={noLike} like={like} icon={iconDendro} onClick={(isLike) => setCount(isLike ? count + 1 : count - 1)} openModal={() => setModalIsOpen({
              title: 'Бай Чжу - описание персонажа, рейтинг', imgBanner: baizhuer, content: 'Бай Чжу — Преодоление бренности, Владелец хижины «Бубу», долгожданный пятизвёздочный  дендро персонаж использующий в качестве оружия катализатор. Персонаж анонсирован 24 февраля 2023 года. Дата выхода 2 мая 2023 года - вторая часть обновления 3.6.',
              star: star5, stixia: 'Дендро', weapon: 'Катализатор', cont: 'Атаки персонажа Бай Чжу', video: <Video src="https://wotpack.ru/wp-content/uploads/2023/03/baj-chzhu-ataki.mp4?_=1" />
            })} />
            <Person bg=" #6f42c1" img={feiYan} name={'Янь Фэй'} star={star4} noLike={noLike} like={like} icon={iconPyro} onClick={(isLike) => setCount(isLike ? count + 1 : count - 1)} openModal={() => setModalIsOpen({
              title: 'Янь Фэй - описание персонажа, рейтинг', imgBanner: feiyan, content: 'Янь Фэй — первый персонаж Пиро элемента использующий катализатор. Эта легкая и беззаботная девушка на самом деле консультант по юридическим вопросам из Ли Юэ. Помимо этого это еще один персонаж в жилах которого течет кровь мифического зверя. Видимо поэтому она с легкостью метает в своих врагов огненные шары и обрушивает на них всю силу Пиро стихии. Дата выхода 28 апреля 2021 года.',
              star: star4, stixia: 'Пиро', weapon: 'Катализатор', cont: 'Атаки персонажа Янь Фей', video: <Video src="https://wotpack.ru/wp-content/uploads/2021/04/skill1_576.mp4?_=1" />
            })} />
            <Person bg="  #ed7819" img={eLan} name={'Е Лань'} star={star5} noLike={noLike} like={like} icon={hydro} onClick={(isLike) => setCount(isLike ? count + 1 : count - 1)} openModal={() => setModalIsOpen({
              title: 'Е Лань - описание персонажа, рейтинг', imgBanner: elan, content: 'Е Лань — элегантная пятизвёздочная гидро-лучница, анонсированная 28 марта 2022 года. Загадочная и иногда неуловимая личность, о которой не так много известно, но в то же время ее покровительство и благосклонность многим интересны. Дата выхода 31 мая 2022 года, в первой части обновления 2.7.',
              star: star5, stixia: 'Гидро', weapon: 'Лук', cont: 'Атаки персонажа Е Лань', video: <Video src="https://wotpack.ru/wp-content/uploads/2022/04/Obychnye-vystrely-E-Lan-video-converter.com_.mp4?_=1" />
            })} />
            <Person bg=" #6f42c1" img={yunGin} name={'Юнь Цзинь'} star={star4} noLike={noLike} like={like} icon={iconGeo} onClick={(isLike) => setCount(isLike ? count + 1 : count - 1)} openModal={() => setModalIsOpen({
              title: 'Юнь Цзинь - описание персонажа, рейтинг', imgBanner: yunjin, content: 'Юнь Цзинь — крайне талантливая молодая девушка, несмотря на свой возраст, занимает серьезную должность - руководитель оперной труппы Юнь Хань и является звездой сцены Ли Юэ. И мы готовы поспорить, что является безумной фанаткой Синь Янь из-за своего увлечения рок-н-роллом. Этот новый гео персонаж использует копье и был анонсирован 22 ноября 2021 года. Дата выхода Юнь Цзинь 5 января 2022 года.',
              star: star4, stixia: 'Гео', weapon: 'Копье', attack: attack
            })} />
            <Person bg="  #ed7819" img={xiao} name={'Сяо'} star={star5} noLike={noLike} like={like} icon={iconAnemo} onClick={(isLike) => setCount(isLike ? count + 1 : count - 1)} openModal={() => setModalIsOpen({
              title: 'Сяо - описание персонажа, рейтинг', imgBanner: Xiao, content: 'Сяо — последний защитник Якса, один из немногих адептов Ли Юэ. Он предпочитает уединенно наслаждаться видами верхнего этажа постоялого двора Вайшу. Несмотря на свое с виду хрупкое телосложение является одним из самых сильных персонажей Геншин Импакт. Надевая свою маску Якса он наполняется геном постепенно теряя здоровье, но увеличивая свой урон.',
              star: star5, stixia: 'Анемо', weapon: 'Копье', cont: 'Атаки персонажа Сяо', video: <Video src="https://wotpack.ru/wp-content/uploads/2023/11/sjao-obychnye-ataki.mp4?_=1" />
            })} />
            <Person bg=" #6f42c1" img={kamin} name={'Ка Мин'} star={star4} noLike={noLike} like={like} icon={iconPyro} onClick={(isLike) => setCount(isLike ? count + 1 : count - 1)} openModal={() => setModalIsOpen({
              title: 'Ка Мин - описание персонажа, рейтинг', imgBanner: Kamin, content: 'Ка Мин — Львиный авангард, командир Наёмник охранного предприятия «Меч и ножны». Четырехзвездочный пиро парень анонсированный 18 декабря 2023 года. Дата выхода 31 января 2024 года – обновление 4.4.',
              star: star4, stixia: 'Пиро', weapon: 'Двуручный меч', cont: 'Атаки персонажа Ка Мин', video: <Video src="https://wotpack.ru/wp-content/uploads/2024/01/ka-min-obychnye-ataki.mp4?_=1" />
            })} />
            <Person bg=" #6f42c1" img={xingqiu} name={'Син Цю'} star={star4} noLike={noLike} like={like} icon={hydro} onClick={(isLike) => setCount(isLike ? count + 1 : count - 1)} openModal={() => setModalIsOpen({
              title: 'Син Цю - описание персонажа, рейтинг', imgBanner: Xingqiu, content: 'Несмотря на тихий и спокойный характер, Син Цю жаждет приключений. Будучи воспитанным в семье главы торговой гильдии Фэй Юнь он отточил не только свой пытливый ум, но и искусство боя Гу Хуа. Его Гидро глаз бога позволяет ему не только поражать свои цели мечами дождя, но и блокировать сокрушительный атаки врагов.',
              star: star4, stixia: 'Гидро', weapon: 'Одноручный меч', cont: 'Атаки персонажа Син Цю', video: <Video src="https://wotpack.ru/wp-content/uploads/2021/08/skill2_576.mp4?_=2" />
            })} />
            <Person bg=" #6f42c1" img={xiangling} name={'Сян Лин'} star={star4} noLike={noLike} like={like} icon={iconPyro} onClick={(isLike) => setCount(isLike ? count + 1 : count - 1)} openModal={() => setModalIsOpen({
              title: 'Сян Лин - описание персонажа, рейтинг', imgBanner: Xiangling, content: 'Сян Лин — милая и энергичная девушка на самом деле один из самых знаменитых шеф-поваров Тейвата. Конечно же ее коронными блюдами являются острые закуски, но она и сама может неплохо поддать жару. Благодаря Пиро Глазу бога она способна закружить врагов в огненном вихре. Ее домашний питомец Гоба также не прочь отведать ее восхитительных блюд параллельно извергая сокрушительное  пламя на обидчиков хозяйки.',
              star: star4, stixia: 'Пиро', weapon: 'Копье', cont: 'Атаки персонажа Сян Лин', attack: attackXian
            })} />
            <Person bg="  #ed7819" img={ganyu} name={'Гань Юй'} star={star5} noLike={noLike} like={like} icon={iconCryo} onClick={(isLike) => setCount(isLike ? count + 1 : count - 1)} openModal={() => setModalIsOpen({
              title: 'Гань Юй - описание персонажа, рейтинг', imgBanner: Ganyu, content: 'Гань Юй — эта симпатичная крио-лучница была добавлена в обновлении 1.2 и сразу поселилась в сердцах миллионов игроков геншин. Но ее милый вид это не главный козырь в ее рукаве, благодаря уникальным способностям данный персонаж может противостоять как обычным группам врагов, так и самым сильным боссам игры.',
              star: star5, stixia: 'Крио', weapon: 'Лук', cont: 'Атаки персонажа Гань Юй', video: <Video src="https://wotpack.ru/wp-content/uploads/2024/03/gan-juj-ataki.mp4?_=1" />
            })} />
            <Person bg="  #ed7819" img={hutao} name={'Ху Тао'} star={star5} noLike={noLike} like={like} icon={iconPyro} onClick={(isLike) => setCount(isLike ? count + 1 : count - 1)} openModal={() => setModalIsOpen({
              title: 'Ху Тао - описание персонажа, рейтинг', imgBanner: Hutao, content: 'Ху Тао — противоречивая и местами заносчивая хозяйка ритуального бюро. Ее маркетинговая компания многим покажется странной, но несмотря на ее эксцентризм этот персонаж многое знает о мире духов. Ее Элементарный навык позволяет поджечь свое копье пожертвовав частью здоровья. А при использовании Взрыва стихий ей на помощь приходят пылающие духи возмездия.',
              star: star5, stixia: 'Пиро', weapon: 'Копье', cont: 'Атаки персонажа Ху Тао', video: <Video src="https://wotpack.ru/wp-content/uploads/2021/03/%D0%AD%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BD%D0%B0%D0%B2%D1%8B%D0%BA-%D0%A5%D1%83-%D0%A2%D0%B0%D0%BE-Genshin-Impact.webm?_=4" />
            })} />
            <Person bg="  #ed7819" img={sheKhe} name={'Шэнь Хэ'} star={star5} noLike={noLike} like={like} icon={iconCryo} onClick={(isLike) => setCount(isLike ? count + 1 : count - 1)} openModal={() => setModalIsOpen({
              title: 'Шэнь Хэ - описание персонажа, рейтинг', imgBanner: SheKhe, content: 'Шэнь Хэ — милая, но в то же время загадочная и таинственная девушка очень много времени провела с Адептами и была ученицей Хранителя облаков, а ее навыки и сила воли была высоко оценена адептами. Этот новый крио персонаж использует копье и был анонсирован 22 ноября 2021 года. Дата выхода Шэнь Хэ 5 января 2022 года.',
              star: star5, stixia: 'Крио', weapon: 'Копье', cont: 'Атаки персонажа Шэнь Хэ', video: <Video src="https://wotpack.ru/wp-content/uploads/2023/02/skill1.mp4?_=1" />
            })} />
            <Person bg=" #6f42c1" img={baidou} name={'Бэй Доу'} star={star4} noLike={noLike} like={like} icon={iconElectro} onClick={(isLike) => setCount(isLike ? count + 1 : count - 1)} openModal={() => setModalIsOpen({
              title: 'Бэй Доу - описание персонажа, рейтинг', imgBanner: Baidou, content: 'Бэй Доу — капитан вооруженного корабля, сильная и независимая, с искрой в глазах, другой такой героини вы точно не найдете. Бей Доу умело управляется как со штурвалом своего корабля так и с двуручным мечом, а ее Электро способности позволяют как блокировать удары врагов так и пронзать их тела сильными а иногда и цепными зарядами молнии.',
              star: star4, stixia: 'Электро', weapon: 'Двуручный меч', cont: 'Атаки персонажа Бэй Доу', video: <Video src="https://wotpack.ru/wp-content/uploads/2023/07/bjej-dou-navyki.mp4?_=2" />
            })} />
            <Person bg=" #6f42c1" img={ningguang} name={'Нин Гуан'} star={star4} noLike={noLike} like={like} icon={iconGeo} onClick={(isLike) => setCount(isLike ? count + 1 : count - 1)} openModal={() => setModalIsOpen({
              title: 'Нин Гуан - описание персонажа, рейтинг', imgBanner: Ningguang, content: 'Нин Гуан — символ Ли Юэ, сильная и местами загадочная женщина. Ее улыбка заставит растаять любого, а вот врагам она не сулит ничего хорошего. Благодаря сильным Гео способностям Нин Гуан с легкостью расправляется как самыми толстыми боссами игры. На данным момент самый сильный дд персонаж Гео стихии, поэтому не упустите свой шанс и прогуляйтесь по гавани Ли Юэ вместе с ней.',
              star: star4, stixia: 'Гео', weapon: 'Катализатор', cont: 'Атаки персонажа Нин Гуан', video: <Video src="https://wotpack.ru/wp-content/uploads/2021/03/skill1_576.mp4?_=1" />
            })} />
            <Person bg="  #ed7819" img={keqing} name={'Кэ Цин'} star={star5} noLike={noLike} like={like} icon={iconElectro} onClick={(isLike) => setCount(isLike ? count + 1 : count - 1)} openModal={() => setModalIsOpen({
              title: 'Кэ Цин - описание персонажа, рейтинг', imgBanner: Keqing, content: 'Нрав и взгляды Кэ Цин многим могут не понравится. Но она парирует их аргументы с той же легкостью как расправится со Стражем руин. Этот персонаж хорош как в нанесении физического так и электро урона. А ее потрясающий в плане красоты Взрыв стихии не оставит никого равнодушным. Если в вашем отряде не хватает немного электричества то она та кто вам нужен.',
              star: star5, stixia: 'Электро', weapon: 'Одноручный меч', cont: 'Атаки персонажа Кэ Цин', video: <Video src="https://wotpack.ru/wp-content/uploads/2024/03/kje-cin-navyk.mp4?_=2" />
            })} />
            <Person bg=" #6f42c1" img={chongyon} name={'Чун Юнь'} star={star4} noLike={noLike} like={like} icon={iconCryo} onClick={(isLike) => setCount(isLike ? count + 1 : count - 1)} openModal={() => setModalIsOpen({
              title: 'Чун Юнь - описание персонажа, рейтинг', imgBanner: Chongyon, content: 'Чун Юнь — тихий и приветливый парень но в тоже время сильный экзорцист с врожденным даром или проклятием. Его аура распугивает всех демонов у него на пути, но как не парадоксально еще до того как Чун Юнь успевает с ними сразиться. Его крио способности заставляют врагов дрожать не только от страха.',
              star: star4, stixia: 'Крио', weapon: 'Двуручный меч', cont: 'Атаки персонажа Чун Юнь', video: <Video src="https://wotpack.ru/wp-content/uploads/2023/10/skill2_576.mp4?_=2" />
            })} />
            <Person bg="  #ed7819" img={qiqi} name={'Ци Ци'} star={star5} noLike={noLike} like={like} icon={iconCryo} onClick={(isLike) => setCount(isLike ? count + 1 : count - 1)} openModal={() => setModalIsOpen({
              title: 'Ци Ци - описание персонажа, рейтинг', imgBanner: Qiqi, content: 'Ци-ци немного отличается от остальных играбельных персонажей Геншин Импакт. Дело в том, что по случайному стечению обстоятельств она погибла, и Адепты даровали ей новую жизнь в виде зомби. Несмотря на свое состояние она довольно активно может помогать вам в бою за счет способностей к вампиризму. А во время путешествий её способность видеть на мини карте диковинки Ли Юэ просто необходима.',
              star: star5, stixia: 'Крио', weapon: 'Одноручный меч', cont: 'Атаки персонажа Ци Ци', video: <Video src="https://wotpack.ru/wp-content/uploads/2023/11/ci-ci-navyk.mp4?_=2" />
            })} />
            <Person bg=" #6f42c1" img={xinyan} name={'Синь Янь'} star={star4} noLike={noLike} like={like} icon={iconPyro} onClick={(isLike) => setCount(isLike ? count + 1 : count - 1)} openModal={() => setModalIsOpen({
              title: 'Синь Янь - описание персонажа, рейтинг', imgBanner: Xinyan, content: 'Если вам нравится рок-н-ролл, то вам нравится и Синь Янь. Ее мандолина зажигает, и не в переносном смысле, ведь ее пиро способности призваны зажечь толпу а заодно поджарить нескольких хулиганов. Не удивляйтесь если после очередного аккорда ее окутает щит ведь он наполнен теми эмоциями который вызывают ее зажигательная музыка!',
              star: star4, stixia: 'Пиро', weapon: 'Двуручный меч', cont: 'Атаки персонажа Синь Янь', video: <Video src="https://wotpack.ru/wp-content/uploads/2024/03/sin-jan-navyk.mp4?_=2" />
            })} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

