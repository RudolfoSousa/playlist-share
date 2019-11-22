import React from 'react';
import Head from 'next/head';
import PageWrapper from '../../components/PageWrapper';
import styles from './Home.css';
import Form from '../../components/Form';
import Title from '../../components/Title';
import Nav from '../../components/Nav';

const Home = ({}) => {
    return(
        <>
            <Head>
                <title>Home</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <PageWrapper className={styles.Home}>
                <div className={styles.TitleWrapper}>
                    <Title
                        titleProps={
                            {
                                title: "Título do site, mesmo grande, ele quebra e nao desfalca o layout",
                                className: "HomeTitle"
                            }
                        }
                        subTitleProps={
                            {
                                subTitle: "Campartilhe suas músicas com seus amigos, onde quer que esteja!"
                            }
                        }
                    />
                </div>
                <div className={styles.FormWrapper}>
                    <Form 
                        className={styles.FormHome}
                        buttonProps={
                            {
                                label: "Entrar"
                            }
                        }
                        fields={[
                            {name: "username", label: "Usuário"},
                            {name: "password", label:"Senha", type: "password"}]} 
                        title="Acesse sua conta" 
                    />
                </div>
            </PageWrapper>
        </>
    )
}

export default Home;