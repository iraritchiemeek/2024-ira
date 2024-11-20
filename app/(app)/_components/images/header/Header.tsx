import ContentGrid from "../../layout/ContentGrid";
import Logo from "../../typography/Logo";
import Menu from "./Menu";

export default function Header() {
  return (
    <div className="container mx-auto relative py-8">
      <ContentGrid>
        <Logo />
        <div className="col-span-2"></div>
        <Menu />
      </ContentGrid>
    </div>
  );
}
