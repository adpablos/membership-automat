/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {Button, Container, NavItem} from "reactstrap";

// core components

// i18n components
import {useTranslation} from "react-i18next";

function LandingPageHeader() {
  const { t } = useTranslation(['translation', 'home']);

  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/daniel-olahh.jpg") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>{t('home:title', 'Automatize members exit in your slack community')}</h1>
            <h3>{t('home:subtitle', 'Do not waste your time throwing out the members of your slack community who are not active in your membership anymore')} </h3>
            <br />
            <Button
                className="btn-round"
                color="danger"
                href="#enter"
            >
              {t('home:menu.enter', 'Enter')}
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
