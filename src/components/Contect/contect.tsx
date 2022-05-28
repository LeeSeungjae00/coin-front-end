import React from 'react'
import styles from './contect.module.scss'
import Giraffe from '../../svgs/giraffe.svg'
import GithubSvg from '../../svgs/githubSvg'
import InstarSvg from '../../svgs/instarSvg'
import FacebookSvg from '../../svgs/facebookSvg'

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
                        <a href="www.naver.com">
                            <GithubSvg></GithubSvg>

                        </a>
                        <a href="">
                            <InstarSvg></InstarSvg>
                        </a>
                        <a href="">
                            <FacebookSvg></FacebookSvg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
