import { useStore } from "@nanostores/preact";
import { isToggleOpen } from "../toggle";
import styles from "./SpNav.module.css";

export const SpNav = () => {
  const $isToggleOpen = useStore(isToggleOpen);

  const handleToggle = () => {
    isToggleOpen.set(!$isToggleOpen);
  };

  return (
    <div hidden={!$isToggleOpen} className={styles.spNav}>
      <button onClick={handleToggle}>
        {/* <Image src={ToggleClose} alt="close" />
         */}
        <img src="/images/toggle-close.png" alt="close" />
      </button>
      <a href="/">
        {/* <Image src={FooterLogo} alt="logo" /> */}
        {/* <img src="/images/toggle-close.png" alt="close" /> */}
      </a>
      <p>結婚式を楽しむゲストのための情報サイト</p>

      <input type="text" placeholder="メールアドレス" />

      <nav>
        <ul>
          <li>
            <a href="/">
              <span>Feature</span>特集記事
            </a>
          </li>
          <li>
            <a href="/category/beauty">
              <span>Beauty</span>ゲスト美容
            </a>
          </li>
          <li>
            <a href="/category/entertainment">
              <span>Entertainment</span>余興・スピーチ
            </a>
          </li>
          <li>
            <a href="/category/gift">
              <span>Gift</span>新郎新婦へのお祝い
            </a>
          </li>
          <li>
            <a href="/category/etiquette">
              <span>Etiquette</span>マナー・エチケット
            </a>
          </li>
          <li>
            <a href="/contact">
              <span>Others</span>その他
            </a>
          </li>
        </ul>
      </nav>

      <div class="banner">
        <a>
          <img src="../images/toggle-csole.png" alt="AND YOU" />
          <p>
            人とかぶらない<span>ドレスレンタルなら</span>
          </p>
          <img src="../images/toggle-csole.png" alt="AND YOU" />
        </a>
      </div>
    </div>
  );
};
