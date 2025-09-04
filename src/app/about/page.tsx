import Banner from '@/components/Banner'
import React from 'react'


export default function page() {
    return (
        <>
            <Banner
                title="Benvenuti al FeelDive"
                subtitle='Non siamo solo un centro immersioni, siamo ragazzi con una passione da trasmettere.'
                source='/1.png'
                button1={true}
                link1='#story'
                text1='La Nostra Storia'
                button2={true}
                link2='#team'
                text2='Il Team'
                icon={true}
                social={true}
                classname='brightness-75'
            />
        </>
    )
}