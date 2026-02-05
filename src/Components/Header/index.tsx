import { useWindowSize } from 'usehooks-ts';
import { NavDesktop, NavMobile } from '@/Components';
import "./Header.scss";
import PathName from '../PathName';
import ThemeSwitch from '../ThemeSwitch';

export default function Header() {
  const { width } = useWindowSize();
  const isMobile = width < 500;
  const isDesktop = width > 500;
  return (
    <header className="header">
      <div className="header__firstRow">
        <PathName />
        {isMobile ? <NavMobile /> : null}
        {isMobile ? null : (
          <div className="header__firstRow__themeSwitch">
            <ThemeSwitch />
          </div>
        )}
      </div>
      {isDesktop ? <NavDesktop /> : null}
    </header>
  );
}
