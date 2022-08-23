import React from 'react'
import styles from './contect.module.scss'
import Giraffe from '../../svgs/giraffe.svg'
import GithubSvg from '../../svgs/githubSvg'
import InstarSvg from '../../svgs/instarSvg'
import FacebookSvg from '../../svgs/facebookSvg'
import PortfoiloSvg from '../../svgs/portfoiloSvg'

export default function Contect() {
    return (
        <div className={styles.contect}>
            <div className={styles.contectBox}>
                <div className={styles.giraffeBox}>
                    <img src={Giraffe}></img>
                </div>
                <div className={styles.contectTextBox}>
                    <p>Tel. 010-9142-8662</p>
                    <p>E-Mail. seungjae2668@naver.com</p>
                </div>
                <div className={styles.iconBox}>
                    <div className={styles.github}>
                        <a href="https://github.com/LeeSeungjae00">
                            <GithubSvg></GithubSvg>
                        </a>
                        <a href="https://www.instagram.com/seung__00_/">
                            <InstarSvg></InstarSvg>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100007292509132">
                            <FacebookSvg></FacebookSvg>
                        </a>
                        <a href="https://lsjportfolio.netlify.app/">
                            <PortfoiloSvg></PortfoiloSvg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
