import Head from 'next/head';

const HeadSection = ({title}: any) => {
    return (
        <Head>
            <title> {title ? title : ""} | Distortion </title>
            <meta name="description" content="Distortion Dashboard"/>
            <link rel="icon" href="/images/favicon.svg"/>
        </Head>
    )
}

export default HeadSection;