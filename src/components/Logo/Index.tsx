import logo from './assets/Logo.png'

interface Props {
  src: string;
  alt?: string;
}

export default function Logo ({ src = logo, alt }: Props) {
  return <img src={logo} alt={alt || "Logo"} />;
}