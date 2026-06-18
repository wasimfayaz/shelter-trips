import styles from './Marquee.module.css';

const items = [
  'Srinagar', '·', 'Gulmarg', '·', 'Pahalgam', '·', 'Sonamarg', '·',
  'Ladakh', '·', 'Dal Lake', '·', 'Houseboats', '·', 'Skiing', '·',
  'Trekking', '·', 'Heritage Hotels', '·',
];

export default function Marquee() {
  return (
    <div className={styles.marqueeWrapper} id="marquee-strip" aria-hidden>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {[...items, ...items].map((item, i) => (
            <span key={i} className={item === '·' ? styles.dot : styles.item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
