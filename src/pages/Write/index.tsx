import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import { Editor, Preview, Form } from '@components/Write/index';
import { useState } from 'react';
import useInput from '@hooks/useInput';
import { WriteAPI } from '@api/writeAPI';
import axios from 'axios';

const cx = classNames.bind(styles);

const Write = () => {
  const navigate = useNavigate()
  const [title, handleTitle] = useInput('');
  const [body, handleBody] = useInput('');
  const [tag, setTag] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [toggleForm, setToggleForm] = useState<boolean>(false);
  const [thumbnail, setThumbnail] = useState<string>('');

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

  const handleThumbnail = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'mdzig526');
      console.log(formData);
      axios.post('https://api.cloudinary.com/v1_1/dhdllpzl9/image/upload', formData)
        .then(response => setThumbnail(response.data.url));
    }
  }, []);

  const onSubmitPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const post = {
      title,
      body,
      tags,
      thumbnail,
    };
    const { data: { id }, status } = await WriteAPI.post(post);
    if (status === 201) {
      return navigate(`/${id}`);
    }
  };

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
        {<Form
          toggleForm={toggleForm}
          handleToggleForm={handleToggleForm}
          onSubmitPost={onSubmitPost}
          handleThumbnail={handleThumbnail}
          bodySumamry={body.slice(0, 150)}
          thumbnail={thumbnail}
        />}
      </div>
    </section>
  );
}

export default Write;
