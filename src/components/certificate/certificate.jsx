import 'react'

import styles from './certificate.module.css';
import certificate from '../data/certificate.json';
import { useLanguage } from '../Context/LanguageContext';


export const Certificate = () =>{
    const { lang } = useLanguage();

    return (
        <section className={styles.container} id='certificate'>
            <h2 className={styles.title}>   {lang === 'en' ? 'Certificates' : 'ใบรับรอง'} </h2>
            <div className={styles.content}>
                <div className={styles.cers}>
                    {certificate.map((cer,id)=>{
                        return (
                            <div key={id} className={styles.cer}>
                                <div className={styles.cerImageContainer}>
                                <img src={`/images/certificate/${cer.imageSrc}`} alt={cer.title[lang]} />
                                </div>
                                <p>{cer.title[lang]}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};