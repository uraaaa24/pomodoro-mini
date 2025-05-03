import { styles } from "../styles";

const DotNav = () => (
  <div style={styles.nav}>
    {[...Array(4)].map((_, i) => (
      <span key={i} style={styles.dot}>{i === 0 ? '●' : '○'}</span>
    ))}
  </div>
);

export default DotNav;
