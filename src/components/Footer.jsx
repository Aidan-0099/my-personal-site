import { personalInfo } from '../data/content';

export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
    </footer>
  );
}