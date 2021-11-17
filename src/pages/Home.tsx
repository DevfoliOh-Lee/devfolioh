import classNames from 'classnames/bind';

/*Internal */
import styles from './Home.module.scss';
import MenuBar from '@components/HomePage/MenuBar';
import PostGrid from '@components/HomePage/PostGird/PostGrid';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('home')}>
      <div className={cx('list')}>
        <MenuBar />
        <PostGrid />
      </div>
    </div>
  );
}

export default Home;
