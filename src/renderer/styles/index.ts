import { CSSProperties } from "react";

export const styles: Record<string, CSSProperties> = {
  container: {
    WebkitAppRegion: 'drag',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    gap: 8,
    height: '100%',
    boxSizing: 'border-box',
    justifyContent: 'space-between'
  },
  input: {
    WebkitAppRegion: 'no-drag',
    width: '85%',
    padding: '6px 0',
    border: 'none',
    borderBottom: '1px solid #ccc',
    fontSize: 14,
    textAlign: 'center',
    outline: 'none',
  },
  mode: {
    WebkitAppRegion: 'no-drag',
    margin: 0,
    marginTop: 8,
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 1,
  },
  timer: {
    WebkitAppRegion: 'no-drag',
    fontSize: 40,
    fontWeight: 500,
    lineHeight: 1,
  },
  nav: {
    WebkitAppRegion: 'no-drag',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontSize: 10,
    color: '#999',
  },
  dot: {
    WebkitAppRegion: 'no-drag',
    userSelect: 'none',
  },
  controls: {
    WebkitAppRegion: 'no-drag',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginTop: 4,
  },
  controlButton: {
    WebkitAppRegion: 'no-drag',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: 16,
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reset: {
    fontSize: 24
  }
};
