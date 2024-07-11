import { FC } from "react";

import TREE from "@/data/tree.json";

import s from "./Tree.module.scss";

type Props = {
  id?: string;
  className?: string;
};

const renderLeaf = (level: number, key: string, node?: React.ReactNode) => {
  return (
    <li key={key} className={s.Li}>
      {level !== 0 && <span className={s.Span}>{key}</span>}
      {node}
    </li>
  );
};

const renderNode = (level: number, tree: Record<string, any>) => {
  return (
    <ul key={`node${level}`} className={`${s.Ul} ${level === 0 ? s.Root : ""}`}>
      {Object.entries(tree).map(([key, value]) => {
        if (typeof value === "string") {
          return renderLeaf(level, key);
        } else {
          return renderLeaf(level, key, renderNode(level + 1, value));
        }
      })}
    </ul>
  );
};

const Tree: FC<Props> = ({ id, className = "" }) => {
  return (
    <section id={id} className={`${s.Tree} ${className}`}>
      <div className={s.RootNode}>/</div>
      <div className={s.Nodes}>{renderNode(0, TREE)}</div>
    </section>
  );
};

export default Tree;
