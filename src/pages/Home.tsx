import classNames from 'classnames/bind';

/*Internal */
import styles from './Home.module.scss';
import MenuBar from '@components/HomePage/MenuBar';
import PostGrid from '@components/HomePage/PostGird/PostGrid';
import SubBar from '@components/HomePage/SubBar';
import { PostAPI } from '@api/postAPI';
import { useEffect, useState } from 'react';
import { APostType } from '@typings/apost.interface';

const cx = classNames.bind( styles );

interface HomeProps {
  pages: number;
}

function Home({ pages }: HomeProps) {
  const [postList, setPostList] = useState<APostType[]>([]);

  useEffect(() => {
    PostAPI.getAllPosts(pages).then((data) => {
      const list: APostType[] = data.results;
      list.sort((a: APostType, b: APostType) => {
        return -a.createdAt.localeCompare(b.createdAt);
      });
      setPostList(list);
    });
  }, [pages]);

  return (
    <div className={cx('home')}>
      <div className={cx('list')}>
        <MenuBar />
        <div className={cx('post-list')}>
          <SubBar />
          <PostGrid posts={postList} />
        </div>
      </div>
    </div>
  );
}

export default Home;
