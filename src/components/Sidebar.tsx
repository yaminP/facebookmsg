import React, { useState } from "react";
import StickyBox from "react-sticky-box";
import styles from "./styles.module.css";

interface SidebarProps {
  elements: number;
}

const Sidebar: React.FC<SidebarProps> = ({ elements }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className={styles.sidebar}>
      <div className={styles.label}>Sidebar</div>
      {expanded && (
        <div className={styles.fauxNav}>
          {Array.from(new Array(elements), (_, i) => (
            <div key={i} className={styles.fauxNavElement} />
          ))}
        </div>
      )}
      <button onClick={() => setExpanded((v) => !v)}>
        {expanded ? "collapse" : "expand"}
      </button>
    </div>
  );
};

export const CollapseContent: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <div className={styles.baseContent}>
      {Array.from(new Array(expanded ? 30 : 15), (_, i) => (
        <div key={i} className={styles.fauxNavElement} />
      ))}
      <button onClick={() => setExpanded((v) => !v)}>
        {expanded ? "collapse" : "expand"}
      </button>
    </div>
  );
};

interface StickySidebarProps {
  elements: number;
  offsetTop: number;
  offsetBottom: number;
}

export const StickySidebar: React.FC<StickySidebarProps> = ({
  elements,
  offsetTop,
  offsetBottom,
}) => (
  <StickyBox offsetTop={offsetTop} offsetBottom={offsetBottom}>
    <Sidebar elements={elements} />
  </StickyBox>
);

interface BottomStickySidebarProps extends StickySidebarProps {
  style?: React.CSSProperties;
}

export const BottomStickySidebar: React.FC<BottomStickySidebarProps> = ({
  elements,
  offsetTop,
  offsetBottom,
  style,
}) => (
  <StickyBox offsetTop={offsetTop} offsetBottom={offsetBottom} bottom style={style}>
    <Sidebar elements={elements} />
  </StickyBox>
);

interface StickyWordProps {
  style?: React.CSSProperties;
  word: string;
  offsetTop: number;
  offsetBottom: number;
  bottom?: boolean;
}

export const StickyWord: React.FC<StickyWordProps> = ({
  style,
  word,
  offsetTop,
  offsetBottom,
  bottom,
}) => (
  <StickyBox offsetTop={offsetTop} offsetBottom={offsetBottom} style={style} bottom={bottom}>
    {word}
  </StickyBox>
);

export default Sidebar;
