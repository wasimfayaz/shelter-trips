import styles from './Marquee.module.css';

const marqueeItems = [
  'SRINAGAR',
  'DAL LAKE',
  'GULMARG',
  'SONMARG',
  'PAHALGAM',
  'GUREZ',
  'DOODPHATHRI',
  'SINTHAN TOP',
  'SHIKARA RIDE',
  'GANDOLA RIDE',
  'WAZWAN',
  'SAFFRON',
  'LEH',
  'ZOGILA PASS',
  'LAMAYURU',
  'MAGNETIC HILL',
  'SHANTI STUPA',
  'HEMIS',
  'NUBRA VALLEY',
  'TURTOK',
  'KHARDUNG LA',
  'PANGONG TSO',
  'HANLE',
  'PASHMINA',
];

export default function Marquee() {
  return (
    <div className={styles.marqueeWrapper} id="marquee-strip" aria-hidden>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className={styles.itemGroup}>
              <span className={styles.item}>{item}</span>
              <span className={styles.dot}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
