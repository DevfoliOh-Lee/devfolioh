import classNames from 'classnames/bind';

import styles from './SubBar.module.scss';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { IoTrendingUp } from 'react-icons/io5';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BsClock } from 'react-icons/bs';
// import { useState, useRef } from 'react';

const cx = classNames.bind(styles);

function SubBar() {
  // const [clickComp, setClickComp] = useState<boolean>(true);
  // const trendingInput = useRef();
  // const recentInput = useRef();

  // const onClickComp = () => {
  //   trendingInput.current.focus();
  // };

  return (
    <div className={cx('sub-bar')}>
      <div className={cx('sub-bar-left')}>
        <div
          // ref={trendingInput}
          className={cx('trending')}
          // onClick={() => {
          //   setClickComp(true);
          //   onClickComp();
          // }}
        >
          <IoTrendingUp />
          <span>트렌딩</span>
        </div>
        <div
          // ref={recentInput}
          className={cx('recent')}
          // onClick={() => {
          //   setClickComp(false);
          //   onClickComp();
          // }}
        >
          <BsClock />
          <span>최신</span>
        </div>
        <div className={cx('trending-order')}>
          <span className={cx('order-method')}>오늘</span>
          <IoMdArrowDropdown />
        </div>
        <ul className={cx('order-list')}>
          <li>오늘</li>
          <li>이번 주</li>
          <li>이번 달</li>
          <li>올해</li>
        </ul>
      </div>
      <div className={cx('sub-bar-right')}>
        <HiOutlineDotsVertical className={cx('etc')} />
      </div>
    </div>
  );
}

export default SubBar;
