
import MainContentWrapper from "./MainContentWrapper";
import Header from "./Header/Header";
import Footer from "./footer/Footer";

function MainLayout({ children }) {
  return (
    <MainContentWrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </MainContentWrapper>
  );
}

export default MainLayout;
