import classNames from 'classnames/bind';
import styles from './preview.module.scss';
import useWindowDimensions from '@hooks/useWindowDemesion';
import ReactMarkdown from 'react-markdown';

const cx = classNames.bind(styles);

interface PreviewProps {
  title: string;
  body: string;
}

function joinStringWithLineBreak(str: string): string {
  return str.split('\n').join('');
}

function Preview({ title, body }: PreviewProps) {
  const { width } = useWindowDimensions();

  return (
    <div
      className={cx('preview__container')}
      style={{ display: width >= 1024 ? 'flex' : 'none' }}
    >
      <div className={cx('preview__header')}>
        <ReactMarkdown children={`# ${joinStringWithLineBreak(title)}`} />
      </div>
      <div className={cx('preview__body')}>
        <ReactMarkdown children={body} />
      </div>
    </div>
  )
}

export default Preview;
