import React from 'react';
import classNames from 'classnames/bind';
import styles from './editor.module.scss';
import WriteFooter from '@components/Write/Footer';
import Tag from '@components/Write/Tag';

const cx = classNames.bind(styles);

interface EditorProps {
  handleTitle: React.ChangeEventHandler<HTMLTextAreaElement>;
  handleBody: React.ChangeEventHandler<HTMLTextAreaElement>;
  handleTag: React.ChangeEventHandler<HTMLInputElement>;
  addTags: React.KeyboardEventHandler<HTMLInputElement>;
  removeTags: React.KeyboardEventHandler<HTMLInputElement>;
  handleToggleForm: () => void;
  title: string;
  body: string;
  tag: string;
  tags: string[];
}

function Editor({
  handleTitle,
  handleBody,
  handleTag,
  addTags,
  removeTags,
  handleToggleForm,
  title,
  body,
  tag,
  tags,
}: EditorProps) {
  return (
    <div className={cx('editor__container')}>
      <div className={cx('editor__wrapper')}>
        <div className={cx('editor__contents')}>
          <div className={cx('editor__contents-header')}>
            <textarea
              className={cx('editor__contents-title')}
              placeholder="제목을 입력하세요"
              name="title"
              value={title}
              onChange={handleTitle}
            />
            <div className={cx('hr')} />
            <div className={cx('tags__wrapper')}>
              {tags.map(tagName => <Tag>{tagName}</Tag>)}
              <input
                className={cx('tags__input')}
                placeholder="태그를 입력하세요"
                onChange={handleTag}
                onKeyPress={addTags}
                onKeyDown={removeTags}
                value={tag}
              />
            </div>
          </div>
          {/* <div className={cx('editor__contents-toolbar')}></div> */}
          <div className={cx('body')}>
            <textarea
              className={cx('body__textarea')}
              name="body"
              value={body}
              onChange={handleBody}
              placeholder="당신의 이야기를 적어보세요..."
            />
          </div>
        </div>
      </div>
      <WriteFooter handleToggleForm={handleToggleForm} />
    </div>
  );
}

export default Editor;
