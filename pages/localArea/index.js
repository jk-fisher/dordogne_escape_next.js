import { Fragment } from "react"
import Head from "next/head"

import ExploreBanner from "../../components/UI/ExploreBanner"
import { Parallax } from 'react-scroll-parallax';

import styles from '../../styles/LocalArea.module.css'
import Image from "next/image";
import img_01 from "../../public/carouselImages/img_25.jpg"
import img_02 from "../../public/carouselImages/img_29.jpg"
import img_03 from "../../public/carouselImages/img_10.jpg"
import img_04 from "../../public/carouselImages/img_11.jpg"
import img_05 from "../../public/carouselImages/img_13.jpg"

const LocalArea = () => {

    const intro = "Our neighbourhood is a friendly farming community, where people still have time to stop and talk. Visiting le petit cottage is like stepping back fifty years in time to when life was kinder to us all. Unfortunately there is no public transport passing through the village so you will need your own transport. Please note...this is not a good holiday for anyone keen on discos and nightlife, or who is irritated by birdsong and farmyard noises! We have compiled a list of some of the best attractions nearby and things you might want to do on your visit."
    
    const places = [
        {
            place: "Ségur-le-Château",
            description:  "Listed among the most beautiful villages of France, this charming medieval town really has plenty to appeal to walkers who enjoy old buildings. Very picturesque with its peaceful river, old houses and hilltop castle fort.",
            img: img_01
        },
        {
            place: "Rocamadour Town",
            description: "A must visit is Rocamadour village, a small village built into the cliffside on successive levels, 120 meters in length. It clings high above a canyon, through which flows the Alzou. It's houses, roofs and churches appear to be part of the rock itself. There is also a bird of prey show which you can spectate at a small fee.",
            img: img_02
        },
        {
            place: "Savignac Ledrier",
            description: "Visit the nearby town of Savignac Ledrier. Vitae proin sagittis nisl rhoncus. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Fames ac turpis egestas maecenas pharetra. Massa vitae tortor condimentum lacinia quis.",
            img: img_03
        },
        {
            place: "Our private lake",
            description: "If you enjoy fishing we have our own lake 2km from the cottage, really good for family friendly fishing with a lake all to yourselves.",
            img: img_04
        },
        {
            place: "Walk or explore bike trails",
            description: "Whether you want a leisurely cycle before lunch or a 100km bike ride to really give your muscles a workout, with hundreds of kilometers of cycle tracks to explore often you don't see another soul...",
            img: img_05
        }
    ]

    const parallaxList = places.map((place, index) => {
        return (<li key={index} className={styles.objectWrapper}>
                    <Parallax style={{ zIndex: '-1' }}>
                        <div className={`${styles.imgCard} ${styles.unsetImg}`}>
                            <Image 
                                className={styles.customImg}
                                src={place.img}
                                alt={place.place}
                                layout="fill"
                                sizes="(min-width: 48em) 50vw,
                                        100vw"
                                />
                        </div>
                    </Parallax>
                    <Parallax translateY={[0, -170]} className={`${styles.offsetTextCard} `}>
                        <div className={styles.white}>
                            <h2>Place to visit #0{index + 1}
                                <br />
                                <span className={styles.title}>{place.place}</span>
                            </h2>
                                <p>{place.description}</p>
                        </div>
                        <span className={styles.colBlock}/>

                    </Parallax>
        </li>
            )
    })
    
    return ( <Fragment>
        <Head>
            <title>Le Petit Cottage</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta
                name="description"
                content="Le Petit Cottage, self-catered accommodation in France, available to book for holidays to the Dordogne region."
            />
            <meta
                name="keywords" 
                content="Le Petit Cottage, Dordogne, France, holiday, rental, self-catered, accomodation"
            />
        </Head>
        <div >
            <ExploreBanner title="Explore places to visit on your trip"/>
            <div data-aos="fade-up">
                <p className={styles.scrollText} >{intro}</p>
            </div>
            <ul className={styles.container}>
                {parallaxList}
            </ul> 
        </div>

    </Fragment> );
}
 
export default LocalArea;