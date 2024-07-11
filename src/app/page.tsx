import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Panel from "@/components/Panel";
import Terminal from "@/components/Terminal";
import Tree from "@/components/Tree";
import Navigator from "@/components/Navigator";

import s from "./page.module.scss";

export default function Home() {
  return (
    <main className={s.Main}>
      <Header />
      <section className={s.Panels}>
        <Panel title="Tree" bottom="C:\">
          <Tree />
        </Panel>
        <Panel title="C:\" bottom="DN" focused>
          <Navigator />
        </Panel>
      </section>
      <Terminal />
      <Footer />
    </main>
  );
}
