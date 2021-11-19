import { useCallback } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import { Editor, Preview, Form } from '@components/Write/index';
import { useState } from 'react';
import useInput from '@hooks/useInput';

const cx = classNames.bind(styles);

const Write = () => {
  const [title, handleTitle] = useInput('');
  const [body, handleBody] = useInput('');
  const [tag, setTag] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [toggleForm, setToggleForm] = useState<boolean>(false);

  const handleTag: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    if (e.target.value.slice(-1) === ',') return;
    setTag(e.target.value);
  }, []);

  const addTags: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if (!tag.length) return;
    if (e.key === 'Enter' || e.key === ',') {
      setTags([...tags, tag]);
      setTag('');
    }
  }, [tag, tags]);

  const removeTags: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if (!tags.length) return;
    if (e.key === 'Backspace') {
      setTags(tags.slice(0, tags.length - 1));
    }
  }, [tags]);

  const handleToggleForm = useCallback(() => {
    setToggleForm((prev) => !prev);
  }, []);

  return (
    <section className={cx('container')}>
      <div className={cx('contents')}>
        <Editor
          handleTitle={handleTitle}
          handleBody={handleBody}
          handleTag={handleTag}
          addTags={addTags}
          removeTags={removeTags}
          handleToggleForm={handleToggleForm}
          title={title}
          body={body}
          tag={tag}
          tags={tags}
        />
        <Preview
          title={title}
          body={body}
        />
        {<Form toggleForm={toggleForm} handleToggleForm={handleToggleForm} />}
      </div>
    </section>
  );
}

export default Write;
