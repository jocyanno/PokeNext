import Image from 'next/image';
import styles from '../styles/About.module.css'

export default function About() {
    return(
            <div className={styles.about}>
                <h1>Sobre o projeto</h1>
                <p>Pokem ipsum dolor sit amet Exeggutor Kecleon Wing Attack Doduo Red Unown. Sunt in culpa Drilbur Calcium Hoenn Shieldon Wynaut Charizard. Growl Venonat Scolipede Espeon Charizard Barboach Hidden Machine. Duis aute irure dolor in reprehenderit in voluptate they're comfy and easy to wear Onix what kind of Pokemon are you Fog Badge Ampharos Noctowl. Pewter City Marill Slakoth Bronzong Rattata Treecko Cottonee.</p>
                <Image 
                    src="/images/charizard.png" 
                    width="300" 
                    height="300"
                    alt="Charizard"
                />
            </div>
        );
}