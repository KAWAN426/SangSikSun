import style from "./index.module.scss";
import Image from "next/image";
import heartIcon from "@/assets/icons/heart.svg";
import bookmarkIcon from "@/assets/icons/bookmark.svg";

export default function Posts() {
  return (
    <main className={style.postList}>
      <div className={style.post}>
        <Image src={''} className={style.postImg} alt="123456" />
        <div className={style.postInfoWrap}>
          <div className={style.postInfo}>
            <div className={style.postProfile}>
              <Image
                width={24}
                height={24}
                src={process.env.TEST_USER_IMG || ''}
                alt="user profile"
              />
              <p>Kawan</p>
            </div>
            <div className={style.postData}>
              <Image src={heartIcon} width={16} height={16} alt="heart icon" />
              <p>2</p>
            </div>
            <div className={style.postData}>
              <Image src={bookmarkIcon} width={16} height={16} alt="bookmark icon" />
              <p>2</p>
            </div>
          </div>
          <h1 className={style.postTitle}>대한민국의 유명한 산은?</h1>
        </div>
      </div>
    </main>
  )
}