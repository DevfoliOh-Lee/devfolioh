import classNames from 'classnames/bind';
import styles from './form.module.scss';
import { IoImagesOutline } from 'react-icons/io5';
import { useRef } from 'react';

interface FormProps {
  toggleForm: boolean;
  handleToggleForm: () => void;
  onSubmitPost: (e: React.FormEvent<HTMLFormElement>) => void;
  handleThumbnail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  bodySumamry?: string;
  thumbnail?: string;
}

const cx = classNames.bind(styles);

function Form({
  toggleForm,
  handleToggleForm,
  onSubmitPost,
  handleThumbnail,
  bodySumamry,
  thumbnail,
}: FormProps) {

  const inputRef = useRef<HTMLInputElement>(null);

  const openFileSelector = () => {
    if (inputRef.current) {
      inputRef?.current.click();
    }
  }

  return (
    <form
      className={cx('form__container', toggleForm ? 'view' : '')}
      onSubmit={onSubmitPost}
    >
      <div className={cx('form__wrapper')}>
        <h3>포스트 미리보기</h3>
        <div className={cx('thumbnail')}>
          {thumbnail ? (
            <img className={cx('thumbnail__img')} src={thumbnail} alt={thumbnail} />
          ) : (
            <>
              <IoImagesOutline className={cx('thumbnail__icons')} />
              <button
                className={cx('thumbnail__button')}
                onClick={openFileSelector}
                type="button"
              >
                썸네일 업로드
              </button>
              <input
                type="file"
                id="thumbnail"
                style={{ display: 'none' }}
                ref={inputRef}
                onChange={handleThumbnail}
              />
            </>
          )}
        </div>
        <textarea className={cx('summary')} placeholder='당신의 포스트를 짧게 소개해보세요...' value={bodySumamry} readOnly />
        <div className={cx(
          'text__counter',
          bodySumamry?.length === 150 && 'max'
        )}>{bodySumamry?.length} / 150</div>
        <div className={cx('form__submit')}>
          <button className={cx('cancel')} type="button" onClick={handleToggleForm}>취소</button>
          <button className={cx('submit')} type="submit">제출하기</button>
        </div>
      </div>
    </form >
  );
}

export default Form;
