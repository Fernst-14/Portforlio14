import 'react'

import styles from './certificate.module.css';
import certificate from '../data/certificate.json';

export const Certificate = () =>{
    return (
        <section className={styles.container} id='certificate'>
            <h2 className={styles.title}>Certificates</h2>
            <div className={styles.content}>
                <div className={styles.cers}>
                    {certificate.map((cer,id)=>{
                        return (
                            <div key={id} className={styles.cer}>
                                <div className={styles.cerImageContainer}>
                                <img src={`/images/certificate/${cer.imageSrc}`} alt={cer.title} />
                                </div>
                                <p>{cer.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};