import classNames from 'classnames/bind';
import styles from './form.module.scss';
import { IoImagesOutline } from 'react-icons/io5';

interface FormProps {
  toggleForm: boolean;
  handleToggleForm: () => void;
}

const cx = classNames.bind(styles);

function Form({ toggleForm, handleToggleForm }: FormProps) {
  return (
    <form
      className={cx('form__container', toggleForm ? 'view' : '')}
      onSubmit={() => { }}
    >
      <div className={cx('form__wrapper')}>
        <h3>포스트 미리보기</h3>
        <div className={cx('thumbnail')}>
          <IoImagesOutline className={cx('thumbnail__icons')} />
          <button className={cx('thumbnail__button')}>썸네일 업로드</button>
        </div>
        <textarea className={cx('summary')} placeholder='당신의 포스트를 짧게 소개해보세요...' />
        <div className={cx('text__counter')}>150 / 150</div>
        <div className={cx('form__submit')}>
          <button className={cx('cancel')} onClick={handleToggleForm}>취소</button>
          <button className={cx('submit')}>제출하기</button>
        </div>
      </div>
    </form >
  );
}

export default Form;
