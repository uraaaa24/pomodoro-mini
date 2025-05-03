import { styles } from "../styles";

type DotNavProps = {
  count: number;
  total?: number;
  done?: boolean;
}

const DotNav = ({ count, total = 4, done }: DotNavProps) => (
  <div style={styles.nav}>
    {[...Array(total)].map((_, i) => (
      <span key={i} style={styles.dot}>
        {done ? '✔' : (i < count ? '●' : '○')}
        </span>
    ))}
  </div>
);

export default DotNav;
