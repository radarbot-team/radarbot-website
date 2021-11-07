
import Image from 'next/image';
import { HiHeart } from 'react-icons/hi';

import styles from './PhotoCard.module.css';

type ScreenshotsData = {
  id: string;
  guildId: string;
  messageId: string;
  userId: string;
  votesCount: number;
  // votes: {
  //   userVoteId: String;
  // }[];
  content: string;
  alreadyTop: boolean;
  // topMessageId: string;
  username: string;
  userAvatar: string;
  image: string;
  user: string;
  height: number;
  width: number;
}

export function PhotoCard(props: ScreenshotsData) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          className={styles.image}
          src={props.image}
          alt='image'
          width={props.width}
          height={props.height}
        />
      </div>
      <div className={styles.footer}>
        <div className={styles.author}>
          <Image className={styles.avatar} src={props.userAvatar} alt='avatar' width={50} height={50}/>
          <p>{props.user}</p>
        </div>

        <div className={styles.votes}>
          <HiHeart className={styles.voteicon} />
          <span>
            {props.votesCount}
          </span>
        </div>
      </div>
    </div>
  )
}