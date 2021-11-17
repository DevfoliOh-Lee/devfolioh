import classNames from 'classnames/bind';

/*Internal */
import styles from './Post.module.scss';

const cx = classNames.bind(styles);

function Post() {
  return (
    <div className={cx('post-box')}>
      <img
        src="https://cdn.imweb.me/upload/S201712205a3a0910b89f5/a2470afad8a92.jpg"
        alt="thumbnail"
        className={cx('thumbnail')}
      ></img>
      <div className={cx('info')}>
        <h4 className={cx('title')}>당신의 컴포넌트는 안녕하신가요</h4>
        <div className={cx('sub-title')}>
          <p>컴포넌트 건강 검진 나왔습니다~ 😷</p>
        </div>
        <div className={cx('sub-info')}>
          <span>2021년 11월 8일</span>
          <span className={cx('seperator')}>·</span>
          <span>15개의 댓글</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
