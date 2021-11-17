import classNames from 'classnames/bind';

/*Internal */
import styles from './PostGrid.module.scss';
import Post from '../Post';

const cx = classNames.bind(styles);

function PostGrid() {
  return (
    <div className={cx('scroll-container')}>
      <div className={cx('container')}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default PostGrid;
