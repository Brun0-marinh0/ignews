import { FaGithub } from 'react-icons/fa'
import {FiX} from 'react-icons/fi'

import styles from './styles.module.scss';

const isUserLoggedIn = true;

export function SignInButton(){
    return isUserLoggedIn ? (
        <button type="button"
            className={styles.signInButton}
        >
            <FaGithub color="#04D361" title='simbulo de um galo com tentaculos'/>
            Bruno Marinho
            <FiX color="#737380" className='styles.closeIcon'/>
        </button>
    ) : (
        <button type="button"
            className={styles.signInButton}
        >
            <FaGithub color="#eba417" title='simbulo de um galo com tentaculos'/>
            Sign in with Github
        </button>
    );
}