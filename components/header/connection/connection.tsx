import {useEffect, useState} from 'react'
import useTranslation from 'next-translate/useTranslation'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from '@walletconnect/qrcode-modal'
import {setCookie, hasCookie, getCookie, CookieValueTypes} from 'cookies-next'
import {useGlobalStateContext} from '../../../context/global'
import styles from '../../ui/button/button.module.scss'
import {ActionType, UserOperations} from '../../../types/action'
import {User, UserCookie, UserData} from '../../../types/user'
import {failure, Result, success} from '../../../types/result'

const Connection = (): JSX.Element => {
    const {t, lang} = useTranslation('common')
    const {globalState, dispatch} = useGlobalStateContext()

    const onConnectWallet = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        const connector = new WalletConnect({
            bridge: "https://bridge.walletconnect.org",
            qrcodeModal: QRCodeModal,
        });

        if (!connector.connected) {
            connector.createSession();
        }

        connector.on("connect", (error, payload) => {
            if (error) {
                throw error;
            }

            // Get provided accounts and chainId
            const {accounts, chainId} = payload.params[0];

            // setCookie('user', JSON.stringify({
            //   id: 12
            // }), { maxAge: 60 })
        });

        connector.on("session_update", (error, payload) => {
            if (error) {
                throw error;
            }

            // Get updated accounts and chainId
            const {accounts, chainId} = payload.params[0];
        });

        connector.on("disconnect", (error, payload) => {
            if (error) {
                throw error;
            }

            // Delete connector
        });
    }

    const loadUser = async (id: number): Promise<Result<User | Error>> => {
        return fetch(`/api/v1/users/${id}`)
            .then(response => response.json())
            .then((result: Result<UserData | Error>) => {
                if (result.success) {
                    const data = result.data as UserData

                    return success({
                        isLoggedIn: false,
                        id: data.id,
                        points: data.points,
                        experience: data.experience
                    })
                } else {
                    return failure(new Error(t('user-load-error')))
                }
            })
            .catch(_ => failure(new Error(t('user-load-error'))))
    }

    const onLoad = () => {
        if (globalState.user.isLoggedIn)
            return;

        const userCookie: CookieValueTypes = (hasCookie('user')) ? getCookie('user') : null

        if (userCookie !== null) {
            const data: UserCookie = JSON.parse(userCookie as string)

            loadUser(data.id)
                .then((result: Result<User | Error>) => {
                    if (result.success) {
                        const user = result.data as User

                        dispatch({
                            type: ActionType.USER,
                            operation: UserOperations.SET_USER,
                            payload: user
                        })
                    }
                })
        }
    }

    useEffect(onLoad, [])

    return (
        <div className={styles.wrapper}>
            {!globalState.user.isLoggedIn ? <button className={styles.button} onClick={onConnectWallet}>
                {t('wallet-connect')}
            </button> : <button className={styles.button}>
                {t('signup-login')}
            </button>}
        </div>
    )
}

export default Connection